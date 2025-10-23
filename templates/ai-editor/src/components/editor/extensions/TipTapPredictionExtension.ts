import { Extension } from "@tiptap/core";
import { Plugin, PluginKey } from "prosemirror-state";
import { Decoration, DecorationSet } from "prosemirror-view";

// Interface for the extension options
interface PredictionOptions {
  prediction: string;
  className: string;
}

// Create a unique plugin key
const predictionPluginKey = new PluginKey("prediction");

// Create the Prediction extension
export const Prediction = Extension.create<PredictionOptions>({
  name: "prediction",

  // Default options
  addOptions() {
    return {
      prediction: "",
      className: "text-muted-foreground",
    };
  },

  // Add the extension to the editor
  addProseMirrorPlugins() {
    const { prediction, className } = this.options;

    return [
      new Plugin({
        key: predictionPluginKey,

        props: {
          // Using decorations to render the prediction
          decorations(state) {
            const { doc, selection } = state;
            const predictionText = this.getState(state);

            if (!predictionText) return null;

            // Create a decoration that shows the prediction after the selection
            const decorations = [];
            const currentPos = selection.$head.pos;

            // Only add decoration if we have prediction text
            if (predictionText && currentPos !== undefined) {
              // Create the decoration at the current cursor position
              decorations.push(
                // Inline decoration that appends the prediction text with our class
                Decoration.widget(currentPos, () => {
                  const span = document.createElement("span");
                  span.className = className;
                  span.textContent = predictionText;
                  span.contentEditable = "false";
                  return span;
                }),
              );
            }

            return DecorationSet.create(doc, decorations);
          },
        },

        state: {
          init() {
            return prediction;
          },
          apply(tr, oldState) {
            // Get updated prediction from transaction meta
            const newPrediction = tr.getMeta(predictionPluginKey);
            if (newPrediction !== undefined) {
              return newPrediction;
            }
            return oldState;
          },
        },
      }),
    ];
  },
});

// Helper method to update the prediction text
export function updatePrediction(editor: any, predictionText: string): void {
  if (!editor) return;

  editor.view.dispatch(
    editor.state.tr.setMeta(predictionPluginKey, predictionText),
  );
}
