import * as React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import * as prettier from "prettier/standalone";
import * as babelParser from "prettier/parser-babel";
import * as GDS from "@grammarly/design-system";
import { VisuallyHidden } from "react-aria";
import clsx from "clsx";

export function formatCode(code) {
  try {
    return prettier
      .format(code, { parser: "babel", plugins: [babelParser] })
      .trim()
      .replace(/;$/, "");
  } catch (_error) {
    // fallback to initial code if it can't be formatted
    return code;
  }
}

export function createCodeMonitor(cb) {
  return code => {
    cb(code);
    return code;
  };
}

export default function ComponentPlayground({
  layout = "column",
  monitorCode = null,
  autoStart = false,
  hideDemoPreview = false,
  hideCodePreview = false,
  noInline,
  showAsHero,
  code,
  scope,
  style,
}) {
  const formattedCode = formatCode(code);

  const compiledScope = { ...GDS, ...scope, VisuallyHidden };
  const editorPreviewRef = React.useRef(null);

  const EDITOR_MAX_HEIGHT = 162;
  const [expanded, setExpanded] = React.useState(autoStart);
  const [showExpandButton, setShowExpandButton] = React.useState(hideCodePreview);
  let editorMaxHeight = "none";

  React.useEffect(() => {
    const height = editorPreviewRef?.current?.clientHeight ?? 0;

    if (height >= EDITOR_MAX_HEIGHT) {
      setExpanded(autoStart);
      setShowExpandButton(true);
    } else {
      setExpanded(true);
    }
  }, [code, hideCodePreview]);

  // If an example is expanded, no max-height needed
  // If !expanded, code blocks that hide the preview should have no min height
  // All others have small min height
  if (expanded) {
    editorMaxHeight = "none";
  } else if (hideCodePreview) {
    editorMaxHeight = "0";
  } else {
    editorMaxHeight = EDITOR_MAX_HEIGHT;
  }

  return (
    <div
      className={clsx("docs-live-example", "p-8", layout === "grid" && "docs-live-example-grid")}
      style={{
        flexDirection: layout || "column",
        alignItems: layout !== "column" && "flex-start",
        backgroundColor: showAsHero && "var(--light-green)",
        width: "100%",
        ...style,
      }}
    >
      {/* see API at https://commerce.nearform.com/open-source/react-live/docs */}
      <LiveProvider
        code={formattedCode}
        scope={compiledScope}
        noInline={noInline}
        {...(monitorCode ? { transformCode: monitorCode } : {})}
      >
        {!hideDemoPreview && (
          <GDS.Flex align="center" justify="center" width="100%">
            <LivePreview
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </GDS.Flex>
        )}
        {!hideCodePreview && (
          <div style={{ position: "relative", width: "100%" }} ref={editorPreviewRef}>
            {showExpandButton && !autoStart && (
              <div
                style={{ position: "absolute", right: "30px", top: "10px" }}
                data-gds-theme="dark"
              >
                <GDS.IconButton
                  accessibilityLabel={expanded ? "Collapse code preview" : "Expand code preview"}
                  icon={expanded ? GDS.InterfaceCollapseIcon : GDS.InterfaceExpandIcon}
                  onClick={() => setExpanded(!expanded)}
                  variant="secondary"
                />
              </div>
            )}
            <LiveError />
            <LiveEditor
              disabled={!expanded}
              style={{
                width: "100%",
                maxHeight: editorMaxHeight,
                overflow: "auto",
              }}
            />
          </div>
        )}
      </LiveProvider>
    </div>
  );
}
