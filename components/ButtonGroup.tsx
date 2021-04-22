import { ButtonProps } from "./Button";
import Box from "./Box";
import React from "react";

export type ButtonGroupProps = Exclude<ButtonProps, "startIcon" | "endIcon">;

const ButtonGroupChildrenContext = React.createContext<Partial<ButtonProps>>({});
ButtonGroupChildrenContext.displayName = "ButtonGroupChildrenContext";
export const useButtonGroupChildrenContext = (): Partial<ButtonProps> => React.useContext(ButtonGroupChildrenContext);

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, ...props }) => {
  const childrenStyles = {
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
  };

  return (
    <ButtonGroupChildrenContext.Provider value={{ 
      ...props,
      sx: childrenStyles,
    }}>
      <Box display="flex" gap={0}>
        {children}
      </Box>
    </ButtonGroupChildrenContext.Provider>
  )
}
ButtonGroup.displayName = "ButtonGroup";

export default ButtonGroup;
