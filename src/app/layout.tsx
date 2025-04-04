import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Google Translate Clone",
  description:
    "A modern web app inspired by Google Translate, offering seamless language translation, intuitive UI, and support for multiple languages. Built with Next.js and optimized for speed and accessibility.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#4285f4",
      },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
  appleWebApp: {
    title: "Google Translate Clone",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-roboto antialiased">{children}</body>
    </html>
  );
}
