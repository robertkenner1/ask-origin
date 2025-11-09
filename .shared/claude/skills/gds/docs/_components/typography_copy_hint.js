import * as React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import CodeBlock from "@theme/CodeBlock";
import { InterfaceCopyIcon, Tokens } from "@grammarly/design-system";

const CopyIcon = React.forwardRef((_props, ref) => {
  const [hovering, setHovering] = React.useState(false);
  return (
    <div
      onMouseOver={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      ref={ref}
      style={{
        cursor: "pointer",
        width: 32,
        height: 32,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Tokens.Radius.Radius1,
        backgroundColor: hovering ? Tokens.Color.BlueGray5 : "transparent",
      }}
    >
      <InterfaceCopyIcon />
    </div>
  );
});

const TypographyCopyHint = ({ react, appkit, wpf, children }) => {
  const ref = React.useRef();

  return (
    <Tippy
      delay={100}
      interactive={true}
      interactiveBorder={20}
      reference={ref}
      content={
        <div className="typography-copy-tooltip">
          <p>React:</p>
          <CodeBlock language="tsx" children={react} />
          {/* FIXME: bring back swift etc */}
          {/* {appkit && (
            <>
              <p>AppKit:</p>
              <CodeBlock language="ts" children={appkit} />
            </>
          )}
          {wpf && (
            <>
              <p>WPF:</p>
              <CodeBlock language="xml" children={wpf} />
            </>
          )} */}
        </div>
      }
    >
      <>
        <td style={{ textAlign: "center", width: "25px" }}>
          <CopyIcon ref={ref} />
        </td>
        {children}
      </>
    </Tippy>
  );
};

export default TypographyCopyHint;
