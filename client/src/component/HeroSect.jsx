import React from "react";
import {
  Box,
  Button,
  Flex,
  Hide,
  Image,
  Img,
  Show,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HeroSect = () => {
  return (
    < >
      <Flex
        px={{ base: 8, md: 20 }}
        justify={"center"}
        alignItems={"center"}
        bg={"#FAF8F0"}
      >
        <Flex
          flexDir={"column"}
          w={586}
          gap={{ md: 2, lg: 1 }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text
            fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
            fontWeight={"semibold"}
            textAlign={"center"}
          >
            Fund Your <br /> Creative Work
          </Text>
          <Text
            fontSize={{ base: "sm", md: "md", lg: "sm" }}
            fontWeight={"regular"}
            textAlign={"center"}
          >
            Accept donations. Start a membership. Sell anything you like. <br />{" "}
            It's easier than you think.
          </Text>
          <Link to={"/login"}>
            <Button
              bg={"#2035A1"}
              color={"#F1F1F1"}
              mt={"15px"}
              size={{ base: "md", md: "lg" }}
              fontSize={{ base: "15px", md: "25px", lg: "35px" }}
              _hover={{
                bg: "blue.500",
              }}
            >
              Get started now
            </Button>
          </Link>
          <Text
            fontSize={{ base: "sm", md: "md", lg: "sm" }}
            fontWeight={"regular"}
            textAlign={"center"}
          >
            It's free and takes less than a minute!
          </Text>
        </Flex>
      </Flex>

        <Flex
          w={"full"}
          flexDir={{ base: "column", md: "column" }}
          justifyContent={"center"}
          alignItems={"center"}
          pt={"85px"}
          bg={"#FAF8F0"}
        >
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            direction={{ base: "column", sm: "column", lg: "column" }}
          >
                <Text
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                fontWeight={300}
                >
                POSTS, AUDIOS & VIDEOS
                </Text>

                <Text
                fontSize={{ base: "3xl", md: "3xl", lg: "3xl" }}
                fontWeight={"regular"}
                textAlign={"center"}
                >
                Publish your best work
                </Text>

                <Text
                fontSize={{ base: "sm", md: "md", lg: "sm" }}
                fontWeight={"regular"}
                // color={"#222222"}
                textAlign={"center"}
                >
                Get Support makes it easy to publish free and exclusive content.
                Try different <br />
                formats such as audio, video and make it members-only to drive
                more memberships.
                </Text>

                <Img m={"20px"} src="Img 1.png" alt="publish img" />

                <Text
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                fontWeight={300}
                pt={"85px"}
                // mt={10}
                >
                MEMBERSHIPS
                </Text>

                <Text
                fontSize={{ base: "3xl", md: "3xl", lg: "3xl" }}
                fontWeight={"regular"}
                textAlign={"center"}
                >
                Start a membership for <br /> your biggest fans.
                </Text>

                <Text
                fontSize={{ base: "sm", md: "md", lg: "sm" }}
                fontWeight={"regular"}
                textAlign={"center"}
                >
                Earn a recurring income by accepting monthly or yearly <br />
                subscriptions. Share exclusive content, or just give them a <br />
                way to support your work on an ongoing basis.
                </Text>

                <Img mb={"20px"} src="img 2.png" alt="members img" />

          </Flex>
        </Flex>
    </>
  );
};

export default HeroSect;
