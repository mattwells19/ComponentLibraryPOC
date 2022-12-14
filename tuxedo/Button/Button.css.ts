import { style } from "@vanilla-extract/css";
import { colors, radii, space, sprinkles } from "../sprinkles.css";

export const baseStyle = sprinkles({
  borderRadius: "md",
  borderWidth: "px",
  borderStyle: "solid",
  borderColor: { default: "transparent", hover: "purple-400" },
  paddingX: "3",
  paddingY: "5",
  backgroundColor: "blackAlpha-300",
});

// export const baseStyle = style([
//   {
//     borderRadius: radii["md"],
//     border: "1px solid transparent",
//     padding: `${space["3"]} ${space["5"]}`,
//     fontSize: "1em",
//     fontWeight: 500,
//     fontFamily: "inherit",
//     backgroundColor: colors["blackAlpha-300"],
//     cursor: "pointer",
//     transition: "border-color 0.25s",
//     ":hover": {
//       borderColor: colors["purple-400"],
//     },
//     ":focus": {
//       outline: "4px auto -webkit-focus-ring-color",
//     },
//     ":focus-visible": {
//       outline: "4px auto -webkit-focus-ring-color",
//     },
//   },
// ]);
