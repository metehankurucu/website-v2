import React, { useState } from "react";
import { Box, Button, Collapse, Image, Text } from "@chakra-ui/react";
import { techStack } from "../../constants";
import { boxShadow, layoutWidth } from "../../theme";
import { useColors } from "../../hooks";
import SkillsList from "./SkillsList";
import { Icons } from "../../constants/icons";

type Props = {};

const Skills = (props: Props) => {
  const colors = useColors();
  const [familiarVisible, setFamiliarVisible] = useState(false);

  return (
    <Box as="section" backgroundColor={colors.secondary} py="8">
      <Box width={layoutWidth} marginX="auto" p="5">
        <Text textAlign={"center"} fontWeight="bold" fontSize={"2xl"} mb="3">
          Skills & Tools
        </Text>
        <SkillsList items={techStack.main} />
        <Box display={"flex"} alignItems="center" flexDirection="column">
          <Button
            textAlign={"center"}
            fontSize={"md"}
            m="3"
            fontWeight={"600"}
            color={colors.textPrimary}
            variant="ghost"
            onClick={() => setFamiliarVisible((bool) => !bool)}
          >
            also familiar with{" "}
            <Box
              mx="1"
              transform={`${familiarVisible ? "rotate(180deg)" : ""}`}
            >
              <Icons.ArrowDown />
            </Box>
          </Button>
          <Collapse in={familiarVisible} animateOpacity>
            <SkillsList items={techStack.familiar} />
          </Collapse>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
