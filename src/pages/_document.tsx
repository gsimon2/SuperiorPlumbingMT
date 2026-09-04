import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { Head, Html, Main, NextScript } from "next/document";

export default function MyDocument() {
   return (
      <Html lang="en" {...mantineHtmlProps} style={{ height: "100%" }}>
         <Head>
            <ColorSchemeScript defaultColorScheme="light" />
            <meta name="theme-color" content="#16246c" />
            <link rel="icon" href="/favicon.png?v=3" type="image/png" />
            <link rel="apple-touch-icon" href="/favicon.png?v=3" />
         </Head>
         <body style={{ margin: 0, minHeight: "100%" }}>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
