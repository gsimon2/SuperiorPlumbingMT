import Content from "@/components/Content";
import { FaqAccordion } from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import MainContentWrapper from "@/components/MainContentWrapper";
import SeoHead from "@/components/SeoHead";
import { siteTitle } from "@/content";
import { homeFaqs } from "@/content/services";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { Text, Title } from "@mantine/core";

export const getStaticProps = async () => {
   return {
      props: {},
   };
};

const FaqPage = () => {
   return (
      <>
         <SeoHead
            title={`Plumbing FAQs | ${siteTitle}`}
            description="Answers about service areas, leaks, frozen pipes, water heaters, gas lines, sump pumps, and remodels from Superior Plumbing Service in Superior, MT."
            path="/faq"
         />
         <JsonLd
            data={breadcrumbJsonLd([
               { name: "Home", path: "/" },
               { name: "FAQ", path: "/faq" },
            ])}
         />
         <JsonLd data={faqJsonLd(homeFaqs)} />
         <MainContentWrapper>
            <Content>
               <Text className="eyebrow" mb="xs">
                  Common questions
               </Text>
               <Title order={1} mb="sm">
                  Frequently asked questions
               </Title>
               <Text mb="xl">
                  Straight answers about where we work, what we handle, and how
                  to get a plumber out to your home.
               </Text>
               <FaqAccordion />
            </Content>
         </MainContentWrapper>
      </>
   );
};

export default FaqPage;
