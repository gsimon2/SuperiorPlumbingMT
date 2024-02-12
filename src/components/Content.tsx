import { elevation } from '@/app/Constants';
import { Paper } from "@mui/material";
import React, { PropsWithChildren } from "react";

const Content: React.FC<PropsWithChildren<IContentProps>> = ({
   sx,
   children,
}) => {
   return (
      <Paper
         elevation={elevation}
         sx={{ padding: "2rem", display: "flex", height: "100%", ...sx }}
      >
         {children}
      </Paper>
   );
};

export interface IContentProps {
   sx?: React.CSSProperties;
}

export default Content;
