import "@emotion/react";

interface IColor {
  main?: string;
  hover?: string;
  pressed?: string;
}

declare module "@emotion/react" {
  export interface Theme {
    name: string;
    palette: {
      active: IColor;
      background: {
        transparent: IColor;
      };
      selected: IColor;
      line: {
        default: string;
      };
    };
    spacing: (...args: number[]) => string;
  }
}
