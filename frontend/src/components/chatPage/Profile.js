import React from "react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Image,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/hooks";

const Profile = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <span onClick={onOpen}>{children}</span>

      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay
          bg="blackAlpha.700"
          backdropFilter="blur(3px) hue-rotate(3000deg)"
        />
        <ModalContent
          bg={"Gray 900"}
          textColor={"white"}
          fontFamily={"Poppins"}
        >
          <ModalHeader alignItems={"center"}>{user.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Image
              boxSize="150px"
              borderRadius={"5px"}
              src={user.pfp}
              alt={user.name}
            />
            <Text fontWeight="bold" mb="1rem" padding={"15px"}>
              {user.email}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="ghost"
              colorScheme="black"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Profile;
