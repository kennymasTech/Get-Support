import React from "react";
import NavBar from "../component/Navbar";
import Footer from "../component/Footer";
import HeroSect from "../component/HeroSect";
import HeroCont from "../component/HeroCont";

const HomePage = () => {
  return (
    <>
      <NavBar position={"sticky"} zIndex={9999} top={0} />
      <HeroSect />
      <HeroCont />
      <Footer />
    </>
  );
};

export default HomePage;
