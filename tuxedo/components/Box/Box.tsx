import { createElement, forwardRef, ReactElement } from "react";
import { TuxedoComponentProps, splitStyleProps, mergeClassNames } from "../../tux";
import { baseStyle } from "./Box.css";
import { sprinkles } from "../../sprinkles.css";

// TODO: there _has_ to be a better way to do this
export type BoxProps =
  | ({ as?: undefined } & TuxedoComponentProps<"div">)
  | ({ as: "div" } & TuxedoComponentProps<"div">)
  | ({ as: "main" } & TuxedoComponentProps<"main">)
  | ({ as: "button" } & TuxedoComponentProps<"button">)
  | ({ as: "area" } & TuxedoComponentProps<"area">)
  | ({ as: "article" } & TuxedoComponentProps<"article">)
  | ({ as: "aside" } & TuxedoComponentProps<"aside">)
  | ({ as: "audio" } & TuxedoComponentProps<"audio">)
  | ({ as: "b" } & TuxedoComponentProps<"b">)
  | ({ as: "base" } & TuxedoComponentProps<"base">)
  | ({ as: "bdi" } & TuxedoComponentProps<"bdi">)
  | ({ as: "bdo" } & TuxedoComponentProps<"bdo">)
  | ({ as: "big" } & TuxedoComponentProps<"big">)
  | ({ as: "blockquote" } & TuxedoComponentProps<"blockquote">)
  | ({ as: "body" } & TuxedoComponentProps<"body">)
  | ({ as: "br" } & TuxedoComponentProps<"br">)
  | ({ as: "button" } & TuxedoComponentProps<"button">)
  | ({ as: "canvas" } & TuxedoComponentProps<"canvas">)
  | ({ as: "center" } & TuxedoComponentProps<"center">)
  | ({ as: "col" } & TuxedoComponentProps<"col">)
  | ({ as: "colgroup" } & TuxedoComponentProps<"colgroup">)
  | ({ as: "datalist" } & TuxedoComponentProps<"datalist">)
  | ({ as: "details" } & TuxedoComponentProps<"details">)
  | ({ as: "dfn" } & TuxedoComponentProps<"dfn">)
  | ({ as: "dialog" } & TuxedoComponentProps<"dialog">)
  | ({ as: "div" } & TuxedoComponentProps<"div">)
  | ({ as: "embed" } & TuxedoComponentProps<"embed">)
  | ({ as: "fieldset" } & TuxedoComponentProps<"fieldset">)
  | ({ as: "figure" } & TuxedoComponentProps<"figure">)
  | ({ as: "footer" } & TuxedoComponentProps<"footer">)
  | ({ as: "form" } & TuxedoComponentProps<"form">)
  | ({ as: "head" } & TuxedoComponentProps<"head">)
  | ({ as: "header" } & TuxedoComponentProps<"header">)
  | ({ as: "hgroup" } & TuxedoComponentProps<"hgroup">)
  | ({ as: "hr" } & TuxedoComponentProps<"hr">)
  | ({ as: "html" } & TuxedoComponentProps<"html">)
  | ({ as: "iframe" } & TuxedoComponentProps<"iframe">)
  | ({ as: "img" } & TuxedoComponentProps<"img">)
  | ({ as: "input" } & TuxedoComponentProps<"input">)
  | ({ as: "keygen" } & TuxedoComponentProps<"keygen">)
  | ({ as: "li" } & TuxedoComponentProps<"li">)
  | ({ as: "link" } & TuxedoComponentProps<"link">)
  | ({ as: "main" } & TuxedoComponentProps<"main">)
  | ({ as: "map" } & TuxedoComponentProps<"map">)
  | ({ as: "menu" } & TuxedoComponentProps<"menu">)
  | ({ as: "menuitem" } & TuxedoComponentProps<"menuitem">)
  | ({ as: "meta" } & TuxedoComponentProps<"meta">)
  | ({ as: "meter" } & TuxedoComponentProps<"meter">)
  | ({ as: "nav" } & TuxedoComponentProps<"nav">)
  | ({ as: "noscript" } & TuxedoComponentProps<"noscript">)
  | ({ as: "object" } & TuxedoComponentProps<"object">)
  | ({ as: "ol" } & TuxedoComponentProps<"ol">)
  | ({ as: "optgroup" } & TuxedoComponentProps<"optgroup">)
  | ({ as: "param" } & TuxedoComponentProps<"param">)
  | ({ as: "picture" } & TuxedoComponentProps<"picture">)
  | ({ as: "progress" } & TuxedoComponentProps<"progress">)
  | ({ as: "slot" } & TuxedoComponentProps<"slot">)
  | ({ as: "script" } & TuxedoComponentProps<"script">)
  | ({ as: "section" } & TuxedoComponentProps<"section">)
  | ({ as: "select" } & TuxedoComponentProps<"select">)
  | ({ as: "source" } & TuxedoComponentProps<"source">)
  | ({ as: "style" } & TuxedoComponentProps<"style">)
  | ({ as: "table" } & TuxedoComponentProps<"table">)
  | ({ as: "template" } & TuxedoComponentProps<"template">)
  | ({ as: "tbody" } & TuxedoComponentProps<"tbody">)
  | ({ as: "td" } & TuxedoComponentProps<"td">)
  | ({ as: "textarea" } & TuxedoComponentProps<"textarea">)
  | ({ as: "tfoot" } & TuxedoComponentProps<"tfoot">)
  | ({ as: "th" } & TuxedoComponentProps<"th">)
  | ({ as: "thead" } & TuxedoComponentProps<"thead">)
  | ({ as: "title" } & TuxedoComponentProps<"title">)
  | ({ as: "tr" } & TuxedoComponentProps<"tr">)
  | ({ as: "track" } & TuxedoComponentProps<"track">)
  | ({ as: "ul" } & TuxedoComponentProps<"ul">)
  | ({ as: "video" } & TuxedoComponentProps<"video">)
  | ({ as: "wbr" } & TuxedoComponentProps<"wbr">)
  | ({ as: "webview" } & TuxedoComponentProps<"webview">);

const Box = forwardRef<HTMLElement, BoxProps>(({ as = "div", children, className, ...props }, ref): ReactElement => {
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
