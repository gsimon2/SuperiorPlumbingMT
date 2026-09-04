import { siteDescription, siteOrigin, siteTitle } from "@/content";
import { absoluteUrl, defaultOgImage, defaultOgImageAlt } from "@/lib/seo";
import Head from "next/head";

type SeoHeadProps = {
   title: string;
   description?: string;
   path: string;
   image?: string;
   imageAlt?: string;
   noIndex?: boolean;
   type?: "website" | "article";
};

export default function SeoHead({
   title,
   description = siteDescription,
   path,
   image = defaultOgImage,
   imageAlt = defaultOgImageAlt,
   noIndex = false,
   type = "website",
}: SeoHeadProps) {
   const url = absoluteUrl(path);
   const ogImage = image.startsWith("http") ? image : `${siteOrigin}${image}`;

   return (
      <Head>
         <title>{title}</title>
         <meta name="description" content={description} key="description" />
         {noIndex ? (
            <meta name="robots" content="noindex, nofollow" key="robots" />
         ) : (
            <meta name="robots" content="index, follow" key="robots" />
         )}
         <link rel="canonical" href={url} key="canonical" />

         <meta property="og:site_name" content={siteTitle} key="og:site_name" />
         <meta property="og:locale" content="en_US" key="og:locale" />
         <meta property="og:type" content={type} key="og:type" />
         <meta property="og:title" content={title} key="og:title" />
         <meta
            property="og:description"
            content={description}
            key="og:description"
         />
         <meta property="og:url" content={url} key="og:url" />
         <meta property="og:image" content={ogImage} key="og:image" />
         <meta property="og:image:alt" content={imageAlt} key="og:image:alt" />

         <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
         <meta name="twitter:title" content={title} key="twitter:title" />
         <meta
            name="twitter:description"
            content={description}
            key="twitter:description"
         />
         <meta name="twitter:image" content={ogImage} key="twitter:image" />

         <meta name="geo.region" content="US-MT" key="geo.region" />
         <meta name="geo.placename" content="Superior, Montana" key="geo.placename" />
      </Head>
   );
}
