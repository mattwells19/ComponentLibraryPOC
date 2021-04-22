import { ButtonHTMLAttributes } from "react";
import styled from "@emotion/styled";
import { extractCssFromProps } from "../utils/CSSStyles";
import { ComponentPropsExtended, ComponentStyles } from "./types";
import { useButtonGroupChildrenContext } from "./ButtonGroup";
import { css } from "@emotion/react";
import { CSSInterpolation } from "@emotion/serialize";
import { styledOptions } from "./common";

export interface IconButtonProps extends ComponentPropsExtended<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: "default" | "action" | "primary";
  size?: "default" | "small" | "large";
  isLoading?: boolean;
  sx?: CSSInterpolation;
}

const base: ComponentStyles<IconButtonProps> = ({ disabled, theme }) => ({
  borderRadius: "3px",
  transition: "all ease 100ms",
  cursor: "pointer",
  lineHeight: "18px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid",
  "&:active": disabled ? {} : 
  {
    transform: "scale(0.98)",
    boxShadow: "inset 0 3px 5px rgb(0 0 0 / 13%)"
  },
  "&:focus-visible": {
    boxShadow: "0px 0px 0px 2px rgb(0 196 210 / 50%)",
    outline: "none"
  }
});

const variant: ComponentStyles<IconButtonProps> = ({ disabled, variant, theme }) => {
  switch (variant) {
    case "action":
      return {
        backgroundColor: theme.palette.background.transparent.main,
        borderColor: theme.palette.background.transparent.main,
        color: theme.palette.active.main,
        "&:hover": disabled ? {} : 
        {
          backgroundColor: theme.palette.background.transparent.hover
        }
      };
    case "primary":
      return {
        backgroundColor: theme.palette.active.main,
        borderColor: theme.palette.active.main,
        color: "#fff",
        fontWeight: 600,
        "&:hover": disabled ? {} : 
        {
          backgroundColor: theme.palette.active.hover
        },
        "&:active": disabled ? {} : 
        {
          backgroundColor: theme.palette.active.pressed
        }
      };
    default:
      return {
        borderColor: theme.palette.line.default,
        backgroundColor: theme.palette.background.transparent.main,
        color: theme.palette.active.main,
        "&:hover": disabled ? {} : 
        {
          backgroundColor: theme.palette.background.transparent.hover,
          borderColor: "#cbcbcb"
        },
        "&:active": disabled ? {} : 
        {
          borderColor: "#bababa"
        }
      };
  }
};

const sizes: ComponentStyles<IconButtonProps> = ({ size, theme }) => {
  switch (size) {
    case "small":
      return {
        padding: theme.spacing(1.75),
      };
    case "large":
      return {
        padding: theme.spacing(2),
      };
    default:
      return {
        padding: theme.spacing(1.9),
      }
  }
}

const disabled: ComponentStyles<IconButtonProps> = ({ disabled }) => (
  !disabled ? {} : {
    opacity: 0.4,
    cursor: "not-allowed",
  }
)

const overrides: ComponentStyles<IconButtonProps> = (props) => ({ ...extractCssFromProps(props) });

export const StyledIconButton = styled("button", styledOptions)<IconButtonProps>(
  base,
  variant,
  sizes,
  disabled,
  overrides
);

const iconSizes: ComponentStyles<IconButtonProps> = ({ size, theme }) => {
  switch (size) {
    case "small":
      return {
        width: "0.75rem",
      };
    case "large":
      return {
        width: "1.3rem",
      };
    default:
      return {
        width: "1rem",
      }
  }
}

const StyledIcon = styled("span", styledOptions)({ display: "flex" }, iconSizes);

const IconButton: React.FC<IconButtonProps> = ({
  children,
  isLoading,
  disabled,
  sx,
  ...props
}) => {
  const { size } = props;
  const groupProps = useButtonGroupChildrenContext();
  
  return (
    <StyledIconButton
      {...groupProps}
      {...props}
      css={css(groupProps.sx, sx)}
      disabled={(isLoading ?? groupProps.isLoading) || (disabled ?? groupProps.disabled)}
    >
      <StyledIcon size={groupProps.size ?? size}>
        {(isLoading || groupProps.isLoading) && "..."}
        {!isLoading && !groupProps.isLoading && (
          children
        )}
      </StyledIcon>
    </StyledIconButton>
  );
};
IconButton.displayName = "IconButton";

export default IconButton;
