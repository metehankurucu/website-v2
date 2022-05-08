import React from "react";
import NextLink from "next/link";
import { Box, BoxProps, Button, Link, Text } from "@chakra-ui/react";
import {
  fullName,
  issuesUrl,
  NAVBAR_LINKS,
  repoUrl,
  SOCIAL_LINKS,
} from "../constants";
import { useColors } from "../hooks";
import IconLink from "./IconLink";

interface Props extends BoxProps {}

const Footer = ({ ...props }: Props) => {
  const colors = useColors();
  return (
    <Box as={"footer"} backgroundColor={colors.secondary}>
      <Box width={"100%"} height={"2px"} backgroundColor={colors.light} />
      <Box
        display="flex"
        flex="1"
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
        justifyContent={"space-between"}
        px={"5"}
        pb="8"
        pt="10"
        {...props}
      >
        <Box
          flexDirection={"column"}
          display={"flex"}
          my="3"
          alignItems={{ base: "center", md: "flex-start" }}
        >
          {NAVBAR_LINKS.map((link) => {
            return (
              <NextLink key={link.to} passHref href={link.to}>
                <Button
                  aria-label={link.title}
                  variant={"ghost"}
                  fontWeight={"600"}
                >
                  {link.title}
                </Button>
              </NextLink>
            );
          })}
        </Box>
        <Box
          flexDirection={"column"}
          display={"flex"}
          fontSize="sm"
          my="3"
          fontWeight={"500"}
          alignItems={{ base: "center", md: "flex-start" }}
        >
          <Link
            href={repoUrl}
            target="_blank"
            _hover={{ textDecoration: "none" }}
          >
            <Button
              aria-label={"Source Code"}
              variant={"ghost"}
              fontWeight={"600"}
            >
              Source Code
            </Button>
          </Link>
          <Link
            href={issuesUrl}
            target="_blank"
            _hover={{ textDecoration: "none" }}
          >
            <Button
              variant={"ghost"}
              fontWeight={"600"}
              aria-label={"Found a bug?"}
            >
              Found a bug?
            </Button>
          </Link>
        </Box>
        <Box
          display={"flex"}
          flexDirection="column"
          justifyContent={"space-between"}
          alignItems="center"
          my="3"
          pb="3"
        >
          <Box
            flexDirection={"row"}
            display={"flex"}
            flexWrap="wrap"
            justifyContent={"center"}
          >
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <IconLink
                  aria-label="Social Icon"
                  key={link.url}
                  href={link.url}
                  icon={<Icon />}
                />
              );
            })}
          </Box>
          <Text as={"small"} fontWeight={"600"} mt={"2"} color="gray">
            © {new Date().getFullYear()} {fullName}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
