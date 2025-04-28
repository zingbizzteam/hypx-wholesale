import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Roboto } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

export const metadata: Metadata = {
  title: "HYPX | Wholesale",
  description: "Wholesale clothing and apparel for retailers",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${roboto.variable}`}>
      <ToastContainer />
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
