// useDocumentStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { get, set, del } from "idb-keyval";

// Types
export interface Page {
  id: string;
  name: string;
  content: string;
  type?: "outline" | "draft" | "research" | "custom";
  pageMetadata?: {
    contentType?: "essay" | "prd" | "research" | "resume" | "custom";
    generationPrompt?: string;
    relatedPageIds?: string[];
    failed?: boolean; // Tracks if generation failed
  };
}

export interface DeepWriterConfig {
  enabled: boolean;
  generateOutline: boolean;
  generateDraft: boolean;
  generateResearch: boolean;
  contentType?: "essay" | "prd" | "research" | "resume" | "custom";
  detailedResearch?: boolean;
}

export interface LLMMetadata {
  prompt?: string;
  rawResponse?: string;
  model?: string;
  generatedAt?: number;
  deepWriter?: DeepWriterConfig;
  failed?: boolean;
  failureReason?: string;
}

export interface Document {
  id: string;
  title: string;
  pages: Page[];
  currentPageId: string;
  lastEdited: number;
  llmMetadata?: LLMMetadata;
}

// Custom storage adapter for idb-keyval
const idbStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return (await get(name)) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await set(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    await del(name);
  },
};

// Store interface
interface DocumentStore {
  // State
  documents: Document[];
  currentDocument: Document | null;
  documentLoaded: boolean;
  isHydrated: boolean;

  // Actions
  setHydrated: (status: boolean) => void;
  loadDocument: (id: string | null) => Promise<Document>;
  saveDocument: (doc: Partial<Document>) => void;
  createDocument: (title?: string) => Document;
  deleteDocument: (id: string) => void;
  markDocumentAsFailed: (id: string, errorMessage?: string) => void;
  cleanupOrphanedDocuments: () => void;
  updateCurrentDocument: (update: Partial<Document>) => void;
  updatePage: (pageId: string, content: string) => void;
  addPage: () => void;
  renamePage: (pageId: string, name: string) => void;
  deletePage: (pageId: string) => void;
  changePage: (pageId: string) => void;
}

// Initial state to fix type issues
const initialState: DocumentStore = {
  documents: [],
  currentDocument: null,
  documentLoaded: false,
  isHydrated: false,

  // These will be overwritten by the actual implementations
  setHydrated: () => {},
  loadDocument: async () => ({
    id: "",
    title: "",
    pages: [],
    currentPageId: "",
    lastEdited: 0,
  }),
  saveDocument: () => {},
  createDocument: (title?: string) => ({
    id: "",
    title: "",
    pages: [],
    currentPageId: "",
    lastEdited: 0,
  }),
  deleteDocument: () => {},
  markDocumentAsFailed: () => {},
  cleanupOrphanedDocuments: () => {},
  updateCurrentDocument: () => {},
  updatePage: () => {},
  addPage: () => {},
  renamePage: () => {},
  deletePage: () => {},
  changePage: () => {},
};

// Helper function to ensure document structure
const ensureDocumentStructure = (doc: Partial<Document>): Document => {
  // Create pages array if it doesn't exist
  let pages = Array.isArray(doc.pages) ? [...doc.pages] : [];

  // If no pages, create default
  if (pages.length === 0) {
    pages = [
      {
        id: "page-1",
        name: "Page 1",
        content: "",
      },
    ];
  }

  // Ensure current page ID is valid
  let currentPageId = doc.currentPageId || pages[0].id;
  if (!pages.some((p) => p.id === currentPageId)) {
    currentPageId = pages[0].id;
  }

  return {
    id: doc.id || crypto.randomUUID(),
    title: doc.title || "Untitled Document",
    pages,
    currentPageId,
    lastEdited: doc.lastEdited || Date.now(),
    // Preserve LLM metadata if it exists
    llmMetadata: doc.llmMetadata,
  };
};

