import { CSSProperties } from "react";
import theme from "../styles/theme";

export interface ExtendedCSSProperties extends Omit<CSSProperties, "translate"> {
  marginY?: string | number;
  marginX?: string | number;
  paddingX?: string | number;
  paddingY?: string | number;
}

const CSSExtensionStyles: Array<string> = ["marginY", "marginX", "paddingX", "paddingY"];

// Emotion takes care of the crossBrowser support, so only base properties are needed here.
const CSSStyles: Array<string> = [
  "alignContent",
  "alignItems",
  "alignSelf",
  "all",
  "animation",
  "animationDelay",
  "animationDirection",
  "animationDuration",
  "animationFillMode",
  "animationIterationCount",
  "animationName",
  "animationPlayState",
  "animationTimingFunction",
  "backfaceVisibility",
  "background",
  "backgroundAttachment",
  "backgroundBlendMode",
  "backgroundClip",
  "backgroundColor",
  "backgroundImage",
  "backgroundOrigin",
  "backgroundPosition",
  "backgroundRepeat",
  "backgroundSize",
  "border",
  "borderBottom",
  "borderBottomColor",
  "borderBottomLeftRadius",
  "borderBottomRightRadius",
  "borderBottomStyle",
  "borderBottomWidth",
  "borderCollapse",
  "borderColor",
  "borderImage",
  "borderImageOutset",
  "borderImageRepeat",
  "borderImageSlice",
  "borderImageSource",
  "borderImageWidth",
  "borderLeft",
  "borderLeftColor",
  "borderLeftStyle",
  "borderLeftWidth",
  "borderRadius",
  "borderRight",
  "borderRightColor",
  "borderRightStyle",
  "borderRightWidth",
  "borderSpacing",
  "borderStyle",
  "borderTop",
  "borderTopColor",
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderTopStyle",
  "borderTopWidth",
  "borderWidth",
  "bottom",
  "boxDecorationBreak",
  "boxShadow",
  "boxSizing",
  "breakAfter",
  "breakBefore",
  "breakInside",
  "captionSide",
  "caretColor",
  "@charset",
  "clear",
  "clip",
  "clipPath",
  "color",
  "columnCount",
  "columnFill",
  "columnGap",
  "columnRule",
  "columnRuleColor",
  "columnRuleStyle",
  "columnRuleWidth",
  "columnSpan",
  "columnWidth",
  "columns",
  "content",
  "counterIncrement",
  "counterReset",
  "cursor",
  "direction",
  "display",
  "emptyCells",
  "filter",
  "flex",
  "flexBasis",
  "flexDirection",
  "flexFlow",
  "flexGrow",
  "flexShrink",
  "flexWrap",
  "float",
  "font",
  "@fontFace",
  "fontFamily",
  "fontFeatureSettings",
  "fontKerning",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontVariantCaps",
  "fontWeight",
  "gap",
  "grid",
  "gridArea",
  "gridAutoColumns",
  "gridAutoFlow",
  "gridAutoRows",
  "gridColumn",
  "gridColumnEnd",
  "gridColumnGap",
  "gridColumnStart",
  "gridGap",
  "gridRow",
  "gridRowEnd",
  "gridRowGap",
  "gridRowStart",
  "gridTemplate",
  "gridTemplateAreas",
  "gridTemplateColumns",
  "gridTemplateRows",
  "hangingPunctuation",
  "height",
  "hyphens",
  "@import",
  "isolation",
  "justifyContent",
  "@keyframes",
  "left",
  "letterSpacing",
  "lineHeight",
  "listStyle",
  "listStyleImage",
  "listStylePosition",
  "listStyleType",
  "margin",
  "marginBottom",
  "marginLeft",
  "marginRight",
  "marginTop",
  "maxHeight",
  "maxWidth",
  "@media",
  "minHeight",
  "minWidth",
  "mixBlendMode",
  "objectFit",
  "objectPosition",
  "opacity",
  "order",
  "outline",
  "outlineColor",
  "outlineOffset",
  "outlineStyle",
  "outlineWidth",
  "overflow",
  "overflowX",
  "overflowY",
  "padding",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  "pageBreakAfter",
  "pageBreakBefore",
  "pageBreakInside",
  "perspective",
  "perspectiveOrigin",
  "pointerEvents",
  "position",
  "quotes",
  "resize",
  "right",
  "rowGap",
  "scrollBehavior",
  "tabSize",
  "tableLayout",
  "textAlign",
  "textAlignLast",
  "textDecoration",
  "textDecorationColor",
  "textDecorationLine",
  "textDecorationStyle",
  "textIndent",
  "textJustify",
  "textOverflow",
  "textShadow",
  "textTransform",
  "top",
  "transform",
  "transformOrigin",
  "transformStyle",
  "transition",
  "transitionDelay",
  "transitionDuration",
  "transitionProperty",
  "transitionTimingFunction",
  "unicodeBidi",
  "userSelect",
  "verticalAlign",
  "visibility",
  "whiteSpace",
  "width",
  "wordBreak",
  "wordSpacing",
  "wordWrap",
  "writingMode",
  "zIndex",
];

/**
 * This function takes the key of a prop and returns whether that key is a valid CSS property.
 * @param prop The key of the prop to test.
 * @returns Whether the key passed in is a valid CSS property.
 */
export const isValidCssProp = (prop: string): prop is keyof ExtendedCSSProperties =>
  CSSStyles.includes(prop) || CSSExtensionStyles.includes(prop);

const transformExtension = (prop: string): Array<string> => {
  const direction = prop.slice(-1);
  const property = prop.slice(0, -1);
  const transformedProps = [];

  switch (direction) {
    case "X": {
      transformedProps.push(property.concat("Left"));
      transformedProps.push(property.concat("Right"));
      break;
    }
    case "Y": {
      transformedProps.push(property.concat("Top"));
      transformedProps.push(property.concat("Bottom"));
      break;
    }
  }

  return transformedProps as Array<keyof CSSProperties>;
};

/**
 * This function takes an object of props that has a mix of HTML attributes, custom component props, and CSS styles and
 * returns an object of just the CSS properties. Any CSS properties passed in as numbers will be evalutated using the
 * spacing function provided in the Theme object.
 * @param props The props passed to the element to separate the CSSProperties from.
 * @returns An object with just the CSSProperties from the props.
 */
export const extractCssFromProps = (props: { [x: string]: any }): CSSProperties => {
  const transformedProps: { [x: string]: string } = {};

  Object.entries(props).forEach(([key, value]) => {
    // auto evaluate numbers using the spacing function from the Theme object
    const evaluatedValue = isNaN(+value) ? value : theme.spacing(value);

    // if prop is an extension, expand to valid CSS props with values
    if (CSSExtensionStyles.includes(key)) {
      transformExtension(key).forEach((x) => {
        transformedProps[x] = evaluatedValue;
      });
    } else if (isValidCssProp(key)) {
      transformedProps[key] = evaluatedValue;
    }
  });

  return transformedProps;
};
