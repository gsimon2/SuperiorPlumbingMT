import React, { PropsWithChildren } from "react";
import { Stack } from "@mantine/core";

const MainContentWrapper: React.FC<PropsWithChildren> = ({ children }) => {
   return (
      <main>
         <Stack gap="xl">{children}</Stack>
      </main>
   );
};

export default MainContentWrapper;
