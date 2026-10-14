import { siteOrigin, siteTitle } from "@/content";
import { plumbingServices } from "@/content/services";
import {
   absoluteUrl,
   breadcrumbJsonLd,
   faqJsonLd,
   localBusinessJsonLd,
   serviceJsonLd,
} from "./seo";

describe("absoluteUrl", () => {
   it.each([
      ["", `${siteOrigin}/`],
      ["/", `${siteOrigin}/`],
      ["/contact", `${siteOrigin}/contact`],
      ["contact", `${siteOrigin}/contact`],
   ])("resolves %p to %p", (path, expected) => {
      expect(absoluteUrl(path)).toBe(expected);
   });
});

describe("localBusinessJsonLd", () => {
   it("describes the business with an E.164 phone number", () => {
      const data = localBusinessJsonLd();

      expect(data["@type"]).toBe("Plumber");
      expect(data.name).toBe(siteTitle);
      expect(data.telephone).toBe("+14065500868");
   });

   it("lists every plumbing service in the offer catalog", () => {
      const offers = localBusinessJsonLd().hasOfferCatalog.itemListElement;

      expect(offers).toHaveLength(plumbingServices.length);
      expect(offers[0].itemOffered.name).not.toMatch(/:$/);
      expect(offers[0].itemOffered.url).toBe(
         `${siteOrigin}/services/${plumbingServices[0].slug}`
      );
   });
});

describe("breadcrumbJsonLd", () => {
   it("numbers items starting at 1 with absolute URLs", () => {
      const data = breadcrumbJsonLd([
         { name: "Home", path: "/" },
         { name: "Services", path: "/services" },
      ]);

      expect(data.itemListElement).toEqual([
         { "@type": "ListItem", position: 1, name: "Home", item: `${siteOrigin}/` },
         {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${siteOrigin}/services`,
         },
      ]);
   });
});

describe("serviceJsonLd", () => {
   it("links the service page and provider", () => {
      const data = serviceJsonLd({ title: "Drains", text: "We fix drains", slug: "drains" });

      expect(data.url).toBe(`${siteOrigin}/services/drains`);
      expect(data.description).toBe("We fix drains");
      expect(data.provider.name).toBe(siteTitle);
   });
});

describe("faqJsonLd", () => {
   it("maps questions and answers", () => {
      const data = faqJsonLd([{ question: "Q?", answer: "A." }]);

      expect(data.mainEntity).toEqual([
         {
            "@type": "Question",
            name: "Q?",
            acceptedAnswer: { "@type": "Answer", text: "A." },
         },
      ]);
   });
});
