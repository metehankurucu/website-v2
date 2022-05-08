import React from "react";
import { Box } from "@chakra-ui/react";
import SkillCard from "./SkillCard";

type Props = {
  items: { name: string; svg: string }[];
};

const SkillsList = ({ items }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection={"row"}
      justifyContent="center"
      alignItems={"center"}
      flexWrap="wrap"
      maxW={{ base: "100%", md: "90%", lg: "75%" }}
      marginX="auto"
    >
      {items.map((item, index) => {
        return <SkillCard key={index} {...item} />;
      })}
    </Box>
  );
};

export default SkillsList;
