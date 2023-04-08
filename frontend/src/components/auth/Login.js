import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
  const [show, setshow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleClick = () => setshow(!show);

  const SubmitHandler = () => {};
  return (
    <VStack spacing="5px" color={"black"}>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
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
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
          <Input
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
        style={{
          marginTop: 25,
        }}
        onClick={SubmitHandler}
      >
        Login
      </Button>
    </VStack>
  );
};

export default Login;
