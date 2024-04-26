import {
  Button,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Link,
  Box,
  AbsoluteCenter,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import Logo from "./Logo";

const SignUpCard = () => {
  return (
    <>
      <Logo position={"fixed"} zIndex={9999} top={0} />
      <Box
        minH={"100vh"}
        minW={"100vw"}
        align={"center"}
        justify={"center"}
        bg={"#FFFFFF"}
      >
        <Stack
          borderRadius={"20"}
          w={"50%"}
          // boxShadow={"lg"}
          // border={"2px solid"}
        >
          <Stack align={"center"} justify={"center"}>
            <Heading
              alignItems={"center"}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              textAlign={"center"}
              mb={"5"}
            >
              Create Account
            </Heading>
          </Stack>
          <Flex p={8} align={"center"} justify={"center"} bg={"#F5F5F5"}>
            <Stack spacing={4} w={"full"} maxW={"md"} align={"center"}>
              <form
              // onSubmit={handleSubmit}
              >
                <Stack spacing={4}>
                  <Box
                    // w={{ base: "100%" }}
                    maxW="500px"
                    mx="auto"
                  >
                    <FormControl
                      w={{ base: "l", md: "400px", lg: "500px" }}
                      isRequired
                      my={3}
                    >
                      <FormLabel> Name</FormLabel>
                      <Input
                        type="text"
                        // onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        value={name}
                        color={"black"}
                        border={"2px solid black"}
                        required
                      />
                    </FormControl>

                    <FormControl isRequired my={3}>
                      <FormLabel>Email Address</FormLabel>
                      <Input
                        type="email"
                        // onChange={(e) => setEmail(e.target.value)}
                        // value={email}
                        placeholder="example@mail.com"
                        border={"2px solid black"}
                        required
                      />
                    </FormControl>

                    <FormControl isRequired my={3}>
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input
                          //   type={showPassword ? "text" : "password"}
                          // onChange={(e) => setPassword(e.target.value)}
                          // value={password}
                          placeholder="Enter Password"
                          border={"2px solid black"}
                          required
                        />
                        <InputRightElement h={"full"}>
                          <Button
                            variant={"ghost"}
                            // onClick={() =>
                            // 	setShowPassword((showPassword) => !showPassword)
                            // }
                          >
                            {/* {showPassword ? <ViewIcon /> : <ViewOffIcon />} */}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired my={5}>
                      <FormLabel>Confirm Password</FormLabel>
                      <InputGroup>
                        <Input
                          //   type={showConfirmPassword ? "text" : "password"}
                          // onChange={(e) => setConfirmPassword(e.target.value)}
                          // value={confirmPassword}
                          placeholder="Confirm password"
                          border={"2px solid black"}
                          required
                        />
                        <InputRightElement h={"full"}>
                          <Button
                            variant={"ghost"}
                            // onClick={() =>
                            // 	setShowConfirmPassword(
                            // 		(showConfirmPassword) => !showConfirmPassword
                            // 	)
                            // }
                          >
                            {/* {showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />} */}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>

                    <Stack spacing={10}>
                      <Button
                        loadingText="Signing you up"
                        size={{ base: "sm", md: "lg" }}
                        // h={10}
                        // w={200}
                        bg={"#2035A1"}
                        color={"white"}
                        _hover={{
                          bg: "blue.500",
                        }}
                        type="submit"
                        // isLoading={loading}
                      >
                        Sign up
                      </Button>
                    </Stack>
                  </Box>
                  <Stack>
                    <Text align={"center"}>
                      Already Have An Account With Us ?{" "}
                      <Link
                        color={"#2035A1"}
                        // onClick={() => setAuthScreen("login")}
                      >
                        Login
                      </Link>
                    </Text>
                  </Stack>
                </Stack>
              </form>
              <Box position="relative" fontSize={{ base: "l", md: "xl" }}>
                <Text> Or Sign Up With </Text>
              </Box>

              <Box>
                <Flex fontWeight={400} gap={4}>
                  <Button
                    bg={"#2035A1"}
                    size={{ base: "sm", md: "lg" }}
                    _hover={{ bg: "blue.500" }}
                    leftIcon={<FcGoogle />}
                    color={"white"}
                    // onClick={handleGoogleAuth}
                  >
                    Continue With Google
                  </Button>
                </Flex>
              </Box>
            </Stack>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};
export default SignUpCard;
