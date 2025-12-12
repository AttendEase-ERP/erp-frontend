import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    "html, body, #root": {
      margin: 0,
      padding: 0,
      height: "100%",
      width: "100%",
      overflowX: "hidden",
      boxSizing: "border-box",
      fontFamily: "Inter, system-ui, sans-serif",
    },
    "*": {
      boxSizing: "inherit",
    },
    "button, [role='button'], a, input[type='button'], input[type='submit']": {
      cursor: "pointer",
    },
    "button:hover, [role='button']:hover, a:hover": {
      transition: "background-color 0.15s ease, color 0.15s ease",
    },
  },

  theme: {},
});

const system = createSystem(defaultConfig, config);

export default system;
