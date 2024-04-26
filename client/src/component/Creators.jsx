import React from "react";
import SidebarWithHeader from "./SidebarWithHeader";
import { Button, Card, CardHeader, Flex, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { MdAudiotrack, MdPostAdd } from "react-icons/md";
import { FaVideo } from "react-icons/fa6";
import { CheckIcon } from "@chakra-ui/icons";
// import { Link } from 'react-router-dom'

const Creators = () => {
  return (
    <>
      {/* <SidebarWithHeader> */}
      <Flex bg={"#FAF8F0"} flexDir={"column"} align={"center"}>
        <Flex flexDir={"column"} align={"flex-start"}>
          <Flex fontSize={30} fontWeight={"semibold"}>
            <Text>Trending Creators...</Text>
          </Flex>

          <SimpleGrid
          spacing={10}
          templateColumns={{ base: "1fr", lg: "repeat(3, minmax(50px, 1fr))", md: "repeat(2, minmax(50px, 1fr))" }}
          my={8}
        >
          <Link to={'/creator/'}>
          <Card width={300} height={350} boxShadow={"lg"} bg={'gray'} borderRadius={25} mt={5}>
            <CardHeader>
              <Image src="/creator-1.png" alt='Ola img' width={280} height={300} />
            </CardHeader>
              <Text justifyContent={'center'} align={'center'} textAlign={'center'} fontSize={20} fontWeight={"medium"}>Adesoye Qadir</Text>
              <Text justifyContent={'center'} align={'center'} textAlign={'center'} fontSize={20} fontWeight={"light"}>Is Creating YouTube Videos</Text>
          </Card>
          </Link>

          <Card width={300} height={350} boxShadow={"lg"} bg={'gray'} borderRadius={25} mt={5}>
            <CardHeader>
              <Image src="/creator-2.png" alt='Ola img' width={280} height={300} />
            </CardHeader>
              <Text justifyContent={'center'} align={'center'} textAlign={'center'} fontSize={20} fontWeight={"medium"}>Abiodun Kennymas</Text>
              <Text justifyContent={'center'} align={'center'} textAlign={'center'} fontSize={20} fontWeight={"light"}>Is Building A Creative App</Text>
          </Card>

          <Card width={300} height={350} boxShadow={"lg"} bg={'gray'} borderRadius={25} mt={5}>
            <CardHeader>
              <Image src="/creator-3.png" alt='Ola img' width={280} height={300} />
            </CardHeader>
              <Text justifyContent={'center'} align={'center'} textAlign={'center'} fontSize={20} fontWeight={"medium"}>Adesoye Qadir</Text>
              <Text justifyContent={'center'} align={'center'} textAlign={'center'} fontSize={20} fontWeight={"light"}>Is Creating YouTube Videos</Text>
          </Card>

          <Card width={300} height={350} boxShadow={"lg"} bg={'gray'} borderRadius={25} mt={5}>
            <CardHeader>
              <Image src="/creator-4.png" alt='Ola img' width={280} height={300} />
            </CardHeader>
              <Text justifyContent={'center'} align={'center'} textAlign={'center'} fontSize={20} fontWeight={"medium"}>Adesoye Qadir</Text>
              <Text justifyContent={'center'} align={'center'} textAlign={'center'} fontSize={20} fontWeight={"light"}>Is Creating YouTube Videos</Text>
          </Card>

          <Card width={300} height={350} boxShadow={"lg"} bg={'gray'} borderRadius={25} mt={5}>
            <CardHeader>
              <Image src="/creator-5.png" alt='Ola img' width={280} height={300} />
            </CardHeader>
              <Text justifyContent={'center'} align={'center'} textAlign={'center'} fontSize={20} fontWeight={"medium"}>Adesoye Qadir</Text>
              <Text justifyContent={'center'} align={'center'} textAlign={'center'} fontSize={20} fontWeight={"light"}>Is Creating YouTube Videos</Text>
          </Card>

          <Card width={300} height={350} boxShadow={"lg"} bg={'gray'} borderRadius={25} mt={5}>
            <CardHeader>
              <Image src="/creator-6.png" alt='Ola img' width={280} height={300} />
            </CardHeader>
              <Text justifyContent={'center'} align={'center'} textAlign={'center'} fontSize={20} fontWeight={"medium"}>Adesoye Qadir</Text>
              <Text justifyContent={'center'} align={'center'} textAlign={'center'} fontSize={20} fontWeight={"light"}>Is Creating YouTube Videos</Text>
          </Card>

        </SimpleGrid>

        </Flex>
          <Flex p={10} flexDir={"column"} align={"center"}>
            <Flex>
              <Flex fontSize={25} fontWeight={"semibold"}>
                <Text> Enable membership </Text>
              </Flex>
            </Flex>
            <Flex fontSize={20} fontWeight={"light"} textAlign={"center"}>
              <Text>
                Discover how to make a sustainable income with <br />{" "}
                Memberships.
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
