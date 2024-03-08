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
         <SiteIconLinks
            sx={{
               padding: { sm: "0", md: "1.5rem" },
               order: { xs: 1, sm: 1, md: 0 },
            }}
         />
         <ContactDisplay />
      </Box>
   );
};

export default TopInfo;
