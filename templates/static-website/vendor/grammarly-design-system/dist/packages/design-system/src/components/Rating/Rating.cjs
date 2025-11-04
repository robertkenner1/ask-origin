"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const StarList = require("./StarList.cjs");
;/* empty css             */
const _import = require("../../../../../external/@react-aria_utils@3.19.0_react@18.2.0/external/@react-aria/utils/dist/import.cjs");
const liveAnnouncer = require("../LiveAnnouncer/liveAnnouncer.cjs");
const Text = require("../Text/Text.cjs");
const InputErrorMessage = require("../InputErrorMessage/InputErrorMessage.cjs");
const DEFAULT_STAR_LABELS = [
  "Not Valuable",
  "Slightly Valuable",
  "Moderately Valuable",
  "Fairly Valuable",
  "Very Valuable"
];
const Rating = /* @__PURE__ */ React.forwardRef(
  function Rating2(props, forwardedRef) {
    const {
      onChange,
      isError = false,
      isRequired,
      label,
      starLabels = DEFAULT_STAR_LABELS,
      value
    } = props;
    const errorId = _import.useId();
    const [selectedValue, setSelectedValue] = React.useState();
    const [showRatingUnselectedError, setShowRatingUnselectedError] = React.useState(false);
    React.useEffect(() => {
      return () => {
        liveAnnouncer.liveAnnouncer.clear();
      };
    }, []);
    React.useEffect(() => {
      if (value !== void 0) {
        setSelectedValue(value);
      }
    }, [value]);
    React.useEffect(() => {
      if (isError !== void 0) {
        setShowRatingUnselectedError(isError);
      }
    }, [isError]);
    React.useEffect(() => {
      if (selectedValue !== void 0) {
        const selectedLabel = starLabels[selectedValue];
        liveAnnouncer.liveAnnouncer.announce("You chose " + selectedLabel);
      }
    }, [selectedValue]);
    const handleSelect = (value2) => {
      setSelectedValue(value2);
      onChange == null ? void 0 : onChange(value2);
    };
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        ref: forwardedRef,
        className: "gds-rating-container",
        "data-error": showRatingUnselectedError
      },
      /* @__PURE__ */ React.createElement("div", { className: "gds-rating-error-container" }, /* @__PURE__ */ React.createElement(
        "fieldset",
        {
          "aria-describedby": showRatingUnselectedError ? errorId : void 0,
          "aria-labelledby": "rating-label",
          role: "radiogroup",
          "aria-required": isRequired,
          className: "gds-rating-fieldset"
        },
        /* @__PURE__ */ React.createElement("legend", { id: "rating-label" }, /* @__PURE__ */ React.createElement(
          Text.Text,
          {
            as: "span",
            variant: "text-small",
            weight: "medium",
            className: "gds-rating-fieldset-label"
          },
          label
        ), isRequired && /* @__PURE__ */ React.createElement(Text.Text, { as: "span", variant: "text-xsmall", color: "base-subdued" }, "(Required)")),
        /* @__PURE__ */ React.createElement(StarList.StarList, { onSelect: handleSelect, labels: starLabels, selectedValue })
      )),
      /* @__PURE__ */ React.createElement(
        InputErrorMessage.InputErrorMessage,
        {
          id: errorId,
          errorMessage: isError ? "Select a rating." : " ",
          className: isError ? void 0 : "gds-sr-only"
        }
      )
    );
  }
);
exports.Rating = Rating;
