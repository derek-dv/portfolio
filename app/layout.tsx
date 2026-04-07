import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Derek David | Product-Focused Full-Stack Engineer",
  description:
    "Portfolio for Derek David, a full-stack engineer building fast, maintainable products with Next.js, Node.js, and cloud infrastructure.",
  icons: {
    icon: "/favicon.svg",
  },
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
