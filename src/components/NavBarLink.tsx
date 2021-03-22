import { Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

interface NavBarLinkProps {
  title: string;
  path: string;
}

const NavBarLink: React.FC<NavBarLinkProps> = ({ title, path }) => {
  const link =
    path === `/` && title === "Home" ? "/" : `/${title.toLowerCase()}`;

  return (
    <NextLink href={link}>
      <Link
        _hover={{ textDecoration: "none" }}
        fontFamily="'Helvetica Bold', sans-serif"
        fontWeight="bold"
        fontSize="25px"
        color={
          path === `/${title.toLowerCase()}` ||
          (path === `/` && title === "Home")
            ? "#D3004A"
            : "#101C5F"
        }
      >
        {title}
      </Link>
    </NextLink>
  );
};

export default NavBarLink;
