#!/usr/bin/env python3
"""
Web-based Customer Support Chat Agent using Gradio.
Provides a browser-based chat interface for the agent.
"""

import gradio as gr
from chat_agent import ChatAgent
import os

# Load environment variables from .env file
try:
    from dotenv import load_dotenv
    load_dotenv()
    print("✓ Environment variables loaded from .env file")
except ImportError:
    print("Note: python-dotenv not installed. Environment variables not loaded from .env file.")
except Exception as e:
    print(f"Warning: Could not load .env file: {e}")

# Global agent instance
agent = None
knowledge_loaded = False

def load_knowledge_base(folder_path="knowledge"):
    """Load the knowledge base from the specified folder."""
    global agent, knowledge_loaded

    agent = ChatAgent()

    if not os.path.exists(folder_path):
        return f"❌ Error: The '{folder_path}' folder was not found.\n\nPlease create the folder and add your knowledge base documents."

    # Load knowledge base
    agent.load_knowledge_base([folder_path])

    if len(agent.documents) == 0:
        knowledge_loaded = False
        return f"⚠️ No documents found in '{folder_path}' folder.\n\nSupported formats: PDF, TXT, MD, JSON, CSV"

    knowledge_loaded = True
    claude_status = "🤖 Claude AI enabled" if agent.use_claude else "⚠️ Claude AI not available (using keyword search)"
    return f"✅ Knowledge base loaded successfully!\n\n📚 {len(agent.documents)} document chunks ready\n{claude_status}"

def chat_response(message, history):
    """Generate a response to the user's message."""
    global agent, knowledge_loaded

    if not knowledge_loaded or agent is None:
        # Return updated history with error message
        history = history or []
        history.append((message, "⚠️ **Knowledge base not loaded**\n\nPlease click the '🔄 Load Knowledge Base' button above to get started."))
        return history

    if not message.strip():
        history = history or []
        history.append((message, "Please ask me a question about your knowledge base."))
        return history

    # Get answer from agent (question logging happens inside answer_question)
    answer = agent.answer_question(message, top_k=10)

    # Append to history
    history = history or []
    history.append((message, answer))

    return history

