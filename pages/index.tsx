import { useRef } from "react";
import type { GetStaticProps, NextPage } from "next";
import { Box } from "@chakra-ui/react";
import { Skills, Greeting, CTA } from "../components";
import { fullName } from "../constants";

const Home: NextPage = () => {
  const moreRef = useRef<HTMLDivElement>(null);

  const onMore = () => {
    moreRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box flexDirection={"column"}>
      <Greeting onMore={onMore} />
      <Box ref={moreRef}>
        <Skills />
        <CTA />
      </Box>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      pageTitle: `Home | ${fullName}`,
    },
  };
};

export default Home;
