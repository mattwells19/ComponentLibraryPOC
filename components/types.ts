import { CSSObject, Theme } from "@emotion/react";

export type ComponentStyles<T> = (props: T & { theme: Theme }) => CSSObject;
