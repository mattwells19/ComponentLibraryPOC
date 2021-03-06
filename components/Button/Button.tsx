import { ReactElement, ButtonHTMLAttributes, Fragment } from "react";
import { ComponentPropsExtended, ComponentStyles } from "../types";
import { useButtonGroupChildrenContext } from "./ButtonGroup";
import nova from "../nova";
import ButtonIcon from "./ButtonIcon";

export interface ButtonProps extends ComponentPropsExtended<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: "default" | "action" | "primary";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  size?: "default" | "small" | "large";
  isLoading?: boolean;
}

type ButtonStyles = ComponentStyles<ButtonProps>;

const base: ButtonStyles = ({ disabled, theme }) => ({
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

const variant: ButtonStyles = ({ disabled, variant, theme }) => {
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
  disabled ? {
    opacity: 0.4,
    cursor: "not-allowed",
  } : {}
)

export const StyledButton = nova<ButtonProps>("button", [base, variant, sizes, disabled]);

const StyledButtonLabel = nova<Pick<ButtonProps, "size">>("span", [{
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  width: "100%",
}]);

const Button: React.FC<ButtonProps> = ({
  startIcon,
  endIcon,
  children,
  isLoading,
  disabled,
  css: customCss,
  ...props
}) => {
  const { size } = props;
  const groupProps = useButtonGroupChildrenContext();

  const evaluatedSize = size ?? groupProps.size;
  const isDisabled = (isLoading ?? groupProps.isLoading) || (disabled ?? groupProps.disabled);

  return (
    <StyledButton
      css={[groupProps.css, customCss]}
      {...groupProps}
      {...props}
      disabled={isDisabled}
    >
      <StyledButtonLabel size={evaluatedSize}>
        {(isLoading || groupProps.isLoading) && "Loading..."}
        {!isLoading && !groupProps.isLoading && (
          <Fragment>
            {startIcon && <ButtonIcon size={evaluatedSize}>{startIcon}</ButtonIcon>}
            {children}
            {endIcon && <ButtonIcon size={evaluatedSize}>{endIcon}</ButtonIcon>}
          </Fragment>
        )}
      </StyledButtonLabel>
    </StyledButton>
  );
};
Button.displayName = "Button";

export default Button;
