"""Test script to verify knowledge base loading."""

from chat_agent import ChatAgent

# Create agent
agent = ChatAgent()

# Load knowledge folder
print("Loading knowledge base from 'knowledge' folder...")
agent.load_knowledge_base(['knowledge'])

print("\n" + "="*60)
print("Knowledge base loaded successfully!")
print(f"Total document chunks: {len(agent.documents)}")
print("="*60)

# Show sample of loaded documents
if agent.documents:
    print("\nFirst few document chunks:")
    for i, (doc, meta) in enumerate(zip(agent.documents[:3], agent.metadata[:3])):
        print(f"\n--- Document {i+1} ---")
        print(f"Source: {meta.get('source', 'Unknown')}")
        if 'page' in meta:
            print(f"Page: {meta['page']}")
        print(f"Content preview: {doc[:200]}...")
