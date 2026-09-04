import Content from "@/components/Content";
import MainContentWrapper from "@/components/MainContentWrapper";
import SeoHead from "@/components/SeoHead";
import { ContactInfo, siteOrigin, siteTitle } from "@/content";
import { Anchor, Text, Title } from "@mantine/core";

export const getStaticProps = async () => {
   return {
      props: {},
   };
};

const PrivacyPage: React.FC = () => {
   return (
      <>
         <SeoHead
            title={`Privacy Policy | ${siteTitle}`}
            description="Privacy policy for Superior Plumbing Service LLC, including how we handle contact information and text message consent."
            path="/privacy"
         />
         <MainContentWrapper>
            <Content>
               <Text className="eyebrow" mb="xs">
                  Legal
               </Text>
               <Title order={1} mb="md">
                  Privacy Policy
               </Title>

               <Text mb="md">
                  Superior Plumbing Service LLC respects your privacy and is
                  committed to protecting the personal information you provide
                  to us.
               </Text>

               <Text mb="md">
                  We may collect information such as your name, phone number,
                  email address, service address, and other information you
                  provide when requesting service, submitting a website form,
                  scheduling an appointment, or communicating with us by phone,
                  email, or text message. This information is used to provide
                  plumbing services, schedule appointments, communicate
                  regarding your service, process payments, and improve our
                  customer service.
               </Text>

               <Text mb="lg">
                  We do not sell your personal information. Information may be
                  shared with trusted service providers only when necessary to
                  operate our business, provide requested services, process
                  payments, or comply with legal requirements.
               </Text>

               <Title order={3} mb="sm">
                  Text Messaging &amp; Mobile Information
               </Title>

               <Text mb="md">
                  By providing your mobile phone number and opting in to receive
                  text messages, you consent to receive service-related
                  communications from Superior Plumbing Service LLC. Message and
                  data rates may apply. Message frequency may vary.
               </Text>

               <Text mb="md">
                  You may opt out of text messages at any time by replying STOP.
               </Text>

               <Text mb="md">
                  For assistance, reply HELP to any text message. You may also
                  contact Superior Plumbing Service LLC directly using the
                  contact information below for questions or support regarding
                  our text messaging service.
               </Text>

               <Text mb="lg" fs="italic">
                  &ldquo;No mobile information will be shared with third
                  parties/affiliates for marketing/promotional purposes. All the
                  above categories exclude text messaging originator opt-in data
                  and consent; this information will not be shared with any
                  third parties&rdquo;.
               </Text>

               <Title order={3} mb="sm">
                  Contact &amp; Support
               </Title>

               <Text mb="md">
                  For questions regarding our services, privacy practices, or
                  text messaging program, please contact:
               </Text>

               <Text mb="md">
                  Superior Plumbing Service LLC
                  <br />
                  Phone:{" "}
                  <Anchor href={ContactInfo.phone.href}>
                     {ContactInfo.phone.text}
                  </Anchor>
                  <br />
                  Email:{" "}
                  <Anchor href={ContactInfo.email.href}>
                     {ContactInfo.email.text}
                  </Anchor>
                  <br />
                  Website:{" "}
                  <Anchor href={siteOrigin}>
                     SuperiorPlumbingMT.com
                  </Anchor>
               </Text>

               <Text mb="md">
                  For text messaging support, reply HELP to any message or
                  contact us directly using the phone number or email address
                  listed above.
               </Text>

               <Text mb="lg">
                  To stop receiving text messages, reply STOP at any time.
               </Text>

               <Text size="sm" c="dimmed">
                  Last Updated: August 25, 2026
               </Text>
            </Content>
         </MainContentWrapper>
      </>
   );
};

export default PrivacyPage;
