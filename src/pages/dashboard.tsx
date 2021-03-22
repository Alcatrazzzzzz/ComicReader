import { Box, Button, Flex, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { AnimateSharedLayout, motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { HiArrowNarrowUp, HiArrowNarrowDown } from "react-icons/hi";
import { CardBlock } from "../components/CardBlock";
import FilterButton from "../components/FilterButton";
import { Footer } from "../components/Footer";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";

interface dashboardProps {}

const MotionText = motion(Text);
const MotionSimpleGrid = motion(SimpleGrid);
const MotionFlex = motion(Flex);

const otherFilters = ["Last Seen", "Name", "Likes", "Genre", "All"];

const gridVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "200%" },
};

let data = [];
for (let i = 0; i < 10; i++) {
  data.push(<CardBlock v="1" key={i} />);
}

const Dashboard: React.FC<dashboardProps> = ({}) => {
  const [activeFilter, setActiveFilter] = useState("Subs");
  const [activeOtherFilter, setActiveOtherFilter] = useState("All");
  const [descFilter, setDescFilter] = useState(true);

  const realOtherFilters = otherFilters.map((genre) => {
    return (
      <FilterButton
        label={genre}
        isActive={activeOtherFilter === genre}
        setActive={() => setActiveOtherFilter(genre)}
        key={genre}
        bgColor="mRed"
        borderRadius="12px"
        textColor="#808081"
      />
    );
  });

  return (
    <Box backgroundColor="background" width="100%">
      <NavBar
        withLeftAddon
        activeLeftAddonFilter={activeFilter}
        isCreator
        setActiveFilter={(filter) => setActiveFilter(filter)}
      />
      <Flex flexDir="column" alignItems="center">
        <Flex
          fontFamily="'Helvetica Bold', sans-serif"
          fontWeight="bold"
          flexDir="column"
          ml={["0", "auto"]}
          color="black"
          width={["100%", "100%", "100%", "82%"]}
        >
          <Flex flexDir="column" p="20px 20px 60px 20px">
            <Flex mb="15px" alignItems="center">
              <Box w="8px" h="40px" mr="2px" bgColor="mRed"></Box>
              <MotionText color="mDBlue" fontSize="40px">
                {activeFilter}
              </MotionText>
            </Flex>

            <Flex mb="14px" alignItems="center">
              <Flex flexWrap="wrap" sx={{ gap: "20px" }}>
                <AnimateSharedLayout>{realOtherFilters}</AnimateSharedLayout>
              </Flex>
              <Flex ml="auto">
                <Button
                  onClick={() => setDescFilter(!descFilter)}
                  variant="unstyled"
                >
                  <Icon
                    h="32px"
                    w="32px"
                    color={descFilter ? "#D3004A" : "#4B4F64"}
                    as={HiArrowNarrowUp}
                  />
                  <Icon
                    color={!descFilter ? "#D3004A" : "#4B4F64"}
                    h="32px"
                    w="32px"
                    ml="-20px"
                    as={HiArrowNarrowDown}
                  />
                </Button>
              </Flex>
            </Flex>
            <Box
              mb="20px"
              w="100%"
              h="1px"
              bgColor="rgb(16, 28, 95)"
              opacity={0.3}
            ></Box>
            <SearchBar />
            <MotionSimpleGrid
              justifyItems="center"
              minChildWidth={[220, 220, 220, 300]}
              spacingX={["10px", "15px", "15px", "0px"]}
              spacingY="40px"
              mb="100px"
              //anim
              animate={"open"}
              variants={gridVariants}
              initial="closed"
              transition={{ type: "spring", stiffness: 150, damping: 30 }}
              exit={{
                opacity: 0,
              }}
            >
              {data}
            </MotionSimpleGrid>
          </Flex>
          <Footer />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Dashboard;
