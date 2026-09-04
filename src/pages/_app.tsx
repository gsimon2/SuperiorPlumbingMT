import { AppProps } from "next/app";
import Layout from "@/components/SiteLayout";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { inter, theme } from "@/theme";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";
import "@/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <GoogleAnalytics />
         <Head>
            <meta
               name="viewport"
               content="minimum-scale=1, initial-scale=1, width=device-width"
            />
         </Head>
         <MantineProvider theme={theme} defaultColorScheme="light" forceColorScheme="light">
            <Notifications />
            <Analytics />
            <div className={inter.className} style={{ minHeight: "100%" }}>
               <Layout>
                  <Component {...pageProps} />
               </Layout>
            </div>
         </MantineProvider>
      </>
   );
}
