import React from "react";
import {
  Box,
  Container,
  Heading,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faWhatsapp,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import VJHub from "../images/VJHub.png";

function Footer() {
  return (
    <Container
      as="footer"
      display="flex"
      flexDir={["column", "column", "row"]}
      maxW="100vw"
      padding={[
        "30px 30px",
        "30px 30px",
        "30px 30px",
        "30px 50px",
        "72px 135px",
      ]}
      mt={["30px", "30px", "30px", "50px"]}
      justifyContent="space-between"
      bg="#0DB3C4"
    >
      <Box display="flex" flexDir="column" mb={["30px", "30px", "0"]}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box
            as={RouterLink}
            to="/"
            _hover=""
            display="flex"
            alignItems="center"
            padding="0"
            mb="10px"
          >
            <Image src={VJHub} alt="Logo" w="111px" h="44px" mr="6.3px" />
            <Box>
              
            </Box>
          </Box>
        </Box>
        <Text
          fontSize={["md", "md", "md", "20px"]}
          lineHeight={["md", "md", "md", "27px"]}
          color="white"
          mb="6px"
        >
          Todos os direitos reservados
        </Text>
        <Link
          as={RouterLink}
          to="/politica"
          _hover=""
          fontWeight="600"
          fontSize={["md", "md", "md", "20px"]}
          lineHeight={["md", "md", "md", "27px"]}
          color="white"
        >
          Política de Privacidade
        </Link>
      </Box>
      <Box
        display="flex"
        flexDir="row"
        flexWrap={["wrap", "wrap", "unset"]}
        gap={["20px", "20px", "unset"]}
        justifyContent={["space-between", "space-between", "unset"]}
      >
        <UnorderedList
          display="flex"
          flexDir="column"
          listStyleType="none"
          ml={["0", "0", "20px", "100px"]}
          mb={["15px", "15px", "0"]}
        >
          <ListItem
            fontWeight="600"
            fontSize={["md", "md", "md", "20px"]}
            lineHeight={["md", "md", "md", "27px"]}
            color="white"
            mb="7px"
          >
            Sobre o VJHub
          </ListItem>
          <ListItem mb="7px">
            <Link
              as={RouterLink}
              to="/quem-somos"
              _hover=""
              fontSize={["md", "md", "md", "20px"]}
              lineHeight={["md", "md", "md", "27px"]}
              color="white"
            >
              Quem somos
            </Link>
          </ListItem>
          <ListItem mb="7px">
            <Link
              as={RouterLink}
              to="/#comofunciona"
              _hover=""
              fontSize={["md", "md", "md", "20px"]}
              lineHeight={["md", "md", "md", "27px"]}
              color="white"
            >
              Como funciona
            </Link>
          </ListItem>
          <ListItem mb="7px">
            <Link
              as={RouterLink}
              to="/#entendamelhor"
              _hover=""
              fontSize={["md", "md", "md", "20px"]}
              lineHeight={["md", "md", "md", "27px"]}
              color="white"
            >
              Entenda melhor
            </Link>
          </ListItem>
        </UnorderedList>
        <UnorderedList
          display="flex"
          flexDir="column"
          listStyleType="none"
          ml={["0px", "0px", "20px", "35px"]}
          mb={["15px", "15px", "0"]}
        >
          <ListItem
            fontWeight="600"
            fontSize={["md", "md", "md", "20px"]}
            lineHeight={["md", "md", "md", "27px"]}
            color="white"
            mb="7px"
          >
            Dicas
          </ListItem>
          <ListItem mb="7px">
            <Link
              as={RouterLink}
              to="/Ecossistema"
              _hover=""
              fontSize={["md", "md", "md", "20px"]}
              lineHeight={["md", "md", "md", "27px"]}
              color="white"
            >
              Nosso Ecossistema
            </Link>
          </ListItem>
          <ListItem mb="7px">
            <Link
              as={RouterLink}
              to="/artigo1"
              _hover=""
              fontSize={["md", "md", "md", "20px"]}
              lineHeight={["md", "md", "md", "27px"]}
              color="white"
            >
              Artigo 1
            </Link>
          </ListItem>
          <ListItem mb="7px">
            <Link
              as={RouterLink}
              to="/artigo2"
              _hover=""
              fontSize={["md", "md", "md", "20px"]}
              lineHeight={["md", "md", "md", "27px"]}
              color="white"
            >
              Artigo 2
            </Link>
          </ListItem>
        </UnorderedList>
        <UnorderedList
          display="flex"
          flexDir="column"
          listStyleType="none"
          ml={["0", "0", "20px", "35px"]}
          mb={["15px", "15px", "0"]}
        >
          <ListItem
            fontWeight="600"
            fontSize={["md", "md", "md", "20px"]}
            lineHeight={["md", "md", "md", "27px"]}
            color="white"
            mb="7px"
          >
            Tire suas dúvidas
          </ListItem>
          <ListItem mb="7px">
            <Link
              as={RouterLink}
              to="/contato"
              _hover=""
              fontSize={["md", "md", "md", "20px"]}
              lineHeight={["md", "md", "md", "27px"]}
              color="white"
            >
              Contato
            </Link>
          </ListItem>
        </UnorderedList>
        <Box display="flex" flexDir="column" ml={["0", "0", "20px", "35px"]}>
          <Text
            fontWeight="600"
            fontSize={["md", "md", "md", "20px"]}
            lineHeight={["md", "md", "md", "27px"]}
            color="white"
            mb="7px"
          >
            Fale com a gente!
          </Text>
          <Text
            as="a"
            href="#"
            fontSize={["md", "md", "md", "20px"]}
            lineHeight={["md", "md", "md", "27px"]}
            color="white"
            mb="17px"
          >
            vjhub.empreendedorismo@dominio.com
          </Text>
          <Box display="flex">
            <Link href="#" target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                color="#fff"
                cursor="pointer"
              />
            </Link>
            {/* <Link href="#tiktok" ml="24px">
              <FontAwesomeIcon
                icon={faTiktok}
                size="2x"
                color="#fff"
                cursor="pointer"
              />
            </Link>
            <Link href="#whatsapp" ml="24px">
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="2x"
                color="#fff"
                cursor="pointer"
              />
            </Link>
            <Link href="#facebook" ml="24px">
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                color="#fff"
                cursor="pointer"
              />
            </Link> */}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Footer;
