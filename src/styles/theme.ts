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
      backgroundColor: "var(--chakra-colors-bg)",
      color: "var(--chakra-colors-text)",
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

  theme: {
    semanticTokens: {
      colors: {
        bg: {
          value: {
            base: "{colors.gray.50}",
            _dark: "{colors.gray.900}",
          },
        },
        text: {
          value: {
            base: "{colors.gray.800}",
            _dark: "{colors.gray.100}",
          },
        },
        sidebarBg: {
          value: {
            base: "{colors.white}",
            _dark: "{colors.gray.800}",
          },
        },
        iconColor: {
          value: {
            base: "{colors.gray.600}",
            _dark: "{colors.gray.300}",
          },
        },
        hoverBg: {
          value: {
            base: "{colors.gray.200}",
            _dark: "{colors.gray.700}",
          },
        },
        borderColor: {
          value: {
            base: "{colors.gray.200}",
            _dark: "{colors.gray.700}",
          },
        },
      },
    },

    tokens: {
      fonts: {
        body: { value: "Inter, system-ui, sans-serif" },
        heading: { value: "Inter, system-ui, sans-serif" },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;
