import { ContactInfo, siteTitle } from "@/content";
import { render, screen } from "@/test-utils/render";
import Footer from "./Footer";

jest.mock("@/lib/gtag", () => ({ reportConversion: jest.fn() }));

describe("Footer", () => {
   it("shows the site name and current copyright year", () => {
      render(<Footer />);

      expect(screen.getByRole("heading", { name: siteTitle })).toBeInTheDocument();
      expect(
         screen.getByText(new RegExp(`Copyright ${new Date().getFullYear()}`))
      ).toBeInTheDocument();
   });

   it("links to the privacy policy", () => {
      render(<Footer />);

      expect(screen.getByRole("link", { name: "Privacy Policy" })).toHaveAttribute(
         "href",
         "/privacy"
      );
   });

   it("shows the phone and email contacts", () => {
      render(<Footer />);

      expect(screen.getByRole("link", { name: ContactInfo.phone.text })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: ContactInfo.email.text })).toBeInTheDocument();
   });

   it("lists the counties served", () => {
      render(<Footer />);

      expect(screen.getByText(/Mineral County, Sanders County, and Missoula County/)).toBeInTheDocument();
   });
});