// Create store with persist middleware
export const useDocumentStore = create<DocumentStore>()(
  persist(
    immer((set, get) => ({
      ...initialState, // Use initial state to satisfy TypeScript

      // Set hydration status
      setHydrated: (status: boolean) => {
        set((state) => {
          state.isHydrated = status;
        });
      },

      // Load document by ID
      loadDocument: async (id) => {
        const { isHydrated } = get();

        // Wait for hydration before proceeding
        if (!isHydrated) {
          console.log("Store not yet hydrated, waiting...");
          // Wait for hydration with a small timeout
          await new Promise((resolve) => {
            const checkHydration = () => {
              if (get().isHydrated) {
                resolve(true);
              } else {
                setTimeout(checkHydration, 50);
              }
            };
            checkHydration();
          });
        }

        // Now the store should be hydrated, get fresh documents
        const freshDocuments = get().documents;

        // Find existing document
        if (id) {
          console.log(`Looking for document with id: ${id}`, freshDocuments);
          const doc = freshDocuments.find((d) => d.id === id);
          if (doc) {
            console.log("Document found:", doc.title);
            set((state) => {
              state.currentDocument = doc;
              state.documentLoaded = true;
            });
            return doc;
          } else {
            console.log("Document not found");
          }
        }

        // Create new document if not found
        console.log("Creating new document as fallback");
        return get().createDocument();
      },

      // Save document
      saveDocument: (docUpdate) => {
        const { currentDocument, documents } = get();
        if (!currentDocument) return;

        // Merge updates with current document
        const updatedDoc = {
          ...currentDocument,
          ...docUpdate,
          lastEdited: Date.now(),
        };

        // Ensure proper structure
        const doc = ensureDocumentStructure(updatedDoc);

        set((state) => {
          // Update current document
          state.currentDocument = doc;

          // Update in documents array
          const index = state.documents.findIndex((d) => d.id === doc.id);
          if (index >= 0) {
            state.documents[index] = doc;
          } else {
            state.documents.push(doc);
          }
        });
      },

      // Create new document
      createDocument: (title?: string) => {
        const newDoc = ensureDocumentStructure({
          id: crypto.randomUUID(),
          title: title || "Untitled Document",
          lastEdited: Date.now(),
        });

        set((state) => {
          state.documents.push(newDoc);
          state.currentDocument = newDoc;
          state.documentLoaded = true;
        });

        return newDoc;
      },

      // Delete document
      deleteDocument: (id) => {
        set((state) => {
          state.documents = state.documents.filter((doc) => doc.id !== id);
          if (state.currentDocument?.id === id) {
            state.currentDocument = null;
          }
        });
      },

      // Mark a document as failed (for cleanup)
      markDocumentAsFailed: (id, errorMessage) => {
        set((state) => {
          const docIndex = state.documents.findIndex((doc) => doc.id === id);
          if (docIndex >= 0) {
            // Mark document as failed for later cleanup
            const doc = state.documents[docIndex];

            // Add a failed flag to metadata
            doc.llmMetadata = {
              ...doc.llmMetadata,
              failed: true,
              failureReason: errorMessage,
            };

            // Also mark the document title to indicate failure
            doc.title = `[FAILED] ${doc.title}`;

            // Add a failure message to the content if empty
            if (doc.pages.length === 1 && !doc.pages[0].content) {
              doc.pages[0].content = `# Document Generation Failed\n\n${errorMessage || "The document could not be generated due to an error."}`;
              doc.pages[0].pageMetadata = {
                ...doc.pages[0].pageMetadata,
                failed: true,
              };
            }

            state.documents[docIndex] = doc;
          }
        });
      },

      // Clean up orphaned documents (empty or flagged as failed)
      cleanupOrphanedDocuments: () => {
        const FIVE_MINUTES = 5 * 60 * 1000; // 5 minutes in milliseconds

        set((state) => {
          // Get the current time
          const now = Date.now();

          // Filter out documents that are:
          // 1. Created within the last 5 minutes (recent)
          // 2. Have a single page with no content
          // 3. And/or are marked as failed
          state.documents = state.documents.filter((doc) => {
            // Keep if document is older than 5 minutes
            if (now - doc.lastEdited > FIVE_MINUTES) {
              return true;
            }

            // Check if document is likely orphaned/failed
            const isEmpty =
              doc.pages.length === 1 &&
              (!doc.pages[0].content || doc.pages[0].content.trim() === "");

            const isFailed =
              doc.llmMetadata?.failed === true ||
              doc.pages.some((page) => page.pageMetadata?.failed === true);

            // Keep if not empty or not failed
            return !(isEmpty || isFailed);
          });
        });
      },

      // Update current document
      updateCurrentDocument: (update) => {
        get().saveDocument(update);
      },

      // Update page content
      updatePage: (pageId, content) => {
        const { currentDocument } = get();
        if (!currentDocument) return;

        set((state) => {
          if (state.currentDocument) {
            const pageIndex = state.currentDocument.pages.findIndex(
              (p) => p.id === pageId,
            );
            if (pageIndex >= 0) {
              state.currentDocument.pages[pageIndex].content = content;
              state.currentDocument.lastEdited = Date.now();

              // Also update in documents array
              const docIndex = state.documents.findIndex(
                (d) => d.id === state.currentDocument?.id,
              );
              if (docIndex >= 0) {
                state.documents[docIndex] = state.currentDocument;
              }
            }
          }
        });
      },

      // Add new page
      addPage: () => {
        const { currentDocument } = get();
        if (!currentDocument) return;

        // Find next page number
        const pageNumbers = currentDocument.pages
          .map((p) => {
            const match = p.name.match(/^Page\s+(\d+)$/);
            return match ? parseInt(match[1], 10) : 0;
          })
          .filter((num) => !isNaN(num));

        const nextNumber =
          pageNumbers.length > 0
            ? Math.max(...pageNumbers) + 1
            : currentDocument.pages.length + 1;

        // Create new page
        const newPage: Page = {
          id: `page-${crypto.randomUUID()}`,
          name: `Page ${nextNumber}`,
          content: "",
        };

        set((state) => {
          if (state.currentDocument) {
            state.currentDocument.pages.push(newPage);
            state.currentDocument.currentPageId = newPage.id;
            state.currentDocument.lastEdited = Date.now();

            // Also update in documents array
            const docIndex = state.documents.findIndex(
              (d) => d.id === state.currentDocument?.id,
            );
            if (docIndex >= 0) {
              state.documents[docIndex] = state.currentDocument;
            }
          }
        });
      },

      // Rename page
      renamePage: (pageId, name) => {
        if (!name.trim()) return;

        const { currentDocument } = get();
        if (!currentDocument) return;

        set((state) => {
          if (state.currentDocument) {
            const pageIndex = state.currentDocument.pages.findIndex(
              (p) => p.id === pageId,
            );
            if (pageIndex >= 0) {
              state.currentDocument.pages[pageIndex].name = name;
              state.currentDocument.lastEdited = Date.now();

              // Also update in documents array
              const docIndex = state.documents.findIndex(
                (d) => d.id === state.currentDocument?.id,
              );
              if (docIndex >= 0) {
                state.documents[docIndex] = state.currentDocument;
              }
            }
          }
        });
      },

      // Delete page
      deletePage: (pageId) => {
        const { currentDocument } = get();
        if (!currentDocument) return;

        // Cannot delete the only page
        if (currentDocument.pages.length <= 1) return;

        set((state) => {
          if (state.currentDocument) {
            // Remove page
            state.currentDocument.pages = state.currentDocument.pages.filter(
              (p) => p.id !== pageId,
            );

            // Update current page if deleted
            if (state.currentDocument.currentPageId === pageId) {
              state.currentDocument.currentPageId =
                state.currentDocument.pages[0].id;
            }

            state.currentDocument.lastEdited = Date.now();

            // Also update in documents array
            const docIndex = state.documents.findIndex(
              (d) => d.id === state.currentDocument?.id,
            );
            if (docIndex >= 0) {
              state.documents[docIndex] = state.currentDocument;
            }
          }
        });
      },

      // Change current page
      changePage: (pageId) => {
        const { currentDocument } = get();
        if (!currentDocument) return;

        set((state) => {
          if (state.currentDocument) {
            state.currentDocument.currentPageId = pageId;

            // Also update in documents array
            const docIndex = state.documents.findIndex(
              (d) => d.id === state.currentDocument?.id,
            );
            if (docIndex >= 0) {
              state.documents[docIndex] = state.currentDocument;
            }
          }
        });
      },
    })),
    {
      name: "ai-editor-storage",
      storage: createJSONStorage(() => idbStorage),
      partialize: (state) => ({ documents: state.documents }),
      onRehydrateStorage: () => (state) => {
        // When storage rehydration is complete, mark store as hydrated
        if (state) {
          state.setHydrated(true);
          console.log("Store hydrated successfully");
        }
      },
    },
  ),
);

