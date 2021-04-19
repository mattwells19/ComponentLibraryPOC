import { ReactElement, ButtonHTMLAttributes, Fragment } from "react";
import styled from "@emotion/styled";
import { extractCssFromProps } from "../utils/CSSStyles";
import { ComponentPropsExtended, ComponentStyles } from "./types";
import { useButtonGroupChildrenContext } from "./ButtonGroup";
import { css } from "@emotion/react";
import { CSSInterpolation } from "@emotion/serialize";
import { styledOptions } from "./common";
export interface ButtonProps extends ComponentPropsExtended<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: "default" | "action" | "primary";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  size?: "default" | "small" | "large";
  isLoading?: boolean;
  sx?: CSSInterpolation;
}

const base: ComponentStyles<ButtonProps> = ({ disabled, theme }) => ({
  borderRadius: "3px",
  minWidth: theme.spacing(20),
  maxWidth: theme.spacing(50),
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

const variant: ComponentStyles<ButtonProps> = ({ disabled, variant, theme }) => {
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

const sizes: ComponentStyles<ButtonProps> = ({ size, theme }) => {
  switch (size) {
    case "small":
      return {
        padding: theme.spacing(0.5, 1),
      };
    case "large":
      return {
        padding: theme.spacing(2, 4),
      };
    default:
      return {
        padding: theme.spacing(1, 2),
      }
  }
}

const disabled: ComponentStyles<ButtonProps> = ({ disabled }) => (
  !disabled ? {} : {
    opacity: 0.4,
    cursor: "not-allowed",
  }
)

const overrides: ComponentStyles<ButtonProps> = (props) => ({ ...extractCssFromProps(props) });

export const StyledButton = styled("button", styledOptions)<ButtonProps>(
  base,
  variant,
  sizes,
  disabled,
  overrides
);

const StyledIcon = styled("span", styledOptions)({
  display: "flex",
  width: "18px",
});

const StyledButtonLabel = styled("span", styledOptions)<Pick<ButtonProps, "size">>(({ theme, size }) => {
  let gap = theme.spacing(1);
  switch (size) {
    case "small": gap = theme.spacing(0); break;
    case "large": gap = theme.spacing(3); break;
  }

  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    gap,
  }
});

const Button: React.FC<ButtonProps> = ({
  startIcon,
  endIcon,
  children,
  isLoading,
  disabled,
  sx,
  ...props
}) => {
  const { size } = props;
  const groupProps = useButtonGroupChildrenContext();
  
  return (
    <StyledButton
      {...groupProps}
      {...props}
      css={css(groupProps.sx, sx)}
      disabled={(isLoading ?? groupProps.isLoading) || (disabled ?? groupProps.disabled)}
    >
      <StyledButtonLabel size={size ?? groupProps.size}>
        {(isLoading || groupProps.isLoading) && "Loading..."}
        {!isLoading && !groupProps.isLoading && (
          <Fragment>
            {startIcon && <StyledIcon>{startIcon}</StyledIcon>}
            {children}
            {endIcon && <StyledIcon>{endIcon}</StyledIcon>}
          </Fragment>
        )}
      </StyledButtonLabel>
    </StyledButton>
  );
};

export default Button;
