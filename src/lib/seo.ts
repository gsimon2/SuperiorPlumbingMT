import { ContactInfo, siteDescription, siteOrigin, siteTitle } from "@/content";
import { plumbingServices } from "@/content/services";

export const defaultOgImage = `${siteOrigin}/assets/brody-with-van.jpg`;
export const defaultOgImageAlt =
   "Brody Barr standing in front of a Superior Plumbing Service truck";

export function absoluteUrl(path: string): string {
   if (!path || path === "/") {
      return `${siteOrigin}/`;
   }

   return `${siteOrigin}${path.startsWith("/") ? path : `/${path}`}`;
}

export function localBusinessJsonLd() {
   return {
      "@context": "https://schema.org",
      "@type": "Plumber",
      name: siteTitle,
      url: `${siteOrigin}/`,
      image: defaultOgImage,
      logo: `${siteOrigin}/assets/dog_logo_no_background.png`,
      description: siteDescription,
      telephone: ContactInfo.phone.href.replace("tel:", "+1"),
      email: ContactInfo.email.text,
      address: {
         "@type": "PostalAddress",
         addressLocality: "Superior",
         addressRegion: "MT",
         postalCode: "59872",
         addressCountry: "US",
      },
      areaServed: [
         { "@type": "AdministrativeArea", name: "Mineral County, Montana" },
         { "@type": "AdministrativeArea", name: "Sanders County, Montana" },
         { "@type": "AdministrativeArea", name: "Missoula County, Montana" },
         { "@type": "City", name: "Superior, Montana" },
      ],
      sameAs: [ContactInfo.facebook.href, ContactInfo.google.href],
      hasOfferCatalog: {
         "@type": "OfferCatalog",
         name: "Plumbing services",
         itemListElement: plumbingServices.map((service) => ({
            "@type": "Offer",
            itemOffered: {
               "@type": "Service",
               name: service.title.replace(/:$/, ""),
               url: absoluteUrl(`/services/${service.slug}`),
            },
         })),
      },
   };
}

export function websiteJsonLd() {
   return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteTitle,
      url: `${siteOrigin}/`,
   };
}

export function breadcrumbJsonLd(items: ReadonlyArray<{ name: string; path: string }>) {
   return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
         "@type": "ListItem",
         position: index + 1,
         name: item.name,
         item: absoluteUrl(item.path),
      })),
   };
}

export function serviceJsonLd(service: {
   title: string;
   text: string;
   slug: string;
}) {
   return {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.text,
      url: absoluteUrl(`/services/${service.slug}`),
      provider: {
         "@type": "Plumber",
         name: siteTitle,
         url: `${siteOrigin}/`,
         telephone: ContactInfo.phone.href.replace("tel:", "+1"),
      },
      areaServed: [
         "Mineral County, Montana",
         "Sanders County, Montana",
         "Missoula County, Montana",
      ],
   };
}

export function faqJsonLd(faqs: ReadonlyArray<{ question: string; answer: string }>) {
   return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
         "@type": "Question",
         name: faq.question,
         acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
         },
      })),
   };
}
