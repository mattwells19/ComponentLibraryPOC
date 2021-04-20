import React from "react";

const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg
    viewBox="0 0 80 80"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M47.4451 47.4983L50.7244 50.7776M50.7249 55.0168L63.4534 67.7487C64.6243 68.9199 66.523 68.9201 67.6941 67.749C68.8649 66.5782 68.865 64.6799 67.6944 63.5089L54.9659 50.777C53.795 49.6058 51.8963 49.6057 50.7252 50.7767C49.5544 51.9476 49.5542 53.8458 50.7249 55.0168Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.5967 29.0688C17.3584 22.494 22.494 17.3584 29.0688 15.5967C35.6437 13.8349 42.6591 15.7147 47.4722 20.5278C52.2854 25.341 54.1651 32.3563 52.4034 38.9312C50.6416 45.5061 45.5061 50.6416 38.9312 52.4034C32.3563 54.1651 25.341 52.2854 20.5278 47.4722C15.7147 42.6591 13.8349 35.6437 15.5967 29.0688Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
SearchIcon.displayName = "SearchIcon";

export default SearchIcon;
