import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { MdCardMembership, MdRememberMe } from "react-icons/md";
import { SlUserFollowing } from "react-icons/sl";
import { GiShadowFollower } from "react-icons/gi";
import { FcOnlineSupport } from "react-icons/fc";
// import BarChart from "react-icons";
// import BarChart from "./BarChart";
// import PieChart from "./PieChart";
import { CgSmileSad } from "react-icons/cg";

const Dashboard = () => {
  return (
    <Flex mt={6} pb={9} flexDir={"column"} placeItems={"center"} gap={10}>
      <Flex
        gap={9}
        p={10}
        flexWrap={"wrap"}
        color={"black"}
        justifyContent={"flex-start"}
        
      >
        <Flex
          // w={200}
          flexGrow={1}
          h={130}
          w={200}
          bg={"white"}
          boxShadow={"lg"}
          px={3}
          py={10}
          borderRadius={9}
          placeItems={"center"}
          gap={2}
          justifyContent={"center"}
        >
          <Flex flexDir={"column"} gap={1}>
            <Text fontSize={"xl"}>{/* {paymentSummary?.totalReceived} */}</Text>
            <Text fontSize={"sm"} color={"blue"} fontWeight={700}>
              Membership
            </Text>
          </Flex>
          <MdCardMembership size={50} color={"green"} />
        </Flex>
        <Flex
          flexGrow={1}
          h={130}
          w={200}
          bg={"white"}
          boxShadow={"lg"}
          px={3}
          py={10}
          borderRadius={9}
          placeItems={"center"}
          gap={2}
          justifyContent={"center"}
        >
          <Flex flexDir={"column"} gap={1}>
            <Text fontSize={"xl"}>{/* {paymentSummary?.totalAwaitingBalance} */}</Text>
            <Text fontSize={"sm"} color={"blue"} fontWeight={700}>
              Member
            </Text>
          </Flex>
          <MdRememberMe size={50} color={"green"} />
        </Flex>{" "}
        <Flex
          flexGrow={1}
          h={130}
          w={200}
          bg={"white"}
          boxShadow={"lg"}
          px={3}
          py={10}
          borderRadius={9}
          placeItems={"center"}
          gap={2}
          justifyContent={"center"}
        >
          <Flex flexDir={"column"} gap={1}>
            <Text fontSize={"xl"}>{/* {allSentInvoices?.length} */}</Text>
            <Text fontSize={"sm"} color={"blue"} fontWeight={700}>
              Following
            </Text>
          </Flex>
          <SlUserFollowing size={50} color={"red"}/>
        </Flex>
        <Flex
          flexGrow={1}
          h={130}
          w={200}
          bg={"white"}
          boxShadow={"lg"}
          px={3}
          py={10}
          borderRadius={9}
          placeItems={"center"}
          gap={2}
          justifyContent={"center"}
        >
          <Flex flexDir={"column"} gap={1}>
            <Text fontSize={"xl"}>{/* {allPaidInvoices?.length} */}</Text>
            <Text fontSize={"sm"} color={"blue"} fontWeight={700}>
              Followers
            </Text>
          </Flex>
          <GiShadowFollower size={50} color={"green"} />
        </Flex>
        <Flex
          flexGrow={{ base: 1, xl: 0 }}
          h={130}
          w={200}
          bg={"white"}
          boxShadow={"lg"}
          px={3}
          py={10}
          borderRadius={9}
          placeItems={"center"}
          gap={2}
          justifyContent={"center"}
        >
          <Flex flexDir={"column"} gap={1}>
            <Text fontSize={"xl"}>{/* {allRejectedInvoices?.length} */}</Text>
            <Text fontSize={"sm"} color={"blue"} fontWeight={700}>
              Supports
            </Text>
          </Flex>
          <FcOnlineSupport size={50} color={"#FF1313"} />
        </Flex>
      </Flex>
      <Flex
        w={"90%"}
        p={1}
        flexDir={{ base: "column", lg: "row" }}
        justifyContent={"center"}
        gap={8}
      >
        <Box bg={"white"} w={{ lg: "50%" }} p={3} borderRadius={20}>
          {/* <BarChart invoiceData={allSentInvoices} /> */}
        </Box>
        <Box bg={"white"} w={{ lg: "50%" }} p={3} borderRadius={20}>
          {/* <PieChart
            paidInvoices={allPaidInvoices}
            awaitingPayment={allAwaitingPaymentInvoices}
            partiallyPaid={allPartiallyPaidInvoices}
            rejectedInvoices={allRejectedInvoices}
            overdueInvoices={allOverdueInvoices}
          /> */}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
