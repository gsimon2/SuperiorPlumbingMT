import { elevation } from "@/app/Constants";
import { AppBar, Typography } from "@mui/material";
import React from "react";

const Header: React.FC<IHeaderProps> = ({}) => {
   return (
      <AppBar elevation={elevation} id="site-header" sx={{position: 'static' }}>
         <Typography
            variant="h6"
            noWrap
            sx={{
               mx: 2,
               display: "flex",
               fontFamily: "monospace",
               fontWeight: 700,
               letterSpacing: ".3rem",
               color: "inherit",
               textDecoration: "none",
            }}
         >
            hi
         </Typography>
      </AppBar>
   );
};

export interface IHeaderProps {}

export default Header;
