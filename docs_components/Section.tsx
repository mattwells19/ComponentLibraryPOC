import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import tomorrow from "../styles/tomorrow";
import reactElementToJSXString from 'react-element-to-jsx-string';
import { Box, Heading } from "../components";

interface SectionProps {
  children: React.ReactElement;
  title: string;
}

function Section ({ children, title }: SectionProps) {
  return (
    <Box id={title.split(" ").join("-").toLowerCase()} display="flex" flexDirection="column" gap={2}>
      <Heading as="h2">{title}</Heading>
      <Box padding={5} boxShadow="inset 0px 0px 6px 3px rgba(0, 0, 0, 0.1)" borderRadius={1}>
        {children}
      </Box>
      <SyntaxHighlighter language="tsx" style={tomorrow} css={{ borderRadius: "5px" }}>
        {reactElementToJSXString(children, {
          maxInlineAttributesLineLength: 300,
          /* @ts-ignore */
          displayName: (element) => element?.type.displayName ?? element?.type.name 
        })}
      </SyntaxHighlighter>
    </Box>
  )
}

export default Section;