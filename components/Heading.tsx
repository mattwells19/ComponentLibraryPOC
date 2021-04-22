import { extractCssFromProps } from "../utils/CSSStyles";
import { CSSInterpolation } from "@emotion/serialize";
import { ComponentProps, ComponentStyles } from "./types";
import nova from "./common";

export interface HeadingProps extends ComponentProps<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  sx?: CSSInterpolation;
}

const base: ComponentStyles<HeadingProps> = () => ({ margin: 0 });

const overrides: ComponentStyles<HeadingProps> = (props) => ({ ...extractCssFromProps(props) });

const Heading = nova("h1")<HeadingProps>(base, overrides);
Heading.displayName = "Heading";

export default Heading;