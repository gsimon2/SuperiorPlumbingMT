"use client";
import { ActionIcon, Menu } from "@mantine/core";
import React from "react";
import { IconSettings } from "@tabler/icons-react";

const SettingsMenu: React.FC = () => {
   return (
      <Menu>
         <Menu.Target>
            <ActionIcon
               variant="subtle"
               color="gray"
               size="lg"
               title="Settings Menu"
               aria-label="Settings Menu"
            >
               <IconSettings size={20} />
            </ActionIcon>
         </Menu.Target>
         <Menu.Dropdown />
      </Menu>
   );
};

export default SettingsMenu;
