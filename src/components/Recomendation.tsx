import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
interface RecomendationProps {}

export const Recomendation: React.FC<RecomendationProps> = ({}) => {
  return (
    <Flex bgColor="white" w="100%" h="100px">
      <Flex position="relative" w="80px" h="100px">
        <Image
          src="/img/TBATE2.jpg"
          alt="ep 1 thumbnail"
          objectFit="cover"
          layout="fill"
        />
      </Flex>
      <Flex w="75%" justifyContent="center" p="8px 12px " flexDir="column">
        <Text lineHeight="20px" fontSize="18px">
          The Beginning After The End
        </Text>
        <Flex mt="auto" fontSize="13px">
          <Text color="#8C3B7C" mr="10px">
            Fantazy
          </Text>
          <Text color="#00605E" mr="10px">
            Action
          </Text>
          <Text color="mBlue">Drama</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
