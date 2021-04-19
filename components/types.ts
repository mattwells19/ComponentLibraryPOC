import { CSSObject, Theme } from "@emotion/react";
import { ExtendedCSSProperties } from "../utils/CSSStyles";

export type ComponentStyles<T> = (props: T & { theme: Theme }) => CSSObject;

export type ComponentProps<T> = Omit<React.DetailedHTMLProps<React.HTMLAttributes<T>, T>, "color"> &
  ExtendedCSSProperties;

export type ComponentPropsExtended<T, G> = Omit<React.DetailedHTMLProps<T, G>, "color"> & ExtendedCSSProperties;
