import React, { Fragment } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import Screen from "../images/ss-setup.png";

const ScreenSetup = () => {
  return (
    <Fragment>
      <Flex flexDir="column" h="100vh" w="75%">
        <Box w="100%" h="70%" pt={48}>
          <img
            src={Screen}
            alt="screen setup"
            height="100%"
          />
        </Box>
        <Box>
          <Text fontWeight="bold">
            Setup dan Inisialisasi Proyek
          </Text>
          <Text>
            Penulis akan menjelaskan tentang bagaimana
            memulai proyek baru, apa saja yang harus di
            install, bagaimana folder strukturnya, dan
            banyak hal lain untuk memulai proyek
          </Text>
        </Box>
      </Flex>
    </Fragment>
  );
};

export default ScreenSetup;
