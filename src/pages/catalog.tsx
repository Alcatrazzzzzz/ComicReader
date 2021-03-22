import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { AnimateSharedLayout } from "framer-motion";
import React, { useState } from "react";
import { HiArrowNarrowDown, HiArrowNarrowUp } from "react-icons/hi";
import { CardBlock } from "../components/CardBlock";
import FilterButton from "../components/FilterButton";
import { Footer } from "../components/Footer";
import { MotionBox, MotionSimpleGrid } from "../components/Framer";
import { Layout } from "../components/Layout";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
interface catalogProps {}

const genres = [
  "Drama",
  "Action",
  "Comedy",
  "Fantasy",
  "Romance",
  "Gaming",
  "All genres",
];

const filters = ["New", "Trending", "All"];

const gridVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "200%" },
};

let data = [];
for (let i = 0; i < 10; i++) {
  data.push(<CardBlock v="1" key={i} />);
}

const Catalog: React.FC<catalogProps> = ({}) => {
  const [activeGenreFilter, setGenreActiveFilter] = useState("All genres");
  const [activeManualFilter, setManualActiveFilter] = useState("All");
  const [descFilter, setDescFilter] = useState(true);

  const genreFilters = genres.map((genre) => {
    return (
      <FilterButton
        label={genre}
        isActive={activeGenreFilter === genre}
        setActive={() => setGenreActiveFilter(genre)}
        key={genre}
      />
    );
  });

  const manualFilters = filters.map((filter) => {
    return (
      <FilterButton
        label={filter}
        isActive={activeManualFilter === filter}
        setActive={() => setManualActiveFilter(filter)}
        key={filter}
      />
    );
  });

  return (
    <Box backgroundColor="background">
      <NavBar />
      <Layout>
        <Flex
          m="25px 0"
          justifyContent="center"
          flexWrap="wrap"
          sx={{ gap: "35px" }}
        >
          <AnimateSharedLayout>{genreFilters}</AnimateSharedLayout>
        </Flex>
      </Layout>
      <Box h="1px" w="100%" bgColor="rgb(16, 28, 95, 0.3)" />
      <Layout>
        <Flex
          m="25px 0"
          justifyContent="center"
          flexWrap="wrap"
          sx={{ gap: "35px" }}
        >
          <AnimateSharedLayout>{manualFilters}</AnimateSharedLayout>
        </Flex>
        <SearchBar />
        <MotionBox
          flexDir="column"
          //animation
          animate={"open"}
          variants={gridVariants}
          initial="closed"
          transition={{ type: "spring", stiffness: 150, damping: 30 }}
          exit={{
            opacity: 0,
          }}
        >
          <Flex alignItems="center" mb="10px">
            <Text
              fontFamily="'Helvetica Bold', sans-serif"
              fontWeight="bold"
              fontSize="17px"
              color="rgb(96, 99, 118, 0.8)"
            >
              {data.length} results
            </Text>
            <Button
              onClick={() => setDescFilter(!descFilter)}
              ml="auto"
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
          <MotionSimpleGrid
            justifyItems="center"
            minChildWidth={[300]}
            spacingX="5px"
            spacingY="40px"
            mb="100px"
          >
            {data}
          </MotionSimpleGrid>
        </MotionBox>
      </Layout>
      <Footer />
    </Box>
  );
};

export default Catalog;
