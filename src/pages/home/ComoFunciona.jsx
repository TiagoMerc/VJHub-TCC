import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
} from "@chakra-ui/react";

function ComoFunciona() {
  return (
    <Container
      as="section"
      id="comofunciona"
      display="flex"
      flexDir="column"
      maxW="100vw"
      padding={[
        "0 30px 30px 30px",
        "0 30px 30px 30px",
        "0 30px 30px 30px",
        "0 50px 30px 50px",
        "0 170px 30px 170px",
      ]}
      mt={["30px", "30px", "30px", "50px"]}
    >
      <Heading
        as="h2"
        color="#0DB3C4"
        mb="30px"
        fontWeight="700"
        fontSize={["4xl", "4xl", "4xl", "40px"]}
        lineHeight={["4xl", "4xl", "4xl", "53px"]}
      >
        Como funciona
      </Heading>
      <Accordion allowToggle>
        <AccordionItem borderRadius="16px" mb="35px" bg="#0DB3C4">
          <h3>
            <AccordionButton
              bg="#0DB3C4"
              borderRadius="16px"
              _expanded={{ bg: "#0DB3C4" }}
            >
              <AccordionIcon mr="21px" color="white" />
              <Box
                flex="1"
                textAlign="left"
                fontWeight="500"
                fontSize={["md", "md", "md", "16px"]}
                lineHeight={["md", "md", "md", "32px"]}
                color="white"
              >
                Missão 
              </Box>
            </AccordionButton>
          </h3>
          <AccordionPanel
            pb={4}
            fontWeight="400"
            fontSize={["md", "md", "md", "16px"]}
            lineHeight={["md", "md", "md", "32px"]}
            color="white"
          >
            Promover a cultura empreendedora, desenvolver soluções utilizando tecnologia e manter negócios nas mesorregiões do Jequitinhonha.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem borderRadius="16px" mb="35px" bg="#0DB3C4">
          <h3>
            <AccordionButton
              bg="#0DB3C4"
              borderRadius="16px"
              _expanded={{ bg: "#0DB3C4" }}
            >
              <AccordionIcon mr="21px" color="white" />
              <Box
                flex="1"
                textAlign="left"
                fontWeight="500"
                fontSize={["md", "md", "md", "16px"]}
                lineHeight={["md", "md", "md", "32px"]}
                color="white"
              >
                Visão
              </Box>
            </AccordionButton>
          </h3>
          <AccordionPanel
            pb={4}
            fontWeight="400"
            fontSize={["md", "md", "md", "16px"]}
            lineHeight={["md", "md", "md", "32px"]}
            color="white"
          >
           Criar um ecossistema tecnológico e de inovação para apoiar iniciativas na UFVJM, governo e empresas.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem borderRadius="16px" mb="35px" bg="#0DB3C4">
          <h3>
            <AccordionButton
              bg="#0DB3C4"
              borderRadius="16px"
              _expanded={{ bg: "#0DB3C4" }}
            >
              <AccordionIcon mr="21px" color="white" />
              <Box
                flex="1"
                textAlign="left"
                fontWeight="500"
                fontSize={["md", "md", "md", "16px"]}
                lineHeight={["md", "md", "md", "32px"]}
                color="white"
              >
                Código de Conduta
              </Box>
            </AccordionButton>
          </h3>
          <AccordionPanel
            pb={4}
            fontWeight="400"
            fontSize={["md", "md", "md", "16px"]}
            lineHeight={["md", "md", "md", "32px"]}
            color="white"
          >
          Estabelece regras de conduta para evitar situações que possam pôr em dúvida a legalidade e honestidade do hub ou dxs seus/suas colaboradorxs. 
          Dessa forma, direcionando para ações empresariais íntegras, corretas e responsáveis conforme o nosso propósito.     
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}

export default ComoFunciona;
