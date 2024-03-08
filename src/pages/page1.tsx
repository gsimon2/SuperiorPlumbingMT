import Content from "@/components/Content";
import MainContentWrapper from "@/components/MainContentWrapper";
import ReviewCard from "@/components/ReviewCard";
import { siteTitle } from "@/content";
import { Box, Grid, Typography } from "@mui/material";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

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
      `https://places.googleapis.com/v1/places/ChIJEQvhJGqdIogRLm2Ag3kJYuc?fields=id,displayName,reviews&key=${process.env.REVIEW_API_KEY}&languageCode=en`
   );
   const reviewsResponse = await res.json();
   return { props: { reviewsResponse } };
}) satisfies GetStaticProps<{
   reviewsResponse: ReviewsResponse;
}>;

const Index: React.FC<{ reviewsResponse: ReviewsResponse }> = ({
   reviewsResponse,
}) => {
   return (
      <>
         <Head>
            <title>{`Page Title | ${siteTitle}`}</title>
         </Head>
         <MainContentWrapper>
            <Content>
               <Grid container spacing={2}>
                  {reviewsResponse.reviews.map((review) => (
                     <Grid
                        item
                        key={review.name}
                        xs={12}
                        sm={12}
                        md={6}
                        lg={4}
                        xl={4}
                     >
                        <Box>
                           <ReviewCard review={review} />
                        </Box>
                     </Grid>
                  ))}
               </Grid>
            </Content>
         </MainContentWrapper>
      </>
   );
};

export default Index;
