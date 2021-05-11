import { CSSObject, Theme } from "@emotion/react";
import { ExtendedCSSProperties } from "../utils/CSSStyles";
import { CSSInterpolation } from "@emotion/serialize";
import { StyledComponent } from "@emotion/styled";
import { LegacyRef, Ref } from "react";

export type ComponentStyles<T> = ((props: T & { theme: Theme }) => CSSObject) | CSSObject;

export type ComponentProps<T> = Omit<React.DetailedHTMLProps<React.HTMLAttributes<T>, T>, "color"> &
  ExtendedCSSProperties & { css?: CSSInterpolation; as?: keyof JSX.IntrinsicElements };

export type ComponentPropsExtended<T, G> = Omit<React.DetailedHTMLProps<T, G>, "color"> &
  ExtendedCSSProperties & { css?: CSSInterpolation; as?: keyof JSX.IntrinsicElements };

export type NovaComponent<T> = StyledComponent<T, {}, { ref?: Ref<any> | LegacyRef<any> | undefined }>;
