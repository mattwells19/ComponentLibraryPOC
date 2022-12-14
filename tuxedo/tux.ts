import type { ComponentPropsWithRef, ReactHTML } from "react";
import { colorProperties, responsiveProperties, Sprinkles } from "./sprinkles.css";

export type HTMLProps<T extends keyof ReactHTML> = Omit<ComponentPropsWithRef<T>, keyof Sprinkles>;

export type TuxedoComponentProps<T extends keyof ReactHTML> = HTMLProps<T> & Sprinkles;

export const styleProps = new Set(Object.keys({ ...colorProperties.styles, ...responsiveProperties.styles }));

export const isStyleProp = (prop: string) => styleProps.has(prop);

export function splitStyleProps<T extends keyof ReactHTML>(props: TuxedoComponentProps<T>): [HTMLProps<T>, Sprinkles] {
  return Object.entries(props).reduce(
    (prev, curr) => {
      const [key, value] = curr;

      if (isStyleProp(key)) {
        return [
          prev[0],
          {
            ...prev[1],
            [key]: value,
          },
        ];
      } else {
        return [
          {
            ...prev[0],
            [key]: value,
          },
          prev[1],
        ];
      }
    },
    [{} as HTMLProps<T>, {} as Sprinkles],
  );
}
