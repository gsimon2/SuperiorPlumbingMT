import { LanguageCode, Review } from "@/pages/reviews";
import { render, screen } from "@/test-utils/render";
import ReviewCard from "./ReviewCard";

const review: Review = {
   name: "places/abc/reviews/1",
   relativePublishTimeDescription: "2 weeks ago",
   rating: 5,
   text: { text: "Fixed our water heater same day!", languageCode: LanguageCode.En },
   originalText: { text: "Fixed our water heater same day!", languageCode: LanguageCode.En },
   authorAttribution: {
      displayName: "Jane Doe",
      uri: "https://maps.google.com/contrib/jane",
      photoUri: "https://example.com/jane.png",
   },
   publishTime: new Date("2026-01-01"),
};

// The collapsed state shows a line-clamped preview alongside the hidden full text.
const reviewTextCount = () => screen.getAllByText(review.text.text).length;

describe("ReviewCard", () => {
   it("shows the author, publish time, and review text", () => {
      render(<ReviewCard review={review} />);

      const authorLinks = screen.getAllByRole("link", { name: "Jane Doe" });
      expect(authorLinks).toHaveLength(2);
      for (const link of authorLinks) {
         expect(link).toHaveAttribute("href", review.authorAttribution.uri);
      }
      expect(screen.getByText("2 weeks ago")).toBeInTheDocument();
      expect(screen.getAllByText(review.text.text).length).toBeGreaterThan(0);
   });

   it("opens author links in a new tab safely", () => {
      render(<ReviewCard review={review} />);

      for (const link of screen.getAllByRole("link")) {
         expect(link).toHaveAttribute("target", "_blank");
         expect(link).toHaveAttribute("rel", "noopener noreferrer");
      }
   });

   it("toggles between the preview and full text on click", async () => {
      const { user } = render(<ReviewCard review={review} />);
      expect(reviewTextCount()).toBe(2);

      await user.click(screen.getByText("2 weeks ago"));
      expect(reviewTextCount()).toBe(1);

      await user.click(screen.getByText("2 weeks ago"));
      expect(reviewTextCount()).toBe(2);
   });

   it("stays expanded when collapsing is disabled", async () => {
      const { user } = render(
         <ReviewCard review={review} initialExpanded allowCollapse={false} />
      );
      expect(reviewTextCount()).toBe(1);

      await user.click(screen.getByText("2 weeks ago"));
      expect(reviewTextCount()).toBe(1);
   });

   it("handles reviews without text", () => {
      render(<ReviewCard review={{ ...review, text: undefined as never }} />);

      expect(screen.getByText("Jane Doe")).toBeInTheDocument();
      expect(screen.queryByText(review.text.text)).not.toBeInTheDocument();
   });
});
