import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Textarea,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import NavBar from "../component/Navbar";
import Footer from "../component/Footer";

const ContactPage = () => {
  return (
    <>
      <NavBar position={"sticky"} zIndex={9999} top={0} />
      <VStack bg={"#FAF8F0"}>
        <Flex mb={{ base: 2, md: 20, lg: "50px" }}>
          <Box>
            <Image src="/Img 14.png" />
          </Box>
        </Flex>
        <Flex
          display={"flex"}
          direction={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          gap={{ base: 8, md: 18 }}
          mt={{ base: 5, md: 8, lg: "15px" }}
          px={20}
        >
          <Box
            // display={"grid"}
            gap={2}
          >
            <Box
              mb={5}
              fontWeight={"bold"}
              fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
            >
              Reach Out To Us
            </Box>
            <Flex mb={5} fontSize={{ base: "md", md: "lg", lg: "xl" }}>
              Questions, Comments, Or Suggestions? <br /> Simply fill in the
              form and we'll be in touch shortly.
            </Flex>
            <Flex
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              flexDir={"column"}
              gap={{ base: 2, md: 4 }}
              fontWeight={"semibold"}
            >
              <Flex gap={3}>
                <IoLocationOutline color={"#B356C1"} /> 2, Sheikh Zakariyah
                Adebayo street, PEGAMUT 102112, Ota, Ogun State.
              </Flex>
              <Flex gap={3}>
                <FiPhoneCall color={"#B356C1"} /> +234 8032638161
              </Flex>
              <Flex gap={3}>
                <CiMail color={"#B356C1"} /> Getsupport.com
              </Flex>
            </Flex>
          </Box>
          <Box
            paddingBottom={{ base: 10, md: 15, lg: 20 }}
            w={{ base: "100%", md: "50%", lg: "60%" }}
          >
            <Flex gap={5}>
              <Input
                bg={"#F9F9F9"}
                color={"#828282"}
                border={"1px"}
                _placeholder={{
                  fontSize: "md",
                }}
                type="text"
                placeholder="First Name..."
                size={{ base: "md", md: "lg" }}
                mb={"20px"}
              />
              <Input
                bg={"#F9F9F9"}
                color={"#828282"}
                border={"1px"}
                type="text"
                _placeholder={{
                  fontSize: "md",
                }}
                size={{ base: "md", md: "lg" }}
                placeholder="Last Name..."
                mb={"20px"}
              />
            </Flex>
            <Input
              bg={"#F9F9F9"}
              color={"#828282"}
              border={"1px"}
              size={{ base: "md", md: "lg" }}
              _placeholder={{
                fontSize: "md",
              }}
              type="text"
              placeholder="Email*"
              mb={"20px"}
            />
            <Input
              bg={"#F9F9F9"}
              color={"#828282"}
              border={"1px"}
              type="text"
              size={{ base: "md", md: "lg" }}
              _placeholder={{
                fontSize: "md",
              }}
              placeholder="Phone Number*"
              mb={"20px"}
            />
            <Textarea
              bg={"#F9F9F9"}
              color={"#828282"}
              border={"1px"}
              type="text"
              _placeholder={{
                fontSize: "md",
              }}
              placeholder="Your Message..."
              mb={"20px"}
            />
            <Button
              transition={"all 1s"}
              boxShadow="xl"
              bg={"#2035A1"}
              type="submit"
              _hover={{
                bg: "blue.500",
              }}
              size={{
                base: "md",
                md: "lg",
              }}
              color={"#F1F1F1"}
            >
              Send Message
            </Button>
          </Box>
        </Flex>
      </VStack>
      <Footer />
    </>
  );
};

export default ContactPage;
