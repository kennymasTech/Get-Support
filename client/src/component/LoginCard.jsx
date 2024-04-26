import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Logo from "./Logo";
import { FcGoogle } from "react-icons/fc";
import axios from "../api/axios";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const loginCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { setAuth } = useAuth();
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [googleLoading, setGoogleLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/sidebarwithheader";

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    try {
      const response = await axios.post(
        "/auth/login",
        JSON.stringify({ user, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const loggedUser = response?.data?.loggedUser;
      console.log(loggedUser);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("loggedUser", JSON.stringify(loggedUser));

      setAuth({ user, password, loggedUser, accessToken });
      setUser("");
      setPassword("");
      toast.success("Login Successful");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Link to="/">
        <Logo position={"fixed"} zIndex={9999} top={0} />
      </Link>
      <Box
        minH={"100vh"}
        minW={"100vw"}
        align={"center"}
        justify={"center"}
        bg={"#FFFFFF"}
      >
        <Stack align={"center"}>
          <Heading fontSize={"3xl"} mb={"5"}>
            LogIn
          </Heading>
        </Stack>
        <Stack
          borderRadius={"20"}
          w={"50%"}
          boxShadow={"lg"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box rounded={"lg"} p={8} bg={"#F6F6F6"}>
            <Stack
              spacing={4}
              w={{ base: "full", md: "md" }}
              maxW={"md"}
              align={"center"}
            >
              <Stack spacing={4} justify={"center"} align={"center"} p={8}>
                <form onSubmit={handleSubmit}>
                  <Box
                    w={{ base: "100%", md: "80%", lg: "100%" }}
                    maxW="500px"
                    mx="auto"
                  >
                    <FormControl
                      isRequired
                      w={{ base: "l", md: "400px", lg: "500px" }}
                      maxW="500px"
                      mx="auto"
                      my={5}
                    >
                      <FormLabel>Username or Email</FormLabel>
                      <Input
                        type="text"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        placeholder="Enter username or email"
                        border={"2px solid black"}
                        required
                      />
                    </FormControl>

                    <FormControl
                      isRequired
                      w={{ base: "l", md: "400px", lg: "500px" }}
                      maxW="500px"
                      mx="auto"
                      my={5}
                    >
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input
                          // type={showPassword ? "text" : "password"}
                          type="password"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          placeholder="Enter password"
                          border={"2px solid black"}
                          required
                        />
                        {/* <InputRightElement h={"full"}>
                          <Button
                            variant={"ghost"}
                            onClick={() =>
                              setShowPassword((showPassword) => !showPassword)
                            }
                          > */}
                        {/* {showPassword ? <ViewIcon /> : <ViewOffIcon />} */}
                        {/* </Button>
                        </InputRightElement> */}
                      </InputGroup>
                    </FormControl>

                    <Stack spacing={10}>
                      <Button
                        loadingText="Signing in"
                        w={{ base: "full", md: "400px", lg: "500px" }}
                        bg={"#2035A1"}
                        color={"white"}
                        _hover={{
                          bg: "blue.500",
                        }}
                        // size={{ base: "lg", md: "md" }}
                        type="submit"
                        // isLoading={loading}
                        // w={'full'}
                        // w={{ base: "400%", md: "80%", lg: "100%" }}
                        // maxW={{ base: "300px", md: "500px" }}
                        // mx="auto"
                      >
                        LogIn
                      </Button>
                    </Stack>
                    <Stack pt={2}>
                      <Text align={"center"}>
                        Don't Have An Account With Us ?{" "}
                        <Link
                          color={"#2035A1"}
                          onClick={() => setAuthScreen("signup")}
                        >
                          Sign Up
                        </Link>
                      </Text>
                    </Stack>
                  </Box>
                </form>

                <Box position="relative" fontSize={{ base: "l", md: "xl" }}>
                  <Text> Or LogIn With </Text>
                </Box>

                <Box>
                  <Flex fontWeight={400} gap={4}>
                    <Button
                      bg={"#2035A1"}
                      _hover={{ bg: "blue.500" }}
                      size={{ base: "sm", md: "lg" }}
                      leftIcon={<FcGoogle />}
                      color={"white"}
                      // onClick={handleGoogleAuth}
                    >
                      {" "}
                      Continue with Google
                    </Button>
                  </Flex>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
};
export default loginCard;
