import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";


export const metadata: Metadata = {
  title: "Next Storefront",
  description: "A nifty store build with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Container className="py-20">{children}</Container>
      </body>
    </html>
  );
}
