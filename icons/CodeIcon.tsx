import React from "react";

const CodeIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M30 64.1641L50 16.1641" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M23 24.1641L5.84084 39.4167C5.39332 39.8144 5.39332 40.5137 5.84083 40.9115L23 56.1641" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M57 24.1641L74.1592 39.4167C74.6067 39.8144 74.6067 40.5137 74.1592 40.9115L57 56.1641" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
CodeIcon.displayName = "CodeIcon";

export default CodeIcon;
