import { Box, Link } from '@mui/material';
import React from 'react';
import Image from "next/image";

const BBBSeal: React.FC<BBBSealProps> = ({ sx }) => {

   return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', ...sx }}>
         <Link
            href="https://www.bbb.org/us/mt/superior/profile/plumber/superior-plumbing-service-llc-1296-1000170171/#sealclick"
            target="_blank"
            rel="nofollow">
            <Image
               height={42}
               width={200}
               src="https://seal-alaskaoregonwesternwashington.bbb.org/seals/blue-seal-200-42-bbb-1000170171.png"
               alt="Superior Plumbing Service LLC BBB Business Review" />
         </Link>
      </Box>
   );
};

export interface BBBSealProps {
   sx?: React.CSSProperties;
}

export default BBBSeal;