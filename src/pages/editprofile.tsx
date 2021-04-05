import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsGeoAlt } from "react-icons/bs";
import {
  FaBookReader,
  FaInfoCircle,
  FaLock,
  FaPenAlt,
  FaUserAlt,
} from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { IoIosArrowBack } from "react-icons/io";
import { BadgeGroup } from "../components/BadgeGroup";
import { Footer } from "../components/Footer";
import { InputField } from "../components/InputField";
import { Layout } from "../components/Layout";
import NavBar from "../components/NavBar";
import { Toggle } from "../components/Toggle";
interface EditprofileProps {}

const MotionFlex = motion(Flex);
const MotionButton = motion(Button);
const MotionText = motion(Text);

const badgeOptions = [
  { text: "none", color: "white", bgColor: "mGray" },
  { text: "creator", color: "white", bgColor: "#07ADA9" },
  { text: "reader", color: "white", bgColor: "mRed" },
];
const iconOptions = [
  { text: "none", color: "white", bgColor: "mGray", icon: ImCross },
  { text: "creator", color: "white", bgColor: "#07ADA9", icon: FaPenAlt },
  { text: "reader", color: "white", bgColor: "mRed", icon: FaBookReader },
];

const Editprofile: React.FC<EditprofileProps> = ({}) => {
  const router = useRouter();
  const [avatarHovered, setAvatarHovered] = useState(false);
  const [complete, setComplete] = useState(false);

  return (
    <Flex
      fontFamily="'Helvetica Bold', sans-serif"
      fontWeight="bold"
      flexDir="column"
      backgroundColor="#E3E2E2"
    >
      <NavBar />
      <Layout width={["85%", "85%", "85%", "60%"]}>
        <Flex mt="30px" mb="10px" alignItems="center">
          <NextLink href={`/profile/${router.query.id}`}>
            <Flex cursor="pointer" alignItems="center" color="mGray">
              <Icon h="20px" w="20px" as={IoIosArrowBack} />
              <Text fontSize="20px">Back to Profile</Text>
            </Flex>
          </NextLink>
          <MotionButton
            _hover={{}}
            type="submit"
            form="mForm"
            ml="auto"
            cursor="pointer"
            borderRadius="8px"
            justifyContent="center"
            alignItems="center"
            backgroundColor="rgb(75, 81, 111, 0.6)"
            color="white"
            w="80px"
            h="35px"
            //animate
            whileHover={{ backgroundColor: "#D3004A" }}
            transition={{ duration: 0.1 }}
          >
            Save
          </MotionButton>
        </Flex>
        <Box mb="25px" width="100%" h="1px" backgroundColor="mGray" />
        <Text mb="25px" color="mDBlue" fontSize="35px">
          Edit Profile
        </Text>
        <Flex flexDir={["column", "column", "column", "row"]} mb="100px">
          <Flex
            justifyContent={["center", "center", "center", "flex-start"]}
            w={["100%", "100%", "100%", "20%"]}
            mb="40px"
          >
            <Flex
              onMouseEnter={() => setAvatarHovered(true)}
              onMouseLeave={() => setAvatarHovered(false)}
              overflow="hidden"
              position="relative"
              w="150px"
              h="150px"
              borderRadius={300}
            >
              <Image
                objectFit="fill"
                quality={100}
                src="/img/KakashiKid.jpg"
                alt="Picture of the author"
                layout="fill"
              />
              <AnimatePresence>
                {!avatarHovered ? null : (
                  <MotionFlex
                    key="avatarHoverBg"
                    cursor="pointer"
                    justifyContent="center"
                    alignItems="center"
                    w="100%"
                    h="100%"
                    position="absolute"
                    bgColor="rgb(0, 0, 0, 0.6)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <MotionText
                      type="submit"
                      fontSize="24px"
                      color="rgb(255, 255, 255, 0.6)"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.25 }}
                    >
                      Change
                    </MotionText>
                  </MotionFlex>
                )}
              </AnimatePresence>
            </Flex>
          </Flex>
          <Flex w={["100%", "100%", "100%", "75%"]} ml="auto">
            <Formik
              initialValues={{
                name: "Alcatraz",
                location: "Russia",
                about: "Author and kakashi fan",
                changePassword: "",
                picked: "Two",
                badge: "author",
                avatarIcon: "reader",
                showLib: true,
                showWorks: true,
              }}
              onSubmit={async (values) => {
                console.log(values);
                setComplete(true);
              }}
            >
              {({ isSubmitting }) =>
                complete ? (
                  <Box>
                    If an account with that message exists we will send you en
                    email
                  </Box>
                ) : (
                  <Form style={{ width: "100%" }} id="mForm">
                    <InputField
                      name="name"
                      placeholder="Name"
                      label="DISPLAYED NAME"
                      anotation="Name, which everyone will know"
                      icon={FaUserAlt}
                    />
                    <InputField
                      name="location"
                      placeholder="Location"
                      label="LOCATION"
                      anotation="Your kingdom place"
                      icon={BsGeoAlt}
                    />
                    <InputField
                      textarea
                      name="about"
                      placeholder="About"
                      label="ABOUT ME"
                      anotation="Intro song about you"
                      icon={FaInfoCircle}
                    />
                    <InputField
                      name="changePassword"
                      placeholder="Type new password here"
                      label="CHANGE PASSWORD"
                      icon={FaLock}
                    />
                    <BadgeGroup
                      heading="CHOOSE YOUR BADGE"
                      name="badge"
                      defaultValue={"creator"}
                      options={badgeOptions}
                    />
                    <BadgeGroup
                      heading="CHOOSE YOUR AVATAR ICON"
                      name="avatarIcon"
                      defaultValue={"reader"}
                      options={iconOptions}
                    />
                    <Flex direction={["column", "row", "row", "row"]}>
                      <Toggle name="showLib" label="SHOW LIBRARY" />
                      <Toggle
                        m={[
                          "30px 0 0 0",
                          "0 0 0 40px",
                          "0 0 0 40px",
                          "0 0 0 40px",
                        ]}
                        name="showWorks"
                        label="SHOW YOUR WORKS"
                      />
                    </Flex>
                  </Form>
                )
              }
            </Formik>
          </Flex>
        </Flex>
      </Layout>
      <Footer />
    </Flex>
  );
};

export default Editprofile;
