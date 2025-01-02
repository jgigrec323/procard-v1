import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ToastProvider from "@/providers/toast-provider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Procard",
  description: "Next level of business cards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR" className={roboto.className}>
      <body>
        <ToastProvider />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
