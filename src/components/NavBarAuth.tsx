import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

interface NavBarAuthProps {}

export const NavBarAuth: React.FC<NavBarAuthProps> = ({}) => {
  return (
    <>
      <Button
        _hover={{}}
        fontFamily="'Helvetica Bold', sans-serif"
        fontWeight="bold"
        color="#101C5F"
        variant="outline"
        borderColor="#101C5F"
        borderWidth={2}
        borderRadius={24}
        size="sm"
        p="10px 25px"
        mr="20px"
      >
        Log in
      </Button>
      <Button
        _hover={{}}
        fontFamily="'Helvetica Bold', sans-serif"
        fontWeight="bold"
        backgroundColor="#D3004A"
        color="#FFFFFF"
        variant="solid"
        borderRadius={24}
        size="sm"
        p="10px 25px"
        mr="20px"
      >
        Register
      </Button>
    </>
  );
};
