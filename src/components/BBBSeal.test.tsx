import { render, screen } from "@/test-utils/render";
import BBBSeal from "./BBBSeal";

describe("BBBSeal", () => {
   it("links to the BBB profile in a new tab", () => {
      render(<BBBSeal />);

      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("href", expect.stringContaining("bbb.org"));
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "nofollow");
   });

   it("renders the seal image with descriptive alt text", () => {
      render(<BBBSeal />);

      expect(
         screen.getByRole("img", { name: /BBB Business Review/i })
      ).toBeInTheDocument();
   });
});
