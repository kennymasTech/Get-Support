import { Card, CardHeader, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const AboutUsTeam = () => {
  return (
    <>
    <Flex
    overflowY={"hidden"}
    // py={15}
    flexDir={{ base: "column", md: "column" }}
    templateColumns={{ sm: "2, 1fr" }}
    justifyContent={"center"}
    alignItems={"center"}
    textAlign={'center'}
    bg={"#FAF8F0"}
    >
        <Text
        // as={"h2"}
        fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
        fontWeight={"bold"}
        mt={10}
        mb={1}
        // color={"#2035A1"}
        >
            MEET OUR GREAT TEAM

            <Text 
            fontSize={{ base: "sm", md: "lg", lg: "xl" }}
            color={"#C03A2B"}
            >
                OUR TEAM MEMBERS !</Text>
        </Text>

        <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam, deserunt 
        laudantium <br /> libero obcaecati animi eius hic sapiente 
        dolore voluptates itaque.
        </Text>

        <SimpleGrid
          spacing={5}
          templateColumns={{ base: "1fr", lg: "repeat(3, minmax(50px, 1fr))", md: "repeat(2, minmax(50px, 1fr))" }}
          my={8}
        >
          <Card width={300} height={350} boxShadow={"lg"} bg={'gray'} borderRadius={25}>
            <CardHeader>
              <Image src="/Img 10-Ola.png" alt='Ola img' width={280} height={300} />
            </CardHeader>
          </Card>

          <Card width={300} height={350} boxShadow={"lg"} bg={'gray'} borderRadius={25}>
            <CardHeader>
              <Image src="/Img 8-Kenny.png" alt='Kenny img' width={280} height={300} />
            </CardHeader>
          </Card>
          
          <Card width={300} height={350} boxShadow={"lg"} bg={'gray'} borderRadius={25}>
            <CardHeader>
              <Image src="/Img 13-Rocco.png" alt='Rocco img' width={280} height={300}  />
            </CardHeader>
          </Card>
          
          <Card width={300} height={350} boxShadow={"lg"} bg={'gray'} borderRadius={25}>
            <CardHeader>
              <Image src="/Img 9-Supreme.png" alt='Supreme img' width={280} height={300} />
            </CardHeader>
          </Card>

          <Card width={300} height={350} boxShadow={"lg"} bg={'gray'} borderRadius={25}>
            <CardHeader>
              <Image src="/Img 12-Kanas.png" alt='Kanas img' width={280} height={300} />
            </CardHeader>
          </Card>

          <Card width={300} height={350} boxShadow={"lg"} bg={'gray'} borderRadius={25}>
            <CardHeader>
              <Image src="/Img 11-Mohammad.png" alt='Mohammad img' width={280} height={300} />
            </CardHeader>

            {/* <Text
              fontWeight={600}
              mt={0}
              textAlign={"center"}
              textColor={"#2970FF"}
            >
              Nasiudeen Jimoh
            </Text>
            <Text textAlign={"center"} fontWeight={10}>
              Back-End dev.
            </Text>
            <Text textAlign={"center"}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </Text> */}
          </Card>
        </SimpleGrid>

    </Flex>
    </>
  )
}

export default AboutUsTeam