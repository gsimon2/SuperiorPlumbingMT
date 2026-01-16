"use client";
import { elevation, maxWidth } from "@/app/Constants";
import {
   AppBar,
   Box,
   Container,
   Link,
   Toolbar,
   useMediaQuery,
} from "@mui/material";
import React from "react";
import DesktopNavMenu from "./DesktopNavMenu";
import MobileNavMenu from "./MobileNavMenu";
import { pages, siteTitleLogo, dogOnlyLogo } from "@/content";
import Image from "next/image";
import NextLink from "next/link";

const NavigationHeader: React.FC = () => {
   const isSmall = useMediaQuery("(max-width:660px)");

   return (
      <Box sx={{ position: "sticky", top: 0, display: "grid", zIndex: 5 }}>
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
                     <Link
                        component={NextLink}
                        href="/"
                        sx={{
                           color: "unset",
                           ":hover": { textDecoration: "none" },
                           order: {
                              xs: 2,
                              sm: 2,
                              md: 3,
                              lg: 0,
                           },
                           display: {
                              xs: "none",
                              sm: "flex",
                              md: "flex"
                           },
                        }}
                     >
                        <Box
                           sx={{
                              overflow: "hidden"
                           }}
                        >
                           <Image
                              width={120}
                              height={60}
                              src={dogOnlyLogo}
                              alt="logo"
                              style={{
                                 objectFit: "contain",
                                 transform: "scale(1.5) translateY(5px)"
                              }}
                           />
                        </Box>
                     </Link>
                     <Link
                        component={NextLink}
                        href="/"
                        sx={{
                           color: "unset",
                           ":hover": { textDecoration: "none" },
                           position: "relative",
                           display: "flex",
                           flex: 1,
                           minWidth: "120px",
                           minHeight: "60px",
                           overflowX: "clip"
                        }}
                     >
                        <Image src={siteTitleLogo} alt="logo" fill style={{
                           objectFit: "contain",
                           transform: isSmall ? "scale(2.0) translateY(5px)" : "scale(3.75) translateY(5px)"
                        }} />
                     </Link>
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
