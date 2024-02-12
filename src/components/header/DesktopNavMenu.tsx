import { Box, Link } from "@mui/material";
import React from "react";
import NextLink from "next/link";


const DesktopNavMenu: React.FC<IDesktopNavMenuProps> = ({ pages }) => {
   return (
      <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
         {pages.map((page) => (
            <Link
               component={NextLink}
               href={page.url}
               color="inherit"
               noWrap
               key={page.title}
               variant="body2"
               sx={{ p: 1, flexShrink: 0 }}
            >
               {page.title}
            </Link>
         ))}
      </Box>
   );
};

export interface IDesktopNavMenuProps {
   pages: ReadonlyArray<{
      title: string;
      url: string;
   }>;
}

export default DesktopNavMenu;
