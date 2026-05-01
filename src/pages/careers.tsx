import Content from "@/components/Content";
import MainContentWrapper from "@/components/MainContentWrapper";
import CareersApplicationForm from "@/components/CareersApplicationForm";
import { siteTitle } from "@/content";
import { Grid, Typography } from "@mui/material";
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
            <Grid item xs={12} sm={12} md={12} lg={12}>
               <Content>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                     Want to work with us?
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 1 }}>
                     Submit a quick prescreen application and tell us what
                     position you are looking for.
                  </Typography>
                  <CareersApplicationForm />
               </Content>
            </Grid>
         </MainContentWrapper>
      </>
   );
};

export default CareersPage;
