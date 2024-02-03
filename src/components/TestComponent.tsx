import React from 'react';

const TestComponent: React.FC<ITestComponentProps> = ({pageName}) => {

   return (
      <main>
         {`Hello this is page ${pageName}`}
      </main>
   );
};

export interface ITestComponentProps {
   pageName: string;
}

export default TestComponent;