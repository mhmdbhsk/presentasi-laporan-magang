import React, { Fragment } from "react";
import { Box } from "@chakra-ui/react";

const ImageColumn = ({ src, alt }) => {
  return (
    <Fragment>
      <Box
        w="100%"
        h="100vh"
        background="#F5F5F5"
        display="flex"
        alignItems="center"
      >
        <img src={src} alt={alt} width="100%" />
      </Box>
    </Fragment>
  );
};

export default ImageColumn;
