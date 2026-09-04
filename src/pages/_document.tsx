import { siteDescription } from "@/content";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { Head, Html, Main, NextScript } from "next/document";

export default function MyDocument() {
   return (
      <Html lang="en" {...mantineHtmlProps}>
         <Head>
            <ColorSchemeScript defaultColorScheme="light" />
            <meta name="description" content={siteDescription} />
            <link rel="icon" href="/favicon.png?v=3" type="image/png" />
            <link rel="apple-touch-icon" href="/favicon.png?v=3" />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
