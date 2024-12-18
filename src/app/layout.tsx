import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import "../styles/fonts.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evoq",
  description: "Digital Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="cursor-custom">
          <Navbar className="z-20" />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
