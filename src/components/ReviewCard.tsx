"use client";
import { Review } from "@/pages/reviews";
import { Avatar, Card, CardContent, CardHeader, Collapse, Link, Rating, Typography } from "@mui/material";
import React, { useState } from "react";

const ReviewCard: React.FC<IReviewCardProps> = ({ review, initialExpanded = false, allowCollapse = true }) => {
   const lineHeightInPx = 24;
   const collapsedLineClamp = 6;
   const collapsedSize = collapsedLineClamp * lineHeightInPx;

   const [expanded, setExpanded] = useState(initialExpanded);
   const [lineClamp, setLineClamp] = useState(collapsedLineClamp);

   const handleClick = () => {
      if (!allowCollapse) return;

      if (expanded) {
         // Delay the line clamp change to allow the height animation to show properly on collapse
         setTimeout(() => {
            setLineClamp(collapsedLineClamp);
         }, 150);
      } else {
         setLineClamp(400)
      }
      setExpanded(!expanded);
   }

   return (
      <Card
         onClick={handleClick}
         elevation={4}
         sx={{
            backgroundColor: 'secondary.main',
            outline: "1px solid",
            outlineColor: "primary.light",
            padding: '0.25rem'
         }}>
         <CardHeader
            sx={{ pb: 0 }}
            avatar={
               <Link
                  href={review.authorAttribution.uri}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover">
                  <Avatar src={review.authorAttribution.photoUri} aria-label="review-author" variant='square' />
               </Link>

            }
            action={
               <Rating name="read-only" value={review.rating} readOnly />
            }
            title={<Link
               target="_blank"
               rel="noopener noreferrer"
               color="text.primary"
               underline="hover"
               href={review.authorAttribution.uri}>
               {review.authorAttribution.displayName}
            </Link>}
            subheader={review.relativePublishTimeDescription}
         />
         <CardContent>
            <Collapse collapsedSize={collapsedSize} in={expanded}>
               <Typography
                  sx={{
                     ...(!expanded && {
                        WebkitLineClamp: lineClamp,
                        lineHeight: `${lineHeightInPx}px`,
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                     }),
                  }}
               >
                  {review.text.text}
               </Typography>
            </Collapse>
         </CardContent>
      </Card>
   );
};

export interface IReviewCardProps {
   review: Review;
   initialExpanded?: boolean;
   allowCollapse?: boolean;
}

export default ReviewCard;
