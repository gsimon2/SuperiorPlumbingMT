import { Box, SxProps } from "@mui/material";
import React, { PropsWithChildren } from "react";

const ParallaxContainer: React.FC<
   PropsWithChildren<IParallaxContainerProps>
> = ({ imagePath, children, sx = {} }) => {
   const parallax: SxProps = {
      height: "100%",
      width: "100%",
      backgroundAttachment: {
         xs: "scroll",
         sm: "scroll",
         md: "fixed",
         lg: "fixed",
      },
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
   };

   return (
      <Box sx={{ ...parallax, ...sx, backgroundImage: `url(${imagePath})` }}>
         {children}
      </Box>
   );
};

export interface IParallaxContainerProps {
   imagePath: string;
   sx?: SxProps;
}

export default ParallaxContainer;
