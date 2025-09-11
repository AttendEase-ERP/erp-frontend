import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router";
import { Provider } from "./components/ui/provider";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import system from "./styles/theme";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <ChakraProvider value={system}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ChakraProvider>
      </ClerkProvider>
    </Provider>
  </React.StrictMode>,
);
