import { ComponentProps } from "./types";
import nova from "./nova";

export interface HeadingProps extends ComponentProps<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = nova<HeadingProps>("h1", [{ margin: 0 }]);
Heading.displayName = "Heading";

export default Heading;