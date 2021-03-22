import { Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";
import { SocialLink } from "./SocialLink";
import FooterInfoLink from "./FooterInfoLink";
import { motion } from "framer-motion";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Flex alignItems="center" flexDirection="column" p="30px" bgColor="#101C5F">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ rotate: 20 }}>
        <Img src={"/icons/logo_v2.svg"} h="100px" />
      </motion.div>

      <Flex
        justifyContent="center"
        mt="30px"
        flexWrap="wrap"
        sx={{ gap: "30px" }}
      >
        <SocialLink bgColor="#D3004A" w={7} h={7} href="/" icon={FaInstagram} />
        <SocialLink bgColor="#D3004A" href="/" icon={FaTwitter} />
        <SocialLink bgColor="#D3004A" href="/" icon={FaYoutube} />
        <SocialLink bgColor="#D3004A" href="/" icon={FaFacebookF} />
      </Flex>
      <Flex
        justifyContent="center"
        mt="30px"
        flexWrap="wrap"
        sx={{ gap: "35px" }}
      >
        <FooterInfoLink href="/" text="About" />
        <FooterInfoLink href="/" text="Help" />
        <FooterInfoLink href="/" text="Contacts" />
        <FooterInfoLink href="/" text="Term" />
        <FooterInfoLink href="/" text="Privacy" />
      </Flex>
      <Text
        textAlign="center"
        mt="30px"
        color="#909090"
        fontFamily="'Helvetica Bold', sans-serif"
        fontWeight="bold"
        fontSize="10px"
      >
        © 2020 Manga Universe inc.
      </Text>
    </Flex>
  );
};
