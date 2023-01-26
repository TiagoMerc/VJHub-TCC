import React from "react";
import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import imgoquee from "../../images/oquee.png";

function Oquee() {
  return (
    <Container
      as="section"
      mt={["50px", "50px", "50px", "150px"]}
      maxW="100vw"
      display="flex"
      flexDir={["column", "column", "column", "row"]}
      justifyContent="space-between"
      alignItems="flex-start"
      padding={[
        "0 30px 30px 30px",
        "0 30px 30px 30px",
        "0 30px 30px 30px",
        "0 50px 30px 50px",
        "0 170px 30px 170px",
      ]}
    >
      
      <Box
        maxW={["100%", "90%", "100%", "800px"]}
        display="flex"
        flexDir="column"
      >
        <Heading
          color="#0DB3C4"
          mb="48px"
          fontWeight="700"
          fontSize={["4xl", "4xl", "4xl", "48px"]}
          lineHeight={["4xl", "4xl", "4xl", "53px"]}
        >
          O que é
        </Heading>
        <Text
          color="#000000"
          fontWeight="400"
          fontSize={["md", "md", "md", "16px"]}
          lineHeight={["md", "md", "md", "32px"]}
          mr={["0", "0", "0", "132px"]}
          textAlign="left"
          mb="30px"
        >
            <Text fontWeight="700" color="#0DB3C4" fontSize="26px">Vale do Jequitinhonha</Text>
            O Vale do Jequitinhonha, localizado na região nordeste de Minas Gerais, abrange 55 municípios divididos em 3
             microrregiões: Alto, Médio e Baixo Jequitinhonha. É um grande território, representando 14% do estado de MG. 
             Ao longo desse território, o exuberante rio Jequitinhonha, com seus 50 mil Km2, se faz presente.
              Mais de 1 milhão de pessoas habitam a região, grande parte dessas em zona rural.
           
            <Text fontWeight="300" color="#FFFFFF" fontSize="10px">a</Text> 
            O Baixo Jequitinhonha compreende a microrregião de Almenara, a mais próxima do Estado da Bahia, enquanto o
            Médio abrange as regiões de Pedra Azul a Araçuaí. Por fim, o Alto Jequitinhonha reúne as microrregiões de Diamantina e Capelinha.            
            <Text fontWeight="300" color="#FFFFFF" fontSize="10px">a</Text> 
            Todo este território traz uma grande diversidade cultural, climática e geográfica que tornam a região potencial para a criação de 
            negócios.
            Contudo, significativa parcela das cidades enfrentam grandes desafios socioeconômicos que para serem vencidos dependem de fatores 
            diversos, de políticas públicas, de disposição e de investimentos. Desafios que podem ser mitigados com os esforços e ação de 
            empreendedores.
        </Text>
        <Text
          color="#000000"
          fontWeight="400"
          fontSize={["md", "md", "md", "16px"]}
          lineHeight={["md", "md", "md", "32px"]}
          mr={["0", "0", "0", "132px"]}
          textAlign="justify"
          mb="10px"
        >
        <Image
        src={imgoquee}
        alt="Regão do Vale do Jequitinhonha"
        alignSelf={["center", "center", "center", "unset"]}
        /> 
           <Text fontWeight="700" fontSize="26px" color="#0DB3C4">Propósito</Text> O VJHub é um hub de promoção da cultura empreendedora e tecnológica. 
           Dessa forma, nosso propósito é desenvolver tecnologias, criar conexões, impulsionar novos negócios, oportunizar a empregabilidade e liderança. 
        </Text>
        <Text
          color="#000000"
          fontWeight="400"
          fontSize={["md", "md", "md", "16px"]}
          lineHeight={["md", "md", "md", "32px"]}
          mr={["0", "0", "0", "132px"]}
          textAlign="justify"
          alt="Imagem do Vale do Jequitinhonha - "
          mb="10px"
        >
          <Text fontWeight="700" fontSize="26px" color="#0DB3C4" textAlign="left">O que é um hub de inovação e como participar</Text> Hubs de inovação se configuram como ambientes físicos ou virtuais
           onde diversas pessoas se encontram para estabelecer conexões e gerar negócios. A composição de um hub acontece por meio da atração de empreendedores com ideias inovadoras, que possam se
            transformar em startups (empresas escaláveis).
          <Text fontWeight="0" color="#FFFFFF" fontSize="5px">a</Text> 

           Ao participarem desses ambientes, as startups estão em contato direto com os demais agentes do ecossistema local, 
           como empresas de médio e grande porte, investidores, além de instituições de ensino e profissionais especialistas em diversas frentes.
        </Text>
       
        <Text
          color="#000000"
          fontWeight="400"
          fontSize={["md", "md", "md", "16px"]}
          lineHeight={["md", "md", "md", "32px"]}
          mr={["0", "0", "0", "132px"]}
          textAlign="justify"
          mb="10px"
        >
          <Text fontWeight="700" fontSize="26px" color="#0DB3C4" textAlign="left">Desenvolvimeto do ecossistema de inovação</Text> Conectar com empresas estabelecidas no mercado e investidores, 
           as startups podem apresentar as soluções que resolvam algum problema que faz parte da tese de investimento de alguns investidores, e assim captar os recursos financeiros necessários para promover a viabilização do negócio.
          <Text fontWeight="300" color="#FFFFFF" fontSize="10px">a</Text> 
            Como também, as pessoas que fazem parte do hub colaboram na criação de produtos e serviços, praticanm a inovação aberta e fortalecem a cultura empreendedora da região.        </Text>

      </Box>
    
    </Container>
  );
}

export default Oquee;
