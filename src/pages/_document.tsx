import { siteDescription } from "@/content";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { Head, Html, Main, NextScript } from "next/document";

export default function MyDocument() {
   return (
      <Html lang="en" {...mantineHtmlProps} style={{ height: "100%" }}>
         <Head>
            <ColorSchemeScript defaultColorScheme="light" />
            <meta name="description" content={siteDescription} />
            <link rel="icon" href="/favicon.png?v=3" type="image/png" />
            <link rel="apple-touch-icon" href="/favicon.png?v=3" />
         </Head>
         <body style={{ margin: 0, height: "100%" }}>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
