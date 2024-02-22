import { Box } from "@mui/material";
import React from "react";
import SiteIconLinks from "./SiteIconLinks";
import ContactDisplay from "./ContactDisplay";

const TopInfo: React.FC = () => {
   return (
      <Box
         sx={{
            background: "black",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "column", md: "row" },
         }}
      >
         <SiteIconLinks />
         <ContactDisplay />
      </Box>
   );
};

export default TopInfo;
