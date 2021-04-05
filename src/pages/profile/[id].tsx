import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaPenAlt } from "react-icons/fa";
import { Footer } from "../../components/Footer";
import { Layout } from "../../components/Layout";
import NavBar from "../../components/NavBar";
import NextLink from "next/link";
import { ProfileMessage } from "../../components/ProfileMessage";
import ProfileSubBlock from "../../components/ProfileSubBlock";
import { SkrollTop } from "../../components/SkrollTop";

interface ProfileProps {}

const MotionText = motion(Text);
const MotionTextArea = motion(Textarea);
const MotionFlex = motion(Flex);

const about = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
erat, sed diam voluptua. At vero eos et accusam et justo duo
dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
amet, consetetur`;

const variants = {
  focused: { borderColor: "#101C5F" },
  unfocused: { borderColor: "rgb(211, 0, 74, 0)" },
};

const Profile: React.FC<ProfileProps> = ({}) => {
  const [moreInfoOpen, setMoreInfoOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  let posts = [];
  for (let i = 1; i < 20; i++) {
    posts.push(<ProfileMessage key={i} />);
  }

  let subs = [];
  for (let i = 1; i < 20; i++) {
    subs.push(<ProfileSubBlock key={i} />);
  }

  return (
    <Box
      backgroundColor="background"
      fontFamily="'Helvetica Bold', sans-serif"
      fontWeight="bold"
    >
      <NavBar />
      <Layout mt="40px">
        <Flex
          alignItems={["center", "center", "center", "normal"]}
          flexDir={["column", "column", "column", "row"]}
          mb="100px"
        >
          <Flex
            flexDir="column"
            alignSelf="flex-start"
            alignItems="center"
            justifyContent="center"
            p="35px"
            w={["100%", "100%", "100%", "20%"]}
            bgColor="#FFFFFF"
            borderRadius="12px"
          >
            <Flex
              position="relative"
              mb="25px"
              w="20vh"
              h="20vh"
              borderRadius="100px"
            >
              <Avatar
                bg="transparent"
                borderWidth="4px"
                borderColor="mDBlue"
                name="Admin"
                src="/img/KakashiKid.jpg"
                size="full"
              />
              <Flex
                p="5px"
                borderRadius="50px"
                bgColor="#07ADA9"
                position="absolute"
                bottom={-3}
                left="40%"
              >
                <Icon h="15px" w="15px" color="white" as={FaPenAlt} />
              </Flex>
            </Flex>
            <Flex flexDir="column" alignSelf="start">
              <Text color="mDBlue" fontSize="30px">
                Alcatraz
              </Text>
              <Text
                m="-4px 0 20px 0"
                fontSize="12px"
                color="rgb(75, 81, 111,0.6)"
              >
                Joined Aug 2020
              </Text>
              <MotionText
                layout="true"
                mb="5px"
                overflow="hidden"
                color="#5E5A5A"
                fontWeight="100"
                fontFamily="'Helvetica Regular', sans-serif"
                fontSize="15px"
                lineHeight="18px"
                initial={{ maxHeight: "109px" }}
                animate={
                  moreInfoOpen
                    ? { maxHeight: "400px", transition: { duration: 0.5 } }
                    : { maxHeight: "109px" }
                }
              >
                {about}
              </MotionText>
              <Text
                onClick={() => {
                  setMoreInfoOpen(!moreInfoOpen);
                }}
                cursor="pointer"
                color="mRed"
                mb="30px"
              >
                {moreInfoOpen ? "Hide" : "Read More"}
              </Text>
              <NextLink
                href={{ pathname: "/editprofile", query: { id: "12" } }} //change id when apply backend
              >
                <MotionFlex
                  cursor="pointer"
                  borderRadius="8px"
                  justifyContent="center"
                  alignItems="center"
                  backgroundColor="rgb(75, 81, 111, 0.6)"
                  color="white"
                  w="100%"
                  h="35px"
                  //animate
                  whileHover={{ backgroundColor: "#D3004A" }}
                >
                  Edit Profile
                </MotionFlex>
              </NextLink>
            </Flex>
          </Flex>
          <Flex
            w={["100%", "100%", "100%", "50%"]}
            flexDir="column"
            ml={["0px", "0px", "0px", "20px"]}
          >
            <Flex alignSelf="flex-start" mb="15px" alignItems="center">
              <Box w="5px" h="25px" mr="2px" bgColor="mRed"></Box>
              <Text color="mDBlue" fontSize="35px">
                Live Board
              </Text>
            </Flex>
            <Flex flexDir="column">
              <Flex w="100%">
                <Avatar
                  color="mDBlue"
                  fontSize="24px"
                  bg="transparent"
                  ml="16px"
                  name="Admin"
                  src="/img/KakashiKid.jpg"
                  w="50px"
                  h="50px"
                />
                <MotionTextArea
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  p="10px 20px"
                  ml="15px"
                  fontFamily="'Helvetica Bold', sans-serif"
                  fontWeight="bold"
                  fontSize="18px"
                  bgColor="white"
                  borderWidth="2px"
                  borderRadius="12px"
                  placeholder="Write something..."
                  //Animate
                  initial={"unfocused"}
                  animate={focused ? "focused" : "unfocused"}
                  variants={variants}
                  transition={{ duration: 0.2 }}
                />
              </Flex>
              <MotionFlex
                mt="15px"
                ml="auto"
                cursor="pointer"
                borderRadius="8px"
                justifyContent="center"
                alignItems="center"
                backgroundColor="rgb(75, 81, 111, 0.6)"
                color="white"
                w={["30%", "30%", "30%", "12%"]}
                h="35px"
                //animate
                whileHover={{ backgroundColor: "#D3004A" }}
              >
                Share
              </MotionFlex>
              <Box mt="15px" w="100%" h="1px" bgColor="rgb(75, 81, 111, 0.6)" />
            </Flex>
            <Stack mt="30px" spacing="30px">
              {posts}
            </Stack>
          </Flex>
          <Flex
            w={["100%", "100%", "100%", "30%"]}
            pos="relative"
            flexDir="column"
            ml={["0px", "0px", "0px", "20px"]}
          >
            <Flex alignSelf="flex-start" mb="15px" alignItems="center">
              <Box w="5px" h="25px" mr="2px" bgColor="mRed"></Box>
              <Text color="mDBlue" fontSize="35px">
                Subscribed
              </Text>
            </Flex>
            <SimpleGrid
              justifyItems="flex-start"
              minChildWidth={[80, 80, 80, 80]}
              spacingX={["15px", "15px", "15px", "15px"]}
              spacingY="20px"
              mb="20px"
            >
              {subs.slice(0, 6)}
            </SimpleGrid>
            <Text
              onClick={onOpen}
              cursor="pointer"
              color="rgb(75, 81, 111, 0.6)"
              alignSelf="center"
            >
              Show More
            </Text>
            <SkrollTop />
          </Flex>
        </Flex>
      </Layout>
      <Footer />
      <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
        <ModalOverlay zIndex={3} />
        <ModalContent zIndex={3} p="20px" mt="100">
          <Text
            fontSize="24px"
            fontFamily="'Helvetica Bold', sans-serif"
            fontWeight="bold"
            color="mDBlue"
            mb="20px"
          >
            All Subscriptions
          </Text>
          <ModalCloseButton mt="10px" />
          <SimpleGrid
            justifyItems="flex-start"
            minChildWidth={[80, 80, 80, 80]}
            spacingX={["25px", "25px", "25px", "25px"]}
            spacingY="25px"
          >
            {subs}
          </SimpleGrid>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Profile;
