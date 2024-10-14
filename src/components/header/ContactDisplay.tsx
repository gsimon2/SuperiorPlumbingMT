import { Box, Link } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import NextLink from "next/link";
import { ContactInfo } from "@/content";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

export enum DisplayableContacts {
   phone = "phone",
   email = "email",
   facebook = "facebook",
   google = "google",
}

const ContactInfoMap: Record<DisplayableContacts, { href: string; text: string, icon: (props: any) => React.ReactNode }> = {
   phone: {
      href: ContactInfo.phone.href,
      text: ContactInfo.phone.text,
      icon: (props) => <PhoneIcon {...props} />
   },
   email: {
      href: ContactInfo.email.href,
      text: ContactInfo.email.text,
      icon: (props) => <EmailIcon {...props} />
   },
   facebook: {
      href: ContactInfo.facebook.href,
      text: "Facebook Page",
      icon: (props) => <FacebookIcon {...props} />
   },
   google: {
      href: ContactInfo.google.href,
      text: "Google Page",
      icon: (props) => <GoogleIcon {...props} />
   }
};
export interface IContactDisplayProps {
   iconColor?: string;
   textColor?: string;
   contactsToDisplay: DisplayableContacts[];
}

const ContactDisplay: React.FC<IContactDisplayProps> = ({
   iconColor,
   textColor,
   contactsToDisplay
}) => {
   return (
      <Box>
         {contactsToDisplay?.map(contact => {
            return (
               <Box
                  key={contact}
                  sx={{
                     display: "flex",
                     padding: "0.5rem",
                     justifyContent: "flex-start",
                  }}
               >
                  {ContactInfoMap[contact].icon({
                     fontSize: "medium",
                     sx: { marginRight: "1rem", color: iconColor },
                  })}
                  <Link
                     component={NextLink}
                     target="_blank"
                     href={ContactInfoMap[contact].href}
                     sx={{ alignSelf: "center", color: textColor, wordBreak: "break-word" }}
                  >
                     {ContactInfoMap[contact].text}
                  </Link>
               </Box>

            )
         })}
      </Box>
   );
};

export default ContactDisplay;
