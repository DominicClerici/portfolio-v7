import localFont from "next/font/local"
import "./globals.css"
import Footer from "./_home/Footer"
import Header from "./_home/Header"

const defaultUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"

export const metadata = {
  title: "Dominic Clerici",
  description:
    "The professional developer portfolio of Dominic Clerici, A computer science student at Indiana University.",
  keywords: ["Dominic", "Clerici", "Portfolio", "Web Developer", "React", "JavaScript"],
  metadataBase: new URL(defaultUrl),
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
