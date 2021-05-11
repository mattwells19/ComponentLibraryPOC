import { ComponentProps } from "./types";
import nova from "./nova";

export interface TextProps extends ComponentProps<HTMLParagraphElement | HTMLSpanElement> {
  as?: "p" | "span";
}

const Text = nova<TextProps>("span", [{ margin: 0 }]);
Text.displayName = "Text";

export default Text;