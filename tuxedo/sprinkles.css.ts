import "./reset.css";
import "./components/Box/Box.css";
import "./components/Text/Text.css";
import "./components/Button/Button.css";

import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import * as vars from "./vars";

export const responsiveProperties = defineProperties({
  conditions: {
    base: {},
    sm: { "@media": "screen and (min-width: 30em)" },
    md: { "@media": "screen and (min-width: 48em)" },
    lg: { "@media": "screen and (min-width: 62em)" },
    xl: { "@media": "screen and (min-width: 80em)" },
    "2xl": { "@media": "screen and (min-width: 96em)" },
    default: {},
    hover: { selector: "&:hover" },
  },
  defaultCondition: ["base", "default"],
  properties: {
    display: vars.display,
    flexDirection: vars.flexDirection,
    justifyContent: vars.justifyContent,
    alignItems: vars.alignItems,

    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,

    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,

    gap: vars.space,

    borderRadius: vars.radii,
    borderWidth: vars.space,
    borderStyle: vars.borderStyle,

    width: vars.space,
    height: vars.space,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],

    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],

    placeItems: ["justifyContent", "alignItems"],

    boxSize: ["width", "height"],
  },
});

export const colorProperties = defineProperties({
  conditions: {
    default: {},
    hover: { selector: "&:hover" },
  },
  defaultCondition: "default",
  properties: {
    color: vars.colors,
    background: vars.colors,
    backgroundColor: vars.colors,
    borderColor: vars.colors,
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
