import {
  Box,
  Button,
  Menu,
  MenuButton,
  Text,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  Avatar,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ChatState } from "../../Context/ChatProvider";

const SideDrawer = () => {
  const [search, setsearch] = useState("");
  const [searchResult, setsearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();
  const { user } = ChatState;

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"100%"}
        p="10 10 10 10"
      >
        <Button variant="ghost" _hover={{ bg: "#5A5A5A" }}>
          <i class="fa-brands fa-searchengin"></i>
          <Text
            d={{ base: "none", md: "flex" }}
            p={"8px"}
            fontFamily={"Poppins"}
            fontSize={"sm"}
          >
            Snipe Anyone
          </Text>
        </Button>

        <Text fontFamily={"Poppins"} fontSize={"3xl"}>
          Dark Messenger
        </Text>

        <Menu>
          <MenuButton as={Button} colorScheme="BlackAlpha 50">
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          </MenuButton>

          <MenuList>
            <MenuGroup title="Profile">
              <MenuItem>My Account</MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};

export default SideDrawer;
