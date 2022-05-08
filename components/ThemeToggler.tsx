import React from "react";
import { Button, ButtonProps, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useColors } from "../hooks";
import { boxShadow } from "../theme";

interface Props extends ButtonProps {
  onClick?: () => void;
}

const ThemeToggler = ({ onClick = () => {}, ...props }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const colors = useColors();

  const onClickBtn = () => {
    toggleColorMode();
    onClick();
  };

  return (
    <Button
      m="1"
      boxShadow={boxShadow.md}
      backgroundColor={colors.light}
      onClick={onClickBtn}
      aria-label="Toggle Theme"
      {...props}
    >
      {colorMode == "light" ? <FaMoon /> : <FaSun />}
    </Button>
  );
};

export default ThemeToggler;
