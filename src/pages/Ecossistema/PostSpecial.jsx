import React from "react";
import { Box, Link, Text } from "@chakra-ui/react";
import imagem from "../../images/artigodestaque.png";
import imagem1 from "../../images/artigo3.png";

function PostSpecial() {
  return (
    <Box
      display="flex"
      flexDir="column"
      padding="16px 15px 26px 16px"
      bg="#D1DCDF80"
      borderRadius="16px"
      maxW="840px"
    >
      <Box
        as="a"
        href="#"
        bg={`linear-gradient(0.81deg, #000000 -22.69%, rgba(0, 0, 0, 0.553302) 3.78%, rgba(0, 0, 0, 0) 56.77%), url(${imagem}) center no-repeat`}
        w="100%"
        maxW="100%"
        borderRadius="14px"
        height="300px"
      />
      <Link
        href="#categoria"
        padding="5px"
        bg="#0DB3C4"
        borderRadius="4px"
        w="98px"
        mt="20px"
        color="white"
        fontWeight="bold"
      >
        Categoria 1
      </Link>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-end"
        mt="18px"
        flexDir={["column", "column", "row"]}
      >
        <Link
          color="#0DB3C4"
          fontWeight="700"
          fontSize="32px"
          lineHeight="43px"
          href="https://publications.iadb.org/pt/ecossistema-de-startups-no-brasil-estudo-de-caracterizacao-do-ecossistema-de-empreendedorismo-de" target="_blank"
        >
          Mapeamento VJHub
        </Link>
        <Box display="flex" gap="15px">
          <Text color="#0DB3C4" fontWeight="700" size="sm">
            15/12/2022
          </Text>
          <Text color="#0DB3C4" fontWeight="700" size="sm">
            00:30
          </Text>
        </Box>
      </Box>


      <Box
        as="a"
        href="https://abstartups.com.br/" target="_blank"
        bg={`linear-gradient(0.81deg, #000000 -22.69%, rgba(0, 0, 0, 0.553302) 3.78%, rgba(0, 0, 0, 0) 56.77%), url(${imagem1}) center no-repeat`}
        w="100%"
        maxW="100%"
        borderRadius="14px"
        height="300px"
      />
      <Link
        href="https://abstartups.com.br/" target="_blank"
        padding="5px"
        bg="#0DB3C4"
        borderRadius="4px"
        w="98px"
        mt="20px"
        color="white"
        fontWeight="bold"
      >
        Categoria 2
      </Link>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-end"
        mt="18px"
        flexDir={["column", "column", "row"]}
      >
        <Link
          href="https://abstartups.com.br/" target="_blank"
          color="#0DB3C4"
          fontWeight="700"
          fontSize="32px"
          lineHeight="43px"
          
        >
          O que ?? empreendedorismo
        </Link>
        <Box display="flex" gap="65px">
          <Text color="#0DB3C4" fontWeight="700" size="sm">
            22/12/2022
          </Text>
          <Text color="#0DB3C4" fontWeight="700" size="sm">
            23:00
          </Text>
        </Box>
      </Box>
    </Box>


    
  );
}

export default PostSpecial;
