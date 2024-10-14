import { Box } from "@mui/material";
import React from "react";
import SiteIconLinks from "./SiteIconLinks";
import ContactDisplay, { DisplayableContacts } from "./ContactDisplay";

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
         <Box
            sx={{
               paddingRight: "1rem",
               paddingTop: "0.5rem",
               display: { xs: "none", sm: "none", md: "block" },
            }}
         >
            <ContactDisplay
               iconColor="secondary.main"
               textColor="secondary.main"
               contactsToDisplay={[
                  DisplayableContacts.phone,
                  DisplayableContacts.email
               ]}
            />
         </Box>
      </Box>
   );
};

export default TopInfo;
