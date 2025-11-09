 import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@grammarly/design-system";

export default ({ directionName, placementName }) => (
  <Tooltip placement={placementName}>
    <TooltipTrigger asChild>
      <button class="tertiary-button"></button>
    </TooltipTrigger>
    <TooltipContent root={null}>
      <span>"{directionName}" alignment to the button</span>
    </TooltipContent>
  </Tooltip>
);
