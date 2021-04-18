import { Story, Meta } from "@storybook/react";
import Box from "../components/Box";
import Button, { ButtonProps } from "../components/Button";
import SearchIcon from "./icons/SearchIcon";

const icons = { "None": undefined, "SearchIcon": <SearchIcon fill="currentColor"/> };

const ButtonStory: Story<ButtonProps> = ({ ...args }) => (
  <Box as="main" display="flex" alignItems="flex-start" gap={2}>
    <Button {...args} variant="default">Default</Button>
    <Button {...args} variant="action">Action</Button>
    <Button {...args} variant="primary">Primary</Button>
  </Box>
);
export const Default = ButtonStory.bind({});
Default.args = {
  size: "default",
  disabled: false,
  isLoading: false,
  startIcon: undefined,
  endIcon: undefined,
};
Default.storyName = "Button";

export default {
  title: 'Button',
  argTypes: {
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