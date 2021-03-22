import { Button, Flex, Heading, Img, Square, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import NextLink from "next/link";
import { MotionBox } from "./Framer";
import { AnimatePresence } from "framer-motion";
import GenreBlock from "./GenreBlock";

interface FromBotAnimProps {
  setActive: any;
  isHidden?: Boolean;
  ref?: any;
}

const FromBotAnim: React.FC<FromBotAnimProps> = ({
  isHidden = false,
  setActive,
  children,
}) => {
  const myRef = useRef();
  console.log(myRef);
  const [x, setX] = useState(null);
  const [clientWidth, setClientWidth] = useState(null);

  const variants = {
    hidden: { y: "1000%", opacity: 1 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    setX((myRef.current as any).getBoundingClientRect().x);
    setClientWidth(document.body.clientWidth / 2);
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatePresence>
      {isHidden ? null : (
        <MotionBox
          ref={myRef}
          onClick={() => {
            setIsOpen(!isOpen);
            setActive();
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5 },
            x: x > clientWidth ? "200%" : "-100%",
          }}
          variants={variants}
          initial="hidden"
          animate="visible"
          // animate={{ opacity: [0,1], scale: [0.5, 1]}}
          transition={{
            duration: 2,
            type: "spring",
            stiffness: 80,
            mass: 0.5,
          }}
        >
          {children}
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

export default FromBotAnim;
