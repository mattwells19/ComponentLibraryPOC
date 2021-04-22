import { Box, Heading } from "../components";
import { useTableOfContents } from "./TableOfContentsContext";
import nova from "../components/common";

const TableOfContentsLink = nova("a")(({ theme }) => ({
  color: theme.palette.active.main,
  "&:hover": {
    textDecoration: "underline"
  }
}));

const TableOfContents = () => {
  const { contents } = useTableOfContents();

  return (
    <Box>
      <Heading as="h2" marginBottom={2}>Jump to Section</Heading>
      <Box as="ul" listStyle="'-  '" sx={{ "> li": { marginTop: "3px" } }}>
        {contents.map((item) => (
          <li key={item.link}><TableOfContentsLink href={`#${item.link}`}>{item.name}</TableOfContentsLink></li>
        ))}
      </Box>
    </Box>
  )
}

export default TableOfContents
