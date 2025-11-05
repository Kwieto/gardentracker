import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import {Providers} from "./providers";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Garden Tracker",
  description: "Track what's in the garden",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <div className="min-h-screen bg-white text-black">
      <Navbar></Navbar>
      <Providers>
        <main className="container mx-auto px-4 py-8 mt-4">
          {children}
        </main>
      </Providers>
    </div>
    </body>
    </html>
  );
}
