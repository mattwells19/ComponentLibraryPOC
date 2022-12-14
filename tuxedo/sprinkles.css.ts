import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { space, radii, borderStyle, colors } from "./vars";
import "./Button/Button.css";

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
    display: ["none", "flex", "block", "inline", "grid"],
    flexDirection: ["row", "column", "row-reverse", "column-reverse"],
    justifyContent: ["stretch", "flex-start", "center", "flex-end", "space-around", "space-between"],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],

    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,

    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,

    gap: space,

    borderRadius: radii,
    borderWidth: space,
    borderStyle: borderStyle,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],

    margin: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    marginX: ["paddingLeft", "paddingRight"],
    marginY: ["paddingTop", "paddingBottom"],

    placeItems: ["justifyContent", "alignItems"],
  },
});

export const colorProperties = defineProperties({
  conditions: {
    // lightMode: {},
    // darkMode: { "@media": "(prefers-color-scheme: dark)" },
    default: {},
    hover: { selector: "&:hover" },
  },
  defaultCondition: "default",
  properties: {
    color: colors,
    background: colors,
    backgroundColor: colors,
    borderColor: colors,
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
