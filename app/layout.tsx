import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/common/ThemeProviders";
import { ViewTransitions } from "next-view-transitions";
import { LenisProvider } from "@/components/lens/LenisProvider";
import Navbar from "@/components/common/Navbar";
import { Poppins } from "next/font/google";
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // pick the weights you need
  variable: "--font-inter-tight", // exposes a CSS variable
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // choose weights
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "G",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${poppins.variable} ${interTight.variable} font-hanken-grotesk antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <LenisProvider>
              <Navbar />
              {children}
            </LenisProvider>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
