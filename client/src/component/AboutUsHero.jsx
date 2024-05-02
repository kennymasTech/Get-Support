import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const AboutUsHero = () => {
  return (
    <>
      <Flex
        bg={"#FAF8F0"}
        display={"flex"}
        flexDir={"column"}
        justify={"center"}
        align={"center"}
      >
        <Flex
          fontSize={{ base: "xs", md: "lg", lg: "2xl" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          <Text mb={"30px"}>
            We believe almost everyone will work for <br /> themselves in the
            future—our mission is to <br /> empower individuals to achieve that.
          </Text>
        </Flex>
        <img src="/Img 7.png" alt="Hero img" />

        <Text
          mt={"30px"}
          fontSize={{ base: "xs", md: "md", lg: "lg" }}
          fontWeight={"medium"}
          textAlign={"center"}
        >
          <Text>
            When we started designing Get Support in 2023, our goal was <br />{" "}
            to remove all the complexities and give creators a simple way to{" "}
            <br /> get paid and connect with their fans.
          </Text>
          <Text mt={"30px"}>But simple wasn't enough.</Text>
          <Text mt={"30px"}>
            Creators needed a product that will be meaningful <br /> and
            enjoyable to use. This meant designing a supportive platform <br />{" "}
            that doesn't lack support — starting with the name itself
          </Text>
          <Text mt={"30px"} mb={"20px"}>
            That said, advertising model and algorithms have become too <br />{" "}
            unreliable to pay creators what they're worth. It is far more <br />{" "}
            reliable to build a direct relationship with the audience. Get
            Support <br /> gives fans a meaningful way to express gratitude to
            creators.
            <br /> Creators can also offer exclusive content and community
            access for their biggest fans.
          </Text>
        </Text>
      </Flex>
    </>
  );
};

export default AboutUsHero;