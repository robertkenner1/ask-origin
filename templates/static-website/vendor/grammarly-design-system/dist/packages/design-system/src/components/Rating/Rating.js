import React__default from "react";
import { StarList } from "./StarList.js";
/* empty css           */
import { useId as $bdb11010cef70236$export$f680877a34711e37 } from "../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.js";
import { liveAnnouncer } from "../LiveAnnouncer/liveAnnouncer.js";
import { Text } from "../Text/Text.js";
import { InputErrorMessage } from "../InputErrorMessage/InputErrorMessage.js";
const DEFAULT_STAR_LABELS = [
  "Not Valuable",
  "Slightly Valuable",
  "Moderately Valuable",
  "Fairly Valuable",
  "Very Valuable"
];
const Rating = /* @__PURE__ */ React__default.forwardRef(
  function Rating2(props, forwardedRef) {
    const {
      onChange,
      isError = false,
      isRequired,
      label,
      starLabels = DEFAULT_STAR_LABELS,
      value
    } = props;
    const errorId = $bdb11010cef70236$export$f680877a34711e37();
    const [selectedValue, setSelectedValue] = React__default.useState();
    const [showRatingUnselectedError, setShowRatingUnselectedError] = React__default.useState(false);
    React__default.useEffect(() => {
      return () => {
        liveAnnouncer.clear();
      };
    }, []);
    React__default.useEffect(() => {
      if (value !== void 0) {
        setSelectedValue(value);
      }
    }, [value]);
    React__default.useEffect(() => {
      if (isError !== void 0) {
        setShowRatingUnselectedError(isError);
      }
    }, [isError]);
    React__default.useEffect(() => {
      if (selectedValue !== void 0) {
        const selectedLabel = starLabels[selectedValue];
        liveAnnouncer.announce("You chose " + selectedLabel);
      }
    }, [selectedValue]);
    const handleSelect = (value2) => {
      setSelectedValue(value2);
      onChange == null ? void 0 : onChange(value2);
    };
    return /* @__PURE__ */ React__default.createElement(
      "div",
      {
        ref: forwardedRef,
        className: "gds-rating-container",
        "data-error": showRatingUnselectedError
      },
      /* @__PURE__ */ React__default.createElement("div", { className: "gds-rating-error-container" }, /* @__PURE__ */ React__default.createElement(
        "fieldset",
        {
          "aria-describedby": showRatingUnselectedError ? errorId : void 0,
          "aria-labelledby": "rating-label",
          role: "radiogroup",
          "aria-required": isRequired,
          className: "gds-rating-fieldset"
        },
        /* @__PURE__ */ React__default.createElement("legend", { id: "rating-label" }, /* @__PURE__ */ React__default.createElement(
          Text,
          {
            as: "span",
            variant: "text-small",
            weight: "medium",
            className: "gds-rating-fieldset-label"
          },
          label
        ), isRequired && /* @__PURE__ */ React__default.createElement(Text, { as: "span", variant: "text-xsmall", color: "base-subdued" }, "(Required)")),
        /* @__PURE__ */ React__default.createElement(StarList, { onSelect: handleSelect, labels: starLabels, selectedValue })
      )),
      /* @__PURE__ */ React__default.createElement(
        InputErrorMessage,
        {
          id: errorId,
          errorMessage: isError ? "Select a rating." : " ",
          className: isError ? void 0 : "gds-sr-only"
        }
      )
    );
  }
);
export {
  Rating
};
