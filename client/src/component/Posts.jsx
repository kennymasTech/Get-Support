import React, { useEffect } from "react";
import SidebarWithHeader from "./SidebarWithHeader";
import { Box, Button, Center, Flex, Img, Text } from "@chakra-ui/react";
import { FaVideo } from "react-icons/fa6";
import { MdAudiotrack } from "react-icons/md";
import { MdPostAdd } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { IoCheckmarkOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CheckIcon } from "@chakra-ui/icons";
import PostItem from "./PostItem";
import AllPosts from "./AllPosts";
import { axiosPrivate } from "../api/axios";

const Posts = () => {
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    const fetchPosts = async (event) => {
      try {
        const response = await axiosPrivate.get("/creators/posts", {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        setPosts(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      {/* <SidebarWithHeader> */}

      <Flex bg={"#FAF8F0"} display={"flex"} align={"center"} p={10}>
        <Flex
          bg={"#FAF8F0"}
          display={"flex"}
          flexDir={"column"}
          justify={"flex-start"}
        >
          <Flex mb={10} fontSize={30} fontWeight={"semibold"}>
            <Text>Create A Post</Text>
          </Flex>

          <Flex gap={10} align={"center"}>
            <Link to={"/write-posts"}>
              {" "}
              <Button
                size={"lg"}
                colorScheme={"blue"}
                fontSize={"sm"}
                fontWeight={"regular"}
                leftIcon={<MdPostAdd />}
              >
                {" "}
                Write Post{" "}
              </Button>
            </Link>
            <Link to={"/photo-posts"}>
              {" "}
              <Button
                size={"lg"}
                colorScheme={"blue"}
                fontSize={"sm"}
                fontWeight={"regular"}
                leftIcon={<IoMdPhotos />}
              >
                {" "}
                Photo Posts{" "}
              </Button>
            </Link>
            <Link to={"/audio-posts"}>
              {" "}
              <Button
                size={"lg"}
                colorScheme={"blue"}
                fontSize={"sm"}
                fontWeight={"regular"}
                leftIcon={<MdAudiotrack />}
              >
                {" "}
                Audio Posts{" "}
              </Button>
            </Link>
            <Link to={"/video-posts"}>
              {" "}
              <Button
                size={"lg"}
                colorScheme={"blue"}
                fontSize={"sm"}
                fontWeight={"regular"}
                leftIcon={<FaVideo />}
              >
                {" "}
                Video Posts{" "}
              </Button>
            </Link>
          </Flex>
          <Flex
            mt={10}
            mb={3}
            fontSize={25}
            fontWeight={"medium"}
            justify={"center"}
          >
            <Flex gap={5} align={"center"}>
              <Text>
                Publish Your Posts Here <CheckIcon color={"green"} />{" "}
              </Text>
              {/* <IoCheckmarkOutline color={'green'} size={30} /> */}
            </Flex>
          </Flex>
          <Flex
            fontSize={20}
            fontWeight={"light"}
            justify={"center"}
            textAlign={"center"}
          >
            <Text>
              Post public posts or make them exclusive to your supporters or
              members.
            </Text>
          </Flex>
          <Flex
            fontSize={20}
            fontWeight={"light"}
            justify={"center"}
            textAlign={"center"}
          >
            <Text>
              Creators who post exclusives regularly tend to earn more support.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      {/* <AllPosts /> */}

      <Box px={8}>
        {posts.map((post) => (
          <Box borderBottom={"1px solid black"} mb={5}>
            <PostItem key={post._id} post={post} />
            {post.type === "text" ? (
              <Center>
                <Text>{post.text}</Text>
              </Center>
            ) : post.type === "photo" ? (
              <Center>
                <img src={post.fileUrl} alt={post.description} />
              </Center>
            ) : post.type === "audio" ? (
              <Center>
                <audio src={post.fileUrl} controls alt={post.description} />
              </Center>
            ) : post.type === "video" ? (
              <Center>
                <video src={post.fileUrl} controls alt={post.description} />
              </Center>
            ) : null}
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Posts;
