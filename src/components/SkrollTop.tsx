import Icon from "@chakra-ui/icon";
import { Flex } from "@chakra-ui/layout";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";
import { animateScroll as scroll } from "react-scroll";

interface SkrollTopProps {}

const MotionFlex = motion(Flex);

export const SkrollTop: React.FC<SkrollTopProps> = ({}) => {
  const [scrolledHeight, setScrolledHeight]: [number, any] = useState(0);

  useEffect(() => {
    const listener = () => {
      setScrolledHeight(window.pageYOffset);
    };
    document.addEventListener("scroll", listener);

    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, []);
  return (
    <AnimatePresence>
      {scrolledHeight < 500 ? null : (
        <MotionFlex
          onClick={() => {
            scroll.scrollToTop({ duration: 700, smooth: true });
          }}
          display={["none", "none", "none", "flex"]}
          cursor="pointer"
          justifyContent="center"
          alignItems="center"
          w="50px"
          h="50px"
          borderRadius={16}
          borderWidth="2px"
          borderColor="#ffffff"
          position="sticky"
          zIndex={3}
          top={"80vh"}
          ml="50px"
          bgColor="white"
          color="#7C7575"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          whileHover={{
            borderColor: "#D3004A",
            color: "#D3004A",
            transition: { duration: 0.5 },
          }}
        >
          <Icon w="35px" h="35px" as={IoMdArrowRoundUp} />
        </MotionFlex>
      )}
    </AnimatePresence>
  );
};
