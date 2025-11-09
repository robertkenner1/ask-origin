import React from "react";
import Tippy, { tippy } from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

const Popover = ({ directionName, placementName }) => (
  <Tippy
    content={
      <span>
        <div class="popover-header">
          <button class="close-button">
            <img src={useBaseUrl("/img/components/close-small.svg")} alt="Close button" />
          </button>
        </div>
        <p class="body-bold">Ready to save time?</p>
        <p>Let's create your first snippet</p>
        <div class="action-bar">
          <button class="dark-button-primary">OK</button>
        </div>
      </span>
    }
    placement={placementName}
    trigger="click"
    allowHTML="true"
    interactive="true"
    theme="gds-popover"
    offset={[0, 7]}
  >
    <button class="secondary-button">{directionName}</button>
  </Tippy>
);

export default Popover;
