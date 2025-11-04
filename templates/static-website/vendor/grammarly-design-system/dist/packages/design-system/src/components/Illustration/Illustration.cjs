"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const clsx_m = require("../../../../../external/clsx@1.2.1/external/clsx/dist/clsx.m.cjs");
const ThemeProvider = require("../ThemeProvider/ThemeProvider.cjs");
;/* empty css                   */
const illustration_spotDetectAiText = require("../../../../icons/generated/all/illustration_spot-detect-ai-text.cjs");
const illustration_spotPlagiarism = require("../../../../icons/generated/all/illustration_spot-plagiarism.cjs");
const illustration_spotChartLineGraph = require("../../../../icons/generated/all/illustration_spot-chart-line-graph.cjs");
const illustration_spotDocOnBrand = require("../../../../icons/generated/all/illustration_spot-doc-on-brand.cjs");
const illustration_spotCoin = require("../../../../icons/generated/all/illustration_spot-coin.cjs");
const illustration_spotTarget = require("../../../../icons/generated/all/illustration_spot-target.cjs");
const illustration_spotChartUser = require("../../../../icons/generated/all/illustration_spot-chart-user.cjs");
const illustration_spotDoc100 = require("../../../../icons/generated/all/illustration_spot-doc-100.cjs");
const illustration_spotDocDoubleCheck = require("../../../../icons/generated/all/illustration_spot-doc-double-check.cjs");
const illustration_spotDocCheck = require("../../../../icons/generated/all/illustration_spot-doc-check.cjs");
const illustration_spotDocMagic = require("../../../../icons/generated/all/illustration_spot-doc-magic.cjs");
const illustration_spotDocAward = require("../../../../icons/generated/all/illustration_spot-doc-award.cjs");
const illustration_spotDocSparkles = require("../../../../icons/generated/all/illustration_spot-doc-sparkles.cjs");
const illustration_spotChatCheck = require("../../../../icons/generated/all/illustration_spot-chat-check.cjs");
const illustration_spotChatDouble = require("../../../../icons/generated/all/illustration_spot-chat-double.cjs");
const illustration_spotIssue = require("../../../../icons/generated/all/illustration_spot-issue.cjs");
const illustration_spotCelebrate = require("../../../../icons/generated/all/illustration_spot-celebrate.cjs");
const illustration_successWrite = require("../../../../icons/generated/all/illustration_success-write.cjs");
const illustration_successWork = require("../../../../icons/generated/all/illustration_success-work.cjs");
const illustration_successScribe = require("../../../../icons/generated/all/illustration_success-scribe.cjs");
const illustration_successSand = require("../../../../icons/generated/all/illustration_success-sand.cjs");
const illustration_successPlane = require("../../../../icons/generated/all/illustration_success-plane.cjs");
const illustration_successPainting = require("../../../../icons/generated/all/illustration_success-painting.cjs");
const illustration_successHat = require("../../../../icons/generated/all/illustration_success-hat.cjs");
const illustration_successCookie = require("../../../../icons/generated/all/illustration_success-cookie.cjs");
const illustration_successCheck = require("../../../../icons/generated/all/illustration_success-check.cjs");
const illustration_successCactus = require("../../../../icons/generated/all/illustration_success-cactus.cjs");
const illustration_successBirding = require("../../../../icons/generated/all/illustration_success-birding.cjs");
const illustration_emptyWrite = require("../../../../icons/generated/all/illustration_empty-write.cjs");
const illustration_emptyWork = require("../../../../icons/generated/all/illustration_empty-work.cjs");
const illustration_emptySand = require("../../../../icons/generated/all/illustration_empty-sand.cjs");
const illustration_emptyScribe = require("../../../../icons/generated/all/illustration_empty-scribe.cjs");
const illustration_emptyPlane = require("../../../../icons/generated/all/illustration_empty-plane.cjs");
const illustration_emptyPainting = require("../../../../icons/generated/all/illustration_empty-painting.cjs");
const illustration_emptyHat = require("../../../../icons/generated/all/illustration_empty-hat.cjs");
const illustration_emptyCookie = require("../../../../icons/generated/all/illustration_empty-cookie.cjs");
const illustration_emptyCactus = require("../../../../icons/generated/all/illustration_empty-cactus.cjs");
const illustration_emptyBirding = require("../../../../icons/generated/all/illustration_empty-birding.cjs");
const imageMap = {
  "empty-birding": illustration_emptyBirding.IllustrationEmptyBirding,
  "empty-cactus": illustration_emptyCactus.IllustrationEmptyCactus,
  "empty-cookie": illustration_emptyCookie.IllustrationEmptyCookie,
  "empty-hat": illustration_emptyHat.IllustrationEmptyHat,
  "empty-painting": illustration_emptyPainting.IllustrationEmptyPainting,
  "empty-plane": illustration_emptyPlane.IllustrationEmptyPlane,
  "empty-scribe": illustration_emptyScribe.IllustrationEmptyScribe,
  "empty-sand": illustration_emptySand.IllustrationEmptySand,
  "empty-work": illustration_emptyWork.IllustrationEmptyWork,
  "empty-write": illustration_emptyWrite.IllustrationEmptyWrite,
  "success-birding": illustration_successBirding.IllustrationSuccessBirding,
  "success-cactus": illustration_successCactus.IllustrationSuccessCactus,
  "success-check": illustration_successCheck.IllustrationSuccessCheck,
  "success-cookie": illustration_successCookie.IllustrationSuccessCookie,
  "success-hat": illustration_successHat.IllustrationSuccessHat,
  "success-painting": illustration_successPainting.IllustrationSuccessPainting,
  "success-plane": illustration_successPlane.IllustrationSuccessPlane,
  "success-sand": illustration_successSand.IllustrationSuccessSand,
  "success-scribe": illustration_successScribe.IllustrationSuccessScribe,
  "success-work": illustration_successWork.IllustrationSuccessWork,
  "success-write": illustration_successWrite.IllustrationSuccessWrite,
  "spot-celebrate": illustration_spotCelebrate.IllustrationSpotCelebrate,
  "spot-issue": illustration_spotIssue.IllustrationSpotIssue,
  "spot-chat-double": illustration_spotChatDouble.IllustrationSpotChatDouble,
  "spot-chat-check": illustration_spotChatCheck.IllustrationSpotChatCheck,
  "spot-doc-sparkles": illustration_spotDocSparkles.IllustrationSpotDocSparkles,
  "spot-doc-award": illustration_spotDocAward.IllustrationSpotDocAward,
  "spot-doc-magic": illustration_spotDocMagic.IllustrationSpotDocMagic,
  "spot-doc-check": illustration_spotDocCheck.IllustrationSpotDocCheck,
  "spot-doc-double-check": illustration_spotDocDoubleCheck.IllustrationSpotDocDoubleCheck,
  "spot-doc-100": illustration_spotDoc100.IllustrationSpotDoc100,
  "spot-chart-user": illustration_spotChartUser.IllustrationSpotChartUser,
  "spot-target": illustration_spotTarget.IllustrationSpotTarget,
  "spot-coin": illustration_spotCoin.IllustrationSpotCoin,
  "spot-doc-on-brand": illustration_spotDocOnBrand.IllustrationSpotDocOnBrand,
  "spot-chart-line-graph": illustration_spotChartLineGraph.IllustrationSpotChartLineGraph,
  "spot-plagiarism": illustration_spotPlagiarism.IllustrationSpotPlagiarism,
  "spot-detect-ai-text": illustration_spotDetectAiText.IllustrationSpotDetectAiText
};
const Illustration = React.forwardRef(
  function Illustration2({ accessibilityLabel, size = "medium", colorMode = "auto", type, className, ...rest }, forwardedRef) {
    const { mode } = ThemeProvider.useTheme();
    const internalRef = React.useRef(null);
    const ImageComponent = React.useMemo(() => {
      const component = imageMap[type];
      if (!component) {
        throw new Error(`Illustration: type "${type}" does not exist`);
      }
      return component;
    }, [type]);
    const getColorMode = React.useCallback(
      (colorMode2) => {
        if (!(colorMode2 === "light" || colorMode2 === "dark")) return null;
        return colorMode2;
      },
      [mode]
    );
    const resolvedColorMode = getColorMode(colorMode);
    React.useImperativeHandle(forwardedRef, () => internalRef.current);
    React.useEffect(() => {
      if (internalRef.current) {
        const svgElement = internalRef.current.querySelector("svg");
        if (svgElement) {
          svgElement.setAttribute("aria-label", accessibilityLabel || "");
          svgElement.setAttribute("aria-hidden", !accessibilityLabel ? "true" : "false");
          svgElement.setAttribute("role", "img");
        }
      }
    }, [accessibilityLabel]);
    const illustrationContent = /* @__PURE__ */ React.createElement(
      "div",
      {
        ref: internalRef,
        className: clsx_m.clsx("gds-illustration", `gds-illustration-${size}`, className),
        ...rest
      },
      /* @__PURE__ */ React.createElement(ImageComponent, null)
    );
    return resolvedColorMode ? /* @__PURE__ */ React.createElement(ThemeProvider.ThemeProvider, { mode: resolvedColorMode }, illustrationContent) : illustrationContent;
  }
);
exports.Illustration = Illustration;
