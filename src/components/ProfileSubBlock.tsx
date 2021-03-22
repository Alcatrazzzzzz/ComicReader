import { Image } from "@chakra-ui/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import NextLink from "next/link";
import { Flex } from "@chakra-ui/react";

interface ProfileSubBlockProps {}

const MotionImage = motion(Image);

const ProfileSubBlock: React.FC<ProfileSubBlockProps> = ({}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <NextLink href="/">
      <MotionImage
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        cursor="pointer"
        objectFit="cover"
        w="90px"
        h="90px"
        src="/img/TBATE2.jpg"
        alt="Cover"
        whileHover={{ y: "-8%" }}
      />
    </NextLink>
  );
};

export default ProfileSubBlock;
