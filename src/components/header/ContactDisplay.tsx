import { Anchor, Group, Text } from "@mantine/core";
import React from "react";
import { IconBrandFacebook, IconBrandGoogle, IconMail, IconPhone } from "@tabler/icons-react";
import NextLink from "next/link";
import { ContactInfo } from "@/content";
import { reportConversion } from "@/lib/gtag";
import Image from "next/image";

export enum DisplayableContacts {
   phone = "phone",
   email = "email",
   facebook = "facebook",
   google = "google",
   rinnai = "rinnai",
}

const ContactInfoMap: Record<
   DisplayableContacts,
   { href: string; text: string; icon: React.ReactNode }
> = {
   phone: {
      href: ContactInfo.phone.href,
      text: ContactInfo.phone.text,
      icon: <IconPhone size={18} />,
   },
   email: {
      href: ContactInfo.email.href,
      text: ContactInfo.email.text,
      icon: <IconMail size={18} />,
   },
   facebook: {
      href: ContactInfo.facebook.href,
      text: "Facebook Page",
      icon: <IconBrandFacebook size={18} />,
   },
   google: {
      href: ContactInfo.google.href,
      text: "Google Page",
      icon: <IconBrandGoogle size={18} />,
   },
   rinnai: {
      href: ContactInfo.rinnai.href,
      text: "Rinnai Page",
      icon: (
         <Image
            alt="Rinnai Logo"
            src="/assets/rinnai-logo.svg"
            width={18}
            height={18}
         />
      ),
   },
};

export interface IContactDisplayProps {
   c?: string;
   contactsToDisplay: DisplayableContacts[];
}

const ContactDisplay: React.FC<IContactDisplayProps> = ({
   c = "navy.8",
   contactsToDisplay,
}) => {
   return (
      <div>
         {contactsToDisplay?.map((contact) => (
            <Group key={contact} gap="sm" py={6} wrap="nowrap">
               <Text c={c} style={{ display: "flex" }}>
                  {ContactInfoMap[contact].icon}
               </Text>
               <Anchor
                  component={NextLink}
                  target="_blank"
                  href={ContactInfoMap[contact].href}
                  c={c}
                  onClick={
                     contact === DisplayableContacts.phone
                        ? (event) => {
                             event.preventDefault();
                             reportConversion(ContactInfoMap[contact].href);
                          }
                        : undefined
                  }
                  style={{ wordBreak: "break-word" }}
               >
                  {ContactInfoMap[contact].text}
               </Anchor>
            </Group>
         ))}
      </div>
   );
};

export default ContactDisplay;
