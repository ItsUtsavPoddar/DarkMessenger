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
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  useToast,
  List,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import {
  ChatState,
  setselectedChat,
  chats,
  setchats,
} from "../../Context/ChatProvider";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserList from "./UserList";
import { URL } from "../../App";

const SideDrawer = () => {
  const [search, setsearch] = useState("");
  const [searchResult, setsearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();
  const { user } = ChatState();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Toast = useToast();

  const LogoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate(`${URL}/`);
  };

  const handleSearch = async () => {
    if (!search) {
      Toast({
        title: "Search something",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(
        `${URL}/api/user?search=${search}`,
        config
      );

      setLoading(false);
      console.log(data);
      setsearchResult(data);
    } catch (error) {
      Toast({
        title: "Failed to get the search results",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "bottom",
      });
      console.log(error);
    }
  };

  const accessChat = async (userId) => {
    try {
      setLoadingChat(true);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.post(`${URL}/api/chat`, { userId }, config);

      //  setselectedChat(data);
      setLoadingChat(false);
      onClose();
    } catch (error) {
      Toast({
        title: "cant fetch chat",
        description: error.message,
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"100%"}
        p="15px 0px 0px 0px"
      >
        <Button variant="ghost" _hover={{ bg: "#5A5A5A" }} onClick={onOpen}>
          <i className="fa-brands fa-searchengin"></i>
          <Text
            d={{ base: "none", md: "flex" }}
            p={"8px"}
            fontFamily={"Poppins"}
            fontSize={"md"}
          >
            Snipe Anyone
          </Text>
        </Button>

        <Text fontFamily={"Poppins"} fontSize={"3xl"}>
          Dark Messenger
        </Text>

        <Menu>
          <MenuButton as={Button} colorScheme="BlackAlpha 50">
            <Avatar name={user.name} src={user.pfp} size="lg" />
          </MenuButton>

          <MenuList
            fontFamily={"Poppins"}
            color={"white"}
            bg={"BlackAlpha 50"}
            border={"0px"}
          >
            <MenuGroup title="Profile" textColor={"#C53030"}>
              <Profile user={user}>
                <MenuItem bg={"BlackAlpha 50"}>Profile</MenuItem>
              </Profile>
              <MenuItem onClick={LogoutHandler} bg={"BlackAlpha 50"}>
                Log Out{" "}
              </MenuItem>
            </MenuGroup>
            <MenuDivider border={"0px"} />
            <MenuGroup title="Help" textColor={"#C53030"}>
              <MenuItem bg={"BlackAlpha 50"}>Docs</MenuItem>
              <MenuItem bg={"BlackAlpha 50"}>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Box>

      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay
          bg="blackAlpha.700"
          backdropFilter="blur(3px) hue-rotate(300deg)"
        />
        <DrawerContent bg={"black"} textColor={"white"} fontFamily={"Poppins"}>
          <DrawerCloseButton />
          <DrawerHeader>Search an User</DrawerHeader>

          <DrawerBody>
            <Box display={"flex"} flexDir={"row"} marginBottom={"20px"}>
              <Input
                border={"0px"}
                placeholder="Type here..."
                mr={"2"}
                value={search}
                onChange={(e) => setsearch(e.target.value)}
              ></Input>
              <Button
                variant="outline"
                colorScheme="gray"
                _hover={{
                  color: "gray",
                }}
                onClick={handleSearch}
                isLoading={loading}
              >
                Search
              </Button>
            </Box>
            {searchResult?.map((user) => (
              <UserList
                key={user._id}
                user={user}
                handleFunction={() => accessChat(user._id)}
              />
            ))}
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
