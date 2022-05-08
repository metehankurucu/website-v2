import { useColorModeValue } from "@chakra-ui/react";
import { colors } from "../theme";

const useColors = () => {
  const values = useColorModeValue(colors.light, colors.dark);
  return values;
};

export default useColors;
