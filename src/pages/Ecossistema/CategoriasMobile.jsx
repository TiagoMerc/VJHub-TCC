import React from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList, Box,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel } from "@chakra-ui/react";
import { ChevronDownIcon} from "@chakra-ui/icons";

function CategoriasMobile() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon color="#0DB3C4" />}
        bg="#EBEBEB80"
        color="#0DB3C4"
      >
        Atores
      </MenuButton>
      <MenuList>
       
        <Accordion allowToggle>
        <AccordionItem borderRadius="16px" mb="35px">
          <h3>
            <AccordionButton
              // bg="#0DB3C4"
              borderRadius="16px"
              //_expanded={{ bg: "#0DB3C4" }}
            >
              <AccordionIcon mr="21px" color="#000000" />
              <Box
                flex="1"
                textAlign="left"
                fontWeight="500"
                fontSize={["md", "md", "md", "16px"]}
                lineHeight={["md", "md", "md", "32px"]}
                color="#000000"
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
            color="#000000"
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
              <AccordionIcon mr="21px" color="#000000" />
              <Box
                flex="1"
                textAlign="left"
                fontWeight="500"
                fontSize={["md", "md", "md", "16px"]}
                lineHeight={["md", "md", "md", "32px"]}
                color="#000000"
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
            color="#000000"
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
              <AccordionIcon mr="21px" color="#000000" />
              <Box
                flex="1"
                textAlign="left"
                fontWeight="500"
                fontSize={["md", "md", "md", "16px"]}
                lineHeight={["md", "md", "md", "32px"]}
                color="#000000"
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
            color="#000000"
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
              <AccordionIcon mr="21px" color="#000000" />
              <Box
                flex="1"
                textAlign="left"
                fontWeight="500"
                fontSize={["md", "md", "md", "16px"]}
                lineHeight={["md", "md", "md", "32px"]}
                color="#000000"
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
            color="#000000"
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
              <AccordionIcon mr="21px" color="#000000" />
              <Box
                flex="1"
                textAlign="left"
                fontWeight="500"
                fontSize={["md", "md", "md", "16px"]}
                lineHeight={["md", "md", "md", "32px"]}
                color="#000000"
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
            color="#000000"
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
              <AccordionIcon mr="21px" color="#000000" />
              <Box
                flex="1"
                textAlign="left"
                fontWeight="500"
                fontSize={["md", "md", "md", "16px"]}
                lineHeight={["md", "md", "md", "32px"]}
                color="#000000"
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
            color="#000000"
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
              <AccordionIcon mr="21px" color="#000000" />
              <Box
                flex="1"
                textAlign="left"
                fontWeight="500"
                fontSize={["md", "md", "md", "16px"]}
                lineHeight={["md", "md", "md", "32px"]}
                color="#000000"
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
            color="#000000"
          >
            Halla Produções, Rede Mulheres do Alto Jequitinhonha, ELAS Ecossistema de Apoio e CER

          </AccordionPanel>
        </AccordionItem>
       
      </Accordion>
      </MenuList>
    </Menu>
  );
}

export default CategoriasMobile;
