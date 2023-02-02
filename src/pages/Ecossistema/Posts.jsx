import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import Lateral from "./Lateral";
import PostSpecial from "./PostSpecial";
import Post from "./Post";
import Post1 from "./Post1";

function Posts() {
  return (
    <Container
      as="section"
      display="flex"
      maxW="100vw"
      mt={["80px", "80px", "140px"]}
      padding={[
        "0 15px 0 15px",
        "0 15px 0 15px",
        "0 50px 0 50px",
        "0 50px 0 50px",
        "0 135px 0 146px",
      ]}
      mb="150px"
      flexDirection={["column", "column", "row"]}
    >
      <Lateral />
      <Box
        as="main"
        display="flex"
        flexDirection="column"
        w={["100%", "100%", "100%", "100%", "60%"]}
      >
        <PostSpecial />
        <Text  fontWeight="700" fontSize="32px" color="#0DB3C4" textAlign="left" lineHeight="22px" marginTop="42px"> Portifólio de Startups</Text>
        <Box
          display="grid"
          mt="100px"
          gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
          rowGap="70px"
          columnGap="28px"
        >
        
          <Post />
         
        <Post1 />
        </Box>
      </Box>
    </Container>
  );
}

export default Posts;
