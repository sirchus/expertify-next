import type { Metadata, Viewport } from "next";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Expertify - Fractional Executives On Demand",
    template: "%s | Expertify"
  },
  description: "Connect with top-tier fractional executives in product, growth, tech, and operations. Scale your business with experienced leaders on demand.",
  keywords: [
    "fractional executives",
    "fractional CTO", 
    "fractional CMO",
    "fractional CPO",
    "startup executives",
    "business scaling",
    "executive consulting"
  ],
  authors: [{ name: "Expertify Team" }],
  creator: "Expertify",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://getexpertify.com",
    title: "Expertify - Fractional Executives On Demand",
    description: "Connect with top-tier fractional executives in product, growth, tech, and operations. Scale your business with experienced leaders on demand.",
    siteName: "Expertify",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Expertify - Fractional Executives"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Expertify - Fractional Executives On Demand",
    description: "Connect with top-tier fractional executives in product, growth, tech, and operations.",
    images: ["/og-image.png"],
    creator: "@expertify"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://getexpertify.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
         <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Expertify",
//   description: "Fractional executives for startups",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         {children}
//       </body>
//     </html>
//   );
// }
