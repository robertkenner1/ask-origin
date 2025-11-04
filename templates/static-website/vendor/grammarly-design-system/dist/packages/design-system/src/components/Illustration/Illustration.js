import React__default, { useRef, useMemo, useCallback, useImperativeHandle, useEffect } from "react";
import { clsx } from "../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.js";
import { useTheme, ThemeProvider } from "../ThemeProvider/ThemeProvider.js";
/* empty css                 */
import { IllustrationSpotDetectAiText } from "../../../../icons/generated/all/illustration_spot-detect-ai-text.js";
import { IllustrationSpotPlagiarism } from "../../../../icons/generated/all/illustration_spot-plagiarism.js";
import { IllustrationSpotChartLineGraph } from "../../../../icons/generated/all/illustration_spot-chart-line-graph.js";
import { IllustrationSpotDocOnBrand } from "../../../../icons/generated/all/illustration_spot-doc-on-brand.js";
import { IllustrationSpotCoin } from "../../../../icons/generated/all/illustration_spot-coin.js";
import { IllustrationSpotTarget } from "../../../../icons/generated/all/illustration_spot-target.js";
import { IllustrationSpotChartUser } from "../../../../icons/generated/all/illustration_spot-chart-user.js";
import { IllustrationSpotDoc100 } from "../../../../icons/generated/all/illustration_spot-doc-100.js";
import { IllustrationSpotDocDoubleCheck } from "../../../../icons/generated/all/illustration_spot-doc-double-check.js";
import { IllustrationSpotDocCheck } from "../../../../icons/generated/all/illustration_spot-doc-check.js";
import { IllustrationSpotDocMagic } from "../../../../icons/generated/all/illustration_spot-doc-magic.js";
import { IllustrationSpotDocAward } from "../../../../icons/generated/all/illustration_spot-doc-award.js";
import { IllustrationSpotDocSparkles } from "../../../../icons/generated/all/illustration_spot-doc-sparkles.js";
import { IllustrationSpotChatCheck } from "../../../../icons/generated/all/illustration_spot-chat-check.js";
import { IllustrationSpotChatDouble } from "../../../../icons/generated/all/illustration_spot-chat-double.js";
import { IllustrationSpotIssue } from "../../../../icons/generated/all/illustration_spot-issue.js";
import { IllustrationSpotCelebrate } from "../../../../icons/generated/all/illustration_spot-celebrate.js";
import { IllustrationSuccessWrite } from "../../../../icons/generated/all/illustration_success-write.js";
import { IllustrationSuccessWork } from "../../../../icons/generated/all/illustration_success-work.js";
import { IllustrationSuccessScribe } from "../../../../icons/generated/all/illustration_success-scribe.js";
import { IllustrationSuccessSand } from "../../../../icons/generated/all/illustration_success-sand.js";
import { IllustrationSuccessPlane } from "../../../../icons/generated/all/illustration_success-plane.js";
import { IllustrationSuccessPainting } from "../../../../icons/generated/all/illustration_success-painting.js";
import { IllustrationSuccessHat } from "../../../../icons/generated/all/illustration_success-hat.js";
import { IllustrationSuccessCookie } from "../../../../icons/generated/all/illustration_success-cookie.js";
import { IllustrationSuccessCheck } from "../../../../icons/generated/all/illustration_success-check.js";
import { IllustrationSuccessCactus } from "../../../../icons/generated/all/illustration_success-cactus.js";
import { IllustrationSuccessBirding } from "../../../../icons/generated/all/illustration_success-birding.js";
import { IllustrationEmptyWrite } from "../../../../icons/generated/all/illustration_empty-write.js";
import { IllustrationEmptyWork } from "../../../../icons/generated/all/illustration_empty-work.js";
import { IllustrationEmptySand } from "../../../../icons/generated/all/illustration_empty-sand.js";
import { IllustrationEmptyScribe } from "../../../../icons/generated/all/illustration_empty-scribe.js";
import { IllustrationEmptyPlane } from "../../../../icons/generated/all/illustration_empty-plane.js";
import { IllustrationEmptyPainting } from "../../../../icons/generated/all/illustration_empty-painting.js";
import { IllustrationEmptyHat } from "../../../../icons/generated/all/illustration_empty-hat.js";
import { IllustrationEmptyCookie } from "../../../../icons/generated/all/illustration_empty-cookie.js";
import { IllustrationEmptyCactus } from "../../../../icons/generated/all/illustration_empty-cactus.js";
import { IllustrationEmptyBirding } from "../../../../icons/generated/all/illustration_empty-birding.js";
const imageMap = {
  "empty-birding": IllustrationEmptyBirding,
  "empty-cactus": IllustrationEmptyCactus,
  "empty-cookie": IllustrationEmptyCookie,
  "empty-hat": IllustrationEmptyHat,
  "empty-painting": IllustrationEmptyPainting,
  "empty-plane": IllustrationEmptyPlane,
  "empty-scribe": IllustrationEmptyScribe,
  "empty-sand": IllustrationEmptySand,
  "empty-work": IllustrationEmptyWork,
  "empty-write": IllustrationEmptyWrite,
  "success-birding": IllustrationSuccessBirding,
  "success-cactus": IllustrationSuccessCactus,
  "success-check": IllustrationSuccessCheck,
  "success-cookie": IllustrationSuccessCookie,
  "success-hat": IllustrationSuccessHat,
  "success-painting": IllustrationSuccessPainting,
  "success-plane": IllustrationSuccessPlane,
  "success-sand": IllustrationSuccessSand,
  "success-scribe": IllustrationSuccessScribe,
  "success-work": IllustrationSuccessWork,
  "success-write": IllustrationSuccessWrite,
  "spot-celebrate": IllustrationSpotCelebrate,
  "spot-issue": IllustrationSpotIssue,
  "spot-chat-double": IllustrationSpotChatDouble,
  "spot-chat-check": IllustrationSpotChatCheck,
  "spot-doc-sparkles": IllustrationSpotDocSparkles,
  "spot-doc-award": IllustrationSpotDocAward,
  "spot-doc-magic": IllustrationSpotDocMagic,
  "spot-doc-check": IllustrationSpotDocCheck,
  "spot-doc-double-check": IllustrationSpotDocDoubleCheck,
  "spot-doc-100": IllustrationSpotDoc100,
  "spot-chart-user": IllustrationSpotChartUser,
  "spot-target": IllustrationSpotTarget,
  "spot-coin": IllustrationSpotCoin,
  "spot-doc-on-brand": IllustrationSpotDocOnBrand,
  "spot-chart-line-graph": IllustrationSpotChartLineGraph,
  "spot-plagiarism": IllustrationSpotPlagiarism,
  "spot-detect-ai-text": IllustrationSpotDetectAiText
};
const Illustration = React__default.forwardRef(
  function Illustration2({ accessibilityLabel, size = "medium", colorMode = "auto", type, className, ...rest }, forwardedRef) {
    const { mode } = useTheme();
    const internalRef = useRef(null);
    const ImageComponent = useMemo(() => {
      const component = imageMap[type];
      if (!component) {
        throw new Error(`Illustration: type "${type}" does not exist`);
      }
      return component;
    }, [type]);
    const getColorMode = useCallback(
      (colorMode2) => {
        if (!(colorMode2 === "light" || colorMode2 === "dark")) return null;
        return colorMode2;
      },
      [mode]
    );
    const resolvedColorMode = getColorMode(colorMode);
    useImperativeHandle(forwardedRef, () => internalRef.current);
    useEffect(() => {
      if (internalRef.current) {
        const svgElement = internalRef.current.querySelector("svg");
        if (svgElement) {
          svgElement.setAttribute("aria-label", accessibilityLabel || "");
          svgElement.setAttribute("aria-hidden", !accessibilityLabel ? "true" : "false");
          svgElement.setAttribute("role", "img");
        }
      }
    }, [accessibilityLabel]);
    const illustrationContent = /* @__PURE__ */ React__default.createElement(
      "div",
      {
        ref: internalRef,
        className: clsx("gds-illustration", `gds-illustration-${size}`, className),
        ...rest
      },
      /* @__PURE__ */ React__default.createElement(ImageComponent, null)
    );
    return resolvedColorMode ? /* @__PURE__ */ React__default.createElement(ThemeProvider, { mode: resolvedColorMode }, illustrationContent) : illustrationContent;
  }
);
export {
  Illustration
};
