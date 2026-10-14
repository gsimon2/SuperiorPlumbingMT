import { render } from "@testing-library/react";
import { siteDescription, siteOrigin } from "@/content";
import { defaultOgImage } from "@/lib/seo";
import SeoHead from "./SeoHead";

// next/head only renders inside Next's HeadManager, so render its children inline.
jest.mock("next/head", () => ({
   __esModule: true,
   default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

function meta(container: HTMLElement, selector: string) {
   return container.querySelector(selector)?.getAttribute("content");
}

describe("SeoHead", () => {
   it("renders the title, canonical URL, and default description", () => {
      const { container } = render(<SeoHead title="Contact Us" path="/contact" />);

      expect(container.querySelector("title")).toHaveTextContent("Contact Us");
      expect(container.querySelector('link[rel="canonical"]')).toHaveAttribute(
         "href",
         `${siteOrigin}/contact`
      );
      expect(meta(container, 'meta[name="description"]')).toBe(siteDescription);
      expect(meta(container, 'meta[property="og:url"]')).toBe(`${siteOrigin}/contact`);
      expect(meta(container, 'meta[property="og:image"]')).toBe(defaultOgImage);
   });

   it("is indexable by default", () => {
      const { container } = render(<SeoHead title="Home" path="/" />);

      expect(meta(container, 'meta[name="robots"]')).toBe("index, follow");
   });

   it("blocks indexing when noIndex is set", () => {
      const { container } = render(<SeoHead title="404" path="/404" noIndex />);

      expect(meta(container, 'meta[name="robots"]')).toBe("noindex, nofollow");
   });

   it("prefixes relative images with the site origin", () => {
      const { container } = render(
         <SeoHead title="Team" path="/team" image="/assets/team.jpg" type="article" />
      );

      expect(meta(container, 'meta[property="og:image"]')).toBe(
         `${siteOrigin}/assets/team.jpg`
      );
      expect(meta(container, 'meta[name="twitter:image"]')).toBe(
         `${siteOrigin}/assets/team.jpg`
      );
      expect(meta(container, 'meta[property="og:type"]')).toBe("article");
   });

   it("keeps absolute image URLs unchanged", () => {
      const { container } = render(
         <SeoHead title="Team" path="/team" image="https://cdn.example.com/a.jpg" />
      );

      expect(meta(container, 'meta[property="og:image"]')).toBe(
         "https://cdn.example.com/a.jpg"
      );
   });
});
