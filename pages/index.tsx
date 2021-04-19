import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import tomorrow from "../styles/tomorrow";
import { Box, Button, ButtonGroup, Heading } from "../components";
import { ButtonProps } from "../components/Button";
import { ButtonGroupProps } from "../components/ButtonGroup";
import SearchIcon from "../icons/SearchIcon";

function Home() {
  const [buttonProps, setButtonProps] = React.useState<ButtonProps>({ disabled: false, isLoading: false });
  const [buttonGroupProps, setButtonGroupProps] = React.useState<ButtonGroupProps>({ disabled: false, isLoading: false, variant: "default" });

  return (
    <Box display="flex" flexDirection="column" gap={10} maxWidth={125} marginX="auto" paddingY={10}>
      <Heading>Buttons</Heading>
      <Box id="Button">
        <Heading as="h2" marginBottom={2}>Basic</Heading>
        <Box display="flex" gap={3}>
          <Button {...buttonProps}>
            Default
          </Button>
          <Button {...buttonProps} variant="action">
            Action
          </Button>
          <Button {...buttonProps} variant="primary">
            Primary
          </Button>
          <Button
            {...buttonProps}
            variant="action"
            backgroundColor="purple"
            color="#ffff00"
            css={{ "&:hover:not(:disabled)": { backgroundColor: "blue" } }}
          >
            Custom
          </Button>
        </Box>
        <Box display="flex" gap={4} marginTop={2} width="fit-content">
          <Box as="label" display="block">
            <input
              type="checkbox"
              checked={buttonProps.isLoading}
              onChange={(e) => setButtonProps((prev) => ({...prev, isLoading: e.target.checked}))}
            />
            isLoading
          </Box>
          <Box as="label" display="block">
            <input
              type="checkbox"
              checked={buttonProps.disabled}
              onChange={(e) => setButtonProps((prev) => ({...prev, disabled: e.target.checked}))}
            />
            disabled
          </Box>
          <Box as="label">
            <input
              type="checkbox"
              checked={Boolean(buttonProps.startIcon)}
              onChange={(e) => setButtonProps((prev) => ({ ...prev, startIcon: e.target.checked ? <SearchIcon/> : undefined }))} 
            />
            startIcon
          </Box>
          <Box as="label">
            <input
              type="checkbox"
              checked={Boolean(buttonProps.endIcon)}
              onChange={(e) => setButtonProps((prev) => ({ ...prev, endIcon: e.target.checked ? <SearchIcon/> : undefined }))} 
            />
            endIcon
          </Box>
        </Box>
        <SyntaxHighlighter language="tsx" style={tomorrow}>
          {`<Box display="flex" gap={3}>
  <Button${buttonProps.isLoading ? " isLoading" : ""}${buttonProps.disabled ? " disabled" : ""}${Boolean(buttonProps.startIcon) ? " startIcon={<SearchIcon />}" : ""}${Boolean(buttonProps.endIcon) ? " endIcon={<SearchIcon />}" : ""}>
    Default
  </Button>
  <Button variant="action"${buttonProps.isLoading ? " isLoading" : ""}${buttonProps.disabled ? " disabled" : ""}${Boolean(buttonProps.startIcon) ? " startIcon={<SearchIcon />}" : ""}${Boolean(buttonProps.endIcon) ? " endIcon={<SearchIcon />}" : ""}>
    Action
  </Button>
  <Button variant="primary"${buttonProps.isLoading ? " isLoading" : ""}${buttonProps.disabled ? " disabled" : ""}${Boolean(buttonProps.startIcon) ? " startIcon={<SearchIcon />}" : ""}${Boolean(buttonProps.endIcon) ? " endIcon={<SearchIcon />}" : ""}>
    Primary
  </Button>
  {/* Customize your button with ease! */}
  <Button${buttonProps.isLoading ? "\n\tisLoading" : ""}${buttonProps.disabled ? "\n\tdisabled" : ""}${Boolean(buttonProps.startIcon) ? "\n\tstartIcon={<SearchIcon />}" : ""}${Boolean(buttonProps.endIcon) ? "\n\tendIcon={<SearchIcon />}" : ""}
    backgroundColor="purple"
    color="#ffff00"
    css={{ "&:hover:not(:disabled)": { backgroundColor: "blue" } }}
  >
    Custom
  </Button>
</Box>`}
        </SyntaxHighlighter>
      </Box>
      <Box id="ButtonGroup">
        <Heading as="h2" marginBottom={2}>Button Group</Heading>
        <ButtonGroup {...buttonGroupProps}>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
        <Box display="flex" gap={4} marginY={2} width="fit-content">
          <Box as="label" display="block">
            <input
              type="checkbox"
              checked={buttonGroupProps.isLoading}
              onChange={(e) => setButtonGroupProps((prev) => ({...prev, isLoading: e.target.checked}))}
            />
            isLoading
          </Box>
          <Box as="label" display="block">
            <input
              type="checkbox"
              checked={buttonGroupProps.disabled}
              onChange={(e) => setButtonGroupProps((prev) => ({...prev, disabled: e.target.checked}))}
            />
            disabled
          </Box>
          <Box as="label" display="block">
            Variant&nbsp;
            <select
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => (
                setButtonGroupProps((prev) => ({...prev, variant: e.target.value as "default" | "action" | "primary" }))
              )}
              value={buttonGroupProps.variant ?? "default"}
            >
              <option value="default">Default</option>
              <option value="action">Action</option>
              <option value="primary">Primary</option>
            </select>
          </Box>
        </Box>
        <SyntaxHighlighter language="tsx" style={tomorrow}>
          {`<ButtonGroup variant="${buttonGroupProps.variant}"${buttonGroupProps.isLoading ? " isLoading" : ""}${buttonGroupProps.disabled ? " disabled" : ""}>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</ButtonGroup>`}
        </SyntaxHighlighter>
      </Box>
    </Box>
  );
}

export default Home;
