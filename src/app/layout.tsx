import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ButtonAppBar from "../components/navbar";
import Footer from "../components/footer";
import WhatsAppChat from "@/components/whatsappChatWithUs";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Best Technical Services in Dubai - Moosa Al Noor",
  description: "Best technical services in Dubai - Moosa Al Noor",
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
        <Head>
          <title>Technical Service in Dubai | Moosa Al Noor</title>
          <meta name="description" content="Moosa Al Noor offers expert technical services in Dubai, specializing in repairs, maintenance, and installations. Contact us for reliable service." />
          <meta name="keywords" content="Technical Service Dubai, Moosa Al Noor, Repairs Dubai, Maintenance Dubai" />
          <meta name="author" content="Moosa Al Noor" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Technical Service in Dubai | Moosa Al Noor" />
          <meta property="og:description" content="Expert technical services in Dubai, specializing in repairs, maintenance, and installations." />
          <meta property="og:url" content="https://www.moosaalnoor.com" />
          <meta property="og:type" content="website" />

          {/* Other meta tags */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "Moosa Al Noor",
              url: "https://www.moosaalnoor.com",
              logo: "https://www.moosaalnoor.com/favicon.ico",
            })}
          </script>
        </Head>
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
