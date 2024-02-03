import TestComponent from '@/components/TestComponent';

export const getStaticProps = async () => {
   return {
      props: {},
   };
};

const Index = () => {
   return <TestComponent pageName='page1' />;
};

export default Index;
