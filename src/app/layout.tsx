import NavigationHeader from "@/components/header/NavigationHeader";
import { maxWidth } from "./Constants";
import { Box, Container } from "@mui/material";
import TopInfo from "@/components/header/TopInfo";
import Footer from "@/components/Footer";

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <Box
         sx={{
            height: "auto",
            minHeight: "100%",
            display: "flex",
            flexDirection: "column",
         }}
      >
         <TopInfo />
         <NavigationHeader />
         <Box sx={{ flex: "1 0 auto" }}>
            <Container maxWidth={maxWidth}>{children}</Container>
         </Box>
         <Footer />
      </Box>
   );
}
