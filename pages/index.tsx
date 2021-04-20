import { Box, Button, ButtonGroup, Heading } from "../components";
import SearchIcon from "../icons/SearchIcon";
import Section from "../docs_components/Section";
import styled from "@emotion/styled";
import { styledOptions } from "../components/common";

const JumpTag = styled("a", styledOptions)(({ theme }) => ({
  color: theme.palette.active.main,
  "&:hover": {
    textDecoration: "underline"
  }
}));

function Home() {
  return (
    <Box display="flex" flexDirection="column" gap={10} maxWidth={126} marginX="auto" paddingY={10} paddingX={2}>
      <Heading paddingBottom={1} borderBottom="1px solid rgba(0, 0, 0, 0.1)">Buttons</Heading>
      <Box>
        <Heading as="h2" marginBottom={2}>Jump to Section</Heading>
        <Box as="ul" listStyle="'-  '" css={{ "> li": { marginTop: "3px" } }}>
          <li><JumpTag href="#variants">Variants</JumpTag></li>
          <li><JumpTag href="#size">Size</JumpTag></li>
          <li><JumpTag href="#loading">Loading</JumpTag></li>
          <li><JumpTag href="#disabled">Disabled</JumpTag></li>
          <li><JumpTag href="#button-group">Button Group</JumpTag></li>
          <li><JumpTag href="#with-icon">With Icon</JumpTag></li>
        </Box>
      </Box>
      <Section title="Variants">
        <Box className="mobile-row" display="flex" gap={3}>
          <Button>
            Default
          </Button>
          <Button variant="action">
            Action
          </Button>
          <Button variant="primary">
            Primary
          </Button>
        </Box>
      </Section>
      <Section title="Size">
        <Box className="mobile-row" display="flex" alignItems="center" gap={3}>
          <Button size="small">
            Small
          </Button>
          <Button size="default">
            Default
          </Button>
          <Button size="large">
            Large
          </Button>
        </Box>
      </Section>
      <Section title="Loading">
        <Button isLoading>
          Default
        </Button>
      </Section>
      <Section title="Disabled">
        <Button disabled>
          Default
        </Button>
      </Section>
      <Section title="Button Group">
        <Box className="mobile-column" display="flex" flexDirection="column" gap={3}>
          <ButtonGroup>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
          </ButtonGroup>
          <ButtonGroup variant="primary" isLoading>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
          </ButtonGroup>
        </Box>
      </Section>
      <Section title="With Icon">
        <Box display="flex" gap={3}>
          <Button startIcon={<SearchIcon/>}>
            Default
          </Button>
          <Button endIcon={<SearchIcon/>}>
            Default
          </Button>
        </Box>
      </Section>
    </Box>
  );
}

export default Home;
