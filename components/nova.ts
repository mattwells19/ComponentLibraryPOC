import { CSSObject, StyledOptions } from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import { extractCssFromProps, isValidCssProp } from "../utils/CSSStyles";
import styled from "@emotion/styled";
import { ComponentStyles, NovaComponent } from "./types";

export const styledOptions: StyledOptions<any> = {
  shouldForwardProp: (propName) => isPropValid(propName as string) && !isValidCssProp(propName as string),
};

export const componentOverrides = (props: any): CSSObject => ({ ...extractCssFromProps(props) });

export default function nova<T>(
  component: keyof JSX.IntrinsicElements | NovaComponent<T>,
  styles: Array<ComponentStyles<T>> = [],
  options: StyledOptions<any> = {},
): NovaComponent<T> {
  return styled(component as any, { ...styledOptions, ...options })<T>(...styles, componentOverrides);
}
