import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Box from "../tuxedo/Box";
import Button from "../tuxedo/Button";

function App() {
  const [count, setCount] = useState(0);
  const boxRef = useRef<HTMLFormElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Box as="form" onClick={(e) => console.log(e.currentTarget.tagName)}>
      <Box>
        <Box as="a" href="https://vitejs.dev" target="_blank">
          <Box as="img" src="/vite.svg" className="logo" alt="Vite logo" />
        </Box>
        <Box as="a" href="https://reactjs.org" target="_blank">
          <Box as="img" src={reactLogo} className="logo react" alt="React logo" />
        </Box>
      </Box>
      <h1>Vite + React</h1>
      <Box className="card">
        <Button
          ref={btnRef}
          backgroundColor="orange-300"
          // TODO: figure out specificity
          borderColor={{ hover: "red-300" }}
          onClick={() => {
            setCount((count) => count + 1);
            console.log(btnRef.current?.tagName);
            console.log(boxRef.current?.tagName);
          }}
        >
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Box>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </Box>
  );
}

export default App;
