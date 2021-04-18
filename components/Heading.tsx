import styled from "@emotion/styled";
import React from "react";
import { ExtendedCSSProperties, extractCssFromProps } from "../utils/CSSStyles";
import { CSSInterpolation } from "@emotion/serialize";
import { ComponentStyles } from "./types";

export interface HeadingProps extends Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "color">, ExtendedCSSProperties {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  sx?: CSSInterpolation;
}

const base: ComponentStyles<HeadingProps> = () => ({ margin: 0 });

const overrides: ComponentStyles<HeadingProps> = (props) => ({ ...extractCssFromProps(props) });

const Heading = styled.h1<HeadingProps>(base, overrides);

export default Heading;