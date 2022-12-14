import { ForwardedRef, forwardRef, ReactElement } from "react";
import { TuxedoComponentProps } from "../tux";
import Box from "../Box";
import { baseStyle } from "./Button.css";

interface ButtonProps extends TuxedoComponentProps<"button"> {}

const ButtonInner = (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>): ReactElement => {
  return <Box as="button" type="button" ref={ref} className={baseStyle} {...props} />;
};

const Button = forwardRef(ButtonInner);

export default Button;
