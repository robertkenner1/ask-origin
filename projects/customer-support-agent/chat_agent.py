"""
Chat Agent that answers questions based on user-provided files.
"""

import os
import json
import re
from pathlib import Path
from typing import List, Dict, Tuple, Optional
from collections import defaultdict
from datetime import datetime


class DocumentLoader:
    """Loads and parses documents from various file formats."""

    def __init__(self):
        self.documents = []
        self.metadata = []

    def load_file(self, file_path: str) -> None:
        """Load a single file and add to documents."""
        path = Path(file_path)

        if not path.exists():
            print(f"Warning: File {file_path} does not exist.")
            return

        try:
            if path.suffix == '.json':
                self._load_json(path)
            elif path.suffix in ['.txt', '.md']:
                self._load_text(path)
            elif path.suffix == '.csv':
                self._load_csv(path)
            elif path.suffix == '.pdf':
                self._load_pdf(path)
            else:
                self._load_text(path)  # Try as text file
        except Exception as e:
            print(f"Error loading {file_path}: {e}")

    def load_directory(self, dir_path: str) -> None:
        """Load all supported files from a directory."""
        path = Path(dir_path)

        if not path.is_dir():
            print(f"Warning: {dir_path} is not a directory.")
            return

        supported_extensions = ['.txt', '.md', '.json', '.csv', '.pdf']

        for file_path in path.rglob('*'):
            if file_path.is_file() and file_path.suffix in supported_extensions:
                self.load_file(str(file_path))

    def _load_json(self, path: Path) -> None:
        """Load JSON file."""
        with open(path, 'r', encoding='utf-8') as f:
            data = json.load(f)

        # Handle different JSON structures
        if isinstance(data, list):
            for idx, item in enumerate(data):
                content = json.dumps(item, indent=2)
                self.documents.append(content)
                self.metadata.append({'source': str(path), 'index': idx})
        elif isinstance(data, dict):
            # Flatten dict into documents
            for key, value in data.items():
                content = f"{key}:\n{json.dumps(value, indent=2)}"
                self.documents.append(content)
                self.metadata.append({'source': str(path), 'key': key})
        else:
            content = json.dumps(data, indent=2)
            self.documents.append(content)
            self.metadata.append({'source': str(path)})

    def _load_text(self, path: Path) -> None:
        """Load text or markdown file."""
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Split by paragraphs or sections
        chunks = self._split_text(content)

        for idx, chunk in enumerate(chunks):
            if chunk.strip():
                self.documents.append(chunk.strip())
                self.metadata.append({'source': str(path), 'chunk': idx})

    def _load_csv(self, path: Path) -> None:
        """Load CSV file."""
        with open(path, 'r', encoding='utf-8') as f:
            lines = f.readlines()

        if not lines:
            return

        # First line as header
        header = lines[0].strip().split(',')

        for idx, line in enumerate(lines[1:], 1):
            values = line.strip().split(',')
            if len(values) == len(header):
                content = '\n'.join([f"{h}: {v}" for h, v in zip(header, values)])
                self.documents.append(content)
                self.metadata.append({'source': str(path), 'row': idx})

    def _load_pdf(self, path: Path) -> None:
        """Load PDF file with hyperlink extraction."""
        try:
            import PyPDF2

            with open(path, 'rb') as f:
                pdf_reader = PyPDF2.PdfReader(f)

                for page_num in range(len(pdf_reader.pages)):
                    page = pdf_reader.pages[page_num]
                    text = page.extract_text()

                    # Extract hyperlinks from annotations
                    links = []
                    if '/Annots' in page:
                        annotations = page['/Annots']
                        if annotations:
                            for annotation in annotations:
                                try:
                                    obj = annotation.get_object()
                                    if obj.get('/Subtype') == '/Link':
                                        if '/A' in obj:
                                            action = obj['/A']
                                            if '/URI' in action:
                                                uri = action['/URI']
                                                links.append(str(uri))
                                                print(f"✓ Found link on page {page_num + 1}: {uri}")
                                except Exception as e:
                                    pass

                    # Append links to the text if found
                    if links:
                        link_text = "\n\nLinks on this page:\n" + "\n".join(links)
                        text = text + link_text
                        print(f"✓ Added {len(links)} link(s) to page {page_num + 1}")

                    if text.strip():
                        # Split page text into chunks
                        chunks = self._split_text(text)
                        for chunk_idx, chunk in enumerate(chunks):
                            if chunk.strip():
                                self.documents.append(chunk.strip())
                                self.metadata.append({
                                    'source': str(path),
                                    'page': page_num + 1,
                                    'chunk': chunk_idx
                                })
        except ImportError:
            print(f"Warning: PyPDF2 not installed. Install with: pip install PyPDF2")
            print(f"Skipping PDF file: {path}")
        except Exception as e:
            print(f"Error reading PDF {path}: {e}")

    def _split_text(self, text: str, max_chunk_size: int = 1000) -> List[str]:
        """Split text into manageable chunks."""
        # Split by double newline (paragraphs)
        paragraphs = text.split('\n\n')

        chunks = []
        current_chunk = ""

        for para in paragraphs:
            if len(current_chunk) + len(para) < max_chunk_size:
                current_chunk += para + "\n\n"
            else:
                if current_chunk:
                    chunks.append(current_chunk)
                current_chunk = para + "\n\n"

        if current_chunk:
            chunks.append(current_chunk)

        return chunks if chunks else [text]


