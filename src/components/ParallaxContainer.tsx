import { Box } from "@mantine/core";
import React, { PropsWithChildren } from "react";

const ParallaxContainer: React.FC<
   PropsWithChildren<IParallaxContainerProps>
> = ({ imagePath, children, style }) => {
   return (
      <Box
         style={{
            height: "100%",
            width: "100%",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage: `url(${imagePath})`,
            ...style,
         }}
      >
         {children}
      </Box>
   );
};

export interface IParallaxContainerProps {
   imagePath: string;
   style?: React.CSSProperties;
}

export default ParallaxContainer;
