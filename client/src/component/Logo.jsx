import { Flex, Image } from '@chakra-ui/react'
import React from 'react'

const Logo = () => {
  return (
    <Flex bg={"#FFFFFF"}>
					<Image
                        pl={10}
                        pt={10}
                        cursor={"pointer"}
						onClick={() => navigate("/")}
						src="/Logo 2.png"
						alt="logo"
					/>
        </Flex>
  )
}

export default Logo