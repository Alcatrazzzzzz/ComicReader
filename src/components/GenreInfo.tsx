import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import { CardBlock } from "./CardBlock";
import { MotionBox, MotionSimpleGrid } from "./Framer";

interface GenreInfoProps {
  setActiveBlock: any;
}

const variantsHeading = {
  open: { opacity: 1, scale: 1, x: 0 },
  closed: { opacity: 0, scale: 0, x: "-50%" },
};

const variantsGrid = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "300%" },
};

const GenreInfo: React.FC<GenreInfoProps> = ({ setActiveBlock }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <MotionBox
        onClick={() => {
          setActiveBlock();
        }}
        //styles
        mt="60px"
        mb="40px"
        bgColor="#380179"
        p="12px 0px"
        justifyContent="center"
        borderRadius={14}
        cursor="pointer"
        //animation
        animate={isOpen ? "open" : "closed"}
        variants={variantsHeading}
        initial="closed"
        transition={{ duration: 0.35, delay: 0.5 }}
        exit={{
          opacity: 0,
          transition: { duration: 0.5 },
        }}
      >
        <Heading
          fontFamily="'Helvetica Bold', sans-serif"
          fontWeight="bold"
          color="white"
          mt={-1}
          fontSize={[40]}
        >
          Drama
        </Heading>
      </MotionBox>

      <MotionSimpleGrid
        justifyItems="center"
        minChildWidth={[300]}
        spacingX="5px"
        spacingY="40px"
        mb="100px"
        //animation
        animate={isOpen ? "open" : "closed"}
        variants={variantsGrid}
        initial="closed"
        transition={{
          duration: 0.3,
          delay: 0.8,
          type: "spring",
          stiffness: 120,
          mass: 0.4,
          ease: "easeIn",
        }}
        exit={{
          opacity: 0,
        }}
      >
        <CardBlock v="1" />
        <CardBlock v="1" />
        <CardBlock v="1" />
        <CardBlock v="1" />
        <CardBlock v="1" />
      </MotionSimpleGrid>
    </>
  );
};

export default GenreInfo;
