import { AppProps } from "next/app";
import Layout from "../layouts/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
   return (
      <Layout>
         <Component {...pageProps} />
      </Layout>
   );
}

