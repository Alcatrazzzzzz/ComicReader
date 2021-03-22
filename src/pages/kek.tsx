import { Box } from "@chakra-ui/react";
import React from "react";

interface kekProps {}

const kek: React.FC<kekProps> = ({}) => {
  return (
    <>
      <Box
        w="100%"
        h="100px"
        bgColor="red"
        position="sticky"
        zIndex={1000}
        top={0}
      ></Box>
      <Box w="50%" h="50px" mb="100px" bgColor="green"></Box>
      <Box w="50%" h="50px" mb="100px" bgColor="green"></Box>
      <Box w="50%" h="50px" mb="100px" bgColor="green"></Box>
      <Box w="50%" h="50px" mb="100px" bgColor="green"></Box>
      <Box w="50%" h="50px" mb="100px" bgColor="green"></Box>
      <Box w="50%" h="50px" mb="100px" bgColor="green"></Box>
      <Box w="50%" h="50px" mb="100px" bgColor="green"></Box>
      <Box w="50%" h="50px" mb="100px" bgColor="green"></Box>
      <Box w="50%" h="50px" mb="100px" bgColor="green"></Box>
      <Box w="50%" h="50px" mb="100px" bgColor="green"></Box>
      <Box w="50%" h="50px" mb="100px" bgColor="green"></Box>
    </>
  );
};

export default kek;
