"use client";
import { isNavActive } from "@/lib/nav";
import { Anchor, Group } from "@mantine/core";
import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

const DesktopNavMenu: React.FC<IDesktopNavMenuProps> = ({ pages }) => {
   const { pathname } = useRouter();

   return (
      <Group gap="sm" wrap="nowrap" className="header-nav">
         {pages.map((page) => {
            const active = isNavActive(pathname, page.url);
            return (
               <Anchor
                  component={NextLink}
                  href={page.url}
                  key={page.title}
                  c={active ? "gold.4" : "gray.2"}
                  fw={active ? 700 : 500}
                  size="sm"
                  underline="never"
                  style={{ letterSpacing: "0.02em", whiteSpace: "nowrap" }}
               >
                  {page.title}
               </Anchor>
            );
         })}
      </Group>
   );
};

export interface IDesktopNavMenuProps {
   pages: ReadonlyArray<{
      title: string;
      url: string;
   }>;
}

export default DesktopNavMenu;
