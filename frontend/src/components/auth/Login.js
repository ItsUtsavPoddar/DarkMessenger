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
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [show, setshow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleClick = () => setshow(!show);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const SubmitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
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

    try {
      const config = {
        header: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:3001/api/user/login",
        { email, password },
        config
      );
      console.log(data);

      toast({
        title: "Login success",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "bottom",
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);

      navigate("/chats");
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
        Login
      </Button>
    </VStack>
  );
};

export default Login;
