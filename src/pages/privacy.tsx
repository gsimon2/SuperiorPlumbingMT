import Content from "@/components/Content";
import MainContentWrapper from "@/components/MainContentWrapper";
import { ContactInfo, siteTitle } from "@/content";
import { Grid, Link, Typography } from "@mui/material";
import Head from "next/head";

export const getStaticProps = async () => {
   return {
      props: {},
   };
};

const PrivacyPage: React.FC = () => {
   return (
      <>
         <Head>
            <title>{`Privacy Policy | ${siteTitle}`}</title>
         </Head>
         <MainContentWrapper>
            <Grid item xs={12} sm={12} md={12} lg={12}>
               <Content>
                  <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
                     Privacy Policy
                  </Typography>

                  <Typography sx={{ mb: 2 }}>
                     Superior Plumbing Service LLC respects your privacy and is
                     committed to protecting the personal information you provide
                     to us.
                  </Typography>

                  <Typography sx={{ mb: 2 }}>
                     We may collect information such as your name, phone number,
                     email address, service address, and other information you
                     provide when requesting service, submitting a website form,
                     scheduling an appointment, or communicating with us by phone,
                     email, or text message. This information is used to provide
                     plumbing services, schedule appointments, communicate
                     regarding your service, process payments, and improve our
                     customer service.
                  </Typography>

                  <Typography sx={{ mb: 3 }}>
                     We do not sell your personal information. Information may be
                     shared with trusted service providers only when necessary to
                     operate our business, provide requested services, process
                     payments, or comply with legal requirements.
                  </Typography>

                  <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                     Text Messaging &amp; Mobile Information
                  </Typography>

                  <Typography sx={{ mb: 2 }}>
                     By providing your mobile phone number and opting in to receive
                     text messages, you consent to receive service-related
                     communications from Superior Plumbing Service LLC. Message and
                     data rates may apply. Message frequency may vary.
                  </Typography>

                  <Typography sx={{ mb: 2 }}>
                     You may opt out of text messages at any time by replying STOP.
                  </Typography>

                  <Typography sx={{ mb: 2 }}>
                     For assistance, reply HELP to any text message. You may also
                     contact Superior Plumbing Service LLC directly using the contact
                     information below for questions or support regarding our text
                     messaging service.
                  </Typography>

                  <Typography sx={{ mb: 3, fontStyle: "italic" }}>
                     &ldquo;No mobile information will be shared with third
                     parties/affiliates for marketing/promotional purposes. All the
                     above categories exclude text messaging originator opt-in data
                     and consent; this information will not be shared with any third
                     parties&rdquo;.
                  </Typography>

                  <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                     Contact &amp; Support
                  </Typography>

                  <Typography sx={{ mb: 2 }}>
                     For questions regarding our services, privacy practices, or text
                     messaging program, please contact:
                  </Typography>

                  <Typography sx={{ mb: 2 }}>
                     Superior Plumbing Service LLC
                     <br />
                     Phone:{" "}
                     <Link href={ContactInfo.phone.href}>
                        {ContactInfo.phone.text}
                     </Link>
                     <br />
                     Email:{" "}
                     <Link href={ContactInfo.email.href}>
                        {ContactInfo.email.text}
                     </Link>
                     <br />
                     Website:{" "}
                     <Link href="https://superiorplumbingmt.com">
                        SuperiorPlumbingMT.com
                     </Link>
                  </Typography>

                  <Typography sx={{ mb: 2 }}>
                     For text messaging support, reply HELP to any message or
                     contact us directly using the phone number or email address
                     listed above.
                  </Typography>

                  <Typography sx={{ mb: 3 }}>
                     To stop receiving text messages, reply STOP at any time.
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                     Last Updated: August 25, 2026
                  </Typography>
               </Content>
            </Grid>
         </MainContentWrapper>
      </>
   );
};

export default PrivacyPage;
