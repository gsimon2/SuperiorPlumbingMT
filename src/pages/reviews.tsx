import Content from "@/components/Content";
import MainContentWrapper from "@/components/MainContentWrapper";
import ReviewCard from "@/components/ReviewCard";
import { googlePlaceId, reviewsUrl, siteTitle } from "@/content";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Anchor, SimpleGrid, Text, Title } from "@mantine/core";
import BBBSeal from "@/components/BBBSeal";

export interface ReviewsResponse {
   id: string;
   displayName: LocalizedText;
   reviews: Review[];
}

export interface LocalizedText {
   text: string;
   languageCode: LanguageCode;
}

export enum LanguageCode {
   En = "en",
}

export interface Review {
   name: string;
   relativePublishTimeDescription: string;
   rating: number;
   text: LocalizedText;
   originalText: LocalizedText;
   authorAttribution: AuthorAttribution;
   publishTime: Date;
}

export interface AuthorAttribution {
   displayName: string;
   uri: string;
   photoUri: string;
}

export const getStaticProps = (async () => {
   const res = await fetch(
      `https://places.googleapis.com/v1/places/${googlePlaceId}?fields=id,displayName,reviews&key=${process.env.REVIEW_API_KEY}&languageCode=en`
   );
   const reviewsResponse = await res.json();

   if (!reviewsResponse?.reviews) {
      console.error("No reviews found!");
   }

   return {
      props: { reviewsResponse },
      revalidate: 60 * 60 * 24,
   };
}) satisfies GetStaticProps<{
   reviewsResponse: ReviewsResponse;
}>;

const Index: React.FC<{ reviewsResponse: ReviewsResponse }> = ({
   reviewsResponse,
}) => {
   return (
      <>
         <Head>
            <title>{`Reviews | ${siteTitle}`}</title>
         </Head>
         <MainContentWrapper>
            <Content>
               <Text className="eyebrow" ta="center" mb="xs">
                  From the community
               </Text>
               <Title order={2} ta="center" mb="md">
                  Our Reviews
               </Title>
               <BBBSeal style={{ marginBottom: "1rem", marginTop: "1rem" }} />
               <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="md">
                  {reviewsResponse?.reviews?.map((review) => (
                     <ReviewCard
                        review={review}
                        key={review.name}
                        allowCollapse={false}
                        initialExpanded={true}
                     />
                  ))}
               </SimpleGrid>
               <Text ta="center" mt="lg">
                  <Anchor
                     href={reviewsUrl}
                     rel="noreferrer noopener"
                     target="_blank"
                  >
                     See all reviews on Google
                  </Anchor>
               </Text>
            </Content>
         </MainContentWrapper>
      </>
   );
};

export default Index;
