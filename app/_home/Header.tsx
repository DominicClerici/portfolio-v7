import LogoSVG from "../LogoSVG"
import MobileHeader from "./MobileHeader"
import HoverButton from "../HoverButton"

export default function Header() {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  )
}

const DesktopHeader = () => {
  return (
    <header className="py-6 px-8 lg:px-12 md:flex items-center z-20 justify-between absolute top-0 left-0 w-screen hidden">
      <h1 className="text-2xl font-light flex items-center gap-2  font-display text-anim-4">
        <LogoSVG width={30} height={30} color="#D9D9D9" />
        Dominic Clerici
      </h1>
      <nav className="flex gap-2 text-anim-3">
        <HeaderButton href="#about">About</HeaderButton>
        <HeaderButton href="#featured">Featured</HeaderButton>
        <HeaderButton href="#connect">Connect</HeaderButton>
      </nav>
      <HoverButton
        href="/Dominic_Clerici_Resume.pdf"
        target="_blank"
        className="primary-button button-style text-anim-4"
      >
        My resume
      </HoverButton>
    </header>
  )
}

const HeaderButton = ({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) => {
  return (
    <a
      className="lg:px-5 md:px-3 py-1 text-lg border rounded-full border-transparent hover:bg-accent/40 hover:border-border transition-colors cursor-pointer"
      href={href}
    >
      {children}
    </a>
  )
}
