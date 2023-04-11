import React from "react";
import {
  Container,
  Box,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Center,
} from "@chakra-ui/react";

import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p="3"
        bg={"#43434"}
        w="100%"
        m="20px 0 15px 0"
        borderRadius="2rem"
      >
        <Center>
          <Text
            justifyContent="center"
            fontSize={"5xl"}
            fontFamily={"Poppins"}
            opacity="1.0"
            color="white"
          >
            Dark Messenger{" "}
          </Text>
        </Center>
      </Box>
      <Box
        d="flex"
        justifyContent="center"
        p="4"
        bg={"rgba(0, 0, 0, 0.8)"}
        w="100%"
        m="0px 0 15px 0"
        borderRadius="2rem"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab
              width={"50%"}
              color={"white"}
              _selected={{ color: "white", bg: "blue.700" }}
            >
              Login
            </Tab>
            <Tab
              width={"50%"}
              color={"white"}
              _selected={{ color: "white", bg: "blue.700" }}
            >
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
