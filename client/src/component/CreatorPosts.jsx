import React, { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
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
import { axiosPrivate } from "../api/axios";

const CreatorPosts = ({ likes, replies, postTitle, postImg }) => {
  const { creatorId } = useParams();
  const [creator, setCreator] = useState({});
  const [posts, setPosts] = useState([]);
  const [liked, setLiked] = useState(false);
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  // console.log(loggedUser)
  useEffect(() => {
    const getCreators = async () => {
      try {
        const response = await axiosPrivate.get(
          `/creators/get-creator/${creatorId}`,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        console.log(response.data);
        setCreator(response.data.creator);
        setPosts(response.data.posts);
      } catch (error) {
        console.log(error);
      }
    };
    getCreators();
  }, []);

  // console.log(creator)

  return (
    <>
      <Flex px={10} py={5}>
        <Link to={"/creators"}>
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
        <Box gap={3} mb={4} py={5} px={10} >
          <Flex columnGap={5} flexWrap={'wrap'}>
            <Flex flexDir={"column"} alignItems={"center"}>
              <Avatar
                src={creator?.avatar}
                name="Mark Zuckerberg"
                size={"2xl"}
              />
            </Flex>

            <Flex flex={1} flexDir={"column"} gap={2} justify={"center"}>
              <Flex w={"full"} justifyContent={"space-between"}>
                <Box alignItems={"center"} w={"full"}>
                  <Flex align={"center"}>
                    <Text fontWeight={"600"} fontSize={"2xl"}>
                      {creator?.name}
                    </Text>
                  </Flex>

                  <Flex gap={5} flexWrap={'wrap'}>
                    <Text>@{creator?.username}</Text>
                    <Text>20 Subscriber</Text>
                    <Text>{posts?.length} Posts</Text>
                  </Flex>

                  <Button
                  mt={3}
                    color={"#F1F1F1"}
                    bg={"#2035A1"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    borderRadius={"3xl"}
                  >
                    Subscribe here
                  </Button>
                </Box>
              </Flex>
            </Flex>
          </Flex>

          <Divider border={"0.5px solid black"} my={5} />

          <Flex flexWrap={"wrap"} gap={5}>
            {posts?.map((post) => (
          <Link to={`/user-page/${post._id}`} >
              <Box
             bg={"lightgray"}
             color={'red'}
             boxShadow={"lg"}
             p={5}
             borderRadius={10}
             gap={2}
             >
                {post.type === "video" && (
                  <Box w={"250px"} h={"150px"} gap={5} overflow={"hidden"}>
                    <video
                      src={post.fileUrl}
                      controls
                      alt="video"
                    ></video>
                  </Box>
                )}
                {post.type === "audio" && (
                  <Box w={"250px"} h={"150px"} gap={5} overflow={"hidden"}>
                    <audio src={post.fileUrl} controls alt="audio" />
                  </Box>
                )}

                {post.type === "photo" && (
                  <Box w={"250px"} h={"150px"} gap={5} overflow={"hidden"}>
                    <img src={post.fileUrl} alt="image" />
                  </Box>
                )}

                {post.type === "text" && (
                  <Box w={"250px"} h={"150px"} gap={5} overflow={"hidden"}>
                    <Text>
                     {post.text}
                    </Text>
                  </Box>
                )}
                <Text fontSize={"xs"}>{post.title}</Text>
              </Box>
              </Link>
            ))}

            {/* <Box>
              <Box w={"250px"} h={"150px"} gap={5} overflow={"hidden"}>
                <video
                  src="All-of-Me-John-Legend-Cover.mp4"
                  controls
                  alt="video"
                ></video>
              </Box>
              <Text fontSize={"xs"}>Name and Title</Text>
            </Box>

            <Box>
              <Box w={"250px"} h={"150px"} gap={5} overflow={"hidden"}>
                <img
                  src="creator-5.png"
                  alt="image"
                  width={"100%"}
                  height={"100%"}
                />
              </Box>
              <Text fontSize={"xs"}>Name and Title</Text>
            </Box>

            <Box>
              <Box w={"250px"} h={"150px"} gap={5} overflow={"hidden"}>
                <audio src="Asake-Nzaza.mp3" controls alt="audio" />
              </Box>
              <Text fontSize={"xs"}>Name and Title</Text>
            </Box>

            <Box>
              <Box w={"250px"} h={"150px"} gap={5} overflow={"hidden"}>
                <img src="creator-4.png" alt="image" />
              </Box>
              <Text fontSize={"xs"}>Name and Title</Text>
            </Box>

            <Box>
              <Box w={"250px"} h={"150px"} gap={5} overflow={"hidden"}>
                <audio src="Asake-Nzaza.mp3" controls alt="audio" />
              </Box>
              <Text fontSize={"xs"}>Name and Title</Text>
            </Box>

            <Box>
              <Box w={"250px"} h={"150px"} gap={5} overflow={"hidden"}>
                <Text>
                  Please note that you'll need to attach the following
                  documents: Curriculum vitae Copy of a valid ID (ID-Card,
                  passport, or residence permit) Copy of diplomas/degrees
                  Transfer certificate of the tax Additionally, since your
                  diploma is from a third country, you'll need to attach: Copy
                  of a certificate/diploma
                </Text>
              </Box>
              <Text fontSize={"xs"}>Name and Title</Text>
            </Box>

            <Box>
              <Box w={"250px"} h={"150px"} gap={5} overflow={"hidden"}>
                <video
                  src="All-of-Me-John-Legend-Cover.mp4"
                  controls
                  alt="video"
                ></video>
              </Box>
              <Text fontSize={"xs"}>Name and Title</Text>
            </Box> */}
          
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default CreatorPosts;