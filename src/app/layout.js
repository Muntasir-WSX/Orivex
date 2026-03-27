import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/NavBar/NavBar";
import AuthProvider from "@/AuthProvider/AuthProvider";
import Footer from "@/Components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Orivex",
  description: "Master modern web development with Orivex",
  icons: {
    icon: [
      {
        url: "/icon.svg", 
        href: "/icon.svg",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
    <body> 
        <AuthProvider>
          <NavBar />
          <main>{children}</main>
          <Footer></Footer>
        </AuthProvider>
      </body>
    </html>
  );
}
