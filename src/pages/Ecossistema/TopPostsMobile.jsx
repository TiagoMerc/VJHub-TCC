import React from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function TopPostsMobile() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon color="#0DB3C4" />}
        bg="#EBEBEB80"
        color="#0DB3C4"
      >
        Eventos
      </MenuButton>
      <MenuList>
        <MenuItem as="a" href="https://instagram.com/uaidevmg?igshid=MDM4ZDc5MmU=">
          UaiDev
        </MenuItem>
        <MenuItem as="a" href="#post" target="_blank">
          DevWeekend
        </MenuItem>
        <MenuItem as="a" href="#post">
          Startup Weekend
        </MenuItem>
        <MenuItem as="a" href="https://www.expertxp.com.br/" target="_blank">
          Expert XP
        </MenuItem>
        <MenuItem as="a" href="https://case.abstartups.com.br/sobre/" target="_blank">
          CASE | Abstartups
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default TopPostsMobile;
