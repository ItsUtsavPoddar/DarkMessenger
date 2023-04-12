import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Flex, useStatStyles } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/chatPage/SideDrawer";
import Chats from "../components/chatPage/Chats";
import ChatBox from "../components/chatPage/ChatBox";

const Chatpage = () => {
  const { user } = ChatState();
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      {{ user } && <SideDrawer />}
      <Box
        display={"flex"}
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        padding={"10px"}
      >
        {user && <Chats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default Chatpage;
