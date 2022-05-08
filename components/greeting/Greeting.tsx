import React from "react";
import {
  Box,
  Button,
  Image,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { useColors } from "../../hooks";
import { getImagePath } from "../../helpers";
import { layoutWidth } from "../../theme";
import { useRouter } from "next/router";
import { shortDescription } from "../../constants";

type Props = {
  onMore: () => void;
};

const Greeting = ({ onMore }: Props) => {
  const imageSrc = useColorModeValue("hey.png", "hey-dark.png");
  const isMobile = useBreakpointValue({ base: true, md: false });
  const colors = useColors();
  const router = useRouter();
  return (
    <Box
      as="section"
      display={"flex"}
      flexDirection={{ base: "column", md: "row" }}
      width={layoutWidth}
      marginX="auto"
      p="5"
      pb="10"
      minH={"65vh"}
    >
      <Box
        borderRadius={"md"}
        display={"flex"}
        flex="3"
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={{ base: "center", md: "flex-start" }}
        my={{ base: "5", md: "2" }}
        textAlign={{ base: "center", md: "unset" }}
      >
        <Text fontSize={"3xl"}>Hi there, I&apos;m Mete.</Text>
        <Text
          fontSize={"4xl"}
          fontWeight="bold"
          color={colors.textPrimary}
          lineHeight="1"
        >
          {shortDescription}
        </Text>
        <Box display={"flex"} alignItems="center" my="5">
          <Button
            aria-label="More"
            colorScheme={"cyan"}
            borderRadius={"full"}
            color={colors.light}
            onClick={onMore}
          >
            More
          </Button>
          <Button
            ml="1"
            aria-label="View projects"
            variant={"ghost"}
            colorScheme={"cyan"}
            borderRadius={"full"}
            onClick={() => router.push("/projects")}
          >
            View Projects
          </Button>
        </Box>
      </Box>
      <Box
        borderRadius={"md"}
        display={"flex"}
        flex="3"
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Image
          maxHeight={isMobile ? "25vh" : "40vh"}
          objectFit="contain"
          src={getImagePath(imageSrc)}
          alt="Greeting Illustration"
        />
      </Box>
    </Box>
  );
};

export default Greeting;
