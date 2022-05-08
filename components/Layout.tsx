import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Footer, Header } from ".";
import { useColors, useHeaderMenuVisible } from "../hooks";
import { layoutWidth } from "../theme";
import { fullName } from "../constants";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const Layout = ({ title = fullName, children, ...props }: Props) => {
  const headerMenu = useHeaderMenuVisible();
  const colors = useColors();

  return (
    <Box
      minHeight={"100vh"}
      display={"flex"}
      flex={"1"}
      flexDirection={"column"}
      backgroundColor={colors.background}
      position={"relative"}
    >
      <Head>
        <title>{title}</title>
      </Head>
      <Header {...headerMenu} />
      <Box
        position={"relative"}
        flex="1"
        display={"flex"}
        flexDirection="column"
        filter={headerMenu.menuVisible ? "blur(5px)" : "none"}
        userSelect={headerMenu.menuVisible ? "none" : "auto"}
        onClick={() => headerMenu.menuVisible && headerMenu.toggleMenu()}
      >
        <Box
          as="main"
          minH={"70vh"}
          display="flex"
          flex="1"
          flexDirection={"column"}
          alignItems="unset"
          justifyContent={"unset"}
          pt="20"
        >
          {children}
        </Box>
        <Footer maxWidth={layoutWidth} marginX="auto" />
      </Box>
    </Box>
  );
};

export default Layout;
