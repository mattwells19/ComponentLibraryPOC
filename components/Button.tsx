import * as React from "react";
import { Theme } from "@emotion/react";
import styled, { CSSObject } from "@emotion/styled";

export interface ButtonComponentProps {
  variant?: "default" | "action" | "primary";
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "default" | "small" | "large";
  isLoading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

export interface ButtonProps extends ButtonComponentProps, Omit<React.CSSProperties, "translate"> {}

type ButtonStyles = (props: ButtonProps & { theme: Theme }) => CSSObject;

const base: ButtonStyles = () => ({
  border: "none",
  borderRadius: "3px",
  minWidth: "100px",
  maxWidth: "250px",
  transition: "all ease 100ms",
  cursor: "pointer",
  lineHeight: "18px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:active": {
    transform: "scale(0.98)",
    boxShadow: "inset 0 3px 5px rgb(0 0 0 / 13%)"
  },
  "&:focus-visible": {
    boxShadow: "0px 0px 0px 2px rgb(0 196 210 / 50%)",
    outline: "none"
  }
});

const variant: ButtonStyles = ({ variant, theme }) => {
  switch (variant) {
    case "action":
      return {
        backgroundColor: theme.palette.background.transparent.main,
        color: theme.palette.active.main,
        "&:hover:not(:disabled)": {
          backgroundColor: theme.palette.background.transparent.hover
        }
      };
    case "primary":
      return {
        backgroundColor: theme.palette.active.main,
        color: "#fff",
        fontWeight: 600,
        "&:hover:not(:disabled)": {
          backgroundColor: theme.palette.active.hover
        },
        "&:active": {
          backgroundColor: theme.palette.active.pressed
        }
      };
    default:
      return {
        border: `1px solid ${theme.palette.line.default}`,
        backgroundColor: theme.palette.background.transparent.main,
        color: theme.palette.active.main,
        "&:hover:not(:disabled)": {
          backgroundColor: theme.palette.background.transparent.hover,
          borderColor: "#cbcbcb"
        },
        "&:active": {
          borderColor: "#bababa"
        }
      };
  }
};

const sizes: ButtonStyles = ({ size, theme }) => {
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

const disabled: ButtonStyles = ({ disabled }) => (
  !disabled ? {} : {
    opacity: 0.4,
    cursor: "not-allowed",
  }
)

const overrides: ButtonStyles = ({
  variant,
  size,
  children,
  theme,
  endIcon,
  startIcon,
  onClick,
  ...props
}) => {
  return ({
    ...props
  });
};

const StyledButton = styled.button<ButtonProps>(
  base,
  variant,
  sizes,
  disabled,
  overrides
);

const StyledIcon = styled.span({
  display: "flex",
  width: "18px",
});

const StyledButtonLabel = styled.span<Pick<ButtonComponentProps, "size">>(({ theme, size }) => {
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
  variant = "default",
  size = "default",
  isLoading = false,
  disabled = false,
  ...props
}) => {
  return (
    <StyledButton size={size} variant={variant} {...props} disabled={isLoading || disabled}>
      <StyledButtonLabel size={size}>
        {isLoading && "Loading..."}
        {!isLoading && (
          <>
            {startIcon && <StyledIcon>{startIcon}</StyledIcon>}
            {children}
            {endIcon && <StyledIcon>{endIcon}</StyledIcon>}
          </>
        )}
      </StyledButtonLabel>
    </StyledButton>
  );
};

export default Button;
