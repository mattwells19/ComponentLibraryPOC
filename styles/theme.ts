import { Theme } from "@emotion/react";

const theme: Theme = {
  name: "theme",
  palette: {
    background: {
      transparent: {
        main: "transparent",
        hover: "rgba(17,17,17,.05)",
      },
    },
    active: {
      main: "#0079aa",
      hover: "#006f9d",
      pressed: "#004d6d",
    },
    selected: {
      main: "rgba(0, 196, 210, 0.1)",
      hover: "rgba(0, 196, 210, 0.2)",
    },
    line: {
      default: "#d5d5d5",
    },
  },
};

export default theme;
