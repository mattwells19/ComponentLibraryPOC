import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./app.css";
import { Box, Text, Button } from "../tuxedo/components";

function App() {
  const [count, setCount] = useState(0);
  const boxRef = useRef<HTMLFormElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Box
      as="main"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="4"
      borderWidth="1"
      borderStyle="dashed"
      borderColor="red-400"
      width="fit-content"
      margin="auto"
      padding="4"
    >
      <Box>
        <Text as="a" href="https://vitejs.dev" target="_blank">
          <Box as="img" display="inline" src="/vite.svg" width="20" alt="Vite logo" />
        </Text>
        <Text as="a" href="https://reactjs.org" target="_blank">
          <Box as="img" display="inline" src={reactLogo} width="20" alt="React logo" />
        </Text>
      </Box>
      <Text as="h1">Vite + React</Text>
      <Box display="flex" flexDirection="column" alignItems="center" gap="inherit" paddingY="4">
        <Button
          ref={btnRef}
          color="white"
          backgroundColor={{ default: "blackAlpha-600", hover: "blackAlpha-500" }}
          onClick={() => {
            setCount((count) => count + 1);
            console.log(btnRef.current?.tagName);
            console.log(boxRef.current?.tagName);
          }}
        >
          count is {count}
        </Button>
        <Text>
          Edit <Text as="code">src/App.tsx</Text> and save to test HMR
        </Text>
      </Box>
      <Text className="read-the-docs">Click on the Vite and React logos to learn more</Text>
    </Box>
  );
}

export default App;
