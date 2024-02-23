import { Box, Link } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import NextLink from "next/link";
import { ContactInfo } from "@/content";
import EmailIcon from "@mui/icons-material/Email";

const ContactDisplay: React.FC = () => {
   return (
      <Box
         sx={{
            color: "secondary.main",
            paddingRight: "1rem",
            paddingTop: "0.5rem",
            display: { xs: "none", sm: "none", md: "block" },
         }}
      >
         <Box
            sx={{
               display: "flex",
               padding: "0.5rem",
               justifyContent: { xs: "center", sm: "center", md: "flex-start" },
            }}
         >
            <PhoneIcon fontSize="medium" sx={{ marginRight: "1rem" }} />
            <Link
               component={NextLink}
               target="_blank"
               href={ContactInfo.phone.href}
               sx={{ alignSelf: "center" }}
            >
               {ContactInfo.phone.text}
            </Link>
         </Box>
         <Box
            sx={{
               display: "flex",
               padding: "0.5rem",
               justifyContent: { xs: "center", sm: "center", md: "flex-start" },
            }}
         >
            <EmailIcon fontSize="medium" sx={{ marginRight: "1rem" }} />
            <Link
               component={NextLink}
               target="_blank"
               href={ContactInfo.email.href}
               sx={{ alignSelf: "center" }}
            >
               {ContactInfo.email.text}
            </Link>
         </Box>
      </Box>
   );
};

export default ContactDisplay;
