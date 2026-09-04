import Content from "@/components/Content";
import MainContentWrapper from "@/components/MainContentWrapper";
import { siteTitle } from "@/content";
import { Box, Stack, Text, Title } from "@mantine/core";
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
            <Content>
               <Text className="eyebrow" mb="xs">
                  The people behind the work
               </Text>
               <Title order={2} mb="lg">
                  Meet Our Team
               </Title>
               <Stack align="center" gap="sm">
                  <Box
                     pos="relative"
                     w="100%"
                     maw={400}
                     style={{ aspectRatio: "2 / 3" }}
                  >
                     <Image
                        src="/assets/team/owner.jpg"
                        alt="Company Owner"
                        fill
                        style={{
                           borderRadius: "0.75rem",
                           objectFit: "cover",
                        }}
                     />
                  </Box>
                  <Title order={3} mt="md">
                     Brody Barr
                  </Title>
                  <Text size="lg" c="gold.6" fw={600}>
                     Owner & Master Plumber
                  </Text>
                  <Text ta="center" maw={640}>
                     Brody is a fourth-generation plumber with over a decade of
                     experience in the field. His focus on quality and customer
                     satisfaction has made Superior Plumbing Service the top
                     choice for plumbing solutions in Western Montana.
                  </Text>
               </Stack>
            </Content>
         </MainContentWrapper>
      </>
   );
};

export default TeamPage;
