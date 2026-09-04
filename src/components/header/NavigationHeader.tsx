"use client";
import { maxWidth } from "@/Constants";
import { Anchor, Box, Burger, Button, Container, Drawer, Group, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import DesktopNavMenu from "./DesktopNavMenu";
import { pages, dogOnlyLogo, siteTitleLogo, ContactInfo } from "@/content";
import Image from "next/image";
import NextLink from "next/link";
import { reportConversion } from "@/lib/gtag";
import { useRouter } from "next/router";

const NavigationHeader: React.FC = () => {
   const [opened, { toggle, close }] = useDisclosure(false);
   const { pathname } = useRouter();

   return (
      <header className="site-header">
         <Container size={maxWidth} px={{ base: "sm", sm: "md", lg: "xl" }}>
            <div className="header-bar">
               <Anchor
                  component={NextLink}
                  href="/"
                  underline="never"
                  onClick={close}
                  aria-label="Superior Plumbing Service"
               >
                  <Box className="header-dog">
                     <Image
                        src={dogOnlyLogo}
                        alt=""
                        fill
                        sizes="88px"
                        style={{ objectFit: "contain" }}
                     />
                  </Box>
               </Anchor>

               <Anchor
                  component={NextLink}
                  href="/"
                  underline="never"
                  onClick={close}
                  className="header-wordmark"
               >
                  <img src={siteTitleLogo} alt="Superior Plumbing Service" />
               </Anchor>

               <div className="header-bar-right">
                  <Group gap="md" visibleFrom="md" wrap="nowrap" className="header-nav">
                     <DesktopNavMenu pages={pages} />
                     <Button
                        className="header-call-btn"
                        component="a"
                        href={ContactInfo.phone.href}
                        color="gold"
                        c="navy.9"
                        px="lg"
                        onClick={(event) => {
                           event.preventDefault();
                           reportConversion(ContactInfo.phone.href);
                        }}
                     >
                        Call now
                     </Button>
                  </Group>

                  <Burger
                     opened={opened}
                     onClick={toggle}
                     hiddenFrom="md"
                     size="sm"
                     color="white"
                     aria-label="Toggle navigation"
                  />
               </div>
            </div>
         </Container>

         <Drawer
            opened={opened}
            onClose={close}
            padding="md"
            title="Menu"
            hiddenFrom="md"
            zIndex={200}
         >
            <Stack gap="sm" mt="md">
               {pages.map((page) => (
                  <Anchor
                     key={page.title}
                     component={NextLink}
                     href={page.url}
                     c={pathname === page.url ? "navy.6" : "dark"}
                     fw={pathname === page.url ? 700 : 500}
                     onClick={close}
                  >
                     {page.title}
                  </Anchor>
               ))}
               <Button
                  component="a"
                  href={ContactInfo.phone.href}
                  color="gold"
                  c="navy.9"
                  mt="sm"
                  onClick={(event) => {
                     event.preventDefault();
                     close();
                     reportConversion(ContactInfo.phone.href);
                  }}
               >
                  Call now
               </Button>
            </Stack>
         </Drawer>
      </header>
   );
};

export default NavigationHeader;
