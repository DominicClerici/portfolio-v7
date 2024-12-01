"use client"

import { useState } from "react"
import LogoSVG from "../LogoSVG"

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="py-6 xs:px-8 px-4 lg:px-12 flex items-center z-20 justify-between absolute top-0 left-0 w-screen md:hidden">
      <div className="z-10 flex justify-between w-full">
        <h1 className="text-2xl font-light flex items-center gap-2  font-display">
          <LogoSVG width={30} height={30} color="#D9D9D9" />
          Dominic Clerici
        </h1>
        <button
          className="relative z-50 text-anim-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open navigation menu</span>
          <div id="nav-icon4" className={`${isOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <div
        className={`${
          !isOpen ? "-translate-y-full opacity-50" : "translate-y-0 opacity-100"
        } transition bg-background h-screen w-screen duration-500 fixed top-0 left-0 flex flex-col gap-6 xs:px-8 px-4 pt-24`}
      >
        <HeaderButton i={1} href="#about" isOpen={isOpen} setIsOpen={setIsOpen}>
          About
        </HeaderButton>
        <HeaderButton
          i={2}
          href="#featured"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
          Featured
        </HeaderButton>
        <HeaderButton
          i={3}
          href="#connect"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
          Connect
        </HeaderButton>
        <a
          style={{
            transitionDelay: `${isOpen ? 450 : 0}ms`,
          }}
          href="/Dominic_Clerici_Resume.pdf"
          target="_blank"
          className={`${
            isOpen
              ? "translate-y-0 opacity-100 duration-300"
              : "translate-y-4 opacity-0 duration-150"
          } px-7 py-4 mt-4 text-center backdrop-blur-md text-lg font-medium border rounded-full border-primary/50 bg-primary/30 text-foreground hover:bg-primary/60 hover:border-primary`}
        >
          My resume
        </a>
      </div>
    </header>
  )
}

interface HeaderButtonInterface {
  children: React.ReactNode
  href: string
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  i: number
}

const HeaderButton = ({
  children,
  href,
  isOpen,
  setIsOpen,
  i,
}: HeaderButtonInterface) => {
  return (
    <a
      style={{
        transitionDelay: `${isOpen ? i * 50 + 250 : 0}ms`,
      }}
      className={`${
        isOpen
          ? "translate-y-0 opacity-100 duration-300"
          : "translate-y-4 opacity-0 duration-150"
      } transition px-3 -mx-3 py-1 text-xl font-medium border rounded-full border-transparent hover:bg-accent/40 hover:border-border cursor-pointer`}
      href={href}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </a>
  )
}
