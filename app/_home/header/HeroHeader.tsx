import HoverButton from "@/app/HoverButton"
import LogoSVG from "@/app/LogoSVG"
import React from "react"
import ClientHeader from "./ClientHeader"

export default function HeroHeader() {
  return (
    <header className="py-6 px-8 lg:px-12 md:flex items-center z-20 justify-between absolute top-0 left-0 w-screen hidden">
      <h1 className="text-2xl font-light flex items-center gap-2 font-display">
        <LogoSVG width={30} height={30} color="#D9D9D9" />
        Dominic Clerici
      </h1>
      <div className="flex items-center gap-2">
        <ClientHeader />
        <HoverButton
          href="/Dominic_Clerici_Resume.pdf"
          target="_blank"
          className="primary-button button-style text-anim-4"
        >
          My resume
        </HoverButton>
      </div>
    </header>
  )
}
