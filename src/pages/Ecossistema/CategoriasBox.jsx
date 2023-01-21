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
            UaiDev, CASE, Conferências, semanas de atividades, palestras, encontros, rede de divulgação e outros eventos. 

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
           CITEC, centros de inovação e o ICET.
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
          Investidores, venture capital, crowdfunding, investimento anjo e outros.
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
            Governo Federal, Estadual e Municipal de cada uma das cidades envolvidas. 

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
            UFVJM, IFNMG, UEMG e outras. 

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
            Empresas de grande e médio porte, já consolidadas no mercado. Usiminas, AngloAmerican e outras
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
                Diversidade
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
            LGBTQIA+, PCDs, 50+ e outros.

          </AccordionPanel>
        </AccordionItem>
       
      </Accordion>
    </Box>
  );
}

export default CategoriasBox;
