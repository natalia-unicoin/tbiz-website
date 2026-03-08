import type { Metadata } from "next";
import { Inter, Montserrat } from 'next/font/google';
import "./globals.css"; // Ensure globals are loaded for Tailwind and basic resets
import ThemeRegistry from "@/theme/ThemeRegistry";
import { ThemeProviderWrapper } from "@/context/ThemeContext";
import { ModalProvider } from "@/context/ModalContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JoinModal from "@/components/JoinModal";
import ManifestoModal from "@/components/ManifestoModal";
import GlassBackground from "@/components/GlassBackground";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' });

export const metadata: Metadata = {
  title: "TransparentBusiness: The Debt-Free Evolution of Digital Asset Treasury",
  description: "A smarter way to build digital asset value. TransparentBusiness rejection of high-liability approach ensures growth is built on a sustainable financial foundation rather than borrowed capital.",
  keywords: "transparentbusiness, cryptocurrency, digital asset treasury, debt-free crypto, AI-driven finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased selection:bg-[#EBE563] selection:text-black">
        <ThemeProviderWrapper>
          <ThemeRegistry>
            <ModalProvider>
              <GlassBackground />
              <Navbar />
              {children}
              <Footer />
              <JoinModal />
              <ManifestoModal />
            </ModalProvider>
          </ThemeRegistry>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}

