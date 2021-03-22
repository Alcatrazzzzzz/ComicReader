import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
interface EpisodeProps {}

export const Episode: React.FC<EpisodeProps> = ({}) => {
  return (
    <Flex bgColor="white" w="100%" h="80px">
      <Image
        src="/img/TBATEep1Thumb.jpg"
        alt="ep 1 thumbnail"
        width={80}
        height={80}
      />
      <Flex justifyContent="center" p="10px" flexDir="column">
        <Text fontSize="15px" fontWeight="200" color="mGray">
          Episode 1
        </Text>
        <Text fontSize="20px">The End of the Tunnel</Text>
        <Flex fontSize="11px">
          <Text>Jul 17, 2018</Text>
          <Text ml="10px">1.2k views</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
