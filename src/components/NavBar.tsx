import {
  Box,
  Button,
  Flex,
  IconButton,
  Img,
  useDisclosure,
  Collapse,
  Icon,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavBarLink from "./NavBarLink";
import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import { NavBarAuth } from "./NavBarAuth";
import { NavLeftAddon } from "./NavLeftAddon";
import { AnimatePresence } from "framer-motion";
import { BsFillGearFill } from "react-icons/bs";

interface NavBarProps {
  withLeftAddon?: boolean;
  activeLeftAddonFilter?: string;
  isCreator?: boolean;
  setActiveFilter?: any;
}

const NavBar: React.FC<NavBarProps> = ({
  withLeftAddon = false,
  activeLeftAddonFilter,
  isCreator = false,
  setActiveFilter = null,
}) => {
  const router = useRouter();
  const { isOpen, onToggle } = useDisclosure();
  const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);

  return (
    <>
      <Box position="sticky" zIndex={4} top="-1px">
        <Flex w="100%" alignItems="center" h="70px" bgColor={"#F5F5F5"}>
          <Img
            display={
              withLeftAddon ? ["none", "none", "none", "unset"] : "unset"
            }
            ml={["20px", "20px", "20px", "60px"]}
            h="60px"
            src={"/icons/logo_v1.svg"}
          ></Img>
          <Flex
            onClick={() => {
              setIsAddMenuOpen(!isAddMenuOpen);
            }}
            display={
              withLeftAddon ? ["unset", "unset", "unset", "none"] : "none"
            }
            cursor="pointer"
          >
            <Icon
              color="mDBlue"
              h="30px"
              w="30px"
              ml={["20px", "20px", "20px", "60px"]}
              as={BsFillGearFill}
            />
          </Flex>
          <Flex
            display={["none", "none", "none", "flex"]}
            ml="60px"
            w="450px"
            justifyContent="space-between"
          >
            <NavBarLink path={router.pathname} title="Home" />
            <NavBarLink path={router.pathname} title="Catalog" />
            <NavBarLink path={router.pathname} title="Genres" />
            <NavBarLink path={router.pathname} title="Dashboard" />
          </Flex>
          <Flex
            ml="auto"
            display={["none", "none", "none", "flex"]}
            alignItems="center"
          >
            <NavBarAuth />
            <IconButton
              _hover={{
                color: "#101C5F",
                borderWidth: 2,
                borderColor: "#d4d4d4",
                borderRadius: 24,
              }}
              color="#969696"
              borderColor="#dddddd"
              borderWidth={2}
              borderRadius={24}
              variant="unstyled"
              mr="60px"
              aria-label="Search database"
              icon={<SearchIcon />}
            />
          </Flex>
          <IconButton
            aria-label="Hamburger Menu"
            icon={<HamburgerIcon h={9} w={9} color="#101C5F" />}
            variant="unstyled"
            display={["block", "block", "block", "none"]}
            onClick={onToggle}
            ml="auto"
            mr={["20px", "20px", "20px", "60px"]}
          >
            Click Me
          </IconButton>
        </Flex>
        <Collapse in={isOpen} animateOpacity unmountOnExit>
          <Flex
            justifyItems="center"
            direction="column"
            w="100%"
            p="20px"
            color="white"
            bg="#F5F5F5"
          >
            <NavBarLink path={router.pathname} title="Home" />
            <NavBarLink path={router.pathname} title="Catalog" />
            <NavBarLink path={router.pathname} title="Genres" />
            <NavBarLink path={router.pathname} title="Dashboard" />
            <Flex mt={4}>
              <NavBarAuth />
            </Flex>
          </Flex>
        </Collapse>
        {!withLeftAddon ? null : (
          <NavLeftAddon
            activeFilter={activeLeftAddonFilter}
            setActiveFilter={(filter) => setActiveFilter(filter)}
            isCreator={isCreator}
          />
        )}
        <AnimatePresence>
          {!isAddMenuOpen ? null : (
            <NavLeftAddon
              activeFilter={activeLeftAddonFilter}
              setActiveFilter={(filter) => setActiveFilter(filter)}
              isCreator={isCreator}
              smallScreen
            />
          )}
        </AnimatePresence>
      </Box>

      <Box mt="-1px" w="1px" h="1px" />
    </>
  );
};

export default NavBar;
