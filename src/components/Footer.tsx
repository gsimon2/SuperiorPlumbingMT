"use client";
import { footerLinks, siteTitle, siteURL } from "@/content";
import { Anchor, Box, Container, Divider, Group, Stack, Text, Title } from "@mantine/core";
import NextLink from "next/link";
import React from "react";
import ContactDisplay, { DisplayableContacts } from "./header/ContactDisplay";
import SiteIconLinks from "./header/SiteIconLinks";
import { maxWidth } from "@/Constants";

const Footer: React.FC = () => {
   const currentDate = new Date();

   return (
      <Box className="site-footer" py="xl">
         <Container size={maxWidth} px={{ base: "sm", sm: "md", lg: "xl" }}>
            <Group justify="space-between" align="flex-start" gap="xl" wrap="wrap">
               <Stack gap="xs">
                  <Title order={4} c="white">
                     {siteTitle}
                  </Title>
                  <Text size="sm" c="gray.4">
                     {`Copyright ${currentDate.getFullYear()} | ${siteURL}`}
                  </Text>
                  {footerLinks.map(({ title, url }) => (
                     <Anchor
                        key={url}
                        component={NextLink}
                        href={url}
                        c="gold.4"
                        size="sm"
                     >
                        {title}
                     </Anchor>
                  ))}
               </Stack>
               <ContactDisplay
                  c="gray.2"
                  contactsToDisplay={[
                     DisplayableContacts.phone,
                     DisplayableContacts.email,
                  ]}
               />
               <SiteIconLinks alwaysShowAll />
            </Group>
            <Divider my="md" color="dark.4" />
            <Text size="xs" c="gray.5">
               Serving Mineral County, Sanders County, and Missoula County.
            </Text>
         </Container>
      </Box>
   );
};

export default Footer;
