import { Story, Meta } from "@storybook/react";
import Button, { ButtonProps } from "../components/Button";
import SearchIcon from "./icons/SearchIcon";

const icons = { "None": undefined, "SearchIcon": <SearchIcon fill="currentColor"/> };

const ButtonStory: Story<ButtonProps> = ({ ...args }) => (
  <Button {...args} />
);
export const Default = ButtonStory.bind({});
Default.args = {
  variant: "default",
  size: "default",
  disabled: false,
  isLoading: false,
  children: "Click me!",
  startIcon: undefined,
  endIcon: undefined
};
Default.storyName = "Button";

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      description: "Which of the 3 variants to render.",
      control: {
        type: "select",
        options: ["default", "primary", "action"],
      },
      table: {
        defaultValue: { summary: "default" },
      }
    },
    size: {
      description: "Which of the 3 sizes to render.",
      control: {
        type: "select",
        options: ["small", "default", "large"],
      },
      table: {
        defaultValue: { summary: "default" },
      }
    },
    isLoading: {
      description: "Shows the button in a loading state.",
      control: {
        type: "boolean"
      },
      table: {
        defaultValue: { summary: "false" },
      }
    },
    disabled: {
      description: "Shows the button in a disabled state.",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: { summary: "false" },
      }
    },
    startIcon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
        labels: {
          undefined: "None",
          SearchIcon: "Search Icon",
        }
      },
      table: {
        defaultValue: { summary: "None" },
      }
    },
    endIcon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
        labels: {
          undefined: "None",
          SearchIcon: "Search Icon",
        }
      },
      table: {
        defaultValue: { summary: "None" },
      }
    }
  }
} as Meta;