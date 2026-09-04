import { Box } from "@mantine/core";
import React from "react";
import SiteIconLinks from "./SiteIconLinks";
import ContactDisplay, { DisplayableContacts } from "./ContactDisplay";

const TopInfo: React.FC = () => {
   return (
      <Box bg="#0c1224" p="sm">
         <SiteIconLinks />
         <Box visibleFrom="md">
            <ContactDisplay
               c="gray.2"
               contactsToDisplay={[
                  DisplayableContacts.phone,
                  DisplayableContacts.email,
               ]}
            />
         </Box>
      </Box>
   );
};

export default TopInfo;
