import Content from "@/components/Content";
import MainContentWrapper from "@/components/MainContentWrapper";
import SeoHead from "@/components/SeoHead";
import { siteTitle } from "@/content";
import { Box, Stack, Text, Title } from "@mantine/core";
import Image from "next/image";

export const getStaticProps = async () => {
   return {
      props: {},
   };
};

const TeamPage: React.FC = () => {
   return (
      <>
         <SeoHead
            title={`Our Team | ${siteTitle}`}
            description="Meet Brody Barr, owner and master plumber at Superior Plumbing Service. Fourth-generation plumbing serving Superior, MT and Western Montana."
            path="/team"
            image="/assets/team/owner.jpg"
            imageAlt="Brody Barr, owner and master plumber of Superior Plumbing Service"
         />
         <MainContentWrapper>
            <Content>
               <Text className="eyebrow" mb="xs">
                  The people behind the work
               </Text>
               <Title order={1} mb="lg">
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
                        alt="Brody Barr, owner and master plumber of Superior Plumbing Service"
                        fill
                        style={{
                           borderRadius: "0.75rem",
                           objectFit: "cover",
                        }}
                     />
                  </Box>
               <Title order={2} mt="md">
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
