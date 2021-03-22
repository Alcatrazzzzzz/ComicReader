import { Flex, Heading, Img, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { MotionBox } from "./Framer";

interface GenreBlocksProps {
  setActiveBlock: any;
  setGenreInfoID: any;
}

const variantsGrid = {
  open: { y: 0 },
  closed: { y: "600%" },
};

const GenreBlock: React.FC<GenreBlocksProps> = ({
  setActiveBlock,
  setGenreInfoID,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [x, setX] = useState(null);
  const [clientWidth, setClientWidth] = useState(null);
  const myRef = useRef();

  useEffect(() => {
    if (myRef.current) {
      setX((myRef.current as any).getBoundingClientRect().x);
      setClientWidth(document.body.clientWidth / 2);
    }
  });

  return (
    <MotionBox
      onClick={() => {
        setActiveBlock();
        setGenreInfoID();
      }}
      cursor="pointer"
      _hover={{ textDecoration: "none" }}
      bgColor="#380179"
      p={2}
      w={250}
      h={250}
      color="white"
      flexDir="column"
      justifyContent="space-between"
      alignItems="center"
      borderRadius={10}
      // find out block coords
      ref={myRef}
      //animate
      animate={isOpen ? "open" : "closed"}
      variants={variantsGrid}
      initial="closed"
      transition={{
        duration: 0.2,
        type: "spring",
        stiffness: 120,
        mass: 0.35,
      }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
        x: x > clientWidth ? "200%" : "-100%",
      }}
    >
      <Heading
        fontFamily="'Helvetica Bold', sans-serif"
        fontWeight="bold"
        mt={-1}
        fontSize={[50]}
      >
        Drama
      </Heading>
      <Img h={"65px"} src={"/icons/BrokenHeart.svg"}></Img>
      <Text
        fontFamily="'Helvetica Regular', sans-serif"
        maxW="80%"
        fontSize={[16]}
        textAlign="center"
      >
        Splash of emotions and salty tears
      </Text>
    </MotionBox>
  );
};

export default GenreBlock;
