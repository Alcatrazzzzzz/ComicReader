import React from "react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

interface FooterInfoLinkProps {
  href: string;
  text: string;
}

const FooterInfoLink: React.FC<FooterInfoLinkProps> = ({ href, text }) => {
  return (
    <NextLink href={href}>
      <Link
        _hover={{ textDecoration: "none", color: "#D3004A" }}
        fontFamily="'Helvetica Bold', sans-serif"
        fontWeight="bold"
        fontSize={["15px", "20px"]}
        color="white"
      >
        {text}
      </Link>
    </NextLink>
  );
};

export default FooterInfoLink;
