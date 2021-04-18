import styled from "@emotion/styled";
import { ExtendedCSSProperties, extractCssFromProps } from "../utils/CSSStyles";

const Box = styled.div<ExtendedCSSProperties>((props) => ({ ...extractCssFromProps(props) }));

export default Box;