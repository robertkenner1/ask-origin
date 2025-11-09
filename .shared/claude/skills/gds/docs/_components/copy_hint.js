import * as React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import CodeBlock from "@theme/CodeBlock";
import { InterfaceCopyIcon, InterfaceLinkIcon } from "@grammarly/design-system";

async function copyTextToClipboard(text) {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand("copy", true, text);
  }
}

const CopyIcon = React.forwardRef((props, ref) => {
  return (
    <div className={props.className} onClick={props.onClick} ref={ref}>
      <InterfaceCopyIcon />
    </div>
  );
});

const LinkIcon = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} onClick={props.onClick} className={props.className}>
      <InterfaceLinkIcon />
    </div>
  );
});

export const LinkHint = ({ className, onClick }) => {
  const [text, setText] = React.useState("Click to copy link to the token");
  const [visible, setVisible] = React.useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <Tippy content={text} visible={visible} onClickOutside={hide}>
      <div onMouseOver={show} onMouseLeave={hide}>
        <LinkIcon
          className={className}
          onClick={() => {
            onClick();

            copyTextToClipboard(window.location.href)
              .then(() => {
                setText("Copied!");
                setTimeout(() => {
                  hide();
                }, 1000);
              })
              .catch(err => {
                console.error(err);
              });
          }}
        />
      </div>
    </Tippy>
  );
};

export const CopyHint = ({ web, swift, csharp, className }) => {
  const [text, setText] = React.useState("Click to copy code to the clipboard");
  const [visible, setVisible] = React.useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <Tippy
      content={
        <div style={{ textAlign: "left" }}>
          <p style={{paddingBottom: "8px"}}>{text}</p>
          {web && <CodeBlock language="ts" children={web} />}
          {swift && <CodeBlock language="ts" children={swift} />}
          {csharp && <CodeBlock language="xml" children={csharp} />}
        </div>
      }
      visible={visible}
      onClickOutside={hide}
    >
      <div onMouseOver={show} onMouseLeave={hide}>
        <CopyIcon
          className={className}
          onClick={() => {
            copyTextToClipboard(web || swift || csharp)
              .then(() => {
                setText("Copied!");
                setTimeout(() => {
                  hide();
                }, 1000);
              })
              .catch(err => {
                console.error(err);
              });
          }}
        />
      </div>
    </Tippy>
  );
};
