import Header from "@/components/header/Header";
import { maxWidth } from "./Constants";
import { Box, Container, CssBaseline } from "@mui/material";

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <>
         <CssBaseline />
         <Box sx={{ background: 'black', height: '6rem' }}/>
         <Header />
         <Container maxWidth={maxWidth}>{children}</Container>
         <Box sx={{ background: 'white', height: '100rem' }}/>
      </>
   );
}
