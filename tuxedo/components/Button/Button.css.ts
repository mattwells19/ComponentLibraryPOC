import { style } from "@vanilla-extract/css";
import { radii, colors } from "../../vars";

export const baseStyle = style([
  {
    borderRadius: radii["md"],
    border: "1px solid transparent",
    padding: "3px 6px",
    fontSize: "1em",
    fontWeight: 500,
    fontFamily: "inherit",
    backgroundColor: colors["blackAlpha-300"],
    cursor: "pointer",
    transition: "border-color 0.25s",
    ":hover": {
      borderColor: colors["purple-400"],
    },
    ":focus": {
      outline: "4px auto -webkit-focus-ring-color",
    },
    ":focus-visible": {
      outline: "4px auto -webkit-focus-ring-color",
    },
  },
]);