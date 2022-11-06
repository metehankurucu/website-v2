import React from "react";
import { Box, Button, Link, Text } from "@chakra-ui/react";
import { useColors } from "../../hooks";
import { layoutWidth } from "../../theme";
import { emailAddress } from "../../constants";
import { useRouter } from "next/router";

type Props = {};

const CTA = (props: Props) => {
  const colors = useColors();
  const router = useRouter();

  return (
    <Box
      as="section"
      display={"flex"}
      flexDirection={{ base: "column" }}
      width={layoutWidth}
      marginX="auto"
      py="20"
      px="4"
    >
      <Text fontSize={"3xl"} fontWeight="bold" lineHeight={"1"}>
        Get in touch for projects & opportunities.
      </Text>
      <Box
        display={"flex"}
        justifyContent="flex-start"
        alignItems={"center"}
        mt="3"
        ml="1"
      >
        <Box
          height={"10px"}
          width="10px"
          borderRadius={"full"}
          backgroundColor={"gray"}
          mr="2"
        />
        <Text fontWeight="semibold" color={"gray"}>
          I&apos;m currently not available for work.
        </Text>
      </Box>
      <Box
        display={"flex"}
        alignItems={{ base: "flex-start", sm: "center" }}
        justifyContent={"space-between"}
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Button
          aria-label="Send a message"
          backgroundColor={colors.primary}
          color={"white"}
          _hover={{ transform: `scale(1.02)` }}
          borderRadius={"full"}
          my="6"
          py="4"
          alignSelf={"flex-start"}
          onClick={() => router.push("/contact")}
        >
          Send a Message
        </Button>
        <Link
          fontWeight={"medium"}
          fontSize="xl"
          color="gray.500"
          href={`mailto:${emailAddress}`}
          textDecorationColor="gray.500"
        >
          {emailAddress}
        </Link>
      </Box>
    </Box>
  );
};

export default CTA;
