import { Box, Link } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import NextLink from "next/link";
import { ContactInfo } from "@/content";
import EmailIcon from "@mui/icons-material/Email";

const ContactDisplay: React.FC = () => {
   return (
      <Box>
         <Box
            sx={{
               display: "flex",
               padding: "0.5rem",
               justifyContent: "flex-start",
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
               justifyContent: "flex-start",
            }}
         >
            <EmailIcon fontSize="medium" sx={{ marginRight: "1rem" }} />
            <Link
               component={NextLink}
               target="_blank"
               href={ContactInfo.email.href}
               sx={{ alignSelf: "center", wordBreak: "break-word" }}
            >
               {ContactInfo.email.text}
            </Link>
         </Box>
      </Box>
   );
};

export default ContactDisplay;
