import MainContentWrapper from "@/components/MainContentWrapper";
import { siteTitle } from '@/content';
import Head from "next/head";

export const getStaticProps = async () => {
   return {
      props: {},
   };
};

const Index = () => {
   return (
      <>
         <Head>
            <title>{`Page Title | ${siteTitle}`}</title>
         </Head>
         <MainContentWrapper>Page Content</MainContentWrapper>
      </>
   );
};

export default Index;
