import nova from "./nova";
import { ComponentProps } from "./types";

const Box = nova<ComponentProps<HTMLDivElement>>("div");
Box.displayName = "Box";

export default Box;