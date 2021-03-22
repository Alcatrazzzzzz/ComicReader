import { Box, Flex, Stack, Text, Wrap } from "@chakra-ui/react";
import { AnimateSharedLayout, motion } from "framer-motion";
import Image from "next/image";
import NextLink from "next/link";
import React, { useState } from "react";
import { Episode } from "../../components/Episode";
import { Footer } from "../../components/Footer";
import { Layout } from "../../components/Layout";
import NavBar from "../../components/NavBar";
import { Recomendation } from "../../components/Recomendation";
interface ComicProps {}
const genres = [
  { name: "Fantazy", color: "#8C3B7C" },
  { name: "Action", color: "#00605E" },
  { name: "Drama", color: "#380179" },
];
const about = `King Grey has unrivaled strength, wealth, and prestige in a world 
governed by martial ability. However, solitude
lingers closely behind those with great power. Beneath
the glamorous exterior of a powerful king lurks the shell 
of man, devoid of purpose and will.Reincarnated into a new world
filled with magic and monsters, the king has a second chance to relive his
life. Correcting the mistakes of his past will not be his only challenge, 
however. Underneath the peace and prosperity of the new world is an undercurrent
threatening to destroy everything he has worked for, questioning his role and 
reason for being born again.`;

const MotionText = motion(Text);
const MotionFlex = motion(Flex);

