import { Grid } from "@mui/material";
import React, { PropsWithChildren } from "react";

const MainContentWrapper: React.FC<PropsWithChildren> = ({ children }) => {
   return (
      <main
         style={{
            marginTop: '1rem'
         }}
      >
         <Grid container spacing={2}>
            {children}
         </Grid>
      </main>
   );
};

export default MainContentWrapper;
