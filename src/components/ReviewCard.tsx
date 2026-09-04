"use client";
import { Review } from "@/pages/reviews";
import {
   Anchor,
   Avatar,
   Card,
   Collapse,
   Group,
   Rating,
   Text,
} from "@mantine/core";
import React, { useState } from "react";

const ReviewCard: React.FC<IReviewCardProps> = ({
   review,
   initialExpanded = false,
   allowCollapse = true,
}) => {
   const [expanded, setExpanded] = useState(initialExpanded);

   const handleClick = () => {
      if (!allowCollapse) return;
      setExpanded(!expanded);
   };

   return (
      <Card
         onClick={handleClick}
         withBorder
         shadow="sm"
         style={{ cursor: allowCollapse ? "pointer" : "default" }}
      >
         <Group justify="space-between" align="flex-start" mb="sm">
            <Group>
               <Anchor
                  href={review.authorAttribution.uri}
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <Avatar
                     src={review.authorAttribution.photoUri}
                     alt={review.authorAttribution.displayName}
                     radius="sm"
                  />
               </Anchor>
               <div>
                  <Anchor
                     target="_blank"
                     rel="noopener noreferrer"
                     href={review.authorAttribution.uri}
                     c="navy.8"
                     fw={600}
                  >
                     {review.authorAttribution.displayName}
                  </Anchor>
                  <Text size="sm" c="dimmed">
                     {review.relativePublishTimeDescription}
                  </Text>
               </div>
            </Group>
            <Rating value={review.rating} readOnly />
         </Group>
         <Collapse in={expanded} transitionDuration={150}>
            <Text>{review.text?.text ?? ""}</Text>
         </Collapse>
         {!expanded && (
            <Text lineClamp={6}>{review.text?.text ?? ""}</Text>
         )}
      </Card>
   );
};

export interface IReviewCardProps {
   review: Review;
   initialExpanded?: boolean;
   allowCollapse?: boolean;
}

export default ReviewCard;
