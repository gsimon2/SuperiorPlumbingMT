import { AppProps } from "next/app";
import Layout from "../app/layout";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";

// Do we need the theme provider?
export default function MyApp({ Component, pageProps }: AppProps) {
   return (
      <AppCacheProvider {...pageProps}>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </AppCacheProvider>
   );
}
