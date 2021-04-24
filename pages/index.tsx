import { Box, Button, ButtonGroup, Heading, IconButton } from "../components";
import Section from "../docs_components/Section";
import { nova } from "../components/common";
import { JoyIcon, SearchIcon } from "../icons";
import { TableOfContentsContextProvider, useTableOfContents } from "../docs_components/TableOfContentsContext";
import { FC } from "react";

const JumpTag = nova("a")(({ theme }) => ({
  color: theme.palette.active.main,
  "&:hover": {
    textDecoration: "underline"
  }
}));

function Home() {
  return (
    <TableOfContentsContextProvider>
      <ButtonDocs />
    </TableOfContentsContextProvider>
  )
}

const ButtonDocs: FC = () => {
  const { contents } = useTableOfContents();

  return (
    <Box display="flex" flexDirection="column" gap={10} maxWidth={126} marginX="auto" paddingY={10} paddingX={2}>
      <Heading paddingBottom={1} borderBottom="1px solid rgba(0, 0, 0, 0.1)">Buttons</Heading>
      <Box>
        <Heading as="h2" marginBottom={2}>Jump to Section</Heading>
        <Box as="ul" listStyle="'-  '" css={{ "> li": { marginTop: "3px" } }}>
          {contents.map((item) => (
            <li key={item.link}><JumpTag href={`#${item.link}`}>{item.name}</JumpTag></li>
          ))}
        </Box>
      </Box>
      <Section title="Variants">
        <Box display="flex" gap={3} flexWrap="wrap">
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
        <Box display="flex" alignItems="center" flexWrap="wrap" gap={3}>
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
      <Section title="Custom">
        <Button backgroundColor="purple" color="#ffff00" sx={{ "&:hover": { backgroundColor: "blue" } }}>
          Custom
        </Button>
      </Section>
      <Section title="Button Group">
        <Box display="flex" flexDirection="column" gap={3}>
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
      <Section title="Icon Only">
        <Box display="flex" gap={3} alignItems="center">
          <IconButton variant="primary" size="small">
            <SearchIcon/>
          </IconButton>
          <IconButton variant="primary">
            <SearchIcon/>
          </IconButton>
          <IconButton variant="primary" size="large">
            <SearchIcon/>
          </IconButton>
        </Box>
      </Section>
      <Section title="Icon Only Group">
        <ButtonGroup size="large">
          <IconButton><JoyIcon/></IconButton>
          <IconButton><JoyIcon/></IconButton>
          <IconButton><JoyIcon/></IconButton>
        </ButtonGroup>
      </Section>
    </Box>
  );
}

export default Home;
