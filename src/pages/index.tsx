import Content from "@/components/Content";
import MainContentWrapper from "@/components/MainContentWrapper";
import Service from "@/components/Service";
import { siteTitle } from "@/content";
import { Grid, Typography } from "@mui/material";
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
            <title>{`${siteTitle}`}</title>
         </Head>
         <MainContentWrapper>
            <Grid item xs={12} sm={12} md={12} lg={12}>
               <Content>
                  <Typography>
                     Welcome to Superior Plumbing MT, your trusted local
                     plumbing solution proudly serving Superior, Montana, and
                     its surrounding areas. Owned and operated by Brody, a
                     Michigan native with a passion for precision and service,
                     our company stands as a testament to quality workmanship
                     and unmatched customer care. Understanding the unique
                     plumbing needs of our community, Brody and his team of
                     skilled plumbers bring a personal touch to every project,
                     big or small. From emergency repairs in the dead of winter
                     to thoughtful consultations on eco-friendly upgrades,
                     Superior Plumbing MT is committed to ensuring your water
                     flows as beautifully as the Clark Fork River, without any
                     unexpected interruptions.
                  </Typography>
                  <br />
                  <Typography>
                     Here at Superior Plumbing MT, we believe in building
                     relationships through reliability and transparency. Brody
                     has instilled in his team the importance of clear
                     communication, timely responses, and thorough work,
                     ensuring that every customer feels heard and valued from
                     the first call to the final inspection. Our services span a
                     wide range, including leak detection, drain cleaning, water
                     heater installation, and comprehensive plumbing
                     inspections, all delivered with the highest standards of
                     professionalism and care. Choose Superior Plumbing MT,
                     where quality meets integrity, and let Brody and his team
                     take the worry out of your water woes.
                  </Typography>
               </Content>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
               <Content bold={true}>
                  <Grid container spacing={2}>
                     <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography variant="h4" sx={{ textAlign: "center" }}>
                           Plumbing Services
                        </Typography>
                        <br />
                        <Typography sx={{ textAlign: "center" }}>
                           At Superior Plumbing MT, we&apos;re committed to offering
                           a comprehensive suite of plumbing services to meet
                           all your needs. Here&apos;s what we can do for you:
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
                        text="Whether it's a persistent leak, a non-stop run, or a
                        complete replacement, we handle all things toilet. We'll
                        get your throne functioning royally again in no time."
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
                     <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography sx={{ textAlign: "center" }}>
                           At Superior Plumbing MT, we&apos;re here to provide
                           top-notch plumbing services with a smile. Let us take
                           the worry out of your plumbing problems.
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
