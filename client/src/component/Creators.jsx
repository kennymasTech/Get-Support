import React, { useEffect, useState } from "react";
import SidebarWithHeader from "./SidebarWithHeader";
import {
  Button,
  Card,
  CardHeader,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { MdAudiotrack, MdPostAdd } from "react-icons/md";
import { FaVideo } from "react-icons/fa6";
import { CheckIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { axiosPrivate } from "../api/axios";
// import { Link } from 'react-router-dom'

const Creators = () => {
  const [creators, setCreators] = useState([]);
  useEffect(() => {
    const getCreators = async () => {
      try {
        const response = await axiosPrivate.get("/creators/", {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        console.log(response.data);
        setCreators(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCreators();
  }, []);

  console.log(creators);

  return (
    <>
      {/* <SidebarWithHeader> */}
      <Flex
      //  bg={"#FAF8F0"} flexDir={"column"} align={"center"}
      //  mt={6} 
       pb={5} 
       flexDir={"column"} placeItems={"center"}
      
       >
        <Flex 
        flexDir={"column"} 
        // align={"flex-start"}
        // gap={9}
        // p={10}
        flexWrap={"wrap"}
        color={"black"}
        justifyContent={"flex-start"}
        >
          <Flex fontSize={30} fontWeight={"semibold"}>
            <Text>Trending Creators...</Text>
          </Flex>

          <SimpleGrid
            spacing={10}
            templateColumns={{
              base: "1fr",
              lg: "repeat(3, minmax(30px, 1fr))",
              md: "repeat(2, minmax(20px, 1fr))",
            }}
            my={8}
            gap={5}
          >
            {creators.map((creator) => (
              <Link key={creator._id} to={`/creator/${creator._id}`}>
                <Card
                  key={creator.id}
                  width={300}
                  height={350}
                  // boxShadow={"lg"}
                  bg={"gray"}
                  color={"white"}
                  // borderRadius={25}
                  mt={5}
                >
                  <CardHeader>
                    <Image
                      src={creator.avatar}
                      alt={creator.name}
                      width={250}
                      height={200}
                    />
                  </CardHeader>
                  <Text
                    justifyContent={"center"}
                    align={"center"}
                    textAlign={"center"}
                    fontSize={20}
                    fontWeight={"medium"}
                  >
                   {creator.name}
                  </Text>
                  <Text
                    justifyContent={"center"}
                    align={"center"}
                    textAlign={"center"}
                    fontSize={20}
                    fontWeight={"light"}
                  >
                    Is Creating YouTube Videos
                  </Text>
                </Card>
              </Link>
            ))}
            </SimpleGrid>
            </Flex>

            {/* <Link to={"/user-page"}>
              <Card
                width={300}
                height={350}
                boxShadow={"lg"}
                bg={"gray"}
                borderRadius={25}
                mt={5}
              >
                <CardHeader>
                  <Image
                    src="/creator-2.png"
                    alt="Ola img"
                    width={280}
                    height={300}
                  />
                </CardHeader>
                <Text
                  justifyContent={"center"}
                  align={"center"}
                  textAlign={"center"}
                  fontSize={20}
                  fontWeight={"medium"}
                >
                  Abiodun Kennymas
                </Text>
                <Text
                  justifyContent={"center"}
                  align={"center"}
                  textAlign={"center"}
                  fontSize={20}
                  fontWeight={"light"}
                >
                  Is Building A Creative App
                </Text>
              </Card>
            </Link>

            <Link to={"/user-page"}>
              <Card
                width={300}
                height={350}
                boxShadow={"lg"}
                bg={"gray"}
                borderRadius={25}
                mt={5}
              >
                <CardHeader>
                  <Image
                    src="/creator-3.png"
                    alt="Ola img"
                    width={280}
                    height={300}
                  />
                </CardHeader>
                <Text
                  justifyContent={"center"}
                  align={"center"}
                  textAlign={"center"}
                  fontSize={20}
                  fontWeight={"medium"}
                >
                  Adesoye Qadir
                </Text>
                <Text
                  justifyContent={"center"}
                  align={"center"}
                  textAlign={"center"}
                  fontSize={20}
                  fontWeight={"light"}
                >
                  Is Creating YouTube Videos
                </Text>
              </Card>
            </Link> */}

            {/* <Link to={'/user-page'}> 
          <Card width={300} height={350} boxShadow={"lg"} bg={'gray'} borderRadius={25} mt={5}>
            <CardHeader>
              <Image src="/creator-4.png" alt='Ola img' width={280} height={300} />
            </CardHeader>
              <Text justifyContent={'center'} align={'center'} textAlign={'center'} fontSize={20} fontWeight={"medium"}>Adesoye Qadir</Text>
              <Text justifyContent={'center'} align={'center'} textAlign={'center'} fontSize={20} fontWeight={"light"}>Is Creating YouTube Videos</Text>
          </Card>
          </Link>

          <Link to={'/user-page'}> 
          <Card width={300} height={350} boxShadow={"lg"} bg={'gray'} borderRadius={25} mt={5}>
            <CardHeader>
              <Image src="/creator-5.png" alt='Ola img' width={280} height={300} />
            </CardHeader>
              <Text justifyContent={'center'} align={'center'} textAlign={'center'} fontSize={20} fontWeight={"medium"}>Adesoye Qadir</Text>
              <Text justifyContent={'center'} align={'center'} textAlign={'center'} fontSize={20} fontWeight={"light"}>Is Creating YouTube Videos</Text>
          </Card>
          </Link>

          <Link to={'/user-page'}> 
          <Card width={300} height={350} boxShadow={"lg"} bg={'gray'} borderRadius={25} mt={5}>
            <CardHeader>
              <Image src="/creator-6.png" alt='Ola img' width={280} height={300} />
            </CardHeader>
              <Text justifyContent={'center'} align={'center'} textAlign={'center'} fontSize={20} fontWeight={"medium"}>Adesoye Qadir</Text>
              <Text justifyContent={'center'} align={'center'} textAlign={'center'} fontSize={20} fontWeight={"light"}>Is Creating YouTube Videos</Text>
          </Card>
          </Link> */}


        <Flex p={10} flexDir={"column"} align={"center"}>
          <Flex>
            <Flex fontSize={25} fontWeight={"semibold"}>
              <Text> Enable membership </Text>
            </Flex>
          </Flex>
          <Flex fontSize={20} fontWeight={"light"} textAlign={"center"}>
            <Text>
              Discover how to make a sustainable income with <br /> Memberships.
            </Text>
          </Flex>
          <Link top={" "}>
            <Button
              size={"md"}
              colorScheme={"blue"}
              fontSize={"sm"}
              fontWeight={"regular"}
              mt={2}
              bg={"#2035A1"}
              _hover={{
                bg: "blue.500",
              }}
              color={"#F1F1F1"}
            >
              Start a new membership
            </Button>
          </Link>
        </Flex>
      </Flex>
      {/* </SidebarWithHeader> */}
    </>
  );
};

export default Creators;
