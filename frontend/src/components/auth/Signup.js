import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [show, setshow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [pfp, setPfp] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();

  const handleClick = () => setshow(!show);

  const postDetails = (pics) => {
    setLoading(true);
    if (pics === undefined) {
      toast({
        title: "thik se upload kar",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
  };

  const SubmitHandler = async () => {
    setLoading(true);
    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "thik se upload kar, Saare bhar Saare",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    if (password !== confirmpassword) {
      toast({
        title: "same password daale re baba",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    try {
      const config = {
        header: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user",
        { name, email, password },
        config
      );

      toast({
        title: "Reg success",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "bottom",
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);

      history.push("/chats");
    } catch (error) {
      toast({
        title: "some erroe",
        description: error.response.data.message,
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };
  return (
    <VStack spacing="5px" color={"white"}>
      <FormControl id="first-name" isRequired>
        <FormLabel>First Name</FormLabel>
        <Input
          border={"0px"}
          placeholder="Enter Name"
          onChange={(e) => {
            setName(e.target.value);
            // console.log("Adasd");
          }}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          border={"0px"}
          placeholder="Enter Email"
          onChange={(e) => {
            setEmail(e.target.value);
            // console.log("Adasd");
          }}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" bg={"blue.700"} onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
          <Input
            border={"0px"}
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => {
              setPassword(e.target.value);
              // console.log("Adasd");
            }}
          />
        </InputGroup>
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" bg={"blue.700"} onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
          <Input
            border={"0px"}
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => {
              setConfirmpassword(e.target.value);
              // console.log("Adasd");
            }}
          />
        </InputGroup>
      </FormControl>

      {/*
      <FormControl id="pfp">
        <FormLabel>Upload your face</FormLabel>
        <Input
          border={"0px"}
          type="file"
          p="1.5"
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
          </FormControl> */}

      <Button
        //colorScheme="aqua"
        width={"100%"}
        bg={"blue.700"}
        style={{
          marginTop: 25,
        }}
        onClick={SubmitHandler}
        isLoading={loading}
      >
        Submit
      </Button>
    </VStack>
  );
};

export default Signup;