def create_interface():
    """Create the Gradio interface."""

    # Custom CSS for modern design
    custom_css = """
    .gradio-container {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
    }

    .header-container {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 2.5rem 2rem;
        border-radius: 12px;
        margin-bottom: 2rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .header-title {
        color: white;
        font-size: 2.5rem;
        font-weight: 700;
        margin: 0;
        text-align: center;
    }

    .header-subtitle {
        color: rgba(255, 255, 255, 0.9);
        font-size: 1.1rem;
        text-align: center;
        margin-top: 0.5rem;
    }

    .status-box {
        background: #f8f9fa;
        border-radius: 8px;
        padding: 1rem;
        border-left: 4px solid #667eea;
    }

    .tips-container {
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        padding: 1.5rem;
        border-radius: 12px;
        margin-top: 1.5rem;
    }

    .footer-text {
        text-align: center;
        color: #6c757d;
        font-size: 0.875rem;
        margin-top: 2rem;
    }
    """

    # Create custom theme
    custom_theme = gr.themes.Soft(
        primary_hue="purple",
        secondary_hue="blue",
        neutral_hue="slate",
        font=[gr.themes.GoogleFont("Inter"), "system-ui", "sans-serif"],
    ).set(
        button_primary_background_fill="linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
        button_primary_background_fill_hover="linear-gradient(90deg, #5568d3 0%, #63408a 100%)",
        button_primary_text_color="white",
        button_primary_border_color="transparent",
    )

    with gr.Blocks(title="Customer Support AI Agent", theme=custom_theme, css=custom_css) as demo:
        # Header
        gr.HTML(
            """
            <div class="header-container">
                <h1 class="header-title">💬 Customer Support AI Agent</h1>
                <p class="header-subtitle">Powered by Claude AI • Intelligent answers from your knowledge base</p>
            </div>
            """
        )

        # Status and Load Section
        with gr.Row():
            with gr.Column(scale=4):
                load_status = gr.Textbox(
                    label="📊 Knowledge Base Status",
                    value="Ready to load knowledge base. Click the button to get started →",
                    interactive=False,
                    lines=2,
                    container=True
                )
            with gr.Column(scale=1):
                load_btn = gr.Button(
                    "🔄 Load Knowledge Base",
                    variant="primary",
                    size="lg",
                    scale=1
                )

        # Chat interface
        gr.Markdown("### 💭 Chat with Your AI Assistant")

        chatbot = gr.Chatbot(
            label="Conversation",
            height=550,
            show_label=False,
            avatar_images=("👤", "🤖"),
            type="tuples",
            bubble_full_width=False,
            show_copy_button=True
        )

        with gr.Row():
            msg = gr.Textbox(
                label="Your Question",
                placeholder="Ask me anything about your knowledge base...",
                show_label=False,
                scale=9,
                container=False
            )
            submit_btn = gr.Button("Send ✨", variant="primary", scale=1, size="lg")

        # Tips section
        gr.HTML(
            """
            <div class="tips-container">
                <h3 style="margin-top: 0; color: #2d3748;">💡 Quick Tips</h3>
                <ul style="color: #4a5568; line-height: 1.8;">
                    <li><strong>Supported Formats:</strong> PDF, TXT, MD, JSON, CSV</li>
                    <li><strong>Knowledge Folder:</strong> Place your documents in the <code>knowledge</code> folder</li>
                    <li><strong>Best Results:</strong> Ask specific, clear questions</li>
                    <li><strong>AI Powered:</strong> Responses are generated by Claude for natural conversations</li>
                </ul>
            </div>
            """
        )

        # Footer
        gr.HTML(
            """
            <div class="footer-text">
                <p>🔒 Your data is secure • Powered by Anthropic Claude API</p>
            </div>
            """
        )

        # Event handlers
        load_btn.click(
            fn=load_knowledge_base,
            inputs=[],
            outputs=[load_status]
        )

        # Submit on button click
        submit_btn.click(
            fn=chat_response,
            inputs=[msg, chatbot],
            outputs=[chatbot],
        ).then(
            lambda: gr.update(value=""),  # Clear the input box
            inputs=None,
            outputs=[msg]
        )

        # Submit on Enter key
        msg.submit(
            fn=chat_response,
            inputs=[msg, chatbot],
            outputs=[chatbot],
        ).then(
            lambda: gr.update(value=""),  # Clear the input box
            inputs=None,
            outputs=[msg]
        )

    return demo

def main():
    """Main function to launch the web interface."""
    # Auto-load knowledge base on startup
    print("\n" + "="*70)
    print("🚀 Customer Support AI Agent")
    print("="*70)
    print("\n📂 Checking for knowledge base...")

    global agent, knowledge_loaded
    agent = ChatAgent()

    if os.path.exists('knowledge'):
        print("📖 Loading knowledge base from 'knowledge' folder...")
        agent.load_knowledge_base(['knowledge'])
        if len(agent.documents) > 0:
            knowledge_loaded = True
            print(f"✅ Successfully loaded {len(agent.documents)} document chunks")
            if agent.use_claude:
                print("🤖 Claude AI enabled - Intelligent responses ready")
            else:
                print("⚠️  Claude AI not available - Using keyword-based search")
        else:
            print("⚠️  No documents found in knowledge folder")
    else:
        print("⚠️  Knowledge folder not found - You can load it from the web interface")

    # Create and launch interface
    demo = create_interface()

    print("\n" + "="*70)
    print("🌐 Starting web interface...")
    print("="*70)
    print("\n🔗 Access URL: http://localhost:7860")
    print("💡 Tip: Use the 'Load Knowledge Base' button in the interface to refresh")
    print("\n" + "="*70 + "\n")

    demo.launch(
        server_name="0.0.0.0",  # Allow access from other devices on network
        server_port=7860,
        share=False,  # Set to True to create a public link
        show_error=True
    )

if __name__ == "__main__":
    main()
