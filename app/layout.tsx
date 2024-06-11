import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/Components/layout/Layout";
import { LoginModal } from "@/Components/modals/LoginModal";
import { RegisterModal } from "@/Components/modals/RegisterModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chirping Social App",
  description: "A social media app for chirping social birds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          <LoginModal />
          <RegisterModal />
          {children}
        </Layout>
      </body>
    </html>
  );
}
