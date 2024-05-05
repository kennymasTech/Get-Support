import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
//   import Actions from "./Actions";
import { useState } from "react";
import Actions from "./Actions";
import { FaArrowLeft } from "react-icons/fa6";

const UserPosts = ({ likes, replies, postTitle, postImg }) => {
  const [liked, setLiked] = useState(false);

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

    <Link to={"/creator-sub"}>
      <Flex gap={3} mb={4} py={5} px={20}>
        <Flex flexDir={"column"} alignItems={"center"}>
          <Avatar src="/post1.png" name="Mark Zuckerberg" size={"md"} />
          <Box w={"1px"} h={"full"} bg={"gray.light"} my={2}></Box>
          <Box pos={"relative"} w={"full"}>
            <Avatar
              src="/post1.png"
              name="Wale Adenuga"
              size={"xs"}
              pos={"absolute"}
              top={"0"}
              left={"15px"}
              padding={"2px"}
            />
            <Avatar
              src="/post1.png"
              name="Ade Kunle"
              size={"xs"}
              pos={"absolute"}
              bottom={"0"}
              right={"-5px"}
              padding={"2px"}
            />
            <Avatar
              src="/post1.png"
              name="Wole Soyinka"
              size={"xs"}
              pos={"absolute"}
              bottom={"0"}
              left={"4px"}
              padding={"2px"}
            />
          </Box>
        </Flex>

        <Flex flex={1} flexDir={"column"} gap={2}>
          <Flex w={"full"} justifyContent={"space-between"}>
            <Box alignItems={"center"} w={"full"}>
              <Flex align={"center"}>
                <Text fontWeight={"500"}>Abiodun Kenny</Text>
                <Image src="/verified.png" ml={1} w={4} h={4} />
              </Flex>
              <Text>My First Post</Text>
            </Box>
            <Flex
              alignItems={"center"}
              gap={4}
              onClick={(e) => e.preventDefault()}
            >
              <Text>1day</Text>
              <Menu>
                <MenuButton>
                  <BsThreeDots cursor={"pointer"} />
                </MenuButton>
                <MenuList>
                  <MenuGroup>
                    <MenuItem color={"gray.light"}>Mute</MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup>
                    <MenuItem color={"red"}>Block</MenuItem>
                    <MenuItem color={"gray.light"}>Hide</MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup>
                    <MenuItem color={"red"}>Report</MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>

          <Text fontSize={"sm"}>{postTitle}</Text>
          {postImg && (
            <Box
              overflow={"hidden"}
              borderRadius={6}
              border={"1px solid"}
              borderColor={"gray.light"}
            >
              {/* <Image src={postImg} width={"full"} /> */}
            </Box>
          )}
          <Flex mt={1}>
            <Box>
              <img src="Img 10-Ola.png" alt="user-post" />
            </Box>
          </Flex>
          <Actions liked={liked} setLiked={setLiked} />

          {/* <Flex
            gap={2}
            color={"gray.light"}
            fontSize={"sm"}
            alignItems={"center"}
          >
            <Text>{replies} replies</Text>
            <Box w={0.5} h={0.5} bg={"gray.light"} borderRadius={"full"}></Box>
            <Text>{likes} likes</Text>
          </Flex> */}
        </Flex>
      </Flex>
    </Link>
    </>
  );
};

export default UserPosts;
