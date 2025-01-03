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
            backgroundImage: 'url(/assets/background-pattern.avif)',
            backgroundAttachment: 'fixed',
            backgroundSize: 'initial',
            backgroundRepeat: 'repeat',
            position: 'relative',
            '&::before': {
               content: '""',
               position: 'absolute',
               top: 0,
               left: 0,
               right: 0,
               bottom: 0,
               backgroundColor: 'rgba(255, 255, 255, 0.6)', // This creates a 60% lighter overlay
               zIndex: 0,
            },
            '& > *': {
               position: 'relative',
               zIndex: 1,
            },
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
