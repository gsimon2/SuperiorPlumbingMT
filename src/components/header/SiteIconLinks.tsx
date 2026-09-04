"use client";
import { ActionIcon, Group } from "@mantine/core";
import React from "react";
import {
   IconBrandFacebook,
   IconBrandGoogle,
   IconMail,
   IconPhone,
} from "@tabler/icons-react";
import { ContactInfo } from "@/content";
import { reportConversion } from "@/lib/gtag";

export interface ISiteIconLinks {
   alwaysShowAll?: boolean;
}

const SiteIconLinks: React.FC<ISiteIconLinks> = ({ alwaysShowAll = false }) => {
   return (
      <Group gap="xs" justify="center">
         <ActionIcon
            component="a"
            href={ContactInfo.phone.href}
            variant="subtle"
            color="gold"
            size="lg"
            aria-label="Phone number"
            title="Phone number"
            hiddenFrom={alwaysShowAll ? undefined : "md"}
            onClick={(event) => {
               event.preventDefault();
               reportConversion(ContactInfo.phone.href);
            }}
         >
            <IconPhone size={18} />
         </ActionIcon>
         <ActionIcon
            component="a"
            href={ContactInfo.email.href}
            variant="subtle"
            color="gold"
            size="lg"
            aria-label="Email"
            title="Email"
            hiddenFrom={alwaysShowAll ? undefined : "md"}
         >
            <IconMail size={18} />
         </ActionIcon>
         {ContactInfo.google.href && (
            <ActionIcon
               component="a"
               href={ContactInfo.google.href}
               target="_blank"
               variant="subtle"
               color="gold"
               size="lg"
               aria-label="Google business page"
               title="Google business page"
            >
               <IconBrandGoogle size={18} />
            </ActionIcon>
         )}
         <ActionIcon
            component="a"
            href={ContactInfo.facebook.href}
            target="_blank"
            variant="subtle"
            color="gold"
            size="lg"
            aria-label="Facebook business page"
            title="Facebook business page"
         >
            <IconBrandFacebook size={18} />
         </ActionIcon>
      </Group>
   );
};

export default SiteIconLinks;
