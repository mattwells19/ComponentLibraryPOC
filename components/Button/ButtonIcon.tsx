import { ComponentProps, ComponentStyles } from "../types";
import { IconButtonProps } from "./IconButton";
import styled from "@emotion/styled";
import { styledOptions } from "../nova";

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

const ButtonIcon = styled("span", styledOptions)<ButtonIconProps>(iconBase, iconSizes);

export default ButtonIcon;
