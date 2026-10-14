import { homeFaqs } from "@/content/services";
import { render, screen } from "@/test-utils/render";
import { FaqAccordion } from "./FaqAccordion";

describe("FaqAccordion", () => {
   it("renders a collapsed control for every FAQ", () => {
      render(<FaqAccordion />);

      for (const faq of homeFaqs) {
         expect(screen.getByRole("button", { name: faq.question })).toHaveAttribute(
            "aria-expanded",
            "false"
         );
      }
   });

   it("expands an answer when its question is clicked", async () => {
      const [faq] = homeFaqs;
      const { user } = render(<FaqAccordion />);

      const control = screen.getByRole("button", { name: faq.question });
      await user.click(control);

      expect(control).toHaveAttribute("aria-expanded", "true");
      expect(screen.getByText(faq.answer)).toBeVisible();
   });

   it("collapses the open answer when another question is opened", async () => {
      const [first, second] = homeFaqs;
      const { user } = render(<FaqAccordion />);

      await user.click(screen.getByRole("button", { name: first.question }));
      await user.click(screen.getByRole("button", { name: second.question }));

      expect(screen.getByRole("button", { name: first.question })).toHaveAttribute(
         "aria-expanded",
         "false"
      );
      expect(screen.getByRole("button", { name: second.question })).toHaveAttribute(
         "aria-expanded",
         "true"
      );
   });
});
