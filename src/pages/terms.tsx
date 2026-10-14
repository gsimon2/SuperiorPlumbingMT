import Content from "@/components/Content";
import MainContentWrapper from "@/components/MainContentWrapper";
import SeoHead from "@/components/SeoHead";
import { ContactInfo, siteOrigin, siteTitle } from "@/content";
import { Anchor, Text, Title } from "@mantine/core";
import NextLink from "next/link";

export const getStaticProps = async () => {
   return {
      props: {},
   };
};

const TermsPage: React.FC = () => {
   return (
      <>
         <SeoHead
            title={`SMS Terms | ${siteTitle}`}
            description="Terms for the Superior Plumbing Service LLC text messaging program, including consent, message types, STOP and HELP instructions."
            path="/terms"
         />
         <MainContentWrapper>
            <Content>
               <Text className="eyebrow" mb="xs">
                  Legal
               </Text>
               <Title order={1} mb="md">
                  SMS Terms
               </Title>

               <Text mb="md">
                  These terms apply to the text messaging program operated by
                  Superior Plumbing Service LLC.
               </Text>

               <Title order={3} mb="sm">
                  Program Description
               </Title>
               <Text mb="lg">
                  If you opt in, Superior Plumbing Service LLC may send
                  service-related text messages to the mobile number you
                  provide. Messages may include appointment reminders, quotes,
                  scheduling updates, and responses to service requests.
               </Text>

               <Title order={3} mb="sm">
                  Consent
               </Title>
               <Text mb="lg">
                  Consent is obtained through an optional, unchecked checkbox on
                  our website contact form. Providing a phone number or
                  submitting a service request does not, by itself, enroll you
                  in the text messaging program. Consent is not a condition of
                  purchasing goods or services.
               </Text>

               <Title order={3} mb="sm">
                  Message Frequency, Rates, and Support
               </Title>
               <Text mb="md">Messaging and data rates may apply.</Text>
               <Text mb="md">Message frequency may vary.</Text>
               <Text mb="md">
                  Reply STOP to opt out of text messages at any time. Reply HELP
                  for help.
               </Text>
               <Text mb="lg">
                  You may also contact Superior Plumbing Service LLC at{" "}
                  <Anchor href={ContactInfo.phone.href}>
                     {ContactInfo.phone.text}
                  </Anchor>{" "}
                  or{" "}
                  <Anchor href={ContactInfo.email.href}>
                     {ContactInfo.email.text}
                  </Anchor>
                  .
               </Text>

               <Title order={3} mb="sm">
                  Privacy
               </Title>
               <Text mb="lg">
                  Mobile information will not be shared with third
                  parties/affiliates for marketing or promotional purposes.
                  Text messaging originator opt-in data and consent will not be
                  shared with any third parties. See our{" "}
                  <Anchor component={NextLink} href="/privacy">
                     Privacy Policy
                  </Anchor>{" "}
                  for more information.
               </Text>

               <Text mb="md">
                  Website:{" "}
                  <Anchor href={siteOrigin}>SuperiorPlumbingMT.com</Anchor>
               </Text>

               <Text size="sm" c="dimmed">
                  Last Updated: October 14, 2026
               </Text>
            </Content>
         </MainContentWrapper>
      </>
   );
};

export default TermsPage;
