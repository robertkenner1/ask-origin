#!/bin/bash

# This script updates import paths in all newly migrated files
# to reflect the new directory structure.

# Define root directory
ROOT_DIR="/Users/justin/Developer/Grammarly/ai-editor-compose"

# Function to update imports in a file
update_imports() {
  local file="$1"
  
  # Update component imports
  sed -i '' 's|from "../components/ui/|from "@/components/core/|g' "$file"
  sed -i '' 's|from "./ui/|from "@/components/core/|g' "$file"
  sed -i '' 's|from "@/app/components/|from "@/components/|g' "$file"
  sed -i '' 's|from "../app/components/|from "@/components/|g' "$file"
  
  # Update specific component imports based on new structure
  sed -i '' 's|from "@/components/Editor|from "@/components/editor/Editor|g' "$file"
  sed -i '' 's|from "@/components/TipTapBubbleMenu|from "@/components/editor/TipTapBubbleMenu|g' "$file"
  sed -i '' 's|from "@/components/TipTapDragHandle|from "@/components/editor/TipTapDragHandle|g' "$file"
  sed -i '' 's|from "@/components/ComposeBar|from "@/components/editor/ComposeBar|g' "$file"
  sed -i '' 's|from "@/components/DiffSuggestionView|from "@/components/editor/DiffSuggestionView|g' "$file"
  sed -i '' 's|from "@/components/HighlightNodeView|from "@/components/editor/HighlightNodeView|g' "$file"
  sed -i '' 's|from "@/components/StreamGenerationProgress|from "@/components/editor/StreamGenerationProgress|g' "$file"
  sed -i '' 's|from "@/components/DeepWriterProgress|from "@/components/editor/DeepWriterProgress|g' "$file"
  
  sed -i '' 's|from "@/components/DocumentList|from "@/components/document/DocumentList|g' "$file"
  sed -i '' 's|from "@/components/DocumentListHeader|from "@/components/document/DocumentListHeader|g' "$file"
  sed -i '' 's|from "@/components/DocumentListItem|from "@/components/document/DocumentListItem|g' "$file"
  sed -i '' 's|from "@/components/DocumentInputBar|from "@/components/document/DocumentInputBar|g' "$file"
  sed -i '' 's|from "@/components/BatchDeleteDialog|from "@/components/document/BatchDeleteDialog|g' "$file"
  sed -i '' 's|from "@/components/DeleteDialog|from "@/components/document/DeleteDialog|g' "$file"
  sed -i '' 's|from "@/components/PageSelector|from "@/components/document/PageSelector|g' "$file"
  sed -i '' 's|from "@/components/PageRelationshipNav|from "@/components/document/PageRelationshipNav|g' "$file"
  
  sed -i '' 's|from "@/components/DocumentHeader|from "@/components/layout/DocumentHeader|g' "$file"
  sed -i '' 's|from "@/components/Sidebar|from "@/components/layout/Sidebar|g' "$file"
  sed -i '' 's|from "@/components/OrchestraPane|from "@/components/layout/OrchestraPane|g' "$file"
  
  sed -i '' 's|from "@/components/ChatInput|from "@/components/chat/ChatInput|g' "$file"
  sed -i '' 's|from "@/components/ChatMessage|from "@/components/chat/ChatMessage|g' "$file"
  sed -i '' 's|from "@/components/AgentBench|from "@/components/chat/AgentBench|g' "$file"
  
  sed -i '' 's|from "@/components/SimpleLoadingCircle|from "@/components/core/SimpleLoadingCircle|g' "$file"
  sed -i '' 's|from "@/components/MarkdownRenderer|from "@/components/core/MarkdownRenderer|g' "$file"
  sed -i '' 's|from "@/components/PillBar|from "@/components/core/PillBar|g' "$file"
  sed -i '' 's|from "@/components/SettingsDialog|from "@/components/core/SettingsDialog|g' "$file"
  sed -i '' 's|from "@/components/ThinkingModal|from "@/components/core/ThinkingModal|g' "$file"
  
  # Update extension imports
  sed -i '' 's|from "../extensions/|from "@/components/editor/extensions/|g' "$file"
  sed -i '' 's|from "@/app/extensions/|from "@/components/editor/extensions/|g' "$file"
  
  # Update node components imports
  sed -i '' 's|from "@/components/nodes/|from "@/components/editor/nodes/|g' "$file"
  sed -i '' 's|from "@/app/components/nodes/|from "@/components/editor/nodes/|g' "$file"
  sed -i '' 's|from "./nodes/|from "./editor/nodes/|g' "$file"
  
  # Update annotation components imports
  sed -i '' 's|from "@/components/annotations/|from "@/components/editor/annotations/|g' "$file"
  sed -i '' 's|from "@/app/components/annotations/|from "@/components/editor/annotations/|g' "$file"
  sed -i '' 's|from "./annotations/|from "./editor/annotations/|g' "$file"
  
  # Update hooks imports
  sed -i '' 's|from "@/hooks/useEditorKeyboard|from "@/hooks/editor/useEditorKeyboard|g' "$file"
  sed -i '' 's|from "@/hooks/useTextSuggestions|from "@/hooks/editor/useTextSuggestions|g' "$file"
  sed -i '' 's|from "@/hooks/useDeepWriterDocument|from "@/hooks/document/useDeepWriterDocument|g' "$file"
  sed -i '' 's|from "@/hooks/useDocumentGeneration|from "@/hooks/document/useDocumentGeneration|g' "$file"
  sed -i '' 's|from "@/hooks/useDocumentStore|from "@/hooks/document/useDocumentStore|g' "$file"
  sed -i '' 's|from "@/hooks/useStreamGeneration|from "@/hooks/document/useStreamGeneration|g' "$file"
  sed -i '' 's|from "@/hooks/useNetworkStatus|from "@/hooks/common/useNetworkStatus|g' "$file"
  
  # Update stores imports
  sed -i '' 's|from "@/stores/chatStore|from "@/stores/chat/chatStore|g' "$file"
  sed -i '' 's|from "@/stores/sidebarStore|from "@/stores/chat/sidebarStore|g' "$file"
  sed -i '' 's|from "@/stores/suggestionsStore|from "@/stores/editor/suggestionsStore|g' "$file"
  
  # Update services imports
  sed -i '' 's|from "@/services/claudeService|from "@/services/ai/claudeService|g' "$file"
  sed -i '' 's|from "@/services/sessionStore|from "@/services/storage/sessionStore|g' "$file"
  
  # Update utils imports
  sed -i '' 's|from "@/utils/TipTapEditorInitializeContent|from "@/utils/editor/TipTapEditorInitializeContent|g' "$file"
  sed -i '' 's|from "@/utils/processGuidanceContent|from "@/utils/editor/processGuidanceContent|g' "$file"
  sed -i '' 's|from "@/utils/processLLMContent|from "@/utils/editor/processLLMContent|g' "$file"
  sed -i '' 's|from "@/utils/progressEvents|from "@/utils/editor/progressEvents|g' "$file"
  sed -i '' 's|from "@/utils/markdownToHtml|from "@/utils/document/markdownToHtml|g' "$file"
  sed -i '' 's|from "@/utils/contentTypeDetection|from "@/utils/document/contentTypeDetection|g' "$file"
  sed -i '' 's|from "@/utils/apiUtils|from "@/utils/common/apiUtils|g' "$file"
  sed -i '' 's|from "@/utils/cn|from "@/utils/common/cn|g' "$file"
  sed -i '' 's|from "@/utils/timeFormatter|from "@/utils/common/timeFormatter|g' "$file"
  
  # Fix relative imports in editor component
  sed -i '' 's|from "../../utils/TipTapEditorInitializeContent"|from "@/utils/editor/TipTapEditorInitializeContent"|g' "$file"

  echo "Updated imports in $file"
}

# Process all TypeScript and TypeScript React files in the new structure
find "$ROOT_DIR/src/components" "$ROOT_DIR/src/hooks" "$ROOT_DIR/src/services" "$ROOT_DIR/src/stores" "$ROOT_DIR/src/features" "$ROOT_DIR/src/utils" -type f -name "*.ts" -o -name "*.tsx" | while read -r file; do
  update_imports "$file"
done

echo "Import paths updated successfully!"