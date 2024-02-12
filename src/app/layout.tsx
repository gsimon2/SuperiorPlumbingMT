import Header from "@/components/header/Header";
import { maxWidth, themes } from "./Constants";
import { Container, CssBaseline } from "@mui/material";

export default function RootLayout({
   children,
   setTheme,
}: Readonly<{
   children: React.ReactNode;
   setTheme: (newTheme: themes) => void;
}>) {
   return (
      <>
         <CssBaseline />
         <Header setTheme={setTheme} />
         <Container maxWidth={maxWidth}>{children}</Container>
      </>
   );
}
