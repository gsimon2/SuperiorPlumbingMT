"use client"
import { footerLinks, siteURL } from "@/content";
import { Box, Link, Typography } from "@mui/material";
import NextLink from "next/link";
import React from "react";
import ContactDisplay, { DisplayableContacts } from "./header/ContactDisplay";

const Footer: React.FC = () => {
   const currentDate = new Date();

   return (
      <Box
         sx={{
            background: "black",
            color: "secondary.main",
            height: "12rem",
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            justifyContent: { xs: "center", sm: "center", md: "space-around" },
            alignItems: "center",
            marginTop: "2rem",
         }}
      >
         <Box sx={{ textAlign: "center", mb: "0.5rem" }}>
            <Typography variant="h6">
               {`Copyright ${currentDate.getFullYear()} | ${siteURL}`}
            </Typography>
            {footerLinks.map(({ title, url }) => (
               <Link
                  key={url}
                  component={NextLink}
                  href={url}
                  color="secondary.main"
                  variant="body2"
                  sx={{ display: "inline-block", mt: 0.5 }}
               >
                  {title}
               </Link>
            ))}
         </Box>
         <ContactDisplay
            iconColor="secondary.main"
            textColor="secondary.main"
            contactsToDisplay={[DisplayableContacts.phone, DisplayableContacts.email]} />
      </Box>
   );
};

export default Footer;
