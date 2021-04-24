import { Story, Meta } from "@storybook/react";
import Box from "../components/Box";
import Button from "../components/Button/Button";
import ButtonGroup, { ButtonGroupProps } from "../components/Button/ButtonGroup";

const ButtonGroupStory: Story<ButtonGroupProps> = ({ ...args }) => (
  <Box display="flex" flexDirection="column" gap={2}>
    <ButtonGroup {...args}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
      <Button>Button 4</Button>
    </ButtonGroup>
    <ButtonGroup {...args} variant="primary">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
      <Button>Button 4</Button>
    </ButtonGroup>
    <ButtonGroup {...args} variant="action">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
      <Button>Button 4</Button>
    </ButtonGroup>
  </Box>
);
export const Default = ButtonGroupStory.bind({});
Default.args = {
  size: "default",
  disabled: false,
  isLoading: false,
};
Default.storyName = "Button Group";

export default {
  title: 'Button Group',
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
  }
} as Meta;