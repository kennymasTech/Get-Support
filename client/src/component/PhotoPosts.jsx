import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { axiosPrivate } from "../api/axios";


const PhotoPosts = () => {
  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const handleFileChange = (event) => {
    const file = event.target.files[0];

    let imgUrl;
    if (file && file.type.startsWith("image/")) {
      console.log(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        imgUrl = reader.result;
        // console.log(imgUrl)
        setPhoto(imgUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create an object to represent the post data
    const postData = {
      type: "photo",
      fileUrl: photo,
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

  //   const [photoFile, setPhotoFile] = useState(null);
  //   const [title, setTitle] = useState('');
  //   const [description, setDescription] = useState('');

  //   const handleFileChange = (event) => {
  //     const photo = event.target.files[0];
  //     setPhotoFile(file);
  //   };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();

  //     // Create FormData object to send file and other form data
  //     const formData = new FormData();
  //     formData.append('photo', photoFile);
  //     formData.append('title', title);
  //     formData.append('description', description);

  //     // Send formData to the server (you need to implement this part)
  //     // Example: fetch('/submit-photo', { method: 'POST', body: formData })
  //     console.log('Form submitted:', formData);
  //   };

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
          <FormLabel htmlFor="photo">Select Photo To Upload:</FormLabel>
          <Input
            border={"2px solid blue"}
            h={"200px"}
            w={"530px"}
            id="photo"
            type="file"
            name="photo"
            accept="image/*"
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
            onClick={handleSubmit}
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
      </Flex>
    </>
  );
};

export default PhotoPosts;
