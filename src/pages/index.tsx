import TestComponent from "@/components/TestComponent";
import { Metadata } from "next";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
   return {
      props: {},
   };
};

const Page = () => {
   return (
      <>
         <Head>
            <title>test</title>
         </Head>
         <div>
            <TestComponent pageName="home" />
            <Link href="/page1">page1</Link>
         </div>
      </>
   );
};

export default Page;
