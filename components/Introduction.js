import React, { Fragment } from "react";
import { Avatar, Box, Text, Flex } from "@chakra-ui/react";
import MyAvatar from "../images/avatar.webp";

const Introduction = () => {
  return (
    <Fragment>
      <Box width="75%">
        <Flex>
          <Avatar
            width={300}
            height={300}
            src={MyAvatar}
            borderRadius={"50%"}
          />
          <Box
            ml={50}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Text fontSize={50} fontWeight="bold" m={0}>
              Azra Muhammad Bhaskarogra
            </Text>
            <Text fontSize={38} m={0}>
              XIII SIJA 2 / 13 / 1731115574
            </Text>
            <Text fontSize={38} m={0}>
              Front-End Engineer @ KodingWorks
            </Text>
          </Box>
        </Flex>
      </Box>
    </Fragment>
  );
};

export default Introduction;
