import React from "react";
import { Box, Image, SlideFade, Text } from "@chakra-ui/react";
import { useColors } from "../../hooks";
import { boxShadow } from "../../theme";

type Props = {
  name: string;
  svg: string;
};

const SkillCard = ({ name, svg }: Props) => {
  const colors = useColors();
  return (
    <SlideFade in offsetY="20px">
      <Box
        key={name}
        boxShadow={boxShadow.md}
        m="1"
        borderRadius={"lg"}
        borderWidth={"2"}
        borderColor={"gray"}
        backgroundColor={colors.cardSecondary}
        justifyContent="center"
        alignItems={"center"}
        display="flex"
        flexDirection={"column"}
        textAlign="center"
        height={"120px"}
        width={"120px"}
        p="2"
        transitionDuration={"200ms"}
        _hover={{ transform: `scale(1.03)` }}
      >
        <Image
          src={svg}
          height="45px"
          width="45px"
          objectFit={"contain"}
          borderRadius="md"
          alt={`${name} icon`}
        />
        <Text
          fontWeight={"600"}
          mt="2"
          color={colors.textPrimary}
          fontSize="sm"
        >
          {name}
        </Text>
      </Box>
    </SlideFade>
  );
};

export default SkillCard;
