import { nova } from "../common";
import { ComponentProps, ComponentStyles } from "../types";
import { IconButtonProps } from "./IconButton";

export type ButtonIconProps = ComponentProps<HTMLSpanElement> & Pick<IconButtonProps, "size">;

type ButtonIconStyles = ComponentStyles<ButtonIconProps>;

const iconBase: ButtonIconStyles = () => ({
  display: "flex"
});

const iconSizes: ButtonIconStyles = ({ size }) => {
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

const ButtonIcon = nova("span")<ButtonIconProps>(iconBase, iconSizes);

export default ButtonIcon;
