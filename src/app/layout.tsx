import NavigationHeader from "@/components/header/NavigationHeader";
import { maxWidth } from "./Constants";
import { Box, Container, CssBaseline } from "@mui/material";
import TopInfo from "@/components/header/TopInfo";

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <>
         <CssBaseline />
         <TopInfo />
         <NavigationHeader />
         <Container maxWidth={maxWidth}>{children}</Container>
         <Box sx={{ background: "white", height: "100rem" }} />
      </>
   );
}
