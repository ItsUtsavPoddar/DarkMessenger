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
        bg={"gray.400"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="2rem"
        borderWidth="1px"
      >
        <Center>
          <Text
            justifyContent="center"
            fontSize={"4xl"}
            fontFamily={"Poppins"}
            color="black"
          >
            Dark Messenger{" "}
          </Text>
        </Center>
      </Box>
      <Box
        d="flex"
        justifyContent="center"
        p="4"
        bg={"gray.400"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="2rem"
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab
              width={"50%"}
              color={"black"}
              _selected={{ color: "white", bg: "blue.500" }}
            >
              Login
            </Tab>
            <Tab
              width={"50%"}
              color={"black"}
              _selected={{ color: "white", bg: "blue.500" }}
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
