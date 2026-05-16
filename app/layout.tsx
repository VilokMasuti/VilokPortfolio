import type { Metadata } from "next";

import { ThemeProvider } from "@/components/common/ThemeProviders";
import { LenisProvider } from "@/components/lens/LenisProvider";
import { ViewTransitions } from "next-view-transitions";
import { Geist, Geist_Mono, Inter_Tight, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans-var",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono-var",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // pick the weights you need
  variable: "--font-inter-tight-var", // exposes a CSS variable
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // choose weights
  variable: "--font-poppins-var",
});

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi-var",
  weight: "300 900",
});

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter-var",
  weight: "100 900",
});

const cabinet = localFont({
  src: "./fonts/CabinetGrotesk-Variable.ttf",
  variable: "--font-cabinet-var",
  weight: "100 900",
});

const clash = localFont({
  src: "./fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clash-var",
  weight: "200 700",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-var",
  weight: "300 700",
});

const signifier = localFont({
  src: "./fonts/TestSignifierVF-Roman.ttf",
  variable: "--font-signifier-var",
  weight: "400",
});

export const metadata: Metadata = {
  title: "The Portal of Dreams",
  description: "Vilok Masuti's dream illusion portfolio.",
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
          className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${interTight.variable} ${inter.variable} ${satoshi.variable} ${cabinet.variable} ${clash.variable} ${spaceGrotesk.variable} ${signifier.variable} relative antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <LenisProvider>
              {/* <Navbar /> */}

              {children}

            </LenisProvider>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
