import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/NavBar/NavBar";
import AuthProvider from "@/AuthProvider/AuthProvider";
import Footer from "@/Components/Footer/Footer";
import { Toaster } from "react-hot-toast"; // ১. Toaster ইম্পোর্ট করুন

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
          {/* ২. Toaster এখানে বসিয়ে দিন যাতে সব পেজ থেকে অ্যাক্সেস পাওয়া যায় */}
          <Toaster 
            position="top-center" 
            reverseOrder={false} 
            toastOptions={{
              style: {
                borderRadius: '16px',
                background: '#131B33',
                color: '#fff',
                fontWeight: '600',
              },
            }}
          />
          
          <NavBar />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}