import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../app/theme";

export default function ThemeLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <AppRouterCacheProvider>
         <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </AppRouterCacheProvider>
   );
}
