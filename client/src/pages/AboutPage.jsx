import React from "react";
import NavBar from "../component/Navbar";
import Footer from "../component/Footer";
import { Box } from "@chakra-ui/react";
import AboutUsHero from "../component/AboutUsHero";
import AboutUsTeam from "../component/AboutUsTeam";

const AboutPage = () => {
  return (
    <Box bg={"#FAF8F0"}>
      <NavBar position={"sticky"} zIndex={9999} top={0} />
      <AboutUsHero />
      <AboutUsTeam />
      <Footer />
    </Box>
  );
};

export default AboutPage;
