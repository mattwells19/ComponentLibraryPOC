import { StyledOptions } from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import { isValidCssProp } from "../utils/CSSStyles";

export const styledOptions: StyledOptions<any> = {
  shouldForwardProp: (propName) => isPropValid(propName as string) && !isValidCssProp(propName as string),
};
