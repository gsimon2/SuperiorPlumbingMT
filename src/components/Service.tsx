import { Box, Grid, Typography } from '@mui/material';
import React from "react";
import Image from "next/image";

const Service: React.FC<IServiceProps> = ({
   imageSource,
   imageAltText,
   title,
   text
}) => {
   return (
      <Grid item xs={12} sm={12} md={6} lg={4}>
         <Box
            sx={{
               border: "1px dashed white",
               borderRadius: "0.5rem",
               padding: "1rem",
               height: '100%'
            }}
         >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
               <Image
                  src={imageSource}
                  alt={imageAltText}
                  height={80}
                  width={80}
                  style={{
                     filter: "invert(1)",
                  }}
               />
            </Box>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
               {title}
            </Typography>
            <br />
            <Typography sx={{ textAlign: "center" }}>
               {text}
            </Typography>
         </Box>
      </Grid>
   );
};

export interface IServiceProps {
   imageSource: string;
   imageAltText: string;
   title: string;
   text: string;
}

export default Service;
