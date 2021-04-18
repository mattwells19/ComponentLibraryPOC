import styled from "@emotion/styled";
import React from "react";
import { ExtendedCSSProperties, extractCssFromProps } from "../utils/CSSStyles";
import { CSSInterpolation } from "@emotion/serialize";
import { ComponentStyles } from "./types";

export interface TextProps extends Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLParagraphElement | HTMLSpanElement>, HTMLParagraphElement | HTMLSpanElement>, "color">, ExtendedCSSProperties {
  as?: "p" | "span";
  sx?: CSSInterpolation;
}

const base: ComponentStyles<TextProps> = () => ({ margin: 0 });

const overrides: ComponentStyles<TextProps> = (props) => ({ ...extractCssFromProps(props) });

const Text = styled.span<TextProps>(base, overrides);

export default Text;