// Hook for document management with URL integration
export function useDocumentManager() {
  const store = useDocumentStore();

  const getCurrentPage = () => {
    const { currentDocument } = store;
    if (!currentDocument) return null;

    return (
      currentDocument.pages.find(
        (p) => p.id === currentDocument.currentPageId,
      ) || null
    );
  };

  const currentPage = getCurrentPage();

  return {
    currentDocument: store.currentDocument,
    documentLoaded: store.documentLoaded,
    currentPage,
    pages: store.currentDocument?.pages || [],
    currentPageContent: currentPage?.content || "",
    handleTitleChange: (title: string) =>
      store.updateCurrentDocument({ title }),
    handlePageContentChange: (content: string) => {
      if (currentPage) {
        store.updatePage(currentPage.id, content);
      }
    },
    handlePageChange: (page: Page) => store.changePage(page.id),
    handleNewPage: store.addPage,
    handleRenamePage: store.renamePage,
    handleDeletePage: store.deletePage,

    // Extra methods
    createDocument: store.createDocument,
    loadDocument: store.loadDocument,
    deleteDocument: store.deleteDocument,
  };
}

export async function migrateFromLocalStorage() {
  const STORAGE_KEY = "ai-editor-documents";
  const oldData = localStorage.getItem(STORAGE_KEY);

  if (oldData) {
    try {
      const documents = JSON.parse(oldData);
      if (Array.isArray(documents) && documents.length > 0) {
        // Set documents in store
        useDocumentStore.setState({ documents });

        // Optional: clear localStorage after migration
        // localStorage.removeItem(STORAGE_KEY)

        return true;
      }
    } catch (err) {
      console.error("Migration failed:", err);
    }
  }

  return false;
}
