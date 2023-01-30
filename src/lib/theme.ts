import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false
  },
  colors: {
    brand: {
      900: "#033652",
      800: "#03637d",
      700: "#0091a8",
      600: "#00bfd4",
      500: "#00eeff",
      400: "#38f2fc",
      300: "#6ef5fa",
      200: "#a3faf5",
      100: "#dbfcf2",
      base: "#00eeff",
      bgDark: "#013238",
      contrast: "black",
      slider: "#2bd5e4"
    },

    gray: {
      50: "#F2F2F2",
      100: "#DCE1E6",
      200: "#C4C4C4",
      300: "#969696",
      400: "#808080",
      500: "#666666",
      600: "#41454A",
      700: "#3D3D3D",
      800: "#2A2E32",
      900: "#191E22",
      medium: "#8c8f91",
      dark: "#53565a",
      callout: "#55585b"
    }
  }
});

export type Theme = typeof theme;
