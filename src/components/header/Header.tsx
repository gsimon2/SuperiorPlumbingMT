import { elevation, maxWidth, themes } from "@/app/Constants";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import SettingsMenu from './SettingsMenu';
import DesktopNavMenu from './DesktopNavMenu';
import MobileNavMenu from './MobileNavMenu';
import HeaderIcon from './HeaderIcon';
import { siteTitle, pages } from '@/content';

const Header: React.FC = () => {
   return (
      <AppBar
         elevation={elevation}
         id="site-header"
         sx={{ position: "static" }}
      >
         <Container maxWidth={maxWidth}>
            <Toolbar>
            <MobileNavMenu pages={pages} />
               <Box
                  sx={{
                     display: { xs: "none", sm: "none", md: "inline-block" },
                     paddingTop: "0.25rem",
                     overflow: "hidden",
                  }}
               >
                  <HeaderIcon sizeInPx={60} />
               </Box>
               <Typography
                  variant="h6"
                  noWrap
                  sx={{
                     mx: 2,
                     display: "flex",
                     fontFamily: "monospace",
                     fontWeight: 700,
                     letterSpacing: ".3rem",
                     color: "inherit",
                     textDecoration: "none",
                  }}
               >
                  {siteTitle}
               </Typography>
               <DesktopNavMenu pages={pages} />
            </Toolbar>
         </Container>
      </AppBar>
   );
};

export default Header;
