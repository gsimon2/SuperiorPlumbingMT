import Content from "@/components/Content";
import MainContentWrapper from "@/components/MainContentWrapper";
import ReviewCard from "@/components/ReviewCard";
import { googlePlaceId, reviewsUrl, siteTitle } from "@/content";
import { GetStaticProps } from "next";
import Head from "next/head";
import Masonry from '@mui/lab/Masonry';
import { Box, Link, Typography } from '@mui/material';
import BBBSeal from '@/components/BBBSeal';

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

export const getStaticProps = (async (context) => {
   const res = await fetch(
      `https://places.googleapis.com/v1/places/${googlePlaceId}?fields=id,displayName,reviews&key=${process.env.REVIEW_API_KEY}&languageCode=en`
   );
   const reviewsResponse = await res.json();

   if (!reviewsResponse?.reviews) {
      console.error('No reviews found!');
   }

   return {
      props: { reviewsResponse },
      revalidate: 60 * 60 * 24, // 24 hours
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
            <Content sx={{ marginTop: '1rem', marginLeft: '1rem' }}>
               <Typography sx={{ textAlign: "center", pb: '1rem' }} variant="h3">Our Reviews</Typography>
               <BBBSeal sx={{ marginBottom: '1rem', marginTop: '1rem' }} />
               <Masonry columns={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 3 }} spacing={2} sx={{ m: 0 }}>
                  {reviewsResponse?.reviews?.map((review) => (
                     <ReviewCard
                        review={review}
                        key={review.name}
                        allowCollapse={false}
                        initialExpanded={true} />
                  ))}
               </Masonry>
               <Box sx={{ textAlign: 'center' }}>
                  <Link href={reviewsUrl} rel="noreferrer noopener" target="_blank" underline="hover">
                     See all reviews on Google
                  </Link>
               </Box>
            </Content>
         </MainContentWrapper>
      </>
   );
};

export default Index;
