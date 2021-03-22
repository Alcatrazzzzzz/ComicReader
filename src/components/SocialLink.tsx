import { IconButton, Icon } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { IconType } from "react-icons";

interface FooterSocialLinkProps {
  href: string;
  icon: IconType;
  w?: number | string;
  h?: number | string;
  borderRadius?: number | string;
  borderWidth?: number | string;
  bgColor?: string;
  borderColor?: string;
}

export const SocialLink: React.FC<FooterSocialLinkProps> = ({
  w = 6,
  h = 6,
  borderRadius = 100,
  href,
  icon,
  borderWidth = 0,
  bgColor = "transparent",
  borderColor = "transparent",
}) => {
  return (
    <NextLink href={href}>
      <IconButton
        _hover={{ bgColor: "white", color: "#D3004A" }}
        variant="solid"
        color="white"
        aria-label="Send email"
        h={"40px"}
        w={"40px"}
        bgColor={bgColor}
        borderRadius={borderRadius}
        borderWidth={borderWidth}
        borderColor={borderColor}
        icon={<Icon h={h} w={w} as={icon} />}
      />
    </NextLink>
  );
};
