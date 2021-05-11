import { ButtonHTMLAttributes } from "react";
import { ComponentPropsExtended, ComponentStyles } from "../types";
import { useButtonGroupChildrenContext } from "./ButtonGroup";
import {StyledButton} from "./Button";
import ButtonIcon from "./ButtonIcon";
import nova from "../nova";

export interface IconButtonProps extends ComponentPropsExtended<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: "default" | "action" | "primary";
  size?: "default" | "small" | "large";
  isLoading?: boolean;
}

type IconButtonStyles = ComponentStyles<IconButtonProps>;

const base: IconButtonStyles = () => ({
  maxWidth: "unset",
  minWidth: "unset",
});

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

export const StyledIconButton = nova<IconButtonProps>(StyledButton, [base, sizes]);

const IconButton: React.FC<IconButtonProps> = ({
  children,
  isLoading,
  disabled,
  css: customCss,
  ...props
}) => {
  const { size } = props;
  const groupProps = useButtonGroupChildrenContext();
  
  return (
    <StyledIconButton
      {...groupProps}
      {...props}
      css={[groupProps.css, customCss]}
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
