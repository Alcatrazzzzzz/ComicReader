import { Avatar, Box, chakra, Flex, Icon, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import { BsStarHalf } from "react-icons/bs";
import { FaBell, FaLayerGroup, FaPenAlt, FaPlus } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { MotionIcon, MotionBox } from "./Framer";

interface NavLeftAddonProps {
  activeFilter: string;
  isCreator?: boolean;
  setActiveFilter: any;
  smallScreen?: boolean;
}

const filters: [string, IconType][] = [
  ["Subs", FaBell],
  ["Favourite", BsStarHalf],
];

const groups = ["Group 1", "Group 2"];

const MotionFlex = motion(Flex);

export const NavLeftAddon: React.FC<NavLeftAddonProps> = ({
  activeFilter = null,
  isCreator = false,
  setActiveFilter = null,
  smallScreen = false,
}) => {
  const navBarHeight = 68;

  const [leftAddonHeight, setLeftAddonHeight]: [
    string | number,
    any
  ] = useState("100vh");

  useEffect(() => {
    if (window && smallScreen) {
      setLeftAddonHeight(window.innerHeight - navBarHeight);
      console.log(leftAddonHeight);
    }
  });
  return (
    <MotionFlex
      overflowY={smallScreen ? "scroll" : "unset"}
      key="leftAdd"
      display={smallScreen ? "flex" : ["none", "none", "none", "flex"]}
      fontFamily="'Helvetica Bold', sans-serif"
      fontWeight="bold"
      flexDir="column"
      alignItems="center"
      position={"absolute"}
      zIndex={smallScreen ? 4 : 0}
      width={smallScreen ? "100%" : "18%"}
      height={smallScreen ? `${leftAddonHeight}px` : leftAddonHeight}
      bgColor="#F5F5F5"
      initial={smallScreen ? { x: "-100%" } : { x: "0%" }}
      animate={{ x: "0%", transition: { duration: 1 } }}
      exit={{ x: "-100%" }}
    >
      <Flex
        justifyContent="center"
        flexDir="column"
        alignItems="center"
        bgColor="mDBlue"
        width="100%"
        h="180px"
      >
        <NextLink href="/">
          <Box
            cursor="pointer"
            mb="8px"
            w="100px"
            h="100px"
            borderWidth="4px"
            borderColor="white"
            borderRadius={50}
          >
            <Avatar name="Admin" src="/img/KakashiKid.jpg" size="full" />
          </Box>
        </NextLink>
        <NextLink href="/">
          <Text cursor="pointer" fontSize="24px" color="white">
            Alcatraz
          </Text>
        </NextLink>
      </Flex>
      <Flex width="70%" flexDir="column">
        <Flex
          color="rgb(75, 81, 111, 0.6)"
          flexDirection="column"
          width="100%"
          m="20px 0"
        >
          <Text
            fontSize={smallScreen ? "18px" : "24px"}
            color="rgb(25, 25, 25, 0.6)"
          >
            Main
          </Text>
          <Box w="100%" h="2px" mb="8px" bgColor="rgb(25, 25, 25, 0.6)" />
          {filters.map((filter) => {
            return (
              <Flex
                cursor="pointer"
                onClick={() => setActiveFilter(filter[0])}
                key={filter[0]}
                mt="4px"
                alignItems="center"
              >
                <Icon
                  h="16px"
                  as={filter[1]}
                  mr="10px"
                  //anim
                  color={filter[0] === activeFilter ? "#101C5F" : null}
                />
                <MotionBox
                  color="rgb(75, 81, 111, 0.6)"
                  fontSize="22px"
                  //anim
                  animate={
                    filter[0] === activeFilter ? { color: "#101C5F" } : null
                  }
                >
                  {filter[0]}
                </MotionBox>
              </Flex>
            );
          })}
        </Flex>
        <Flex flexDirection="column" width="100%" mb="20px">
          <Text fontSize="24px" color="rgb(25, 25, 25, 0.6)">
            Groups
          </Text>
          <Box w="100%" h="2px" mb="8px" bgColor="rgb(25, 25, 25, 0.6)" />
          {groups.map((group) => {
            return (
              <Flex
                cursor="pointer"
                onClick={() => setActiveFilter(group)}
                color="rgb(75, 81, 111, 0.6)"
                key={group}
                mt="4px"
                alignItems="center"
              >
                <Icon
                  h="16px"
                  as={FaLayerGroup}
                  mr="10px"
                  color={group === activeFilter ? "#101C5F" : null}
                />
                <MotionBox
                  fontSize="22px"
                  //anim
                  animate={group === activeFilter ? { color: "#101C5F" } : null}
                >
                  {group}
                </MotionBox>
              </Flex>
            );
          })}
        </Flex>
        {!isCreator ? null : (
          <Flex flexDirection="column" width="100%" mb="20px">
            <Text fontSize="24px" color="rgb(25, 25, 25, 0.6)">
              Creator
            </Text>
            <Box w="100%" h="2px" mb="8px" bgColor="rgb(25, 25, 25, 0.6)" />
            <Flex
              cursor="pointer"
              onClick={() => setActiveFilter("Published")}
              color="rgb(75, 81, 111, 0.6)"
              mt="4px"
              alignItems="center"
            >
              <Icon
                h="24px"
                as={FaPenAlt}
                mr="10px"
                color={"Published" === activeFilter ? "#101C5F" : null}
              />
              <MotionBox
                fontSize="22px"
                //anim
                animate={
                  "Published" === activeFilter ? { color: "#101C5F" } : null
                }
              >
                Published
              </MotionBox>
            </Flex>
            <Flex color="rgb(75, 81, 111, 0.6)" mt="4px" alignItems="center">
              <Icon h="24px" as={FaPlus} mr="10px" />
              <Text fontSize="22px">New Series</Text>
            </Flex>
          </Flex>
        )}
      </Flex>
    </MotionFlex>
  );
};
