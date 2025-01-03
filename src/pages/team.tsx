import Content from "@/components/Content";
import MainContentWrapper from "@/components/MainContentWrapper";
import { siteTitle } from "@/content";
import { Grid, Typography, Box } from "@mui/material";
import Head from "next/head";
import Image from "next/image";

export const getStaticProps = async () => {
   return {
      props: {},
   };
};

const TeamPage: React.FC = () => {
   return (
      <>
         <Head>
            <title>{`Our Team | ${siteTitle}`}</title>
         </Head>
         <MainContentWrapper>
            <Grid item xs={12} sm={12} md={12} lg={12}>
               <Content>
                  <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
                     Meet Our Team
                  </Typography>
                  <Box
                     sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                     }}
                  >
                     <Box
                        sx={{
                           position: "relative",
                           width: "100%",
                           aspectRatio: "2/3",
                           maxWidth: "400px",
                        }}
                     >
                        <Image
                           src="/assets/team/owner.jpg"
                           alt="Company Owner"
                           fill
                           style={{
                              borderRadius: "0.5rem",
                              objectFit: "cover",
                           }}
                        />
                     </Box>
                     <Typography
                        variant="h5"
                        sx={{ fontWeight: "bold", mt: 2 }}
                     >
                        Brody Barr
                     </Typography>
                     <Typography variant="h6">
                        Owner & Master Plumber
                     </Typography>
                     <Typography sx={{ textAlign: "center" }}>
                        With over 10 years of experience in the plumbing
                        industry, Brody founded Superior Plumbing Service with a
                        vision to provide exceptional plumbing services to the
                        Superior, MT community. His dedication to quality
                        workmanship and customer satisfaction has built our
                        reputation as the area&apos;s most trusted plumbing service.
                     </Typography>
                  </Box>
               </Content>
            </Grid>
         </MainContentWrapper>
      </>
   );
};

export default TeamPage;
