import type { Metadata } from "next";
// import "./globals.css"; // Commented out for MUI migration
import ThemeRegistry from "@/theme/ThemeRegistry";
import { ThemeProviderWrapper } from "@/context/ThemeContext";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { ModalProvider } from "@/context/ModalContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JoinModal from "@/components/JoinModal";
import ManifestoModal from "@/components/ManifestoModal";
import GlassBackground from "@/components/GlassBackground";

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
      <body className="antialiased selection:bg-[#EBE563] selection:text-black">
        <ThemeProviderWrapper>
          <ThemeRegistry>
            <ModalProvider>
              <ThemeSwitcher />
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

