import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import FirebaseProvider from "@/components/FirebaseProvider";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const headingDisplay = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Marley Senior Services",
  description: "Custom Solutions for Web Applications and Digital Marketing for Insurance Brokers, Agents, and Agencies",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${headingDisplay.variable} antialiased`}
      >
        <FirebaseProvider>
          <SiteHeader />
          <div className="mx-auto max-w-6xl px-6">
            {children}
          </div>
          <SiteFooter />
        </FirebaseProvider>
      </body>
    </html>
  );
}
