import { createElement, forwardRef, ReactElement } from "react";
import { TuxedoComponentProps, splitStyleProps, mergeClassNames } from "../../tux";
import { sprinkles } from "../../sprinkles.css";
import { baseStyle } from "./Text.css";

export type TextProps =
  | ({ as?: undefined } & TuxedoComponentProps<"p">)
  | ({ as: "a" } & TuxedoComponentProps<"a">)
  | ({ as: "abbr" } & TuxedoComponentProps<"abbr">)
  | ({ as: "address" } & TuxedoComponentProps<"address">)
  | ({ as: "b" } & TuxedoComponentProps<"b">)
  | ({ as: "blockquote" } & TuxedoComponentProps<"blockquote">)
  | ({ as: "caption" } & TuxedoComponentProps<"caption">)
  | ({ as: "cite" } & TuxedoComponentProps<"cite">)
  | ({ as: "code" } & TuxedoComponentProps<"code">)
  | ({ as: "data" } & TuxedoComponentProps<"data">)
  | ({ as: "dd" } & TuxedoComponentProps<"dd">)
  | ({ as: "del" } & TuxedoComponentProps<"del">)
  | ({ as: "dl" } & TuxedoComponentProps<"dl">)
  | ({ as: "dt" } & TuxedoComponentProps<"dt">)
  | ({ as: "em" } & TuxedoComponentProps<"em">)
  | ({ as: "figcaption" } & TuxedoComponentProps<"figcaption">)
  | ({ as: "h1" } & TuxedoComponentProps<"h1">)
  | ({ as: "h2" } & TuxedoComponentProps<"h2">)
  | ({ as: "h3" } & TuxedoComponentProps<"h3">)
  | ({ as: "h4" } & TuxedoComponentProps<"h4">)
  | ({ as: "h5" } & TuxedoComponentProps<"h5">)
  | ({ as: "h6" } & TuxedoComponentProps<"h6">)
  | ({ as: "i" } & TuxedoComponentProps<"i">)
  | ({ as: "ins" } & TuxedoComponentProps<"ins">)
  | ({ as: "kbd" } & TuxedoComponentProps<"kbd">)
  | ({ as: "label" } & TuxedoComponentProps<"label">)
  | ({ as: "legend" } & TuxedoComponentProps<"legend">)
  | ({ as: "mark" } & TuxedoComponentProps<"mark">)
  | ({ as: "option" } & TuxedoComponentProps<"option">)
  | ({ as: "output" } & TuxedoComponentProps<"output">)
  | ({ as: "p" } & TuxedoComponentProps<"p">)
  | ({ as: "pre" } & TuxedoComponentProps<"pre">)
  | ({ as: "q" } & TuxedoComponentProps<"q">)
  | ({ as: "rp" } & TuxedoComponentProps<"rp">)
  | ({ as: "rt" } & TuxedoComponentProps<"rt">)
  | ({ as: "ruby" } & TuxedoComponentProps<"ruby">)
  | ({ as: "s" } & TuxedoComponentProps<"s">)
  | ({ as: "samp" } & TuxedoComponentProps<"samp">)
  | ({ as: "small" } & TuxedoComponentProps<"small">)
  | ({ as: "span" } & TuxedoComponentProps<"span">)
  | ({ as: "strong" } & TuxedoComponentProps<"strong">)
  | ({ as: "sub" } & TuxedoComponentProps<"sub">)
  | ({ as: "summary" } & TuxedoComponentProps<"summary">)
  | ({ as: "sup" } & TuxedoComponentProps<"sup">)
  | ({ as: "time" } & TuxedoComponentProps<"time">)
  | ({ as: "u" } & TuxedoComponentProps<"u">);

const Box = forwardRef<HTMLElement, TextProps>(({ as = "p", children, className, ...props }, ref): ReactElement => {
  const [elementProps, sprinkleProps, styleProps] = splitStyleProps(props);

  return createElement(
    as,
    {
      ...elementProps,
      className: mergeClassNames(baseStyle, className, sprinkles(sprinkleProps)),
      style: styleProps,
      ref,
    },
    children,
  );
});

export default Box;
