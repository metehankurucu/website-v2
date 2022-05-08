import React from "react";
import {
  Box,
  Image,
  Link,
  ScaleFade,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useColors } from "../hooks";
import { PageTitle, ContactForm } from "../components";
import { layoutWidth } from "../theme";
import { getImagePath } from "../helpers";
import { emailAddress, fullName } from "../constants";
import { GetStaticProps } from "next";

interface Props {}

const Contact = (props: Props) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const colors = useColors();

  return (
    <Box
      display={"flex"}
      flex={"1"}
      flexDirection={"column"}
      width={layoutWidth}
      marginX="auto"
      p="5"
    >
      <PageTitle>Contact Me</PageTitle>
      <Box mb="4">
        <Text textAlign={"center"} fontWeight="600" fontSize={"large"} mb="3">
          Let&apos;s contact. Alternatively, you can email me from{" "}
          <Link
            href={`mailto:${emailAddress}`}
            color={"primary"}
            textDecorationColor={colors.primary}
          >
            {emailAddress}
          </Link>
        </Text>
      </Box>
      <Box
        display={"flex"}
        flex="1"
        justifyContent={"space-between"}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box
          borderRadius={"md"}
          m="2"
          display={"flex"}
          flex="3"
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Image
            maxHeight={isMobile ? "25vh" : "40vh"}
            objectFit="contain"
            src={getImagePath("letter.png")}
            alt="Contact Illustration"
          />
        </Box>
        <Box
          display={"flex"}
          flex="3"
          flexDirection={"column"}
          justifyContent="center"
        >
          <ScaleFade initialScale={0.8} in>
            <ContactForm />
          </ScaleFade>
        </Box>
      </Box>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      pageTitle: `Contact | ${fullName}`,
    },
  };
};

export default Contact;
