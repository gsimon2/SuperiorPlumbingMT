"use client";
import { maxWidth } from "@/Constants";
import { Anchor, Box, Burger, Button, Container, Divider, Drawer, Group, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import DesktopNavMenu from "./DesktopNavMenu";
import { pages, dogOnlyLogo, headerLogo, siteTitleLogo, ContactInfo, footerLinks, siteTitle, siteURL } from "@/content";
import Image from "next/image";
import NextLink from "next/link";
import { reportConversion } from "@/lib/gtag";
import { useRouter } from "next/router";
import SiteIconLinks from "./SiteIconLinks";

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
                        component={NextLink}
                        href="/contact"
                        color="gold"
                        c="navy.9"
                        px="lg"
                     >
                        Contact us
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
            title={null}
            withCloseButton
            hiddenFrom="md"
            zIndex={200}
            styles={{
               content: {
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
               },
               header: {
                  minHeight: "unset",
                  paddingBottom: 4,
               },
               body: {
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  minHeight: 0,
                  overflow: "hidden",
               },
            }}
         >
            <Anchor
               component={NextLink}
               href="/"
               underline="never"
               onClick={close}
               className="mobile-nav-dog"
               aria-label="Superior Plumbing Service"
            >
               <Image
                  src={headerLogo}
                  alt=""
                  width={640}
                  height={427}
                  style={{ width: "100%", height: "auto" }}
               />
            </Anchor>
            <Stack gap={6} mt="sm">
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
                  mt="xs"
                  onClick={(event) => {
                     event.preventDefault();
                     close();
                     reportConversion(ContactInfo.phone.href);
                  }}
               >
                  Call now
               </Button>
            </Stack>

            <Box className="mobile-nav-footer">
               <Divider mb="md" />
               <Text fw={700} size="sm" c="navy.6">
                  {siteTitle}
               </Text>
               <Text size="xs" c="dimmed" mt={4}>
                  {`Copyright ${new Date().getFullYear()} | ${siteURL}`}
               </Text>
               {footerLinks.map(({ title, url }) => (
                  <Anchor
                     key={url}
                     component={NextLink}
                     href={url}
                     c="navy.6"
                     size="sm"
                     mt={6}
                     display="block"
                     onClick={close}
                  >
                     {title}
                  </Anchor>
               ))}
               <Box mt="sm">
                  <SiteIconLinks alwaysShowAll />
               </Box>
            </Box>
         </Drawer>
      </header>
   );
};

export default NavigationHeader;
