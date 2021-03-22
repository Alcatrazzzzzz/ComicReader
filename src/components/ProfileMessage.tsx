import { Flex, Avatar, Text } from "@chakra-ui/react";
import React from "react";

interface ProfileMessageProps {}

export const ProfileMessage: React.FC<ProfileMessageProps> = ({}) => {
  return (
    <Flex borderRadius="12px" p="12px 16px" w="100%" backgroundColor="white">
      <Avatar name="Admin" src="/img/KakashiKid.jpg" w="50px" h="50px" />
      <Flex
        w="100%"
        ml="16px"
        fontWeight="100"
        fontFamily="'Helvetica Regular', sans-serif"
        flexDir="column"
      >
        <Flex alignItems="center">
          <Text
            fontFamily="'Helvetica Bold', sans-serif"
            fontWeight="bold"
            fontSize="17px"
            color="mDBlue"
          >
            Alcatraz
          </Text>
          <Text
            p="1px 6px"
            borderRadius="12px"
            ml="10px"
            fontSize="13px"
            bgColor="#07ADA9"
            color="white"
          >
            Creator
          </Text>
          <Text color="rgb(75, 81, 111, 0.6)" ml="auto" fontSize="12px">
            12 May 13:12
          </Text>
        </Flex>
        <Text mt="auto">Had some good time building this</Text>
      </Flex>
    </Flex>
  );
};
