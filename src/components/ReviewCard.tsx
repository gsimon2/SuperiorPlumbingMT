"use client";
import { Review } from "@/pages/page1";
import { Card, CardContent, Collapse, Typography } from "@mui/material";
import React, { useRef, useState } from "react";

const ReviewCard: React.FC<IReviewCardProps> = ({ review }) => {
   const lineHeightInPx = 24;
   const collapsedLineClamp = 6;
   const collapsedSize = collapsedLineClamp * lineHeightInPx;

   const [expanded, setExpanded] = useState(false);
   const [lineClamp, setLineClamp] = useState(collapsedLineClamp);

   const handleClick = () => {
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
      <Card onClick={handleClick}>
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
}

export default ReviewCard;
