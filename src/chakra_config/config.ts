import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    breakpoints: {
      base: "0em", // 0px
      sm: "30em", // ~480px
      md: "48em", // ~768px
      lg: "62em", // ~992px
      xl: "85em", // ~1280px
      "2xl": "96em", // ~1536px
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
