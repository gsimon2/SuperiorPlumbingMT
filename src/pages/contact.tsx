import ContactForm from "@/components/ContactForm";
import Content from "@/components/Content";
import MainContentWrapper from "@/components/MainContentWrapper";
import ContactDisplay, {
   DisplayableContacts,
} from "@/components/header/ContactDisplay";
import { siteTitle } from "@/content";
import { SimpleGrid, Text, Title } from "@mantine/core";
import Head from "next/head";

export const getStaticProps = async () => {
   return {
      props: {},
   };
};

const Page = () => {
   return (
      <>
         <Head>
            <title>{`Contact | ${siteTitle}`}</title>
         </Head>
         <MainContentWrapper>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
               <Content>
                  <Text className="eyebrow" mb="xs">
                     Reach out
                  </Text>
                  <Title order={2}>Get a hold of us at:</Title>
                  <ContactDisplay
                     c="navy.8"
                     contactsToDisplay={[
                        DisplayableContacts.phone,
                        DisplayableContacts.email,
                     ]}
                  />
                  <Title order={3} mt="lg" mb="xs">
                     Or send us a message using the form below
                  </Title>
                  <ContactForm />
               </Content>
               <Content>
                  <Text className="eyebrow" mb="xs">
                     More ways to connect
                  </Text>
                  <Title order={2}>Check out our other pages</Title>
                  <ContactDisplay
                     c="navy.8"
                     contactsToDisplay={[
                        DisplayableContacts.facebook,
                        DisplayableContacts.google,
                        DisplayableContacts.rinnai,
                     ]}
                  />
               </Content>
            </SimpleGrid>
         </MainContentWrapper>
      </>
   );
};

export default Page;
