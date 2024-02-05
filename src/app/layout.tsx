import Header from "@/components/Header";
// import Providers from "./Providers";

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <div>
         <Header />
         {children}
      </div>
   );
}
