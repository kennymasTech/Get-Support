import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Divider } from "@chakra-ui/react";
import {
  Button,
  Avatar,
  Box,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  Center,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
//   import Actions from "./Actions";
import { useState } from "react";
import Actions from "./Actions";

const CreatorPosts = ({ likes, replies, postTitle, postImg }) => {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <Flex px={10} py={5}>
        <Link to={"/creator-posts"}>
          <Button
            leftIcon={<FaArrowLeft />}
            color={"#F1F1F1"}
            bg={"#2035A1"}
            _hover={{
              bg: "blue.500",
            }}
          >
            Back
          </Button>
        </Link>
      </Flex>

      <Box to={"/aliumusa/post/1"}>
        <Box gap={3} mb={4} py={5} px={20}>
          <Flex columnGap={5}>
            <Flex flexDir={"column"} alignItems={"center"}>
              <Avatar src="creator-1.png" name="Mark Zuckerberg" size={"2xl"} />
            </Flex>

            <Flex flex={1} flexDir={"column"} gap={2} justify={"center"}>
              <Flex w={"full"} justifyContent={"space-between"}>
                <Box alignItems={"center"} w={"full"}>
                  <Flex align={"center"}>
                    <Text fontWeight={"600"} fontSize={"2xl"}>
                      Abiodun Kenny
                    </Text>
                  </Flex>

                  <Flex gap={5}>
                    <Text>@Username_go</Text>
                    <Text>20 Subscriber</Text>
                    <Text>5 Videos</Text>
                  </Flex>

                  <Button
                    color={"#F1F1F1"}
                    bg={"#2035A1"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    borderRadius={"3xl"}
                    w={"25%"}
                    mt={3}
                  >
                    Subscribe here
                  </Button>
                </Box>
              </Flex>
            </Flex>
          </Flex>

          <Divider border={"0.5px solid black"} my={5} />

          {/* <Flex flexWrap={"wrap"} gap={5}>
            <Box w={"250px"} h={"150px"} gap={5} overflow={"hidden"}>
              <video
                src="All-of-Me-John-Legend-Cover.mp4"
                controls
                alt="video"
              ></video>
            </Box>

            <Box w={"250px"} h={"150px"} gap={5} overflow={"hidden"}>
              <img
                src="creator-5.png"
                alt="image"
                width={"100%"}
                height={"100%"}
              />
            </Box>

            <Box w={"250px"} h={"150px"} gap={5} overflow={"hidden"}>
              <audio src="Asake-Nzaza.mp3" controls alt="audio" />
            </Box>

            <Box w={"250px"} h={"150px"} gap={5} overflow={"hidden"}>
              <img src="creator-4.png" alt="image" />
            </Box>

            <Box w={"250px"} h={"150px"} gap={5} overflow={"hidden"}>
              <audio src="Asake-Nzaza.mp3" controls alt="audio" />
            </Box>

            <Box w={"250px"} h={"150px"} gap={5} overflow={"hidden"}>
              <Text>
                Please note that you'll need to attach the following documents:
                Curriculum vitae Copy of a valid ID (ID-Card, passport, or
                residence permit) Copy of diplomas/degrees Transfer certificate
                of the tax Additionally, since your diploma is from a third
                country, you'll need to attach: Copy of a certificate/diploma
              </Text>
            </Box>

            <Box w={"250px"} h={"150px"} gap={5} overflow={"hidden"}>
              <video
                src="All-of-Me-John-Legend-Cover.mp4"
                controls
                alt="video"
              ></video>
            </Box>
          </Flex> */}
        </Box>
      </Box>
    </>
  );
};

export default CreatorPosts;
