import { Anchor, Box } from "@mantine/core";
import React from "react";

const BBBSeal: React.FC<BBBSealProps> = ({ style }) => {
   return (
      <Box
         style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ...style,
         }}
      >
         <Anchor
            href="https://www.bbb.org/us/mt/superior/profile/plumber/superior-plumbing-service-llc-1296-1000170171/#sealclick"
            target="_blank"
            rel="nofollow"
         >
            {/* BBB blocks Next's image optimizer, so load the seal in the browser. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
               height={42}
               width={200}
               src="https://seal-alaskaoregonwesternwashington.bbb.org/seals/blue-seal-200-42-bbb-1000170171.png"
               alt="Superior Plumbing Service LLC BBB Business Review"
            />
         </Anchor>
      </Box>
   );
};

export interface BBBSealProps {
   style?: React.CSSProperties;
}

export default BBBSeal;
