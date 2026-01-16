import { AppProps } from "next/app";
import Layout from "../app/layout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/theme";
import { CssBaseline } from "@mui/material";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"
import GoogleAnalytics from '@/components/GoogleAnalytics';

export default function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <GoogleAnalytics />
         <Head>
            <meta
               name="viewport"
               content="initial-scale=1, width=device-width"
            />
         </Head>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <Analytics />
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </ThemeProvider>
         <style jsx global>{`
            /* Other global styles such as 'html, body' etc... */

            #__next {
               height: 100%;
            }
         `}</style>
      </>
   );
}
