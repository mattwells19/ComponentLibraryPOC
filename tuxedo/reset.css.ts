import { globalStyle } from "@vanilla-extract/css";

/**
 * Credit: Adapted from Chakra-UI's css-reset
 * https://github.com/chakra-ui/chakra-ui/blob/6db9fa2ef8f6ed3df88a603eab8202b270f176fe/packages/components/css-reset/src/css-reset.tsx
 */

globalStyle("html", {
  lineHeight: 1.5,
  WebkitTextSizeAdjust: "100%",
  fontFamily: "system-ui, sans-serif",
  WebkitFontSmoothing: "antialiased",
  textRendering: "optimizeLegibility",
  MozOsxFontSmoothing: "grayscale",
  touchAction: "manipulation",
});

globalStyle("body", {
  position: "relative",
  minHeight: "100%",
  fontFeatureSettings: "kern",
});

globalStyle("*, *::before, *::after", {
  borderWidth: 0,
  borderStyle: "solid",
  boxSizing: "border-box",
});

globalStyle("main", {
  display: "block",
});

globalStyle("hr", {
  borderTopWidth: "1px",
  boxSizing: "content-box",
  height: "0",
  overflow: "visible",
});

globalStyle("pre, code, kbd, samp", {
  fontFamily: "SFMonoRegular,  Menlo, Monaco, Consolas, monospace",
  fontSize: "1em",
});

globalStyle("a", {
  backgroundColor: "transparent",
  color: "inherit",
  textDecoration: "inherit",
});

globalStyle("abbr[title]", {
  borderBottom: "none",
  textDecoration: "underline",
  WebkitTextDecorationLine: "underline",
  WebkitTextDecorationStyle: "dotted",
});

globalStyle("b, strong", {
  fontWeight: "bold",
});

globalStyle("small", {
  fontSize: "80%",
});

globalStyle("sub, sup", {
  fontSize: "75%",
  lineHeight: "0",
  position: "relative",
  verticalAlign: "baseline",
});

globalStyle("sub", {
  bottom: "0.25em",
});

globalStyle("sup", {
  top: "0.5em",
});

globalStyle("img", {
  borderStyle: "none",
});

globalStyle("button, input, optgroup, select, textarea", {
  fontFamily: "inherit",
  fontSize: "100%",
  lineHeight: "1.15",
  margin: "0",
});

globalStyle("button, input", {
  overflow: "visible",
});

globalStyle("button, select", {
  textTransform: "none",
});

globalStyle(
  'button::MozFocusInner, [type="button"]::MozFocusInner, [type="reset"]::MozFocusInner, [type="submit"]::MozFocusInner',
  {
    borderStyle: "none",
    padding: 0,
  },
);

globalStyle("fieldset", {
  padding: "0.35em 0.75em 0.625em",
});

globalStyle("legend", {
  boxSizing: "border-box",
  color: "inherit",
  display: "table",
  maxWidth: "100%",
  padding: "0",
  whiteSpace: "normal",
});

globalStyle("progress", {
  verticalAlign: "baseline",
});

globalStyle("textarea", {
  overflow: "auto",
});

globalStyle('[type="checkbox"], [type="radio"]', {
  boxSizing: "border-box",
  padding: "0",
});

globalStyle('[type="number"]::WebkitInnerSpinButton, [type="number"]::WebkitOuterSpinButton', {
  WebkitAppearance: "none",
});

globalStyle('input[type="number"]', {
  MozAppearance: "textfield",
});

globalStyle('[type="search"]', {
  WebkitAppearance: "textfield",
  outlineOffset: "2px",
});

globalStyle('[type="search"]::WebkitSearchDecoration', {
  WebkitAppearance: "none",
});

globalStyle("::WebkitFileUploadButton", {
  WebkitAppearance: "button",
  font: "inherit",
});

globalStyle("details", {
  display: "block",
});

globalStyle("summary", {
  display: "listItem",
});

globalStyle("template", {
  display: "none",
});

globalStyle("[hidden]", {
  display: "none !important",
});

globalStyle("body, blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre", {
  margin: 0,
});

globalStyle("button", {
  background: "transparent",
  padding: 0,
});

globalStyle("fieldset", {
  margin: 0,
  padding: 0,
});

globalStyle("ol, ul", {
  margin: 0,
  padding: 0,
});

globalStyle("textarea", {
  resize: "vertical",
});

globalStyle('button, [role="button"]', {
  cursor: "pointer",
});

globalStyle("button::MozFocusInner", {
  border: "0 !important",
});

globalStyle("table", {
  borderCollapse: "collapse",
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  fontSize: "inherit",
  fontWeight: "inherit",
});

globalStyle("button, input, optgroup, select, textarea", {
  padding: 0,
  lineHeight: "inherit",
  color: "inherit",
});

globalStyle("img, svg, video, canvas, audio, iframe, embed, object", {
  display: "block",
});

globalStyle("img, video", {
  maxWidth: "100%",
  height: "auto",
});

globalStyle("select::MsExpand", {
  display: "none",
});
