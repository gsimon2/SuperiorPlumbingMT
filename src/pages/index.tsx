import Content from "@/components/Content";
import MainContentWrapper from "@/components/MainContentWrapper";
import Service from "@/components/Service";
import { siteTitle } from "@/content";
import { Box, Grid, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { headerLogo } from "@/content";
import ParallaxContainer from "@/components/ParallaxContainer";

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
            <Grid item xs={12} sm={12} md={12} lg={12}>
               <Content>
                  <Grid container spacing={2}>
                     <Grid item xs={12} sm={12} md={12} lg={5} xl={4}>
                        <Box
                           sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "100%",
                              position: "relative",
                              minHeight: "200px",
                           }}
                        >
                           <Image src={headerLogo} alt="logo" fill />
                        </Box>
                     </Grid>
                     <Grid item xs={12} sm={12} md={12} lg={7} xl={8}>
                        <Typography>
                           Superior Plumbing Service, your trusted local
                           plumbing Professionals proudly serving the
                           communities of Mineral County, Sanders County and
                           Missoula County. Owned and operated by Brody Barr, a
                           fourth-generation plumber with a passion for
                           precision and service. Our team understands the
                           unique plumbing needs of our community, and our
                           highly skilled plumbers bring a personal touch to
                           every project, big or small. From emergency repairs
                           in the dead of winter to thoughtful consultations on
                           eco-friendly upgrades, Superior Plumbing Service is
                           committed to ensuring your water flows as beautifully
                           as the Clark Fork River.
                        </Typography>
                        <br />
                        <Typography>
                           Here at Superior Plumbing Service, we believe in
                           building relationships through reliability and
                           transparency. Our team understands the importance of
                           clear communication, timely responses, and thorough
                           work, ensuring that every customer feels heard and
                           valued from the first call to the final inspection.
                           We offer a wide range of services, including leak
                           detection, drain cleaning, water heater installation,
                           and comprehensive plumbing inspections. Choose
                           Superior Plumbing Service, where quality meets
                           integrity.
                        </Typography>
                     </Grid>
                  </Grid>
               </Content>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
               <ParallaxContainer
                  imagePath="/assets/test-mountains.png"
                  sx={{ height: "20rem", borderRadius: "0.5rem" }}
               />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
               <Content bold={true}>
                  <Grid container spacing={2}>
                     <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography variant="h4" sx={{ textAlign: "center" }} id="services">
                           Plumbing Services
                        </Typography>
                        <br />
                        <Typography sx={{ textAlign: "center" }}>
                           At Superior Plumbing Service, we&apos;re committed to
                           offering a comprehensive suite of plumbing services
                           to meet all your needs. Here&apos;s what we can do
                           for you:
                        </Typography>
                     </Grid>
                     <Service
                        imageSource="/assets/services/services-leaking-pipe.svg"
                        imageAltText="leaking pipe"
                        title="Leak Detection & Repair:"
                        text="Got a mystery leak? No problem! We specialize in
                        sniffing out leaks wherever they hide and fixing
                        them promptly to save your home from water damage
                        and keep your bills from skyrocketing."
                     />
                     <Service
                        imageSource="/assets/services/services-plunger.svg"
                        imageAltText="plunger"
                        title="Drain Unclogging:"
                        text="Say goodbye to blocked drains! Our expert team uses
                        state-of-the-art technology to clear out clogs from your
                        sinks, showers, and toilets, ensuring free-flowing
                        drains and peace of mind."
                     />
                     <Service
                        imageSource="/assets/services/services-toilet.svg"
                        imageAltText="toilet"
                        title="Toilet Services:"
                        text=" Whether it's a toilet that won't stop running or a
                        complete replacement, we can handle it. We'll get your
                        throne functioning royally again in no time."
                     />
                     <Service
                        imageSource="/assets/services/services-water-heater.svg"
                        imageAltText="water heater"
                        title="Water Heater Solutions:"
                        text="Cold showers aren't fun. Whether you need a quick repair
                        or a new, energy-efficient installation, we ensure you
                        have hot water whenever you need it."
                     />
                     <Service
                        imageSource="/assets/services/services-pipe-maintenance.svg"
                        imageAltText="pipe maintenance"
                        title="Pipe Maintenance:"
                        text="From minor repairs to full replacements, we handle pipes
                        with care. We'll ensure your plumbing system is running
                        smoothly, without leaks or bursts to worry about."
                     />
                     <Service
                        imageSource="/assets/services/services-fixture.svg"
                        imageAltText="bathroom fixture"
                        title="Fixture Fittings:"
                        text="Upgrading your kitchen or bathroom? We install and
                        repair all types of plumbing fixtures, enhancing your
                        space's functionality and aesthetics."
                     />
                     <Service
                        imageSource="/assets/services/services-sump-pump.svg"
                        imageAltText="sump pump"
                        title="Sump Pump Installation & Repair:"
                        text="Keep your basement dry and your home safe from flood
                        damage with our sump pump services. We ensure your pump
                        is ready to handle whatever Mother Nature throws at it."
                     />
                     <Service
                        imageSource="/assets/services/services-gas-line.svg"
                        imageAltText="gas line"
                        title="Gas Line Services:"
                        text="We're not just about water; we also specialize in gas
                        line installations and repairs, ensuring your gas
                        appliances operate safely and efficiently."
                     />
                     <Service
                        imageSource="/assets/services/services-remodel.svg"
                        imageAltText="bathtub"
                        title="Remodel Services"
                        text="Transform your space with our remodeling services.
                        Whether you're updating a bathroom or kitchen, we work
                        closely with you to install the plumbing necessary for
                        your dream space."
                     />
                     <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography sx={{ textAlign: "center" }}>
                           At Superior Plumbing Service, we provide top-notch
                           plumbing services with a smile. Let us take the worry
                           out of your plumbing problems.
                        </Typography>
                     </Grid>
                  </Grid>
               </Content>
            </Grid>
         </MainContentWrapper>
      </>
   );
};

export default Page;
