import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diamond Bar High School Colors",
  description:
    "A digital color guide celebrating Diamond Bar High School's purple and gold.",
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
