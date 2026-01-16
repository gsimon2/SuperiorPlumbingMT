"use client"
import { siteURL } from "@/content";
import { Box, Typography } from "@mui/material";
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
         <Typography variant="h6" sx={{ textAlign: "center", mb: '0.5rem' }}>
            {`Copyright ${currentDate.getFullYear()} | ${siteURL}`}
         </Typography>
         <ContactDisplay
            iconColor="secondary.main"
            textColor="secondary.main"
            contactsToDisplay={[DisplayableContacts.phone, DisplayableContacts.email]} />
      </Box>
   );
};

export default Footer;
