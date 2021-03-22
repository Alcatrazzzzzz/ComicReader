import { Box } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Footer } from "../components/Footer";
import { MotionSimpleGrid } from "../components/Framer";
import FromBotAnim from "../components/FromBotAnim";
import GenreBlock from "../components/GenreBlock";
import GenreInfo from "../components/GenreInfo";
import { Layout } from "../components/Layout";
import NavBar from "../components/NavBar";

interface genresProps {}

const Genres: React.FC<genresProps> = ({}) => {
  const [activeBlock, setActiveBlock] = useState("genreGrid");
  const [genreInfoId, setGenreInfoID] = useState(null);

  let data = [];
  for (let i = 1; i < 20; i++) {
    data.push(
      <GenreBlock
        key={i}
        setActiveBlock={() => setActiveBlock("genreInfo")}
        setGenreInfoID={() => setGenreInfoID(i)}
      />
    );
  }

  return (
    <Box backgroundColor="#E3E2E2">
      <NavBar />
      <Layout>
        {/* <MotionSimpleGrid 
                    justifyItems='center' 
                    minChildWidth={[ 200 ]} 
                    spacingX="20px" 
                    spacingY="40px"
                >
                    { data }
                </MotionSimpleGrid>
                <GenreInfo />   */}
        <AnimatePresence>
          {activeBlock !== "genreGrid" ? null : (
            <MotionSimpleGrid
              justifyItems="center"
              minChildWidth={[250]}
              spacingX="20px"
              spacingY="40px"
              mt="60px"
              mb="100px"
            >
              {data}
            </MotionSimpleGrid>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {activeBlock !== "genreInfo" ? null : (
            <GenreInfo setActiveBlock={() => setActiveBlock("genreGrid")} />
          )}
        </AnimatePresence>
      </Layout>
      <Footer />
    </Box>
  );
};

export default Genres;
