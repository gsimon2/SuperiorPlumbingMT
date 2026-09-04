import Content from "@/components/Content";
import { JoinTeamRibbon } from "@/components/home/JoinTeamCallout";
import MainContentWrapper from "@/components/MainContentWrapper";
import Service from "@/components/Service";
import { ContactInfo, headerLogo, siteTitle } from "@/content";
import { Anchor, Box, Button, Group, SimpleGrid, Text, Title } from "@mantine/core";
import Head from "next/head";
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
         <Head>
            <title>{`${siteTitle}`}</title>
         </Head>
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
                     <Text size="lg" mb="md">
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
               <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
                  <Service
                     imageSource="/assets/services/services-leaking-pipe.svg"
                     imageAltText="leaking pipe"
                     title="Leak Detection & Repair:"
                     text="Got a mystery leak? No problem! We specialize in sniffing out leaks wherever they hide and fixing them promptly to save your home from water damage and keep your bills from skyrocketing."
                  />
                  <Service
                     imageSource="/assets/services/services-plunger.svg"
                     imageAltText="plunger"
                     title="Drain Unclogging:"
                     text="Say goodbye to blocked drains! Our expert team uses state-of-the-art technology to clear out clogs from your sinks, showers, and toilets, ensuring free-flowing drains and peace of mind."
                  />
                  <Service
                     imageSource="/assets/services/services-toilet.svg"
                     imageAltText="toilet"
                     title="Toilet Services:"
                     text="Whether it's a toilet that won't stop running or a complete replacement, we can handle it. We'll get your throne functioning royally again in no time."
                  />
                  <Service
                     imageSource="/assets/services/services-water-heater.svg"
                     imageAltText="water heater"
                     title="Water Heater Solutions:"
                     text="Cold showers aren't fun. Whether you need a quick repair or a new, energy-efficient installation, we ensure you have hot water whenever you need it."
                  />
                  <Service
                     imageSource="/assets/services/services-pipe-maintenance.svg"
                     imageAltText="pipe maintenance"
                     title="Pipe Maintenance:"
                     text="From minor repairs to full replacements, we handle pipes with care. We'll ensure your plumbing system is running smoothly, without leaks or bursts to worry about."
                  />
                  <Service
                     imageSource="/assets/services/services-fixture.svg"
                     imageAltText="bathroom fixture"
                     title="Fixture Fittings:"
                     text="Upgrading your kitchen or bathroom? We install and repair all types of plumbing fixtures, enhancing your space's functionality and aesthetics."
                  />
                  <Service
                     imageSource="/assets/services/services-sump-pump.svg"
                     imageAltText="sump pump"
                     title="Sump Pump Installation & Repair:"
                     text="Keep your basement dry and your home safe from flood damage with our sump pump services. We ensure your pump is ready to handle whatever Mother Nature throws at it."
                  />
                  <Service
                     imageSource="/assets/services/services-gas-line.svg"
                     imageAltText="gas line"
                     title="Gas Line Services:"
                     text="We're not just about water; we also specialize in gas line installations and repairs, ensuring your gas appliances operate safely and efficiently."
                  />
                  <Service
                     imageSource="/assets/services/services-remodel.svg"
                     imageAltText="bathtub"
                     title="Remodel Services"
                     text="Transform your space with our remodeling services. Whether you're updating a bathroom or kitchen, we work closely with you to install the plumbing necessary for your dream space."
                  />
               </SimpleGrid>
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
