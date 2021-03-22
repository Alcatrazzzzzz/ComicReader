import { Flex, Icon, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MotionInput } from "./Framer";

interface SearchBarProps {}

const variants = {
  focused: { borderColor: "#D3004A" },
  unfocused: { borderColor: "rgb(211, 0, 74, 0)" },
};

const SearchBar: React.FC<SearchBarProps> = ({}) => {
  const [focused, setFocused] = useState(false);

  return (
    <Flex mb="40px">
      <MotionInput
        variant="unstyled"
        h="45px"
        padding="0 15px"
        borderRadius="12px 0 0 12px"
        borderWidth="2px 0px 2px 2px"
        borderColor="mRed"
        placeholder="Search"
        backgroundColor="white"
        focusBorderColor={"transparent"}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        fontFamily="'Helvetica Bold', sans-serif"
        fontWeight="bold"
        fontSize="20px"
        //Animate
        initial={"unfocused"}
        animate={focused ? "focused" : "unfocused"}
        variants={variants}
        transition={{ duration: 0.2 }}
      />
      <IconButton
        _hover={{}}
        h="45px"
        w="45px"
        bgColor="mRed"
        borderRadius="0 10px 10px 0"
        aria-label="Search database"
        icon={<Icon color="white" h="20px" w="20px" as={FaSearch} />}
      />
    </Flex>
  );
};

export default SearchBar;
