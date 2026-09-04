import NavigationHeader from "@/components/header/NavigationHeader";
import { maxWidth } from "@/Constants";
import { Box, Container } from "@mantine/core";
import Footer from "@/components/Footer";

export default function SiteLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <Box className="site-shell">
         <NavigationHeader />
         <Box style={{ flex: "1 0 auto" }}>
            <Container size={maxWidth} px={{ base: "sm", sm: "md", lg: "xl" }} py={{ base: "md", md: "xl" }}>
               {children}
            </Container>
         </Box>
         <Footer />
      </Box>
   );
}
