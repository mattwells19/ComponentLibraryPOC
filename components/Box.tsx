import { Theme } from "@emotion/react";
import styled, { CSSObject } from "@emotion/styled";

export interface BoxComponentProps {
  children: React.ReactNode;
}

export interface BoxProps extends BoxComponentProps, React.CSSProperties {}

type BoxStyles = (props: BoxProps & { theme: Theme }) => CSSObject;

const styles: BoxStyles = ({ theme, children, ...props }) => ({ ...props });

const Box = styled.div(styles);

export default Box;