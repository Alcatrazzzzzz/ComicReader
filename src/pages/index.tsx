import { Box, Flex, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import FromBotAnim from "../components/FromBotAnim";
import { Layout } from "../components/Layout";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import { SkrollTop } from "../components/SkrollTop";

const Index = () => {
  return (
    <Box backgroundColor="background">
      <NavBar />
    </Box>
  );
};

export default Index;
