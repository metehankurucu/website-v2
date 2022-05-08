import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const sizes = {
  icon: 26,
};

export const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const boxShadow = {
  md: "0 2px 6px 0 rgb(0 0 0 / 5%), 0 0 3px 0 rgb(0 0 0 / 10%)",
};

export const layoutWidth = { base: "95%", md: "85%", lg: "75%" };

export const colors = {
  light: {
    background: "#f8f8f8",
    secondary: "#fefefe",
    primary: "#0362FF",
    light: "#fff",
    textPrimary: "#00093D",
    cardSecondary: "#FFFFFF",
  },
  dark: {
    background: "#242424",
    secondary: "#303030",
    primary: "#049FFE",
    light: "#333",
    textPrimary: "#E2E2E2",
    cardSecondary: "#242424",
  },
};

const theme = extendTheme({
  config,
  colors: { ...colors.light, body: { bg: "white" } },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: (props: any) => {
      return {
        body: {
          fontFamily: "body",
          bg: mode(colors.light.background, colors.dark.background)(props),
          lineHeight: "base",
        },
      };
    },
  },
});

export default theme;
