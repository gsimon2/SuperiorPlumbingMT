import Content from "@/components/Content";
import MainContentWrapper from "@/components/MainContentWrapper";
import ReviewCard from "@/components/ReviewCard";
import SeoHead from "@/components/SeoHead";
import { googlePlaceId, reviewsUrl, siteTitle } from "@/content";
import { GetStaticProps } from "next";
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
   const apiKey = process.env.REVIEW_API_KEY;
   let reviewsResponse: ReviewsResponse = {
      id: googlePlaceId,
      displayName: { text: siteTitle, languageCode: LanguageCode.En },
      reviews: [],
   };

   if (!apiKey) {
      console.error("REVIEW_API_KEY is not set; skipping Google reviews fetch.");
   } else {
      const res = await fetch(
         `https://places.googleapis.com/v1/places/${googlePlaceId}?languageCode=en`,
         {
            headers: {
               "X-Goog-Api-Key": apiKey,
               "X-Goog-FieldMask": "id,displayName,reviews",
            },
         }
      );
      const payload = await res.json();

      if (!res.ok || !payload?.reviews) {
         console.error("No reviews found!", payload?.error ?? payload);
      } else {
         reviewsResponse = payload;
      }
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
         <SeoHead
            title={`Customer Reviews | ${siteTitle}`}
            description="Read Google reviews for Superior Plumbing Service in Superior, MT. See why homeowners in Mineral, Sanders, and Missoula Counties trust our plumbers."
            path="/reviews"
         />
         <MainContentWrapper>
            <Content>
               <Text className="eyebrow" ta="center" mb="xs">
                  From the community
               </Text>
               <Title order={1} ta="center" mb="md">
                  Our Reviews
               </Title>
               <BBBSeal style={{ marginBottom: "1rem", marginTop: "1rem" }} />
               {reviewsResponse?.reviews?.length ? (
                  <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="md">
                     {reviewsResponse.reviews.map((review) => (
                        <ReviewCard
                           review={review}
                           key={review.name}
                           allowCollapse={false}
                           initialExpanded={true}
                        />
                     ))}
                  </SimpleGrid>
               ) : (
                  <Text ta="center" mt="md" mb="md">
                     Google reviews aren&apos;t showing on this page right now.
                     You can still{" "}
                     <Anchor
                        href={reviewsUrl}
                        rel="noreferrer noopener"
                        target="_blank"
                     >
                        read them on Google
                     </Anchor>
                     .
                  </Text>
               )}
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
