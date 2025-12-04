import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import { AnalyserProvider } from "@/contexts/analyserContext";

const archivoSans = Archivo({
  variable: "--font-archivo-sans",
  subsets: ["latin"],
});

export const applicationMetadata: Metadata = {
  title: "ExifPanel",
  description:
    "A free online tool to quickly analyse, view, and export EXIF and XMP metadata (Lightroom presets) from image files and remote URLs. Supports JPEG, PNG, WEBP, and more.",
  keywords: [
    "EXIF viewer",
    "XMP metadata",
    "Lightroom preset extractor",
    "photo metadata analysis",
    "online EXIF tool",
    "JPEG metadata",
    "image file analyser",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "EXIF & XMP Metadata Analyser Tool",
    description:
      "Analyse photo metadata instantly from files or remote URLs, including camera settings and Lightroom adjustments.",
    url: "https://exifpanel.dev",
    siteName: "ExifPanel",
    images: [
      {
        url: "https://exifpanel.dev/opengraph.webp",
        width: 1200,
        height: 630,
        alt: "ExifPanel Tool Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EXIF & XMP Metadata Analyser",
    description:
      "Quickly view camera settings, lens details, and Lightroom XMP data from any photo.",
    images: ["https://exifpanel.dev/opengraph.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://exifpanel.dev" />
        <meta name="author" content="Faried Idris" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${archivoSans.variable} antialiased text-foreground bg-background`}
      >
        <AnalyserProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
        </AnalyserProvider>
      </body>
    </html>
  );
}
