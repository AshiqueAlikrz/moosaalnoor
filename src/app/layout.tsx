import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ButtonAppBar from "../components/navbar";
import Footer from "../components/footer";
import WhatsAppChat from "@/components/whatsappChatWithUs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MOOSA AL NOOR - Best Technical Service in Dubai",
  description: "Best technical service in Dubai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ButtonAppBar />
        <main>
          {children}
          <WhatsAppChat />
        </main>{" "}
        {/* Render children here */}
        <Footer />
      </body>
    </html>
  );
}
