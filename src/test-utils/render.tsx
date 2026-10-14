import { MantineProvider } from "@mantine/core";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { theme } from "@/theme";

function Providers({ children }: { children: React.ReactNode }) {
   // env="test" disables Mantine transitions and portals so content renders synchronously inline.
   return (
      <MantineProvider theme={theme} env="test">
         {children}
      </MantineProvider>
   );
}

export function render(
   ui: React.ReactElement,
   options?: Omit<RenderOptions, "wrapper">
) {
   return {
      user: userEvent.setup(),
      ...rtlRender(ui, { wrapper: Providers, ...options }),
   };
}

export * from "@testing-library/react";
export { userEvent };
