# Customer Support Chat Agent

A simple yet powerful chat agent that answers questions based on your own documents and knowledge base files.

## Features

- **Multiple File Format Support**: Load `.txt`, `.md`, `.json`, `.csv`, and `.pdf` files
- **Smart Document Parsing**: Automatically chunks and indexes your documents
- **Keyword-Based Search**: Finds relevant information using intelligent keyword matching
- **Web Interface**: Modern, browser-based chat interface using Gradio
- **CLI Interface**: Optional command-line interface for terminal users
- **Source Attribution**: Shows which file and page number each answer comes from

## Installation

```bash
# Clone or download this repository
cd "Customer Support Agent"

# Install dependencies
pip install -r requirements.txt

# Optional: Create virtual environment (recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

## Setup Anthropic API Key

To use Claude AI for intelligent responses, you need an Anthropic API key:

1. **Get your API key** from [Anthropic Console](https://console.anthropic.com/settings/keys)

2. **Set the environment variable** in one of these ways:

   **Option A: Create a .env file** (recommended for development)
   ```bash
   cp .env.example .env
   # Edit .env and add your API key:
   # ANTHROPIC_API_KEY=sk-ant-...
   ```

   **Option B: Export in your shell**
   ```bash
   export ANTHROPIC_API_KEY="sk-ant-your-key-here"
   ```

   **Option C: Add to your shell profile** (permanent)
   ```bash
   # Add to ~/.bashrc, ~/.zshrc, or ~/.bash_profile:
   export ANTHROPIC_API_KEY="sk-ant-your-key-here"
   ```

3. **Restart the server** after setting the API key

## Quick Start (Web Interface) 🚀

**Recommended method** - Modern Node.js frontend with AI backend:

```bash
# Terminal 1: Start the backend server
node server.js

# Terminal 2: Build and serve the frontend
cd ../..
make build
make start
```

Then open your browser to: **http://localhost:8181/customer-support-agent/**

The interface will automatically load documents from the `knowledge` folder.

### Alternative: Gradio Interface (Legacy)

```bash
python3 web_chat.py
# Open browser to http://localhost:7860
```

**Note:** The Node.js frontend (Option 1) is the primary UI with better design and features.

## Usage

### CLI Interface (Alternative)

If you prefer the command line interface:

**Method 1: Quick start with knowledge folder**
```bash
python3 start_chat.py
```

**Method 2: Specify custom paths**
```bash
# Single file
python3 chat_agent.py knowledge.txt

# Multiple files
python3 chat_agent.py docs/faq.txt docs/policies.md data/products.json

# Entire directory
python3 chat_agent.py ./knowledge/
```

**Method 3: Interactive loading**
```bash
python3 chat_agent.py
# Then enter file paths when prompted
```

## Supported File Formats

### Text Files (`.txt`, `.md`)
Plain text or markdown files. The agent will split them into chunks for better retrieval.

Example `knowledge.txt`:
```
Our company was founded in 2020.

We offer customer support from 9 AM to 5 PM EST, Monday through Friday.

Our refund policy allows returns within 30 days of purchase.
```

### JSON Files (`.json`)
JSON files are parsed and each top-level key becomes a searchable section.

Example `products.json`:
```json
{
  "product_1": {
    "name": "Basic Plan",
    "price": "$9.99/month",
    "features": ["Feature A", "Feature B"]
  },
  "product_2": {
    "name": "Pro Plan",
    "price": "$29.99/month",
    "features": ["All Basic features", "Feature C", "Feature D"]
  }
}
```

### CSV Files (`.csv`)
CSV files with headers. Each row becomes a searchable document.

Example `customers.csv`:
```csv
name,email,plan
John Doe,john@example.com,Basic Plan
Jane Smith,jane@example.com,Pro Plan
```

### PDF Files (`.pdf`)
PDF documents are automatically parsed and text is extracted page by page. Answers will include page numbers for easy reference.

Supports:
- Text-based PDFs
- Multi-page documents
- Automatic page number tracking

## Example Session

### Web Interface
![Web Chat Interface - Modern browser-based chat](https://via.placeholder.com/800x400?text=Web+Chat+Interface)

Simply type your questions in the chat box and get instant answers with source attribution including file names and page numbers.

### CLI Interface
```
Customer Support Agent
============================================================
Ask me anything based on the loaded knowledge base.
Type 'quit', 'exit', or 'bye' to end the session.
============================================================

You: What is a Genesis org?

Agent: [From 10:7 Object Hierarchy Catalyst.pdf, Page 11]
Example: Need Grammarly Billing team to integrate with the Genesis
Organization object for any paid member billing...

You: Tell me about discounts

Agent: [From 10:7 Discounts, Trials, True Ups & Frozen Subsriptions for Genesis.pdf, Page 1]
Discounts, Trials, True Ups & Frozen Subsriptions for Genesis

Background: Grammarly offers a variety of discounts available to SS
customers that drive revenue per year...

You: bye

Agent: Goodbye! Have a great day!
```

## How It Works

1. **Document Loading**: The agent loads your files and splits them into manageable chunks
2. **Indexing**: Each chunk is indexed with metadata (source file, position)
3. **Query Processing**: When you ask a question, it extracts keywords
4. **Relevance Scoring**: Documents are scored based on:
   - Exact phrase matches (highest score)
   - Keyword overlap
   - Term frequency
5. **Answer Generation**: Top matching documents are returned with source attribution

## Customization

### Adjusting Search Results

Edit `chat_agent.py` to change the number of results:

```python
# In answer_question method
relevant_docs = self._find_relevant_documents(question, top_k=3)  # Change top_k
```

### Changing Chunk Size

Modify the `_split_text` method:

```python
def _split_text(self, text: str, max_chunk_size: int = 1000):  # Adjust size
```

### Adding New File Formats

Extend the `DocumentLoader` class with new methods:

```python
def _load_xml(self, path: Path) -> None:
    # Your XML parsing logic
    pass
```

## Tips for Best Results

1. **Organize Your Knowledge Base**: Keep related information in topic-specific files
2. **Use Clear Language**: Write your documents in clear, concise language
3. **Include Keywords**: Make sure important terms appear in your documents
4. **Structure Your Data**: Use headers, paragraphs, and sections to organize content
5. **Test Your Questions**: Try different phrasings to see which works best

## Limitations

- Uses simple keyword matching (not semantic understanding)
- Works best with well-structured documents
- Limited to text-based content
- No learning or memory between sessions

## Future Enhancements

To add more advanced features, uncomment dependencies in `requirements.txt`:

- **Semantic Search**: Use `sentence-transformers` for meaning-based matching
- **Better Ranking**: Use `scikit-learn` for TF-IDF vectorization
- **Web Interface**: Use `flask` or `gradio` for browser-based chat
- **Efficient Search**: Use `faiss` for fast similarity search on large datasets

## License

MIT License - Feel free to use and modify for your needs.

## Contributing

Contributions welcome! Feel free to submit issues or pull requests.
