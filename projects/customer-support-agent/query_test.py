#!/usr/bin/env python3
"""Test a specific query against the knowledge base."""

from chat_agent import ChatAgent

# Create and load agent
agent = ChatAgent()
agent.load_knowledge_base(['knowledge'])

# Query
question = "What is a Genesis org"
print(f"Question: {question}\n")
print("Answer:")
print(agent.answer_question(question, top_k=5))
