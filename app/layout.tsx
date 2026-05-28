import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dark Triangle | Software Consulting",
  description: "Dark Triangle is a software agency focused on React applications, TypeScript, and web performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
