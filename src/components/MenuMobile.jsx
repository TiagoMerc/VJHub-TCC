/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

function MenuMobile(props) {
  const pages = [
    { title: "Início", link: "/" },
   // { title: "Quem Somos", link: "/quem-somos" },
   // { title: "Contato", link: "/contato" },
    { title: "Ecossistema", link: "/Ecossistema" },
  ];

  return (
    <Menu>
      <MenuButton
        bg="#000000"
        color="white"
        as={Button}
        _expanded={{ bg: "#000000" }}
        rightIcon={<ChevronDownIcon color="white" />}
        {...props}
      >
        Menu
      </MenuButton>
      <MenuList>
        {pages.map(({ title, link }) => (
          <MenuItem key={title} as={RouterLink} to={link}>
            {title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default MenuMobile;
