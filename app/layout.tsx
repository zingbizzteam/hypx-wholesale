import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Roboto } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Script from "next/script"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-roboto",
})

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    throw new Error("Missing NEXT_PUBLIC_BASE_URL in environment variables");
  }

  return {
    title: "HYPX | Wholesale Clothing & Apparel for Retailers",
    description: "Discover top-quality wholesale fashion at unbeatable prices. Shop HYPX for bulk clothing, trendy apparel, and accessories perfect for retailers and resellers.",
    generator: "v0.dev",
    keywords: [
      "wholesale clothing",
      "bulk apparel",
      "fashion for retailers",
      "HYPX wholesale",
      "cheap clothing bulk",
      "ecommerce wholesale store",
      "retail fashion supply"
    ],
    authors: [{ name: "HYPX", url: baseUrl }],
    creator: "HYPX Team",
    publisher: "HYPX",
    openGraph: {
      title: "HYPX | Wholesale Clothing & Apparel for Retailers",
      description: "Shop HYPX for top-quality wholesale fashion apparel, perfect for resellers and boutique owners.",
      url: baseUrl,
      siteName: "HYPX",
      images: [
        {
          url: `/hypx.png`,
          alt: "HYPX Wholesale Clothing Banner"
        }
      ],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: "HYPX | Wholesale Clothing",
      description: "Wholesale fashion & apparel at the best prices for resellers. Shop HYPX today.",
      images: [`/hypx.png`],
    },
    metadataBase: new URL(baseUrl)
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="MHPddiEcFc76aZDTRmsLYYQ1LpNiBCLab3MzhP2RxXs"
        />
         {/* Google Analytics */}
         <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-0RQY8Z9P6W"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0RQY8Z9P6W');
            `,
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${roboto.variable}`}>
        <ToastContainer />
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
