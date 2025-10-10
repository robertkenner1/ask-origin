#!/usr/bin/env python3
"""
Quick start script for Customer Support Chat Agent.
Automatically loads the 'knowledge' folder and starts chatting.
"""

from chat_agent import ChatAgent
import os

# Load environment variables from .env file
try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

def main():
    # Create agent
    agent = ChatAgent()

    # Check if knowledge folder exists
    knowledge_path = 'knowledge'

    if not os.path.exists(knowledge_path):
        print(f"Error: '{knowledge_path}' folder not found.")
        print(f"Please create a '{knowledge_path}' folder and add your documents.")
        return

    # Load knowledge base
    print("Loading knowledge base...")
    agent.load_knowledge_base([knowledge_path])

    if len(agent.documents) == 0:
        print("\nWarning: No documents were loaded from the knowledge folder.")
        print("Please add some .txt, .md, .json, .csv, or .pdf files to the 'knowledge' folder.")
        return

    # Start chat
    agent.chat()

if __name__ == "__main__":
    main()
