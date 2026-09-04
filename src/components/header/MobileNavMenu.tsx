"use client";
import { Anchor, Drawer, Stack } from "@mantine/core";
import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

const MobileNavMenu: React.FC<IMobileNavMenuProps> = ({
   pages,
   opened,
   onClose,
}) => {
   const { pathname } = useRouter();

   return (
      <Drawer opened={opened} onClose={onClose} padding="md" title="Menu">
         <Stack gap="sm" mt="md">
            {pages.map((page) => (
               <Anchor
                  key={page.title}
                  component={NextLink}
                  href={page.url}
                  c={pathname === page.url ? "navy.6" : "dark"}
                  fw={pathname === page.url ? 700 : 500}
                  onClick={onClose}
               >
                  {page.title}
               </Anchor>
            ))}
         </Stack>
      </Drawer>
   );
};

export interface IMobileNavMenuProps {
   pages: ReadonlyArray<{
      title: string;
      url: string;
   }>;
   opened: boolean;
   onClose: () => void;
}

export default MobileNavMenu;
