import TestComponent from "@/components/TestComponent";
import Link from 'next/link';

export const getStaticProps = async () => {
   return {
      props: {},
   };
};

const Index = () => {
   return (
      <div>
         <TestComponent pageName="home" />
         <Link href="/page1">page1</Link>
      </div>
   );
};

export default Index;
