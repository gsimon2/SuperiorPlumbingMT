import { elevation } from "@/app/Constants";
import { Paper } from "@mui/material";
import React, { PropsWithChildren } from "react";

const Content: React.FC<PropsWithChildren<IContentProps>> = ({
   sx,
   children,
   bold = false
}) => {
   return (
      <Paper
         elevation={elevation}
         sx={{
            padding: "2rem",
            display: "flex",
            flexDirection: 'column',
            height: "100%",
            borderRadius: "0.5rem",
            ...(bold && {
               color: 'white',
               border: "2px solid",
               borderColor: "secondary.main",
               backgroundColor: 'primary.main'
            }),

            ...sx,
         }}
      >
         {children}
      </Paper>
   );
};

export interface IContentProps {
   sx?: React.CSSProperties;
   bold?: boolean;
}

export default Content;
