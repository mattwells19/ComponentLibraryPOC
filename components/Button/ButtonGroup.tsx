import { ButtonProps } from "./Button";
import React from "react";
import styled from "@emotion/styled";
import Box from "../Box";
import { css } from "@emotion/react";

export type ButtonGroupProps = Exclude<ButtonProps, "startIcon" | "endIcon">;

export const StyledButtonGroup = styled(Box)({
  gap: 0,
  display: "flex",
});

const ButtonGroupChildrenContext = React.createContext<Partial<ButtonProps>>({});
ButtonGroupChildrenContext.displayName = "ButtonGroupChildrenContext";
export const useButtonGroupChildrenContext = (): Partial<ButtonProps> => React.useContext(ButtonGroupChildrenContext);

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, ...props }) => {
  const childrenStyles = css({
    "&:not(:first-of-type):not(:last-of-type)": {
      borderRadius: 0,
    },
    "&:first-of-type": {
      borderRadius: "3px 0px 0px 3px",
      borderRight: "none",
    },
    "&:last-of-type": {
      borderRadius: "0px 3px 3px 0px",
      borderLeft: "none",
    },
  });

  return (
    <ButtonGroupChildrenContext.Provider value={{ 
      ...props,
      css: childrenStyles,
    }}>
      <StyledButtonGroup>
        {children}
      </StyledButtonGroup>
    </ButtonGroupChildrenContext.Provider>
  )
}
ButtonGroup.displayName = "ButtonGroup";

export default ButtonGroup;
