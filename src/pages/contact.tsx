import Content from "@/components/Content";
import MainContentWrapper from "@/components/MainContentWrapper";
import ContactDisplay, { DisplayableContacts } from "@/components/header/ContactDisplay";
import { siteTitle } from "@/content";
import { Grid, Typography, Box } from "@mui/material";
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
            <title>{`Contact | ${siteTitle}`}</title>
         </Head>
         <MainContentWrapper>
            <Grid item xs={12} sm={12} md={12} lg={12}>
               <Content>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                     How Can We Help ?
                  </Typography>
                  <Box>
                     <ContactDisplay
                        iconColor='primary.dark'
                        textColor='primary.dark'
                        contactsToDisplay={[
                           DisplayableContacts.phone,
                           DisplayableContacts.email,
                           DisplayableContacts.facebook,
                           DisplayableContacts.google,
                        ]}
                     />
                  </Box>
               </Content>
            </Grid>
         </MainContentWrapper>
      </>
   );
};

export default Page;
