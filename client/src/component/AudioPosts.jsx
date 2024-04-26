import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  TagLabel,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Form, Link } from "react-router-dom";
import { axiosPrivate } from "../api/axios";

const AudioPosts = () => {
  const [audio, setAudio] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const handleFileChange = (event) => {
    const file = event.target.files[0];

    let audioUrl;
    if (file && file.type.startsWith("audio/")) {
      console.log(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        audioUrl = reader.result;
        // console.log(audioUrl)
        setAudio(audioUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create an object to represent the post data
    const postData = {
      type: "audio",
      fileUrl: audio,
      title: title,
      description: description,
    };

    console.log(postData);

    try {
      const response = await axiosPrivate.post(
        "/creators/create-post",
        JSON.stringify(postData),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Link to={"/posts"}>
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

    <Flex
      display={"flex"}
      flexDirection={"column"}
      justify={"center"}
      align={"center"}
      >
      <FormControl
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"15px"}
        //   onSubmit={handleSubmit}
      >
        <FormLabel htmlFor="audio" >Select Audio To Upload:</FormLabel>
        <Input
          border={"2px solid blue"}
          h={"200px"}
          w={"530px"}
          id="audio"
          type="file"
          name="audio"
          accept="audio/*"
          width={{ base: "2xs", md: "sm" }}
            onChange={(e) => handleFileChange(e)}
          />

        <FormLabel htmlFor="title">Title:</FormLabel>
        <Input
          id="title"
          type="text"
          name="title"
          bg={"F1F1F1"}
          w={"530px"}
          boxShadow={'lg'}
          width={{ base: "2xs", md: "sm" }}
          //   value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <FormLabel htmlFor="description">Description:</FormLabel>
        <Textarea
          id="description"
          name="description"
          rows={"2"}
          onChange={(e) => setDescription(e.target.value)}
          bg={"F1F1F1"}
          w={"530px"}
          boxShadow={'lg'}
          width={{ base: "2xs", md: "sm" }}
          //   value={description}
        ></Textarea>

        <Button
          type='submit'
          transition={"all 1s"}
          size={{ base: "sm", md: "sm" }}
          width={{ base: "2xs", md: "sm", lg: "sm" }}
          boxShadow="xl"
          bg={"#2035A1"}
          onClick={handleSubmit}

          _hover={{
            bg: "blue.500",
          }}
          color={"#F1F1F1"}
        >
          Post
        </Button>
      </FormControl>
    </Flex>
    </>
  );
};

export default AudioPosts;
