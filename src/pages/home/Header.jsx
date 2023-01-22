import {
  Box,
  Container,
  Divider,
  Heading,
  Highlight,
  Image,
  Text,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { MenuMobile, MyMenu } from "../../components";
import BoxContent from "./BoxContent";
import VJHub from "../../images/VJHub.png";
// eslint-disable-next-line camelcase
import mapa_mgValeJequitinhonha1 from "../../images/mapa_mgValeJequitinhonha1.png";

function Header() {
  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xl: false,
    "2xl": false,
  });

  return (  
    <Container
      as="header"
      padding={["10px 10px", "10px 30px", "10px 80px", "0px 130px"]}
      maxW="100vw"
      display="flex"
      flexDir="column"
      bg="#0DB3C4"
      borderRadius="0px 0px 186px 186px"
      position="relative"
      zIndex="auto"
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box
          as="a"
          href="#"
          display="flex"
          alignItems="center"
          padding="30px 0"
        > 
         <Image src={VJHub} alt="Logo" w="166px" h="52px" mr="6.4px" />
         
        </Box>
        {isMobile ? <MenuMobile /> : <MyMenu />}
      </Box>
      <Container
        maxW="100%"
        padding="0"
        display="flex"
        alignItems="center"
        flexDirection={["column", "column", "row"]}
      >
        <Box
          display="flex"
          flexDir="column"
          maxWidth="509px"
          w={["70%", "75%", "50%"]}
          marginBottom={["15px", "25px", "0"]}
          as={motion.div}
          initial={{ opacity: 0, scale: 0.5, x: -200 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition="200ms ease"
        >
          <Heading
            fontWeight="700"
            fontSize={["3xl", "3xl", "3xl", "3xl", "42px"]}
            lineHeight={["3xl", "3xl", "2xl", "3xl", "54px"]}
            color="white"
            mb={["10px", "20px", "5px", "30px"]}
            as="h1"
          >
            <Highlight query="text lorem" styles={{ color: "#FE5996" }}>
            Ecossistema de inovação voltado para o desenvolvimento do Vale do Jequitinhonha
            </Highlight>
          </Heading>
          <Text
            fontWeight="700"
            fontSize={["xl", "xl", "xl", "xl", "24px"]}
            lineHeight={["xl", "xl", "xl", "xl", "29px"]}
            bg="#000000"
            color="white"
            width="max-content"
            padding="8px 10px 9px 10px"
          >
          <Link href="https://portal.ufvjm.edu.br/" target="_black" padding="8px 26px" _hover="">
          UFVJM
          </Link>
          </Text>
        </Box>
        <Box
          ml={["0", "0", "60px", "100px", "180px", "400px"]}
          bg="#FFFFFF"
          borderRadius="45px"
          maxW={["250px", "250px", "unset"]}
          w={("250px", "250px", "385px")}
          h={["235px", "235px", "308px", "308px", "473px"]}
          position="relative"
          display="grid"
          placeItems="center"
          as={motion.div}
          initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition="200ms ease"
        >
          <Image
            // eslint-disable-next-line camelcase
            src={mapa_mgValeJequitinhonha1}
            alt="Mapa do Vale do Jequitinhonha MG"
            position="absolute"
            maxW={["300px", "300px", "400px", "400px", "627px"]}
            h={["218px", "218px", "291px", "291px", "365px"]}
            top={["0px", "32px", "39px"]}
            as={motion.img}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
          />
        </Box>
      </Container>
      <Container
        display="flex"
        bg="#FAFAFA"
        padding={[
          "20px 10px 25px 15px",
          "30px 15px 25px 20px",
          "30px 20px 25px 20px",
          "50px 30px 35px 25px",
        ]}
        borderRadius="13px"
        alignItems="center"
        flexDir={["column", "column", "row"]}
        maxW={["290px", "400px", "650px", "892px"]}
        position="absolute"
        right="50%"
        transform="translate(50%)"
        bottom={["-460px", "-400px", "-215px", "-220px", "-160px"]}
        zIndex="2"
        as={motion.div}
        initial={{ opacity: 0, scale: 0.5, x: "50%", y: 200 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition="200ms ease"
      >
        <BoxContent 
          title="Universidades" 
          text="Podem se destacar como centros de excelência, ao oferecer uma base de talentos." 
        />
        <Divider
          orientation={["horizontal", "horizontal", "vertical"]}
          borderColor="#0DB3C4"
          height={["1px", "1px", "150px"]}
          width={["90%", "90%", "1px"]}
          bg="#0DB3C4"
          opacity=".6"
          margin={["20px 0", "20px 0", "0 40px"]}
        />
        <BoxContent
          title="Empresas"
          text="Oferecem acesso ao mercado como uma rede de oportunidade. "
        />
        <Divider
          orientation={["horizontal", "horizontal", "vertical"]}
          borderColor="#0DB3C4"
          height={["1px", "1px", "150px"]}
          width={["90%", "90%", "1px"]}
          bg="#0DB3C4"
          opacity=".6"
          margin={["20px 0", "20px 0", "0 40px"]}
        />
        <BoxContent 
          title="Governo"
          text="Devem oferecer um ambiente favorável e seguro para os empreendedores."
        />
      </Container>
      <Box
        display={["none", "none", "none", "none", "block"]}
        position="absolute"
        left="-25px"
        bottom="-50px"
        zIndex="-1"
        w="100vw"
        transform="rotate(-2deg)"
        borderRadius="0px 0px 210px 270px"
        height="600px"
      />
    </Container>
  );
}

export default Header;
