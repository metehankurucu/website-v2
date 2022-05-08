import type { GetStaticProps, NextPage } from "next";
import { Box, Button } from "@chakra-ui/react";
import { PageTitle } from "../components";
import { fullName } from "../constants";
import { useRouter } from "next/router";

const NotFound: NextPage = () => {
  const router = useRouter();

  return (
    <Box display={"flex"} flexDirection="column">
      <PageTitle>Page Not Found</PageTitle>
      <Button
        display={"flex"}
        alignSelf="center"
        colorScheme={"cyan"}
        borderRadius={"full"}
        my="6"
        py="4"
        onClick={() => router.push("/")}
      >
        Return to Home
      </Button>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      pageTitle: `Page Not Found | ${fullName}`,
    },
  };
};

export default NotFound;
