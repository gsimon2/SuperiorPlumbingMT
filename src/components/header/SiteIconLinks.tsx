import { IconButton, Stack } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { ContactInfo } from "@/content";

const SiteIconLinks: React.FC = () => {
   return (
      <Stack
         direction="row"
         spacing={2}
         sx={{
            padding: { sm: "0", md: "1.5rem" },
            justifyContent: "center",
            order: { xs: 1, sm: 1, md: 0 },
         }}
      >
         <IconButton
            aria-label="Phone number"
            title="Phone number"
            href={ContactInfo.phone.href}
            sx={{
               color: "secondary.main",
               display: { sm: "inline-flex", md: "none" },
            }}
         >
            <PhoneIcon />
         </IconButton>
         <IconButton
            aria-label="Email"
            title="Email"
            href={ContactInfo.email.href}
            sx={{
               color: "secondary.main",
               display: { sm: "inline-flex", md: "none" },
            }}
         >
            <EmailIcon />
         </IconButton>
         <IconButton
            aria-label="Google business page"
            title="Google business page"
            href={ContactInfo.google.href}
            sx={{ color: "secondary.main" }}
         >
            <GoogleIcon />
         </IconButton>
         <IconButton
            aria-label="Facebook business page"
            title="Facebook business page"
            href={ContactInfo.facebook.href}
            sx={{ color: "secondary.main" }}
         >
            <FacebookIcon />
         </IconButton>
         <IconButton
            aria-label="Youtube business page"
            title="Youtube business page"
            href={ContactInfo.youtube.href}
            sx={{ color: "secondary.main" }}
         >
            <YouTubeIcon />
         </IconButton>
      </Stack>
   );
};

export default SiteIconLinks;
