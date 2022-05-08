import { ScaleFade, Text, TextProps } from "@chakra-ui/react";
import React from "react";
import { useColors } from "../hooks";

interface Props extends TextProps {}

const PageTitle = (props: Props) => {
  const colors = useColors();
  return (
    <ScaleFade initialScale={0.8} in>
      <Text
        fontSize={"4xl"}
        fontWeight="700"
        textAlign={"center"}
        mb="3"
        color={colors.textPrimary}
        {...props}
      >
        {props.children}
      </Text>
    </ScaleFade>
  );
};

export default PageTitle;
