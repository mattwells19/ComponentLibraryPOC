import { ExtendedCSSProperties, extractCssFromProps } from "../utils/CSSStyles";
import nova from "./common";
import { forwardRef, PropsWithChildren } from "react";
import { ComponentProps } from "./types";
import { CSSInterpolation } from "@emotion/serialize";

export type BoxProps = PropsWithChildren<ExtendedCSSProperties & ComponentProps<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements, sx?: CSSInterpolation }>;

const StyledBox = nova("div")<ExtendedCSSProperties>((props) => ({ ...extractCssFromProps(props) }));

const Box = forwardRef<HTMLDivElement, BoxProps>(({ sx, ...props }, innerRef) => <StyledBox ref={innerRef} css={sx} {...props} />);
Box.displayName = "Box";

export default Box;