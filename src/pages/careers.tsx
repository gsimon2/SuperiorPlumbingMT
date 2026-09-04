import Content from "@/components/Content";
import MainContentWrapper from "@/components/MainContentWrapper";
import CareersApplicationForm from "@/components/CareersApplicationForm";
import SeoHead from "@/components/SeoHead";
import { siteTitle } from "@/content";
import { Text, Title } from "@mantine/core";

export const getStaticProps = async () => {
   return {
      props: {},
   };
};

const CareersPage = () => {
   return (
      <>
         <SeoHead
            title={`Plumbing Jobs in Superior, MT | ${siteTitle}`}
            description="Apply to join Superior Plumbing Service. We're hiring plumbers and tradespeople to serve Mineral, Sanders, and Missoula Counties in Western Montana."
            path="/careers"
         />
         <MainContentWrapper>
            <Content>
               <Text className="eyebrow" mb="xs">
                  We&apos;re hiring
               </Text>
               <Title order={1}>Want to work with us?</Title>
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
