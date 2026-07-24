import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "colorsofhopedb-two.vercel.app";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const baseUrl = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og-v2.png", baseUrl).toString();

  return {
    metadataBase: baseUrl,
    title: {
      default: "Colors of Hope",
      template: "%s | Colors of Hope",
    },
    description:
      "Colors of Hope provides art kits for children facing hardship, inspiring hope, self-expression, emotional growth, and resilience.",
    icons: {
      icon: "/colors-of-hope-logo-v2.png",
      shortcut: "/colors-of-hope-logo-v2.png",
      apple: "/colors-of-hope-logo-v2.png",
    },
    openGraph: {
      title: "Colors of Hope",
      description:
        "Keeping creativity alive by putting thoughtful art supplies directly into children's hands.",
      type: "website",
      images: [{ url: socialImage, width: 1732, height: 908 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Colors of Hope",
      description:
        "Keeping creativity alive by putting thoughtful art supplies directly into children's hands.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fredoka.variable}>{children}</body>
    </html>
  );
}
