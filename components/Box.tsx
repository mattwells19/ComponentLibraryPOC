import styled from "@emotion/styled";
import { ExtendedCSSProperties, extractCssFromProps } from "../utils/CSSStyles";
import { styledOptions } from "./common";

const Box = styled("div", styledOptions)<ExtendedCSSProperties>((props) => ({ ...extractCssFromProps(props) }));
Box.displayName = "Box";

export default Box;