class ChatAgent:
    """Chat agent that answers questions based on loaded documents."""

    def __init__(self, instructions_path: str = "agent_instructions.txt", api_key: Optional[str] = None):
        self.loader = DocumentLoader()
        self.documents = []
        self.metadata = []
        self.instructions = ""
        self.instructions_path = instructions_path

        # Initialize Claude client
        self.use_claude = False
        self.client = None

        # Get API key from parameter or environment
        self.api_key = api_key or os.environ.get("ANTHROPIC_API_KEY")

        if self.api_key:
            try:
                import anthropic
                self.client = anthropic.Anthropic(api_key=self.api_key)
                self.use_claude = True
                print("✓ Claude API initialized")
            except ImportError:
                print("Warning: anthropic package not installed. Install with: pip install anthropic")
                print("Falling back to keyword-based search")
            except Exception as e:
                print(f"Warning: Could not initialize Claude API: {e}")
                print("Falling back to keyword-based search")
        else:
            print("Note: ANTHROPIC_API_KEY not found. Using keyword-based search.")
            print("To use Claude, set ANTHROPIC_API_KEY environment variable or pass api_key parameter.")

        # Load instructions if file exists
        self.load_instructions()

    def load_instructions(self) -> None:
        """Load agent instructions from file."""
        if os.path.exists(self.instructions_path):
            try:
                with open(self.instructions_path, 'r', encoding='utf-8') as f:
                    self.instructions = f.read()
                print(f"✓ Loaded agent instructions from {self.instructions_path}")
            except Exception as e:
                print(f"Warning: Could not load instructions: {e}")
                self.instructions = ""
        else:
            print(f"Note: No instructions file found at {self.instructions_path}")

    def load_knowledge_base(self, paths: List[str]) -> None:
        """Load knowledge base from file paths or directories."""
        for path in paths:
            if os.path.isdir(path):
                print(f"Loading directory: {path}")
                self.loader.load_directory(path)
            elif os.path.isfile(path):
                print(f"Loading file: {path}")
                self.loader.load_file(path)
            else:
                print(f"Warning: {path} not found.")

        self.documents = self.loader.documents
        self.metadata = self.loader.metadata

        print(f"\nLoaded {len(self.documents)} document chunks.")

    def log_question(self, question: str, log_file: str = "knowledge/UserQuestions.txt") -> None:
        """Log user question to file with timestamp."""
        try:
            timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            with open(log_file, 'a', encoding='utf-8') as f:
                f.write(f"[{timestamp}] {question}\n")
        except Exception as e:
            print(f"Warning: Could not log question: {e}")

    def answer_question(self, question: str, top_k: int = 3) -> str:
        """Answer a question based on the knowledge base."""
        if not self.documents:
            return "No knowledge base loaded. Please load documents first."

        # Log the question
        self.log_question(question)

        # Find most relevant documents
        relevant_docs = self._find_relevant_documents(question, top_k)

        if not relevant_docs:
            return "I couldn't find relevant information to answer your question."

        # Build answer from relevant documents
        answer = self._build_answer(question, relevant_docs)

        return answer

    def _find_relevant_documents(self, query: str, top_k: int) -> List[Tuple[str, Dict, float]]:
        """Find most relevant documents using keyword matching and scoring."""
        query_lower = query.lower()
        query_terms = set(re.findall(r'\w+', query_lower))

        scored_docs = []

        for doc, meta in zip(self.documents, self.metadata):
            doc_lower = doc.lower()
            doc_terms = set(re.findall(r'\w+', doc_lower))

            # Calculate relevance score
            score = 0

            # Exact phrase match (highest score)
            if query_lower in doc_lower:
                score += 10

            # Term overlap
            common_terms = query_terms & doc_terms
            if common_terms:
                score += len(common_terms) * 2

            # TF score for query terms in document
            for term in query_terms:
                score += doc_lower.count(term)

            if score > 0:
                scored_docs.append((doc, meta, score))

        # Sort by score and return top k
        scored_docs.sort(key=lambda x: x[2], reverse=True)

        return scored_docs[:top_k]

    def _build_answer(self, question: str, relevant_docs: List[Tuple[str, Dict, float]]) -> str:
        """Build an answer from relevant documents."""
        if not relevant_docs:
            return "I couldn't find relevant information to answer your question."

        # Get ALL FAQ chunks from the entire knowledge base (highest priority)
        all_faq_chunks = []
        for doc, meta in zip(self.documents, self.metadata):
            source = meta.get('source', '')
            if 'FAQ' in source and 'UserQuestions' not in source and 'BadAnswers' not in source:
                all_faq_chunks.append(doc.strip())

        # Get ALL Decision Log chunks from the entire knowledge base (second priority)
        all_decision_log_chunks = []
        for doc, meta in zip(self.documents, self.metadata):
            source = meta.get('source', '')
            if 'Decision Log' in source and 'UserQuestions' not in source and 'BadAnswers' not in source:
                all_decision_log_chunks.append(doc.strip())

        # Get ALL other document chunks (excluding FAQ, Decision Log, UserQuestions, BadAnswers)
        all_other_chunks = []
        for doc, meta in zip(self.documents, self.metadata):
            source = meta.get('source', '')
            # Skip UserQuestions.txt, BadAnswers.txt, FAQ, and Decision Log
            if ('UserQuestions' not in source and
                'BadAnswers' not in source and
                'FAQ' not in source and
                'Decision Log' not in source):
                all_other_chunks.append((doc.strip(), source))

        # Build context with FAQ FIRST, then Decision Log, then ALL other documents
        context_parts = []

        # Add all FAQ content first (highest priority)
        if all_faq_chunks:
            context_parts.append("=== FAQ DOCUMENT (HIGHEST PRIORITY - CHECK THIS FIRST) ===")
            for idx, doc in enumerate(all_faq_chunks, 1):
                context_parts.append(f"FAQ Section {idx}:\n{doc}")

        # Add all Decision Log content second (high priority)
        if all_decision_log_chunks:
            context_parts.append("\n=== DECISION LOG (HIGH PRIORITY - CHECK IF FAQ DOESN'T HAVE ANSWER) ===")
            for idx, doc in enumerate(all_decision_log_chunks, 1):
                context_parts.append(f"Decision Log Section {idx}:\n{doc}")

        # Add ALL other documents (excluding UserQuestions and BadAnswers)
        if all_other_chunks:
            context_parts.append("\n=== ALL OTHER DOCUMENTS ===")
            for idx, (doc, source) in enumerate(all_other_chunks, 1):
                context_parts.append(f"Document {idx}:\n{doc}")

        context = "\n\n".join(context_parts)

        # Use Claude API if available
        if self.use_claude and self.client:
            try:
                # Build system prompt with instructions
                system_prompt = self.instructions if self.instructions else """You are a helpful customer support agent. Answer questions based on the provided context documents.

Guidelines:
- Provide clear, direct answers
- Do not mention document numbers or sources
- Be concise but complete
- If the context doesn't contain the answer, say so
- Use a professional and helpful tone
- IMPORTANT: Prioritize information from the Decision Log (PRIORITY CONTEXT) over all other documents"""


                # Build user prompt with context and question
                user_prompt = f"""Context from knowledge base:

{context}

---

Question: {question}

IMPORTANT INSTRUCTIONS:
1. When answering, prioritize information from the "FAQ DOCUMENT (HIGHEST PRIORITY)" section first, then "DECISION LOG (HIGH PRIORITY)" section
2. **CRITICAL**: If the context above contains any hyperlinks (markdown links like [text](url) or plain URLs), you MUST include them in your answer. Do not omit hyperlinks for brevity.
3. Look for phrases like "click here", "click [here](url)", "see this", "learn more" followed by URLs - include these in your response

Please answer the question based on the context provided above. Do not reference the documents or sources in your answer."""

                # Call Claude API
                response = self.client.messages.create(
                    model="claude-3-5-sonnet-20241022",
                    max_tokens=2000,
                    system=system_prompt,
                    messages=[
                        {"role": "user", "content": user_prompt}
                    ]
                )

                # Extract answer from response
                answer = response.content[0].text

                return answer

            except Exception as e:
                print(f"Error calling Claude API: {e}")
                print("Falling back to simple retrieval")
                # Fall back to simple concatenation
                return "\n\n".join([doc.strip() for doc, meta, score in relevant_docs])

        else:
            # Simple concatenation without Claude
            return "\n\n".join([doc.strip() for doc, meta, score in relevant_docs])

    def chat(self) -> None:
        """Start an interactive chat session."""
        print("\n" + "="*60)
        print("Customer Support Agent")
        print("="*60)
        print("Ask me anything based on the loaded knowledge base.")
        print("Type 'quit', 'exit', or 'bye' to end the session.")
        print("="*60 + "\n")

        while True:
            try:
                user_input = input("You: ").strip()

                if not user_input:
                    continue

                if user_input.lower() in ['quit', 'exit', 'bye']:
                    print("\nAgent: Goodbye! Have a great day!")
                    break

                # Get answer
                answer = self.answer_question(user_input)

                print(f"\nAgent: {answer}\n")

            except KeyboardInterrupt:
                print("\n\nAgent: Goodbye! Have a great day!")
                break
            except Exception as e:
                print(f"\nError: {e}\n")


def main():
    """Main function to run the chat agent."""
    import sys

    agent = ChatAgent()

    # Check if file paths provided as command line arguments
    if len(sys.argv) > 1:
        paths = sys.argv[1:]
        agent.load_knowledge_base(paths)
    else:
        # Interactive file loading
        print("Customer Support Agent - Knowledge Base Loader")
        print("="*60)
        print("\nEnter file paths or directory paths (one per line).")
        print("Press Enter on empty line when done.\n")

        paths = []
        while True:
            path = input("Path: ").strip()
            if not path:
                break
            paths.append(path)

        if paths:
            agent.load_knowledge_base(paths)
        else:
            print("\nNo files loaded. Exiting.")
            return

    # Start chat
    agent.chat()


if __name__ == "__main__":
    main()
