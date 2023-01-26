import React from "react";
import { Box, Heading, Link, ListItem, UnorderedList,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel} from "@chakra-ui/react";

function CategoriasBox() {
  return (
    <Box
      as="nav"
      display="flex"
      flexDir="column"
      mt="26px"
      padding="20px 16px 45px 14px"
      bg="#EBEBEB80"
      borderRadius="8px"
    >
      <Heading
        as="h2"
        fontWeight="700"
        fontSize="26px"
        lineHeight="30px"
        color="#0DB3C4"
        mb="24px"
      >
        Atores
      </Heading>
      
      <Accordion allowToggle>
        <AccordionItem borderRadius="16px" mb="35px">
          <h3>
            <AccordionButton
              // bg="#0DB3C4"
              borderRadius="16px"
              //_expanded={{ bg: "#0DB3C4" }}
            >
              <AccordionIcon mr="21px" color="#0DB3C4" />
              <Box
                flex="1"
                textAlign="left"
                fontWeight="500"
                fontSize={["md", "md", "md", "16px"]}
                lineHeight={["md", "md", "md", "32px"]}
                color="#0DB3C4"
              >
                Cultura 
              </Box>
            </AccordionButton>
          </h3>
          <AccordionPanel
            pb={4}
            fontWeight="400"
            fontSize={["md", "md", "md", "16px"]}
            lineHeight={["md", "md", "md", "32px"]}
            color="#0DB3C4"
          >
            UaiDev e DiamondValley 

          </AccordionPanel>
        </AccordionItem>

        <AccordionItem borderRadius="16px" mb="35px">
          <h3>
          <AccordionButton
              // bg="#0DB3C4"
              borderRadius="16px"
              //_expanded={{ bg: "#0DB3C4" }}
            >
              <AccordionIcon mr="21px" color="#0DB3C4" />
              <Box
                flex="1"
                textAlign="left"
                fontWeight="500"
                fontSize={["md", "md", "md", "16px"]}
                lineHeight={["md", "md", "md", "32px"]}
                color="#0DB3C4"
              >
                Densidade 
              </Box>
            </AccordionButton>
          </h3>
          <AccordionPanel
            pb={4}
            fontWeight="400"
            fontSize={["md", "md", "md", "16px"]}
            lineHeight={["md", "md", "md", "32px"]}
            color="#0DB3C4"
          >
           CITEC, Decom, UEMG e SEBRAE
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem borderRadius="16px" mb="35px">
          <h3>
          <AccordionButton
              // bg="#0DB3C4"
              borderRadius="16px"
              //_expanded={{ bg: "#0DB3C4" }}
            >
              <AccordionIcon mr="21px" color="#0DB3C4" />
              <Box
                flex="1"
                textAlign="left"
                fontWeight="500"
                fontSize={["md", "md", "md", "16px"]}
                lineHeight={["md", "md", "md", "32px"]}
                color="#0DB3C4"
              >
                Acesso a capital
              </Box>
            </AccordionButton>
          </h3>
          <AccordionPanel
            pb={4}
            fontWeight="400"
            fontSize={["md", "md", "md", "16px"]}
            lineHeight={["md", "md", "md", "32px"]}
            color="#0DB3C4"
          >
          FAPEMIG e Banco Santander
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem borderRadius="16px" mb="35px">
          <h3>
            <AccordionButton
              // bg="#0DB3C4"
              borderRadius="16px"
              //_expanded={{ bg: "#0DB3C4" }}
            >
              <AccordionIcon mr="21px" color="#0DB3C4" />
              <Box
                flex="1"
                textAlign="left"
                fontWeight="500"
                fontSize={["md", "md", "md", "16px"]}
                lineHeight={["md", "md", "md", "32px"]}
                color="#0DB3C4"
              >
                Ambiente regulatório 
              </Box>
            </AccordionButton>
          </h3>
          <AccordionPanel
            pb={4}
            fontWeight="400"
            fontSize={["md", "md", "md", "16px"]}
            lineHeight={["md", "md", "md", "32px"]}
            color="#0DB3C4"
          >
            Governo Federal, Estadual e Municipal

          </AccordionPanel>
        </AccordionItem>


        <AccordionItem borderRadius="16px" mb="35px">
          <h3>
            <AccordionButton
              // bg="#0DB3C4"
              borderRadius="16px"
              //_expanded={{ bg: "#0DB3C4" }}
            >
              <AccordionIcon mr="21px" color="#0DB3C4" />
              <Box
                flex="1"
                textAlign="left"
                fontWeight="500"
                fontSize={["md", "md", "md", "16px"]}
                lineHeight={["md", "md", "md", "32px"]}
                color="#0DB3C4"
              >
                Talentos 
              </Box>
            </AccordionButton>
          </h3>
          <AccordionPanel
            pb={4}
            fontWeight="400"
            fontSize={["md", "md", "md", "16px"]}
            lineHeight={["md", "md", "md", "32px"]}
            color="#0DB3C4"
          >
            UFVJM, IFNMG, UEMG e SENAI

          </AccordionPanel>
        </AccordionItem>
        <AccordionItem borderRadius="16px" mb="35px">
          <h3>
          <AccordionButton
              // bg="#0DB3C4"
              borderRadius="16px"
              //_expanded={{ bg: "#0DB3C4" }}
            >
              <AccordionIcon mr="21px" color="#0DB3C4" />
              <Box
                flex="1"
                textAlign="left"
                fontWeight="500"
                fontSize={["md", "md", "md", "16px"]}
                lineHeight={["md", "md", "md", "32px"]}
                color="#0DB3C4"
              >
                Acesso a mercado
              </Box>
            </AccordionButton>
          </h3>
          <AccordionPanel
            pb={4}
            fontWeight="400"
            fontSize={["md", "md", "md", "16px"]}
            lineHeight={["md", "md", "md", "32px"]}
            color="#0DB3C4"
          >
            Sigma Lithium, Aperam, Herculano Mineração e Jequitinhonha Alimentos
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem borderRadius="16px" mb="35px">
          <h3>
            <AccordionButton
              // bg="#0DB3C4"
              borderRadius="16px"
              //_expanded={{ bg: "#0DB3C4" }}
            >
              <AccordionIcon mr="21px" color="#0DB3C4" />
              <Box
                flex="1"
                textAlign="left"
                fontWeight="500"
                fontSize={["md", "md", "md", "16px"]}
                lineHeight={["md", "md", "md", "32px"]}
                color="#0DB3C4"
              >
                Diversidade e impacto
              </Box>
            </AccordionButton>
          </h3>
          <AccordionPanel
            pb={4}
            fontWeight="400"
            fontSize={["md", "md", "md", "16px"]}
            lineHeight={["md", "md", "md", "32px"]}
            color="#0DB3C4"
          >
            Halla Produções, Rede Mulheres do Alto Jequitinhonha, ELAS Ecossistema de Apoio e CER

          </AccordionPanel>
        </AccordionItem>
       
      </Accordion>
    </Box>
  );
}

export default CategoriasBox;
