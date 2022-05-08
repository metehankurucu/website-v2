import React from "react";
import {
  Box,
  Button,
  ButtonProps,
  Fade,
  ScaleFade,
  SlideFade,
  SlideFadeProps,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ThemeToggler } from ".";
import { NAVBAR_LINKS } from "../constants";
import NextLink from "next/link";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";
import { useColors } from "../hooks";
import { boxShadow } from "../theme";

interface Props {
  menuVisible: boolean;
  shouldRenderMenu: boolean;
  toggleMenu: () => void;
}

const Header = ({ menuVisible, shouldRenderMenu, toggleMenu }: Props) => {
  const colors = useColors();
  const slideFade = useBreakpointValue({
    base: { x: "0px", y: "-200px" },
    md: { x: "-200px", y: "0px" },
  });

  return (
    <Box padding={"5"} position="fixed" width={"100%"} zIndex="99">
      <SlideFade in>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={{ base: "center", md: "center" }}
          p="1.5"
        >
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={"flex-start"}
            alignItems={{ base: "flex-start", md: "center" }}
            position={"relative"}
          >
            <Button
              aria-label="Navigation Menu"
              onClick={toggleMenu}
              _focus={{ boxShadow: "none" }}
              px="3"
              m="1"
              boxShadow={boxShadow.md}
              backgroundColor={colors.light}
            >
              <CgMenuLeftAlt size={26} />
            </Button>
            {shouldRenderMenu && (
              <ScaleFade initialScale={0.5} in={menuVisible} style={{}}>
                <Box
                  display={"flex"}
                  flexDirection={{ base: "column", md: "row" }}
                  justifyContent={"flex-start"}
                  alignItems={{ base: "flex-start", md: "center" }}
                  position={{ base: "fixed", md: "relative" }}
                  zIndex={2}
                >
                  {NAVBAR_LINKS.map((item, index) => {
                    return (
                      <NavbarItem
                        slideFadeProps={{
                          offsetX: slideFade?.x,
                          offsetY: slideFade?.y,
                          in: menuVisible,
                        }}
                        to={item.to}
                        key={index.toString()}
                        onClick={toggleMenu}
                        aria-label={item.title}
                      >
                        {item.title}
                      </NavbarItem>
                    );
                  })}
                  <NavbarItem
                    slideFadeProps={{
                      offsetX: slideFade?.x,
                      offsetY: slideFade?.y,
                      in: menuVisible,
                    }}
                    onClick={toggleMenu}
                    aria-label={"Hide Navigation Menu"}
                  >
                    <IoCloseOutline size={26} />
                  </NavbarItem>
                </Box>
              </ScaleFade>
            )}
          </Box>
          <Box
            display={"flex"}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <ThemeToggler />
          </Box>
        </Box>
      </SlideFade>
    </Box>
  );
};

interface NavbarItemProps extends ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  to?: string;
  slideFadeProps: SlideFadeProps;
}

const NavbarItem = ({
  children,
  onClick,
  to,
  slideFadeProps,
  ...props
}: NavbarItemProps) => {
  const colors = useColors();
  return (
    <SlideFade {...slideFadeProps}>
      <NextLink href={to ?? ""} passHref>
        <Button
          boxShadow={boxShadow.md}
          backgroundColor={colors.light}
          onClick={onClick}
          _focus={{ boxShadow: "none" }}
          px="3"
          m="1"
          {...props}
        >
          {children}
        </Button>
      </NextLink>
    </SlideFade>
  );
};

export default Header;
