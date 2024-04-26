import {
  Box,
  chakra,
  Container,
  Img,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";

const Logo = (props) => {
  return (
    <Box as="a" href={"#"}>
      <img src="/Logo 2.png" alt="logo img" />
    </Box>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  return (
    <Box bg={"#F7D046"} color={"#222222"}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo />
        <Stack
          direction={{ base: "row", lg: "row" }}
          spacing={{ base: "2", lg: "6" }}
          color={'#2035A1'}
        >
          <Box as="a" href={"#"}>
            Home
          </Box>
          <Box as="a" href={"#"}>
            About
          </Box>
          <Box as="a" href={"#"}>
            Contact
          </Box>
        </Stack>
      </Container>

      <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"#222222"}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2024 Get Support. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter color={"blue"} />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube color={"red"} />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram color={"red"} />
            </SocialButton>
            <SocialButton color={"black"} label={"Tiktok"} href={"#"}>
              <FaTiktok />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
