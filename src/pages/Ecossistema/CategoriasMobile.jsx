import React from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

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
        <MenuItem as="a" href="#categoria">
          Cultura
        </MenuItem>
        <MenuItem as="a" href="#categoria">
          Densidade
        </MenuItem>
        <MenuItem as="a" href="#categoria">
          Acesso a capital
        </MenuItem>
        <MenuItem as="a" href="#categoria">
          Ambiente regulatório
        </MenuItem>
        <MenuItem as="a" href="#categoria">
          Talentos
        </MenuItem>
        <MenuItem as="a" href="#categoria">
          Acesso a mercado
        </MenuItem>
        <MenuItem as="a" href="#categoria">
          Diversidade e impacto
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default CategoriasMobile;
