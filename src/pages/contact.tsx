import ContactForm from '@/components/ContactForm';
import Content from "@/components/Content";
import MainContentWrapper from "@/components/MainContentWrapper";
import ContactDisplay, {
   DisplayableContacts,
} from "@/components/header/ContactDisplay";
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

            <Grid item xs={12} sm={12} md={12} lg={6}>
               <Content>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                     Get a hold of us
                  </Typography>
                  <Box>
                     <ContactDisplay
                        iconColor="primary.dark"
                        textColor="primary.dark"
                        contactsToDisplay={[
                           DisplayableContacts.phone,
                           DisplayableContacts.email
                        ]}
                     />
                  </Box>
                  <Typography variant='h6' sx ={{ mt: 2 }}>
                     Or send us a message using the form below
                  </Typography>
                  <ContactForm />
               </Content>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
               <Content>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                     Check out our other pages
                  </Typography>
                  <Box>
                     <ContactDisplay
                        iconColor="primary.dark"
                        textColor="primary.dark"
                        contactsToDisplay={[
                           DisplayableContacts.facebook,
                           DisplayableContacts.google,
                           DisplayableContacts.rinnai,
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