const Comic: React.FC<ComicProps> = ({}) => {
  const [moreInfoOpen, setMoreInfoOpen] = useState(false);
  const [moreOptionsOpen, setMoreOptionsOpen] = useState(false);
  let episodes = [];
  for (let i = 1; i < 20; i++) {
    episodes.push(<Episode key={i} />);
  }
  let recomendations = [];
  for (let i = 1; i < 5; i++) {
    recomendations.push(<Recomendation key={i} />);
  }

  return (
    <Box
      backgroundColor="background"
      fontFamily="'Helvetica Bold', sans-serif"
      fontWeight="bold"
    >
      <NavBar />
      <Flex alignItems="center" h="250px" position="relative">
        <Flex w="100%" h="100%" pointerEvents="none" position="absolute">
          <Flex
            zIndex={1}
            position="absolute"
            h="100%"
            w="100%"
            bgGradient="linear(to-r, rgba(0,0,0,1) 3%, rgba(0,0,0,0.6) 60%,rgba(0,0,0,0) 100%)"
          />
          <Image
            objectFit="cover"
            objectPosition="center"
            quality={100}
            src="/img/TBATEback.jpg"
            alt="Comic background"
            layout="fill"
          />
        </Flex>
        <Flex w="70%" mx="auto" zIndex={1} flexDir="column">
          <Text mt="-20px" fontSize="45px" color="white">
            The Beginning After The End
          </Text>
          <Wrap spacing="24px" mt="10px" color="white">
            {genres.map((genre) => {
              return (
                <Flex
                  key={genre.name}
                  fontSize="16px"
                  borderRadius="50px"
                  p="5px 10px"
                  backgroundColor={genre.color}
                >
                  {genre.name}
                </Flex>
              );
            })}
          </Wrap>
        </Flex>
      </Flex>
      <Layout flex width="70%" mb="100px">
        <Flex w="68%" mt="30px" direction="column">
          <Flex
            fontSize="20px"
            w="fit-content"
            justifyContent="center"
            color="white"
            bgColor="mDBlue"
            p="5px 35px 5px 15px"
            borderRadius="0px 50px 0px 0px"
          >
            Episodes: {episodes.length}
          </Flex>
          <Stack spacing="20px" mt="20px">
            {episodes}
          </Stack>
        </Flex>
        <Flex
          flexDir="column"
          alignSelf="flex-start"
          alignItems="center"
          justifyContent="center"
          w={"30%"}
          ml="auto"
          mt="-50px"
          zIndex={2}
        >
          <MotionFlex
            layout
            p="25px 35px"
            bgColor="#FFFFFF"
            borderRadius="12px"
            flexDir="column"
            alignSelf="start"
          >
            <MotionText
              layout
              mb="5px"
              overflow="hidden"
              fontFamily="'Helvetica Regular', sans-serif"
              color="#000000"
              fontWeight="200"
              fontSize="16px"
              lineHeight="19px"
              initial={{ maxHeight: "111px" }}
              animate={
                moreInfoOpen
                  ? { maxHeight: "400px", transition: { duration: 0.5 } }
                  : { maxHeight: "111px" }
              }
            >
              {about}
            </MotionText>
            <MotionText
              onClick={() => {
                setMoreInfoOpen(!moreInfoOpen);
              }}
              layout
              w="fit-content"
              cursor="pointer"
              color="mRed"
              mb="20px"
            >
              {moreInfoOpen ? "Hide" : "Read More"}
            </MotionText>
            <NextLink
              href={{ pathname: "/editprofile", query: { id: "12" } }} //change id when apply backend
            >
              <MotionFlex
                layout
                cursor="pointer"
                borderRadius="8px"
                justifyContent="center"
                alignItems="center"
                backgroundColor="mRed"
                color="white"
                mb="15px"
                w="100%"
                h="35px"
                transition={{ duration: 0.2 }}
              >
                First Episode
              </MotionFlex>
            </NextLink>
            <AnimateSharedLayout>
              <Flex flexDir="column">
                <Flex>
                  <NextLink
                    href={{ pathname: "/editprofile", query: { id: "12" } }} //change id when apply backend
                  >
                    <MotionFlex
                      layout
                      cursor="pointer"
                      borderRadius="8px"
                      justifyContent="center"
                      alignItems="center"
                      borderColor="mRed"
                      borderWidth="2px"
                      color="mRed"
                      w="85%"
                      h="35px"
                      transition={{ duration: 0.2 }}
                    >
                      Subscribe
                    </MotionFlex>
                  </NextLink>
                  <Flex
                    onClick={() => setMoreOptionsOpen(!moreOptionsOpen)}
                    ml="auto"
                    mr="auto"
                    cursor="pointer"
                    flexDir="column"
                    justifyContent="space-around"
                  >
                    {moreOptionsOpen ? (
                      <MotionFlex
                        alignSelf="center"
                        layoutId="point1"
                        bgColor="mRed"
                        h="10px"
                        w="10px"
                        mb="auto"
                        mt="auto"
                        borderRadius="50%"
                      />
                    ) : (
                      <>
                        <MotionFlex
                          alignSelf="center"
                          layoutId="point1"
                          bgColor="mRed"
                          h="7px"
                          w="7px"
                          borderRadius="50%"
                        />
                        <MotionFlex
                          alignSelf="center"
                          layoutId="point2"
                          bgColor="mRed"
                          h="7px"
                          w="7px"
                          borderRadius="50%"
                        />
                        <MotionFlex
                          alignSelf="center"
                          layoutId="point3"
                          bgColor="mRed"
                          h="7px"
                          w="7px"
                          borderRadius="50%"
                        />
                      </>
                    )}
                  </Flex>
                </Flex>
                {/* <AnimatePresence> */}
                {!moreOptionsOpen ? null : (
                  <>
                    <Flex mt="15px">
                      <MotionFlex
                        layout
                        cursor="pointer"
                        borderRadius="8px"
                        justifyContent="center"
                        alignItems="center"
                        borderColor="#00605E"
                        borderWidth="2px"
                        color="#00605E"
                        w="85%"
                        h="35px"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: { duration: 0.3 },
                        }}
                      >
                        Add To Favourite
                      </MotionFlex>
                      <MotionFlex
                        onClick={() => setMoreOptionsOpen(!moreOptionsOpen)}
                        cursor="pointer"
                        layoutId="point2"
                        alignSelf="center"
                        bgColor="#00605E"
                        ml="auto"
                        mr="auto"
                        h="10px"
                        w="10px"
                        borderRadius="50%"
                      />
                    </Flex>
                    <Flex mt="15px">
                      <MotionFlex
                        layout
                        cursor="pointer"
                        borderRadius="8px"
                        justifyContent="center"
                        alignItems="center"
                        borderColor="mDBlue"
                        borderWidth="2px"
                        color="mDBlue"
                        w="85%"
                        h="35px"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: { duration: 0.3 },
                        }}
                      >
                        Report
                      </MotionFlex>
                      <MotionFlex
                        onClick={() => setMoreOptionsOpen(!moreOptionsOpen)}
                        cursor="pointer"
                        layoutId="point3"
                        alignSelf="center"
                        bgColor="mDBlue"
                        ml="auto"
                        mr="auto"
                        h="10px"
                        w="10px"
                        borderRadius="50%"
                      />
                    </Flex>
                  </>
                )}
                {/* </AnimatePresence> */}
              </Flex>
            </AnimateSharedLayout>
          </MotionFlex>
          <MotionFlex layout mt="20px" w="100%" flexDir="column">
            <Flex
              fontSize="20px"
              w="100%"
              justifyContent="center"
              color="white"
              bgColor="mDBlue"
              p="5px 35px 5px 15px"
              borderRadius="50px 0px 0px 0px"
            >
              Recomended for you
            </Flex>
            <Stack spacing="20px" mt="20px">
              {recomendations}
            </Stack>
          </MotionFlex>
        </Flex>
      </Layout>
      <Footer />
    </Box>
  );
};

export default Comic;
