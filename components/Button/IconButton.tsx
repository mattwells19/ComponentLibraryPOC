import { ButtonHTMLAttributes } from "react";
import { extractCssFromProps } from "../../utils/CSSStyles";
import { ComponentPropsExtended, ComponentStyles } from "../types";
import { useButtonGroupChildrenContext } from "./ButtonGroup";
import { css } from "@emotion/react";
import { CSSInterpolation } from "@emotion/serialize";
import { nova } from "../common";
import ButtonIcon from "./ButtonIcon";

export interface IconButtonProps extends ComponentPropsExtended<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: "default" | "action" | "primary";
  size?: "default" | "small" | "large";
  isLoading?: boolean;
  sx?: CSSInterpolation;
}

type IconButtonStyles = ComponentStyles<IconButtonProps>;

const base: IconButtonStyles = ({ disabled }) => ({
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

const variant: IconButtonStyles = ({ disabled, variant, theme }) => {
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

const sizes: IconButtonStyles = ({ size, theme }) => {
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

const disabled: IconButtonStyles = ({ disabled }) => (
  disabled ? {
    opacity: 0.4,
    cursor: "not-allowed",
  }: {}
)

const overrides: IconButtonStyles = (props) => ({ ...extractCssFromProps(props) });

export const StyledIconButton = nova("button")<IconButtonProps>(
  base,
  variant,
  sizes,
  disabled,
  overrides
);

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
      <ButtonIcon size={groupProps.size ?? size}>
        {(isLoading || groupProps.isLoading) && "..."}
        {!isLoading && !groupProps.isLoading && (
          children
        )}
      </ButtonIcon>
    </StyledIconButton>
  );
};
IconButton.displayName = "IconButton";

export default IconButton;
