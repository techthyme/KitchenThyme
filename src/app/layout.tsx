import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/ui/nav";
// import Footer from "@/components/ui/footer";
import { Noto_Sans } from "next/font/google";
import { AuthProvider } from "@/context/auth";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Its Kitchen Thyme",
  description: "A marketplace for chefs and people who love what they do.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} antialiased bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100`}
      >
        <AuthProvider>
          <Navbar />
          {children}
          {/* <Footer /> */}
        </AuthProvider>
      </body>
    </html>
  );
}
