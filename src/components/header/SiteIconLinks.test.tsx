import { ContactInfo } from "@/content";
import { reportConversion } from "@/lib/gtag";
import { render, screen } from "@/test-utils/render";
import SiteIconLinks from "./SiteIconLinks";

jest.mock("@/lib/gtag", () => ({ reportConversion: jest.fn() }));

describe("SiteIconLinks", () => {
   it("renders phone, email, Google, and Facebook links", () => {
      render(<SiteIconLinks alwaysShowAll />);

      expect(screen.getByRole("link", { name: "Phone number" })).toHaveAttribute(
         "href",
         ContactInfo.phone.href
      );
      expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute(
         "href",
         ContactInfo.email.href
      );
      expect(screen.getByRole("link", { name: "Google business page" })).toHaveAttribute(
         "href",
         ContactInfo.google.href
      );
      expect(screen.getByRole("link", { name: "Facebook business page" })).toHaveAttribute(
         "href",
         ContactInfo.facebook.href
      );
   });

   it("opens external business pages in a new tab", () => {
      render(<SiteIconLinks />);

      expect(screen.getByRole("link", { name: "Google business page" })).toHaveAttribute(
         "target",
         "_blank"
      );
      expect(screen.getByRole("link", { name: "Facebook business page" })).toHaveAttribute(
         "target",
         "_blank"
      );
   });

   it("reports a conversion when the phone icon is clicked", async () => {
      const { user } = render(<SiteIconLinks alwaysShowAll />);

      await user.click(screen.getByRole("link", { name: "Phone number" }));

      expect(reportConversion).toHaveBeenCalledWith(ContactInfo.phone.href);
   });
});
