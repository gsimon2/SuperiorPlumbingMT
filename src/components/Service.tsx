import { Box, Card, Text, Title } from "@mantine/core";
import React from "react";
import Image from "next/image";

const Service: React.FC<IServiceProps> = ({
   imageSource,
   imageAltText,
   title,
   text,
}) => {
   return (
      <Card withBorder shadow="sm" h="100%">
         {imageSource && (
            <Box
               mx="auto"
               mb="md"
               p="md"
               bg="navy.6"
               w={88}
               h={88}
               style={{
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
               }}
            >
               <Image
                  src={imageSource}
                  alt={imageAltText || ""}
                  height={52}
                  width={52}
                  style={{ filter: "invert(1)" }}
               />
            </Box>
         )}
         <Title order={4} ta="center">
            {title}
         </Title>
         <Text ta="center" mt="sm" c="dimmed" size="sm">
            {text}
         </Text>
      </Card>
   );
};

export interface IServiceProps {
   imageSource?: string;
   imageAltText?: string;
   title: string;
   text: string;
}

export default Service;
