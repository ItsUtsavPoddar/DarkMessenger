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

const Signup = () => {
  const [show, setshow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [pfp, setPfp] = useState();
  const handleClick = () => setshow(!show);

  const postDetails = (pics) => {};
  const SubmitHandler = () => {};
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

      <FormControl id="pfp">
        <FormLabel>Upload your face</FormLabel>
        <Input
          border={"0px"}
          type="file"
          p="1.5"
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>

      <Button
        //colorScheme="aqua"
        width={"100%"}
        bg={"blue.700"}
        style={{
          marginTop: 25,
        }}
        onClick={SubmitHandler}
      >
        Submit
      </Button>
    </VStack>
  );
};

export default Signup;
