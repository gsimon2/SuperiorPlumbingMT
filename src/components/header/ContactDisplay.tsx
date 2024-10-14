import { Box, Link } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import NextLink from "next/link";
import { ContactInfo } from "@/content";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

export interface IContactDisplayProps {
   iconColor?: string;
   textColor?: string;
   includeFacebook?: boolean;
   includeGoogle?: boolean;
}

const ContactDisplay: React.FC<IContactDisplayProps> = ({
   iconColor,
   textColor,
   includeFacebook = false,
   includeGoogle = false,
}) => {
   return (
      <Box>
         <Box
            sx={{
               display: "flex",
               padding: "0.5rem",
               justifyContent: "flex-start",
            }}
         >
            <PhoneIcon
               fontSize="medium"
               sx={{ marginRight: "1rem", color: iconColor }}
            />
            <Link
               component={NextLink}
               target="_blank"
               href={ContactInfo.phone.href}
               sx={{ alignSelf: "center", color: textColor }}
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
            <EmailIcon
               fontSize="medium"
               sx={{ marginRight: "1rem", color: iconColor }}
            />
            <Link
               component={NextLink}
               target="_blank"
               href={ContactInfo.email.href}
               sx={{
                  alignSelf: "center",
                  wordBreak: "break-word",
                  color: textColor,
               }}
            >
               {ContactInfo.email.text}
            </Link>
         </Box>
         {includeFacebook && (
            <Box
               sx={{
                  display: "flex",
                  padding: "0.5rem",
                  justifyContent: "flex-start",
               }}
            >
               <FacebookIcon
                  fontSize="medium"
                  sx={{ marginRight: "1rem", color: iconColor }}
               />
               <Link
                  component={NextLink}
                  target="_blank"
                  href={ContactInfo.facebook.href}
                  sx={{
                     alignSelf: "center",
                     wordBreak: "break-word",
                     color: textColor,
                  }}
               >
                  Facebook Page
               </Link>
            </Box>
         )}
         {includeGoogle && (
            <Box
               sx={{
                  display: "flex",
                  padding: "0.5rem",
                  justifyContent: "flex-start",
               }}
            >
               <GoogleIcon
                  fontSize="medium"
                  sx={{ marginRight: "1rem", color: iconColor }}
               />
               <Link
                  component={NextLink}
                  target="_blank"
                  href={ContactInfo.google.href}
                  sx={{
                     alignSelf: "center",
                     wordBreak: "break-word",
                     color: textColor,
                  }}
               >
                  Google Page
               </Link>
            </Box>
         )}
      </Box>
   );
};

export default ContactDisplay;
