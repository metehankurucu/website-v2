import React from "react";
import Link from "next/link";
import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { sizes } from "../theme";

interface Props extends IconButtonProps {
  href: string;
}

const IconLink = ({ href, ...props }: Props) => {
  return (
    <Link passHref href={href}>
      <IconButton
        as="a"
        variant={"ghost"}
        target={"_blank"}
        fontSize={sizes.icon}
        m="2"
        {...props}
      />
    </Link>
  );
};

export default IconLink;
