import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'aos/dist/aos.css'
import LogoComponent from "@/components/shared/LogoComponent";
import HeaderButtons from "@/components/shared/HeaderButtons";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QBI",
  description: "India's trusted platform for job seekers, employers, and workforce partners. QBI Employment offers verified job opportunities, tailored recruitment solutions, and expert workforce support across India. Whether you're seeking your next career move or hiring top talent, QBI ensures trust, accuracy, and results. site by Muhammed Gasal [ www.muhammedgasal.com ], This web application is designed for an agency to bridge the gap between employees and employers, functioning similarly to LinkedIn. Users can register as either job seekers or recruiters. Job seekers can create detailed profiles showcasing their skills, experience, and resumes, while recruiters can post job openings and search for potential candidates based on skills and job roles. The platform supports profile browsing, messaging, and application tracking to streamline the hiring process",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-gradient-to-b from-slate-900 to-slate-800 w-full h-screen overflow-y-scroll overflow-x-hidden pb-20 scroll-smooth">
          <div className="w-full flex px-5 py-5 justify-between items-center">
            <LogoComponent />
            <HeaderButtons />
          </div>
          {children}
          <Toaster theme="light" />
        </div>
      </body>
    </html>
  );
}
