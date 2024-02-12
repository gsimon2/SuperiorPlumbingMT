import { AppProps } from "next/app";
import Layout from "../app/layout";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from 'react';
import { themes } from '@/app/Constants';
import { getInitialTheme } from '@/utils/getInitialTheme';
import getTheme from '@/app/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
   const [theme, setTheme] = useState<themes>(themes.light);

   useEffect(() => {
      setTheme(getInitialTheme());
   }, []);
   
   return (
      <AppCacheProvider {...pageProps}>
         <ThemeProvider theme={getTheme(theme)}>
            <Layout setTheme={setTheme}>
               <Component {...pageProps} />
            </Layout>
         </ThemeProvider>
      </AppCacheProvider>
   );
}
