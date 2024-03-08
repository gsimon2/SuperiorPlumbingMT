import { siteURL } from "@/content";
import { Box, Typography } from "@mui/material";
import React from "react";
import SiteIconLinks from "./header/SiteIconLinks";

const Footer: React.FC = () => {
   return (
      <Box
         sx={{
            background: "black",
            color: "white",
            height: "10rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
         }}
      >
         <Typography variant="h6" sx={{ textAlign: "center" }}>
            {`Copyright 2024 | ${siteURL}`}
         </Typography>
         <SiteIconLinks sx={{ paddingTop: "0.5rem" }} alwaysShowAll />
      </Box>
   );
};

export default Footer;
