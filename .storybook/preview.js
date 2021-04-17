export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-emotion-theme";
import theme from "../styles/theme";

addDecorator(withThemesProvider([theme]));
