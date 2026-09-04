import Content from "@/components/Content";
import JsonLd from "@/components/JsonLd";
import MainContentWrapper from "@/components/MainContentWrapper";
import SeoHead from "@/components/SeoHead";
import Service from "@/components/Service";
import { siteTitle } from "@/content";
import { plumbingServices } from "@/content/services";
import { breadcrumbJsonLd } from "@/lib/seo";
import { Anchor, SimpleGrid, Text, Title } from "@mantine/core";
import NextLink from "next/link";

export const getStaticProps = async () => {
   return {
      props: {},
   };
};

const ServicesPage = () => {
   return (
      <>
         <SeoHead
            title={`Plumbing Services in Superior, MT | ${siteTitle}`}
            description="Explore plumbing services from Superior Plumbing Service, including leak repair, drain cleaning, water heaters, toilets, gas lines, and remodels in Western Montana."
            path="/services"
         />
         <JsonLd
            data={breadcrumbJsonLd([
               { name: "Home", path: "/" },
               { name: "Services", path: "/services" },
            ])}
         />
         <MainContentWrapper>
            <Content>
               <Text className="eyebrow" mb="xs">
                  What we do
               </Text>
               <Title order={1} mb="sm">
                  Plumbing services in Superior, MT
               </Title>
               <Text mb="xl">
                  Superior Plumbing Service helps homeowners across Mineral,
                  Sanders, and Missoula Counties with repairs, installations,
                  and remodel plumbing. Choose a service to learn how we can
                  help, then call or request a quote.
               </Text>
               <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
                  {plumbingServices.map((service) => (
                     <Anchor
                        key={service.slug}
                        component={NextLink}
                        href={`/services/${service.slug}`}
                        underline="never"
                        c="inherit"
                        display="block"
                        h="100%"
                        className="service-card-link"
                     >
                        <Service {...service} />
                     </Anchor>
                  ))}
               </SimpleGrid>
            </Content>
         </MainContentWrapper>
      </>
   );
};

export default ServicesPage;
