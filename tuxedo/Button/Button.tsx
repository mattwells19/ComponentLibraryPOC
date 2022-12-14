import { forwardRef, ReactElement } from "react";
import { mergeClassNames, TuxedoComponentProps } from "../tux";
import Box from "../Box";
import { baseStyle } from "./Button.css";

interface ButtonProps extends TuxedoComponentProps<"button"> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref): ReactElement => {
  return <Box as="button" type="button" ref={ref} className={mergeClassNames(className, baseStyle)} {...props} />;
});

export default Button;
