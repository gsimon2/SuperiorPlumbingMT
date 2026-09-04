import { Anchor, Box, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

export function JoinTeamRibbon() {
   return (
      <Anchor
         component={Link}
         href="/careers"
         underline="never"
         className="hiring-ribbon"
      >
         <Box
            bg="red.7"
            c="white"
            px="md"
            py={8}
            style={{
               borderRadius: 8,
               boxShadow: "0 8px 18px rgba(0,0,0,0.18)",
               maxWidth: 240,
            }}
         >
            <Text fw={800} size="sm" ta="center" lh={1.35}>
               Now Hiring · Join Our Team
            </Text>
         </Box>
      </Anchor>
   );
}
