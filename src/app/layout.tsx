import Header from "@/components/header/Header";
import { maxWidth, themes } from "./Constants";
import { Container, CssBaseline } from "@mui/material";

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <>
         <CssBaseline />
         <Header />
         <Container maxWidth={maxWidth}>{children}</Container>
      </>
   );
}
