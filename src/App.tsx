import "./styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import { SpinnerSamples } from "./lib/spinner-samples";
import { theme } from "./lib/theme";

export default function App() {
  return (
    <div style={{ position: "relative" }}>
      <ChakraProvider theme={theme}>
        <SpinnerSamples />
      </ChakraProvider>
    </div>
  );
}
