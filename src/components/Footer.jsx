import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";


const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are one of India’s top crypto trading platforms, providing expert support and insights at an affordable price. With the crypto market’s value reaching billions, it’s clear that digital assets are here to stay—and we’re here to help you make the most of it. 
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;