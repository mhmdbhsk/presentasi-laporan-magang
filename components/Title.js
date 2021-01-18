import React, { Fragment } from "react";
import { Text } from "@chakra-ui/react";

const Head = () => {
  return (
    <Fragment>
      <Text fontSize={50} my={0} fontWeight="bold">
        Aplikasi Pemesanan Makanan
      </Text>
      <Text fontSize={50} mt={0} fontWeight="bold">
        Berbasis Web Menggunakan{" "}
        <a
          href="https://reactjs.org/"
          style={{
            textDecoration: "none",
            color: "#61dafb",
          }}
        >
          React JS
        </a>
      </Text>

      <Text fontSize={32} my={0}>
        <a
          style={{
            textDecoration: "none",
            color: "#61dafb",
          }}
          href="https://instagram.com/mhmdbhsk"
        >
          @mhmdbhsk
        </a>
      </Text>
    </Fragment>
  );
};

export default Head;
