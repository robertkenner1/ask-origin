"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  useDocumentStore,
  type Document,
  type DeepWriterConfig,
} from "@/hooks/document/useDocumentStore";
import { FileText, X, Trash2 } from "lucide-react";
import { DocumentListItem } from "./DocumentListItem";
import { DeleteDialog } from "./DeleteDialog";
import { BatchDeleteDialog } from "./BatchDeleteDialog";
import { Button } from "./ui/button";
import { DocumentListHeader } from "./DocumentListHeader";
import { DocumentInputBar } from "./DocumentInputBar";

export default function DocumentList() {
  const documents = useDocumentStore((state) => state.documents);
  const deleteDocument = useDocumentStore((state) => state.deleteDocument);

  const [isLoaded, setIsLoaded] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [documentToDelete, setDocumentToDelete] = useState<Document | null>(
    null,
  );

  // Selection mode states
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [selectedDocuments, setSelectedDocuments] = useState<Set<string>>(
    new Set(),
  );
  const [batchDeleteDialogOpen, setBatchDeleteDialogOpen] = useState(false);
  const [documentTitle, setDocumentTitle] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [deepWriter, setDeepWriter] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const createDocument = useDocumentStore((state) => state.createDocument);
  const router = useRouter();

  // Sort documents for display - create a sorted copy
  const sortedDocuments = [...documents].sort(
    (a, b) => b.lastEdited - a.lastEdited,
  );

  // Load documents from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLoaded(true);
    }
  }, []);

  // Delete a document
  const handleDeleteClick = (doc: Document, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDocumentToDelete(doc);
    setDeleteDialogOpen(true);
  };

  // Confirm deletion
  const confirmDelete = () => {
    if (documentToDelete) {
      deleteDocument(documentToDelete.id);
      setDocumentToDelete(null);
    }
  };

  // Toggle selection mode
  const toggleSelectionMode = () => {
    setIsSelectionMode(!isSelectionMode);
    setSelectedDocuments(new Set());
  };

  // Toggle document selection
  const toggleDocumentSelection = (docId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const newSelected = new Set(selectedDocuments);
    if (newSelected.has(docId)) {
      newSelected.delete(docId);
    } else {
      newSelected.add(docId);
    }
    setSelectedDocuments(newSelected);
  };

  // Cancel selection mode
  const cancelSelection = () => {
    setIsSelectionMode(false);
    setSelectedDocuments(new Set());
  };

  // Confirm batch deletion
  const confirmBatchDelete = () => {
    selectedDocuments.forEach((docId) => {
      deleteDocument(docId);
    });

    setIsSelectionMode(false);
    setSelectedDocuments(new Set());
    setBatchDeleteDialogOpen(false);
  };

  // We're using the formatTimeAgo utility instead of a local implementation

  // If client-side but no documents found
  if (isLoaded && documents.length === 0) {
    return (
      <>
        <DocumentListHeader onToggleSelectionMode={toggleSelectionMode} />
        <div className="mx-auto max-w-4xl pt-4">
          <div className="mb-3 flex items-center justify-between pt-4">
            {!isSelectionMode && (
              <DocumentInputBar
                value={documentTitle}
                onChange={setDocumentTitle}
                isGenerating={isGenerating}
                deepWriter={deepWriter}
                onToggleDeepWriter={() => setDeepWriter(!deepWriter)}
                error={error}
              />
            )}

            {isSelectionMode && (
              <div className="flex w-full items-center justify-between">
                <Button
                  variant="secondary"
                  size="sm"
                  disabled={true}
                  className="inline-flex h-8 cursor-not-allowed items-center bg-gray-700 px-3 text-sm text-gray-300 hover:bg-gray-700 hover:text-gray-300"
                >
                  <Trash2 className="mr-1 h-3.5 w-3.5" />
                  Delete documents
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={cancelSelection}
                  className="inline-flex h-8 items-center px-3 text-sm"
                >
                  <X className="mr-1 h-3.5 w-3.5" />
                  Cancel
                </Button>
              </div>
            )}
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-12 shadow-sm">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="rounded-full bg-blue-50 p-5">
                <FileText className="mx-auto h-14 w-14 text-blue-600/70" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">
                No documents yet
              </h3>
              <p className="mt-3 max-w-md text-base text-gray-600">
                Get started by creating a new document to begin editing.
              </p>
              <div className="mt-8 inline-block rounded-lg border border-blue-100 bg-blue-50/50 p-4">
                <p className="text-sm text-blue-700">
                  Click the <span className="font-semibold">New</span> button in
                  the header to create your first document.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <DocumentListHeader onToggleSelectionMode={toggleSelectionMode} />
      <div className="mx-auto max-w-4xl pt-4">
        <div className="mb-3 flex items-center justify-between pt-4">
          {!isSelectionMode && (
            <DocumentInputBar
              value={documentTitle}
              onChange={setDocumentTitle}
              isGenerating={isGenerating}
              deepWriter={deepWriter}
              onToggleDeepWriter={() => setDeepWriter(!deepWriter)}
              error={error}
            />
          )}

          {isSelectionMode && (
            <div className="flex w-full items-center justify-between">
              <Button
                variant={
                  selectedDocuments.size === 0 ? "secondary" : "destructive"
                }
                size="sm"
                onClick={() => setBatchDeleteDialogOpen(true)}
                disabled={selectedDocuments.size === 0}
                className={`inline-flex h-8 items-center px-3 text-sm ${selectedDocuments.size === 0 ? "cursor-not-allowed bg-gray-700 text-gray-300 hover:bg-gray-700 hover:text-gray-300" : ""}`}
              >
                <Trash2 className="mr-1 h-3.5 w-3.5" />
                Delete{" "}
                {selectedDocuments.size > 0 ? selectedDocuments.size : ""}{" "}
                document
                {selectedDocuments.size !== 1 ? "s" : ""}
                {selectedDocuments.size > 0 ? "..." : ""}
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={cancelSelection}
                className="ml-auto inline-flex h-8 items-center px-3 text-sm"
              >
                <X className="mr-1 h-3.5 w-3.5" />
                Cancel
              </Button>
            </div>
          )}
        </div>

        <div className="pb-16">
          <ul className="w-full space-y-1">
            {sortedDocuments.map((doc) => (
              <li key={doc.id} className="min-w-[24rem]">
                <DocumentListItem
                  document={doc}
                  isSelectionMode={isSelectionMode}
                  isSelected={selectedDocuments.has(doc.id)}
                  onSelect={toggleDocumentSelection}
                  onDelete={handleDeleteClick}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Delete confirmation dialog */}
        {documentToDelete && (
          <DeleteDialog
            open={deleteDialogOpen}
            onOpenChange={setDeleteDialogOpen}
            documentTitle={documentToDelete.title}
            onConfirm={confirmDelete}
          />
        )}

        {/* Batch delete confirmation dialog */}
        <BatchDeleteDialog
          open={batchDeleteDialogOpen}
          onOpenChange={setBatchDeleteDialogOpen}
          count={selectedDocuments.size}
          onConfirm={confirmBatchDelete}
        />
      </div>
    </>
  );
}
