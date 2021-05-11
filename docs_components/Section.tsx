import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import tomorrow from "../styles/tomorrow";
import reactElementToJSXString from 'react-element-to-jsx-string';
import { Box, Heading, IconButton } from "../components";
import { CodeIcon } from "../icons";
import { useTableOfContents } from "./TableOfContentsContext";
import { css } from "@emotion/react";

interface SectionProps {
  children: React.ReactElement;
  title: string;
}

const styles = css({
  visibility: "visible",
  position: "relative",
  transition: "height ease-out 200ms",
});

function Section ({ children, title }: SectionProps) {
  const [showCode, setShowCode] = React.useState<boolean>(true);
  const codeBoxRef = React.useRef<HTMLDivElement>(null);
  const codeBoxNormalHeight = React.useRef<number>();
  const { addContentItem } = useTableOfContents();

  React.useEffect(() => {
    addContentItem({
      link: title.split(" ").join("-").toLowerCase(),
      name: title,
    })
  }, []);

  React.useEffect(() => {
    if (!codeBoxNormalHeight.current && codeBoxRef.current) {
      codeBoxNormalHeight.current = codeBoxRef.current.clientHeight;
      setShowCode(false);
    }
  }, [codeBoxRef.current]);

  return (
    <Box id={title.split(" ").join("-").toLowerCase()} display="flex" flexDirection="column" gap={2}>
      <Heading as="h2">{title}</Heading>
      <Box padding={5} boxShadow="inset 0px 0px 6px 3px rgba(0, 0, 0, 0.1)" borderRadius={1}>
        {children}
      </Box>
      <IconButton
        onClick={() => setShowCode(((prev) => !prev))}
        variant="action"
        display="block"
        marginLeft="auto"
        title="Toggle Code"
      >
        <CodeIcon/>
      </IconButton>
      <Box
        css={codeBoxNormalHeight.current ? styles : ""}
        ref={codeBoxRef}
        height={showCode ? `${codeBoxNormalHeight.current}px` : "0px"}
        overflowY="hidden"
        visibility="hidden"
        position="absolute"
      >
        <SyntaxHighlighter language="tsx" style={tomorrow} css={{ borderRadius: "5px", marginTop: "0px !important" }}>
          {reactElementToJSXString(children, {
            maxInlineAttributesLineLength: 300,
            /* @ts-ignore */
            displayName: (element) => element?.type.displayName ?? element?.type.name 
          })}
        </SyntaxHighlighter>
      </Box>
    </Box>
  )
}

export default Section;