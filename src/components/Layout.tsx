import { Box, Flex } from "@chakra-ui/react";
import React from "react";

interface LayoutProps {
  mt?: string | number;
  mb?: string | number;
  width?: string | number | string[];
  zIndex?: string | number;
  flex?: boolean;
  flexDir?: "column" | "row" | string[];
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  mt = null,
  mb = null,
  width = "80%",
  zIndex,
  flex,
  flexDir = "row",
}) => {
  return flex ? (
    <Flex
      flexDir={flexDir as any}
      zIndex={zIndex}
      mb={mb}
      mt={mt}
      width={width}
      mx="auto"
    >
      {children}
    </Flex>
  ) : (
    <Box zIndex={zIndex} mb={mb} mt={mt} width={width} mx="auto">
      {children}
    </Box>
  );
};
