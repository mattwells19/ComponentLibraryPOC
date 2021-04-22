import { StyledOptions } from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import { isValidCssProp } from "../utils/CSSStyles";
import styled from "@emotion/styled";

export const styledOptions: StyledOptions<any> = {
  shouldForwardProp: (propName) => isPropValid(propName as string) && !isValidCssProp(propName as string),
};

const nova = (element: keyof JSX.IntrinsicElements, options?: StyledOptions<any>) => {
  return styled(element, { ...styledOptions, ...options });
};

export default nova;
