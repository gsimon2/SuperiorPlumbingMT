import Content from "@/components/Content";
import MainContentWrapper from "@/components/MainContentWrapper";
import CareersApplicationForm from "@/components/CareersApplicationForm";
import { siteTitle } from "@/content";
import { Text, Title } from "@mantine/core";
import Head from "next/head";

export const getStaticProps = async () => {
   return {
      props: {},
   };
};

const CareersPage = () => {
   return (
      <>
         <Head>
            <title>{`Careers | ${siteTitle}`}</title>
         </Head>
         <MainContentWrapper>
            <Content>
               <Text className="eyebrow" mb="xs">
                  We&apos;re hiring
               </Text>
               <Title order={2}>Want to work with us?</Title>
               <Text size="lg" mt="sm">
                  Submit a quick prescreen application and tell us what
                  position you are looking for.
               </Text>
               <CareersApplicationForm />
            </Content>
         </MainContentWrapper>
      </>
   );
};

export default CareersPage;
