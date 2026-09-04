import Content from "@/components/Content";
import JsonLd from "@/components/JsonLd";
import MainContentWrapper from "@/components/MainContentWrapper";
import SeoHead from "@/components/SeoHead";
import { siteTitle } from "@/content";
import { getPlumbingService, plumbingServices } from "@/content/services";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";
import { Anchor, Box, Button, Group, List, Text, Title } from "@mantine/core";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import NextLink from "next/link";

type ServicePageProps = {
   slug: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
   return {
      paths: plumbingServices.map((service) => ({
         params: { slug: service.slug },
      })),
      fallback: false,
   };
};

export const getStaticProps: GetStaticProps<ServicePageProps> = async ({
   params,
}) => {
   const slug = typeof params?.slug === "string" ? params.slug : "";
   const service = getPlumbingService(slug);

   if (!service) {
      return { notFound: true };
   }

   return {
      props: { slug },
   };
};

const ServicePage = ({ slug }: ServicePageProps) => {
   const service = getPlumbingService(slug);

   if (!service) {
      return null;
   }

   const related = plumbingServices.filter((item) =>
      service.relatedSlugs.includes(item.slug)
   );

   return (
      <>
         <SeoHead
            title={`${service.seoTitle} | ${siteTitle}`}
            description={service.seoDescription}
            path={`/services/${service.slug}`}
         />
         <JsonLd
            data={breadcrumbJsonLd([
               { name: "Home", path: "/" },
               { name: "Services", path: "/services" },
               { name: service.title, path: `/services/${service.slug}` },
            ])}
         />
         <JsonLd data={serviceJsonLd(service)} />
         <MainContentWrapper>
            <Content>
               <div className="service-detail-hero">
                  <Box className="service-detail-icon">
                     <Image
                        src={service.imageSource}
                        alt={service.imageAltText}
                        height={52}
                        width={52}
                        style={{ filter: "invert(1)" }}
                     />
                  </Box>
                  <div>
                     <Text className="eyebrow" mb="xs">
                        Plumbing services
                     </Text>
                     <Title order={1}>
                        {service.heading}
                     </Title>
                  </div>
               </div>

               <Text mt="lg" mb="md" size="lg" lh={1.7}>
                  {service.intro}
               </Text>
               <List mb="lg" spacing="sm" className="service-detail-list">
                  {service.details.map((detail) => (
                     <List.Item key={detail}>{detail}</List.Item>
                  ))}
               </List>
               <Group>
                  <Button
                     component={NextLink}
                     href={`/contact?subject=${encodeURIComponent(
                        `Quote request: ${service.title.replace(/:$/, "")}`
                     )}`}
                     size="lg"
                  >
                     Request a quote
                  </Button>
                  <Button
                     component={NextLink}
                     href="/services"
                     size="lg"
                     variant="outline"
                  >
                     All services
                  </Button>
               </Group>
               {related.length > 0 && (
                  <>
                     <Title order={2} mt="xl" mb="sm">
                        Related services
                     </Title>
                     <List>
                        {related.map((item) => (
                           <List.Item key={item.slug}>
                              <Anchor
                                 component={NextLink}
                                 href={`/services/${item.slug}`}
                              >
                                 {item.heading}
                              </Anchor>
                           </List.Item>
                        ))}
                     </List>
                  </>
               )}
            </Content>
         </MainContentWrapper>
      </>
   );
};

export default ServicePage;
