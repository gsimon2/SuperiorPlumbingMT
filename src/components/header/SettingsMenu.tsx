"use client";
import { Box, IconButton, Menu } from "@mui/material";
import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";

const SettingsMenu: React.FC = () => {
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
   const open = Boolean(anchorEl);
   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <Box sx={{ marginLeft: "auto" }}>
         <IconButton
            onClick={handleClick}
            title="Settings Menu"
            size="large"
            edge="end"
            color="inherit"
            id="settings-menu"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
         >
            <SettingsIcon />
         </IconButton>
         <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               "aria-labelledby": "basic-button",
            }}
         ></Menu>
      </Box>
   );
};

export default SettingsMenu;
