import { StyledOptions } from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import { isValidCssProp } from "../utils/CSSStyles";
import styled from "@emotion/styled";

export const styledOptions: StyledOptions<any> = {
  shouldForwardProp: (propName) => isPropValid(propName as string) && !isValidCssProp(propName as string),
};

export const nova = (component: keyof JSX.IntrinsicElements, options?: StyledOptions<any>) =>
  styled(component, { ...styledOptions, ...options });
