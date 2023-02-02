import { Box, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import imagem from "../../images/ELAS_Ecossistema_de_Apoio.png";

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
            href="https://elasecossistemadeapoio.netlify.app/" target="_blank"
            fontWeight="500"
            textTransform="uppercase"
            fontSize="16px"
            color="#0DB3C4"
          >
            Hub
          </Link>
          <Text textTransform="uppercase" fontSize="16px" color="#0DB3C4">
            2023
          </Text>
        </Box>
        <Link
          href="https://elasecossistemadeapoio.netlify.app/" target="_blank"
          mt="14px"
          fontWeight="700"
          fontSize="26px"
          color="#0DB3C4"
        >
          ELAS Ecossistema de apoio
        </Link>
        <Text mt="14px" size="lg" color="#0DB3C4" textAlign="justify">
        Hub de promoção da cultura empreendedora e tecnológica para o público feminino.
        </Text>
      </Box>
    </Box>
  );
}

export default Post;
