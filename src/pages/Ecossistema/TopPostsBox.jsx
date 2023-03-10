import React from "react";
import { Box, Heading, Link, Text } from "@chakra-ui/react";

function TopPostsBox() {
  return (
    <Box
      as="nav"
      display="flex"
      flexDir="column"
      mt="45px"
      padding="17px 31px 29px 12px"
      bg="#EBEBEB80"
      borderRadius="8px"
    >
      <Heading
        fontWeight="700"
        fontSize="26px"
        lineHeight="30px"
        mb="28px"
        color="#0DB3C4"
      >
        Eventos
      </Heading>
      <Box display="flex">
        <Text
          fontWeight="700"
          fontSize="35px"
          lineHeight="41px"
          color="#0DB3C4"
        >
          1
        </Text>
        <Box display="flex" flexDir="column" ml="20px">
          <Link
            href="https://instagram.com/uaidevmg?igshid=MDM4ZDc5MmU=" target="_blank"
            fontWeight="500"
            fontSize="22px"
            lineHeight="23px"
            color="#0DB3C4"
            mb="6px"
            _hover={{ textDecoration: "none" }}
          >
            UaiDev
          </Link>
          <Box display="flex">
            <Link
              href="https://instagram.com/uaidevmg?igshid=MDM4ZDc5MmU=" target="_blank"
              fontWeight="400"
              fontSize="14px"
              lineHeight="16px"
              textTransform="uppercase"
              color="#0DB3C4"
              _hover={{ textDecoration: "none" }}
            >
              UFVJM
            </Link>
            <Text
              fontWeight="400"
              fontSize="14px"
              lineHeight="16px"
              textTransform="uppercase"
              color="#0DB3C4"
              ml="5px"
            >
              - 22 de novembro
            </Text>
          </Box>
        </Box>
      </Box>
      <Box display="flex" mt="28px">
        <Text
          fontWeight="700"
          fontSize="35px"
          lineHeight="41px"
          color="#0DB3C4"
        >
          2
        </Text>
        <Box display="flex" flexDir="column" ml="20px">
          <Link
            href="#post"
            fontWeight="500"
            fontSize="22px"
            lineHeight="23px"
            color="#0DB3C4"
            mb="6px"
            _hover={{ textDecoration: "none" }}
          >
            DevWeekend
          </Link>
          <Box display="flex">
            <Link
              href="#categoria"
              fontWeight="400"
              fontSize="14px"
              lineHeight="16px"
              textTransform="uppercase"
              color="#0DB3C4"
              _hover={{ textDecoration: "none" }}
            >
              UFVJM
            </Link>
            <Text
              fontWeight="400"
              fontSize="14px"
              lineHeight="16px"
              textTransform="uppercase"
              color="#0DB3C4"
              ml="5px"
            >
              - 02 de dezembro
            </Text>
          </Box>
        </Box>
      </Box>
      <Box display="flex" mt="28px">
        <Text
          fontWeight="700"
          fontSize="35px"
          lineHeight="41px"
          color="#0DB3C4"
        >
          3
        </Text>
        <Box display="flex" flexDir="column" ml="20px">
          <Link
            href="#post"
            fontWeight="500"
            fontSize="22px"
            lineHeight="23px"
            color="#0DB3C4"
            mb="6px"
            _hover={{ textDecoration: "none" }}
          >
            Startup Weekend
          </Link>
          <Box display="flex">
            <Link
              href="#categoria"
              fontWeight="400"
              fontSize="14px"
              lineHeight="16px"
              textTransform="uppercase"
              color="#0DB3C4"
              _hover={{ textDecoration: "none" }}
            >
              UFVJM
            </Link>
            <Text
              fontWeight="400"
              fontSize="14px"
              lineHeight="16px"
              textTransform="uppercase"
              color="#0DB3C4"
              ml="5px"
            >
              - 15 de maio
            </Text>
          </Box>
        </Box>
      </Box>
      <Box display="flex" mt="28px">
        <Text
          fontWeight="700"
          fontSize="35px"
          lineHeight="41px"
          color="#0DB3C4"
        >
          4
        </Text>
        <Box display="flex" flexDir="column" ml="20px">
          <Link
            href="https://conteudos.xpi.com.br/expert/" target="_blank"
            fontWeight="500"
            fontSize="22px"
            lineHeight="23px"
            color="#0DB3C4"
            mb="6px"
            _hover={{ textDecoration: "none" }}
          >
            Expert XP
          </Link>
          <Box display="flex">
            <Link
              href="https://conteudos.xpi.com.br/expert/" target="_blank"
              fontWeight="400"
              fontSize="14px"
              lineHeight="16px"
              textTransform="uppercase"
              color="#0DB3C4"
              _hover={{ textDecoration: "none" }}
            >
              XP
            </Link>
            <Text
              fontWeight="400"
              fontSize="14px"
              lineHeight="16px"
              textTransform="uppercase"
              color="#0DB3C4"
              ml="5px"
            >
              - 16 de maio
            </Text>
          </Box>
          
        </Box>
      </Box>

      <Box display="flex" mt="28px">
        <Text
          fontWeight="700"
          fontSize="35px"
          lineHeight="41px"
          color="#0DB3C4"
        >
          5
        </Text>
        <Box display="flex" flexDir="column" ml="20px">
          <Link
            href="#https://case.abstartups.com.br/sobre/" target="_blank"
            fontWeight="500"
            fontSize="22px"
            lineHeight="23px"
            color="#0DB3C4"
            mb="6px"
            _hover={{ textDecoration: "none" }}
          >
            CASE | Abstartups
          </Link>
          <Box display="flex">
            <Link
              href="https://case.abstartups.com.br/sobre/" target="_blank"
              fontWeight="400"
              fontSize="14px"
              lineHeight="16px"
              textTransform="uppercase"
              color="#0DB3C4"
              _hover={{ textDecoration: "none" }}
            >
              Abstartups
            </Link>
            <Text
              fontWeight="400"
              fontSize="14px"
              lineHeight="16px"
              textTransform="uppercase"
              color="#0DB3C4"
              ml="5px"
            >
              - novembro
            </Text>
          </Box>
          
        </Box>
      </Box>
    </Box>
  );
}

export default TopPostsBox;
