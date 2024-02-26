import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


const poppins = Poppins({
  subsets:['latin'],
  weight:['400', '500', '700', '900'],
  style:['italic', 'normal'],
  variable:'--font-poppins',
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hotel Management App",
  description: "Discover Best Hotel Room Stays",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="font-normal">
          <Header/>
          {children}
          <Footer/>
        </main></body>
    </html>
  );
}
