import Content from "@/components/Content";
import { JoinTeamRibbon } from "@/components/home/JoinTeamCallout";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import MainContentWrapper from "@/components/MainContentWrapper";
import SeoHead from "@/components/SeoHead";
import { ContactInfo, headerLogo, siteDescription, siteTitle } from "@/content";
import { Anchor, Box, Button, Group, Text, Title } from "@mantine/core";
import Image from "next/image";
import NextLink from "next/link";
import { reportConversion } from "@/lib/gtag";

export const getStaticProps = async () => {
   return {
      props: {},
   };
};

const Page = () => {
   return (
      <>
         <SeoHead
            title={`${siteTitle} | Plumber in Superior, MT`}
            description={siteDescription}
            path="/"
         />
         <MainContentWrapper>
            <Content className="content-card">
               <JoinTeamRibbon />
               <div className="hero-grid">
                  <Box className="hero-logo-wrap" pt={{ base: 36, md: 0 }}>
                     <Image
                        src={headerLogo}
                        alt="Superior Plumbing Service logo"
                        width={1536}
                        height={1024}
                        className="hero-logo"
                        sizes="(max-width: 992px) 92vw, 50vw"
                        priority
                     />
                  </Box>
                  <Box>
                     <Text className="eyebrow" mb="sm">
                        Mineral · Sanders · Missoula County
                     </Text>
                     <Title order={1} mb="md">
                        Plumbers serving Mineral, Sanders, and Missoula Counties
                     </Title>
                     <Text mb="md">
                        Superior Plumbing Service, your trusted local
                        plumbing Professionals proudly serving the
                        communities of Mineral County, Sanders County and
                        Missoula County. Our team understands the unique
                        plumbing needs of our community, and our highly
                        skilled plumbers bring a personal touch to every
                        project, big or small. From emergency repairs in the
                        dead of winter to thoughtful consultations on
                        eco-friendly upgrades, Superior Plumbing Service is
                        committed to ensuring your water flows as
                        beautifully as the Clark Fork River.
                     </Text>
                     <Text mb="lg">
                        Here at Superior Plumbing Service, we believe in
                        building relationships through reliability and
                        transparency. Our team understands the importance of
                        clear communication, timely responses, and thorough
                        work, ensuring that every customer feels heard and
                        valued from the first call to the final inspection.
                        We offer a wide range of services, including leak
                        detection, drain cleaning, water heater
                        installation, and comprehensive plumbing
                        inspections. Choose Superior Plumbing Service, where
                        quality meets integrity.
                     </Text>
                     <Group mb="xl">
                        <Button
                           component="a"
                           href={ContactInfo.phone.href}
                           size="lg"
                           hiddenFrom="md"
                           onClick={(event) => {
                              event.preventDefault();
                              reportConversion(ContactInfo.phone.href);
                           }}
                        >
                           Call now
                        </Button>
                        <Button
                           component={NextLink}
                           href="/contact"
                           size="lg"
                           visibleFrom="md"
                        >
                           Contact us
                        </Button>
                        <Button
                           component={NextLink}
                           href="/contact"
                           size="lg"
                           variant="outline"
                        >
                           Get a quote
                        </Button>
                     </Group>
                     <Group justify="flex-end">
                        <Image
                           height={60}
                           width={60}
                           src="/assets/delta-pro-badge.jpg"
                           alt="Delta Pro badge"
                        />
                        <Anchor
                           href={ContactInfo.rinnai.href}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <Image
                              height={60}
                              width={60}
                              src="/assets/rinnai-pro.svg"
                              alt="Rinnai Pro"
                           />
                        </Anchor>
                     </Group>
                  </Box>
               </div>
            </Content>

            <Content p={0}>
               <Box pos="relative" style={{ aspectRatio: "16 / 9" }}>
                  <Image
                     src="/assets/brody-with-van.jpg"
                     alt="Company owner Brody Barr standing in front of a company truck"
                     fill
                     style={{ objectFit: "cover", borderRadius: 12 }}
                  />
               </Box>
            </Content>

            <Content bold>
               <Text className="eyebrow" ta="center" mb="sm" c="gold.4">
                  What we do
               </Text>
               <Title order={2} ta="center" id="services">
                  Plumbing Services
               </Title>
               <Text ta="center" mt="sm" mb="xl">
                  At Superior Plumbing Service, we&apos;re committed to offering
                  a comprehensive suite of plumbing services to meet all your
                  needs. Here&apos;s what we can do for you:
               </Text>
               <ServicesShowcase />
               <Text ta="center" mt="xl">
                  At Superior Plumbing Service, we provide top-notch plumbing
                  services with a smile. Let us take the worry out of your
                  plumbing problems.
               </Text>
            </Content>
         </MainContentWrapper>
      </>
   );
};

export default Page;
