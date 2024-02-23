import { AppProps } from "next/app";
import Layout from "../app/layout";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/theme";

export default function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <AppCacheProvider {...pageProps}>
            <ThemeProvider theme={theme}>
               <Layout>
                  <Component {...pageProps} />
               </Layout>
            </ThemeProvider>
         </AppCacheProvider>
         <style jsx global>{`
            /* Other global styles such as 'html, body' etc... */

            #__next {
               height: 100%;
            }
         `}</style>
      </>
   );
}
