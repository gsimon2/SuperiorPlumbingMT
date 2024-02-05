// import "./globals.css";
import Header from "@/components/Header";
import ThemeLayout from "./themeLayout";

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <ThemeLayout>
         <div>
            <Header />
            {children}
         </div>
      </ThemeLayout>
   );
}
