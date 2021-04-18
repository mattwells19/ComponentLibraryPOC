import styled from "@emotion/styled";
import { extractCssFromProps } from "../utils/CSSStyles";
import { ComponentStyles } from "./types";

export interface BoxProps extends React.CSSProperties {
  children: React.ReactNode;
}

const overrides: ComponentStyles<BoxProps> = (props) => ({ ...extractCssFromProps(props) });

const Box = styled.div(overrides);

export default Box;