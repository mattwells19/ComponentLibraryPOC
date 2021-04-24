import { extractCssFromProps } from "../utils/CSSStyles";
import { CSSInterpolation } from "@emotion/serialize";
import { ComponentProps, ComponentStyles } from "./types";
import { nova } from "./common";

export interface TextProps extends ComponentProps<HTMLParagraphElement | HTMLSpanElement> {
  as?: "p" | "span";
  sx?: CSSInterpolation;
}

const base: ComponentStyles<TextProps> = () => ({ margin: 0 });

const overrides: ComponentStyles<TextProps> = (props) => ({ ...extractCssFromProps(props) });

const Text = nova("span")<TextProps>(base, overrides);
Text.displayName = "Text";

export default Text;