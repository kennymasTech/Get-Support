import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
  Button,
} from "@chakra-ui/react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { MdDashboard, MdPostAdd, MdCardMembership } from "react-icons/md";
import { FaCreativeCommonsSamplingPlus } from "react-icons/fa6";
import { SlUserFollow, SlUserFollowing } from "react-icons/sl";
import { FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import useLogout from "../hooks/useLogout";
import { ImArrowDownLeft2, ImArrowUpRight2 } from "react-icons/im";
import { MdHome } from "react-icons/md";
import { useRecoilValue } from "recoil";
// import useLogout from "../hooks/useLogout";
import userAtom from "../atoms/userAtom";


const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={"#FFFFFF"}
      boxShadow="1px 0px 2px 1px rgba(0,0,0,0.6)"
      position={"relative"}
      zIndex={99}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      color={"#374957"} ///////////////////////////////////////////////////For the sidebar
      {...rest}
    >
      <Flex
        marginBottom={"10"}
        marginTop={"5"}
        h="20"
        alignItems="center"
        mx="6"
        justifyContent="space-between"
      >
        <Image src="/Logo 2.png" />

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>

      <NavItem
        as={NavLink}
        to={"/dashboard"}
        style={({ isActive }) => ({
          color: isActive ? "rgb(41, 112, 255)" : "",
        })}
        //   icon={MdHome}
        gap={2}
        align={"center"}
        fontSize="md"
        fontWeight="medium"
      >
        <MdDashboard />
        Dashboard
      </NavItem>

      <NavItem
        as={NavLink}
        to={"/posts"}
        style={({ isActive }) => ({
          color: isActive ? "rgb(41, 112, 255)" : "",
        })}
        //   icon={MdHome}
        gap={2}
        align={"center"}
        fontSize="md"
        fontWeight="medium"
      >
        <MdPostAdd />
        Post
      </NavItem>

      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton justifyContent="center" align="center">
            <Flex
              p="4"
              // mx="4"
              gap={2}
              borderRadius="lg"
              role="group"
              cursor="pointer"
              fontSize="md"
              fontWeight="medium"
            >
              {/* <Icon mr="4" fontSize="16" as={ImArrowDownLeft2} /> */}
              <MdCardMembership />
              Membership
            </Flex>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <NavItem
              as={NavLink}
              to={"/creators"}
              style={({ isActive }) => ({
                color: isActive ? "rgb(41, 112, 255)" : "",
              })}
              gap={2}
              pl="12"
              py="2"
              fontSize="md"
              fontWeight="medium"
            >
              <FaCreativeCommonsSamplingPlus />
              Explore Creators
            </NavItem>
          </AccordionPanel>
        </AccordionItem>

        <NavItem
          as={NavLink}
          to={"/invoice-me"}
          style={({ isActive }) => ({
            color: isActive ? "rgb(41, 112, 255)" : "",
          })}
          gap={2}
          fontSize="md"
          fontWeight="medium"
        >
          <SlUserFollowing />
          Following
        </NavItem>
        <NavItem
          as={NavLink}
          to={"/employees"}
          style={({ isActive }) => ({
            color: isActive ? "rgb(41, 112, 255)" : "",
          })}
          gap={2}
          fontSize="md"
          fontWeight="medium"
        >
          <SlUserFollow />
          Followers
        </NavItem>
      </Accordion>

      {/* <Box
        borderRadius={"10"}
		bg={"#2035A1"}
              _hover={{
                bg: "blue.500",
              }}
              color={"#F1F1F1"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
		cursor={"pointer"}
        h={"10"}
        p={"2"}
        position={"absolute"}
        bottom={3}
        left={"50%"}
        transform="translate(-50%, -50%)"
        fontSize="md"
        fontWeight={"md"}
      >
        Upgrade Now
      </Box> */}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Box>
      <Flex
        align="center"
        justifyContent={"center"}
        p="2"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        w={"full"}
        _hover={{
          bg: "#2035A1",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const logout = useLogout();
  // const user = useRecoilValue(userAtom);
  const navigate = useNavigate();
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));


  return (
    <Flex
      pos={"sticky"}
      top={0}
      zIndex={9}
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={"#FAF8F0"}
      // w={'full'}
      boxShadow="base"
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Image display={{ base: "flex", md: "none" }} src="/QBLogo.png" />

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          color="gray.600"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                   src={loggedUser?.avatar}
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm" color="gray.600">
                    {loggedUser?.name}
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem onClick={() => navigate("/Profile")}>Profile</MenuItem>
              <MenuDivider />
              <MenuItem onClick={logout}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const SidebarWithHeader = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      minH="100vh"
      bg={"#F8F8F8"} ///////////////////////////////////////////////////////////For the whole box
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="2">
        {children}
      </Box>
    </Box>
  );
};

export default SidebarWithHeader;
