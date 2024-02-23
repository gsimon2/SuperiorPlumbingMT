import { headerLogo } from "@/content";
import React from "react";
import Image from "next/image";

const HeaderIcon: React.FC<IHeaderIconProps> = ({ sizeInPx }) => {
   return (
      <Image
         width={sizeInPx}
         height={sizeInPx}
         src={headerLogo}
         alt="logo"
      />
   );
};

export interface IHeaderIconProps {
   sizeInPx: number;
}

export default HeaderIcon;
