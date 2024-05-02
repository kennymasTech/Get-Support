import { useNavigate } from 'react-router-dom';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { axiosPrivate } from "../api/axios";

const TextPosts = () => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(description);
  }, [description]);

  const handleSubmit = async(event) => {
    event.preventDefault();

    // Create an object to represent the post data
    const postData = {
      type: "text",
      text: text,
      title: title,
      description: description,
    };

    try {
      const response = await axiosPrivate.post(
        "/creators/create-post",
        JSON.stringify(postData),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
console.log(response)
navigate('/posts')
 
    } catch (error) {
      console.log(error);
    }

    // Send postData to the server (you need to implement this part)
    // Example: fetch('/submit-text', { method: 'POST', body: JSON.stringify(postData), headers: { 'Content-Type': 'application/json' } })
    console.log("Form submitted:", postData);
  };

  return (
    <>
      {/* <div>
      <h1>Post Text Content</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <label htmlFor="description">Description:</label><br />
        <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="4" cols="50"></textarea>
        <br />
        <label htmlFor="text">Text:</label><br />
        <textarea id="text" name="text" value={text} onChange={(e) => setText(e.target.value)} rows="8" cols="50"></textarea>
        <br />
        <button type="submit">Post</button>
      </form>
    </div> */}

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
        <form onSubmit={handleSubmit}>
          <FormControl
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"15px"}
          >
            <FormLabel htmlFor="text">Input Text To Upload:</FormLabel>
            <Textarea
              border={"2px solid blue"}
              h={"200px"}
              w={"530px"}
              id="text"
              type="text"
              name="text"
              // accept="text/*"
              width={{ base: "2xs", md: "sm" }}
              onChange={(e) => setText(e.target.value)}
            />

            <FormLabel htmlFor="title">Title:</FormLabel>
            <Input
              id="title"
              type="text"
              name="title"
              bg={"F1F1F1"}
              w={"530px"}
              boxShadow={"lg"}
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
              boxShadow={"lg"}
              width={{ base: "2xs", md: "sm" }}
              //   value={description}
            ></Textarea>

            <Button
              type="submit"
              transition={"all 1s"}
              size={{ base: "sm", md: "sm" }}
              width={{ base: "2xs", md: "sm", lg: "sm" }}
              boxShadow="xl"
              bg={"#2035A1"}
              _hover={{
                bg: "blue.500",
              }}
              color={"#F1F1F1"}
            >
              Post
            </Button>
          </FormControl>
        </form>
      </Flex>
    </>
  );
};

export default TextPosts;
