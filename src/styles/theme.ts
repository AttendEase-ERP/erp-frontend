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
    },
    "*": {
      boxSizing: "inherit",
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;
