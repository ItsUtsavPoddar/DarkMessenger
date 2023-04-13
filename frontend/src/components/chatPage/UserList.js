import { Avatar, Box, Grid, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const UserList = ({ user, handleFunction }) => {
  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="RGBA(255, 255, 255, 0.36)"
      _hover={{
        background: "#1C4532",
        color: "white",
      }}
      w="100%"
      display="flex"
      alignItems="center"
      color="white"
      px={3}
      py={2}
      mb={2}
      borderRadius="xl"
      fontStyle={"Poppins"}
    >
      <Grid templateColumns="repeat(2, 5fr)" gap={55}>
        <Avatar
          mr={""}
          size="lg"
          cursor="pointer"
          src={user.pfp}
          name={user.name}
          width={"50%"}
        />
        <Box>
          <Text my={"8px"}>{user.name}</Text>
          <Text fontSize="xs">{user.email}</Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default UserList;
