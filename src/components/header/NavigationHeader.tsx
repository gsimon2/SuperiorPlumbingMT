"use client";
import { elevation, maxWidth } from "@/app/Constants";
import {
   AppBar,
   Box,
   Container,
   Toolbar,
   Typography,
   useMediaQuery,
   useTheme,
} from "@mui/material";
import React from "react";
import DesktopNavMenu from "./DesktopNavMenu";
import MobileNavMenu from "./MobileNavMenu";
import HeaderIcon from "./HeaderIcon";
import { siteTitle, pages } from "@/content";
import Image from "next/image";

const NavigationHeader: React.FC = () => {
   const isSmall = useMediaQuery("(max-width:660px)");

   return (
      <Box sx={{ position: "sticky", top: 0, display: "grid" }}>
         <Box
            sx={{
               background: "black",
               height: "3.5rem",
               zIndex: "-1",
               gridColumn: "1",
               gridRow: "1",
            }}
         />
         <Box
            sx={{
               paddingX: isSmall ? "2rem" : "5rem",
               gridColumn: "1",
               gridRow: "1",
            }}
         >
            <Image
               src="/assets/pipes/pipe-gold-straight-leak.svg"
               alt="pipe"
               height={isSmall ? 32 : 80}
               width={isSmall ? 32 : 80}
               style={{
                  position: "absolute",
                  top: isSmall ? "45%" : "19%",
                  left: "0",
               }}
            />
            <AppBar
               elevation={elevation}
               id="site-header"
               sx={{
                  position: "static",
                  width: "100%",
                  padding: "1rem",
                  border: "2px solid",
                  borderColor: "secondary.main",
                  borderRadius: "0.5rem",
               }}
            >
               <Container maxWidth={maxWidth} sx={{ paddingX: "0 !important" }}>
                  <Toolbar sx={{ paddingX: "0 !important" }}>
                     <MobileNavMenu pages={pages} />
                     <Box
                        sx={{
                           order: {
                              xs: 2,
                              sm: 2,
                              md: 0,
                           },
                           display: { xs: "none", sm: "inline-block" },
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
                           fontSize: {
                              xs: "large",
                              sm: "large",
                              md: "x-large",
                           },
                           fontWeight: 700,
                           letterSpacing: ".3rem",
                           color: "inherit",
                           textDecoration: "none",
                           textWrap: "wrap",
                           flex: 1,
                        }}
                     >
                        {siteTitle}
                     </Typography>
                     <DesktopNavMenu pages={pages} />
                  </Toolbar>
               </Container>
            </AppBar>
            <Image
               src="/assets/pipes/pipe-gold-straight.svg"
               alt="pipe"
               height={isSmall ? 32 : 80}
               width={isSmall ? 32 : 80}
               style={{
                  position: "absolute",
                  top: isSmall ? "39%" : "10%",
                  right: "0",
                  transform: "rotate(180deg)",
               }}
            />
         </Box>
      </Box>
   );
};

export default NavigationHeader;
