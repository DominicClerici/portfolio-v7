import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Footer from "./_home/Footer"
import Header from "./_home/Header"

export const metadata: Metadata = {
  title: "Dominic Clerici",
  description: "Generated by create next app",
}

const _inter = localFont({
  src: "./fonts/InterVariable.ttf",
  display: "swap",
  style: "normal",
})

const _interDisplay = localFont({
  src: [
    {
      path: "./fonts/InterDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/InterDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-inter-display",
})

// const interDisplay = localFont({
//   src: "./my-font.woff2",
//   display: "swap",
// })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
