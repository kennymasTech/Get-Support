import { Flex, Image } from '@chakra-ui/react'
import React from 'react'

const HeroCont = () => {
  return (
    <>
    <Flex
        px={{ base: 8, md: 20 }}
        //   justifyContent={{ md: "space-between" }}
        justify={"center"}
        alignItems={"center"}
        gap={{ md: 10, lg: 5 }}
        w={"full"}
        bg={"#FAF8F0"}
        flexDir={"column"}
        >
        <Image 
        pt={"85px"} 
        src='Img 4.png' alt='shop img' 
        />

        <Image 
        pt={"85px"} 
        src='Img 5.png' alt='donation img' 
        />

        <Image 
        pt={"85px"} 
        pb={"85px"}
        src='Img 6.png' alt='creators img' 
        />

    </Flex>
    </>
  )
}

export default HeroCont