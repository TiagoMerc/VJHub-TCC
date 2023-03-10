import { Box, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import imagem from "../../images/Logo_vertical_Azul.png";

<Text textTransform="uppercase" fontSize="16px" color="#0DB3C4">
22 DE NOV
</Text>
function Post() {
 
  return (
       
    <Box display="flex" flexDir="column">
      
      <Image src={imagem} maxW="100%" />
      <Box
        display="flex"
        flexDir="column"
        padding="18px 11px 18px 16px"
        bg="#EBEBEB80"
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Link
            href="https://logoaliapp.com.br/" target="_blank"
            fontWeight="500"
            textTransform="uppercase"
            fontSize="16px"
            color="#0DB3C4"
          >
            Retailtech
          </Link>
          <Text textTransform="uppercase" fontSize="16px" color="#0DB3C4">
            2023
          </Text>
        </Box>
        <Link
          href="https://logoaliapp.com.br/" target="_blank"
          mt="14px"
          fontWeight="700"
          fontSize="26px"
          color="#0DB3C4"
        >
          Logo Ali
        </Link>
        <Text mt="14px" size="lg" color="#0DB3C4" textAlign="justify">
      O marketplace ideal para você que gosta de comprar em sua cidade e sem sair de casa.
        </Text>
      </Box>
    </Box>
  );
}

export default Post;
