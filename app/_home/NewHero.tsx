import {
  ArrowRightIcon,
  CarIcon,
  PaperclipIcon,
  PartyPopperIcon,
  UserIcon,
} from "lucide-react"
import "./iconPanelStyles.css"
import HoverButton from "../HoverButton"
import HoverArrow from "../HoverArrow"
import {
  JavaIcon,
  ReactIcon,
  TypeScriptIcon,
  PostgreSQLIcon,
  NodeJsIcon,
  PythonIcon,
  JavaScriptIcon,
  CPPIcon,
  RacketIcon,
} from "./Icons"

export default function NewHero() {
  return (
    <section className="relative max-w-screen-2xl mx-auto overflow-hidden">
      <div className="min-h-[90vh] overflow-hidden w-screen flex items-center max-w-screen-xl mx-auto md:pl-12 sm:pl-8 pl-4">
        <div className="w-fit relative z-10">
          <a
            href="https://www.linkedin.com/in/dominic-clerici/"
            target="_blank"
            className="group mb-8 flex w-fit cursor-pointer text-anim-1 items-center rounded-full border border-muted-foreground/75 py-1 pl-4 pr-0 text-sm text-muted-foreground backdrop-blur-md transition-all hover:border-muted-foreground hover:pr-4 hover:text-foreground"
          >
            <div className="relative mr-2 h-2.5 w-2.5">
              <div className="absolute inset-0 animate-ping-hero rounded-full border border-green-500"></div>
              <div className="absolute inset-0 rounded-full bg-green-500"></div>
            </div>
            <p>Open to work</p>
            <ArrowRightIcon className="h-4 w-4 -translate-x-2 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
          </a>
          <h1 className="lg:text-7xl md:text-6xl text-5xl font-display font-medium text-anim-2">
            I&apos;m Dominic
          </h1>
          <h2 className="lg:text-xl md:text-lg text-base text-muted-foreground mt-2 max-w-[400px] lg:max-w-[500px] text-anim-3">
            I am an engineer & designer creating online experiences. I love to
            make things that are useful, beautiful, and fun.
          </h2>
          <span className="flex items-stretch sm:items-center flex-col sm:flex-row gap-4 mt-6 max-w-[200px] sm:max-w-none text-anim-4">
            <HoverButton
              href="/Dominic_Clerici_Resume.pdf"
              target="_blank"
              className="primary-button button-style justify-between sm:justify-normal"
            >
              My resume
              <PaperclipIcon className="w-4 h-4 block sm:hidden" />
            </HoverButton>
            <HoverButton
              href="#featured"
              className="secondary-button group button-style justify-between sm:justify-normal"
            >
              See my work
              <HoverArrow className="w-3 h-3" />
            </HoverButton>
            {/* <a
            href="#featured"
            className="xs:px-7 xs:py-2 py-1.5 px-5 xs:text-lg text-base font-medium border rounded-full border-muted bg-muted/30 backdrop-blur text-foreground/85 hover:bg-foreground/10 transition-colors hover:border-foreground/20 cursor-pointer hover:text-foreground"
          >
            See my work
          </a> */}
          </span>
        </div>
        <div className=" w-[550px] absolute right-0 pointer-events-none md:pointer-events-auto">
          <div
            style={{
              transform:
                "rotateX(45deg) rotateZ(45deg) scale(1.4) translateX(50px) translateY(50px)",
            }}
            className="grid-background w-full aspect-square grid grid-cols-2 grid-rows-2 gap-12 p-12"
          >
            <div className="hero-tile group grid grid-cols-3 gap-2">
              <div className="icon-tile tile-1 diag-gradient-border rotate-45 translate-x-6 translate-y-6">
                <ReactIcon className="w-6 h-6" />
              </div>
              <div className="icon-tile tile-2 diag-gradient-border rotate-12 -translate-x-12 translate-y-12 hero-tile-delay-2">
                <PostgreSQLIcon className="w-6 h-6" />
              </div>
              <div className="icon-tile tile-3 diag-gradient-border rotate-90 -translate-x-4 translate-y-24 hero-tile-delay-3">
                <TypeScriptIcon className="w-6 h-6" />
              </div>
              <div className="icon-tile tile-4 diag-gradient-border rotate-45 translate-x-16 -translate-y-12 hero-tile-delay-4">
                <JavaIcon className="w-6 h-6" />
              </div>
              <div className="icon-tile tile-5 diag-gradient-border rotate-12 -translate-x-1 hover:!shadow-red-500/50 hover:!text-red-500 hover:!border-red-500 translate-y-4 hero-tile-delay-5">
                <NodeJsIcon className="w-6 h-6" />
              </div>
              <div className="icon-tile tile-6 diag-gradient-border rotate-12 -translate-x-24 translate-y-12 hero-tile-delay-6">
                <PythonIcon className="w-6 h-6" />
              </div>
              <div className="icon-tile tile-7 diag-gradient-border rotate-12 translate-x-12 -translate-y-16 hero-tile-delay-7">
                <JavaScriptIcon className="w-6 h-6" />
              </div>
              <div className="icon-tile tile-8 diag-gradient-border rotate-12 translate-x-12 -translate-y-3 hero-tile-delay-8">
                <CPPIcon className="w-6 h-6" />
              </div>
              <div className="icon-tile tile-9 diag-gradient-border rotate-12 -translate-x-4 -translate-y-12 hero-tile-delay-9">
                <RacketIcon className="w-6 h-6" />
              </div>
            </div>
            <div className="hero-tile row-start-2 relative group">
              <svg viewBox="0 0 100 100" className="absolute inset-0">
                <defs>
                  <linearGradient id="gradient" gradientTransform="rotate(30)">
                    <stop offset="0%" stopColor="rgba(43, 43, 43, 0.7)" />
                    <stop offset="62%" stopColor="rgba(102, 102, 102, 0.7)" />
                    <stop offset="100%" stopColor="rgba(43, 43, 43, 0.7)" />
                  </linearGradient>
                </defs>

                <path
                  d="M30,52 h20 a10,10 0 0 1 10,10 v3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeDasharray="39"
                  className="path-1 text-border group-hover:text-muted-foreground/60"
                />
                <path
                  d="M30,48 h40 a10,10 0 0 0 10,-10 v-8"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="64"
                  className="path-2 text-border group-hover:text-muted-foreground/60"
                  strokeWidth="0.5"
                />
                <g>
                  <rect
                    fill="url(#gradient)"
                    x="9.5"
                    y="39.5"
                    width="21"
                    height="21"
                    rx="5.5"
                  />
                  <rect
                    className="text-background group-hover:text-background/70 transition-colors duration-500 delay-[400ms] group-hover:delay-[400ms]"
                    fill="currentColor"
                    x="10"
                    y="40"
                    width="20"
                    height="20"
                    rx="5"
                  />
                </g>
                <g>
                  <rect
                    fill="url(#gradient)"
                    x="49.5"
                    y="64.5"
                    width="21"
                    height="21"
                    rx="5.5"
                  />
                  <rect
                    className="text-background group-hover:text-primary/20 transition-colors duration-500 delay-0 group-hover:delay-[800ms]"
                    fill="currentColor"
                    x="50"
                    y="65"
                    width="20"
                    height="20"
                    rx="5"
                  />
                </g>
                <g>
                  <rect
                    fill="url(#gradient)"
                    x="49.5"
                    y="4.5"
                    width="46"
                    height="26"
                    rx="5.5"
                  />
                  <rect
                    className="text-background group-hover:text-background/70 transition-colors duration-500 delay-[700ms] group-hover:delay-0"
                    fill="currentColor"
                    x="50"
                    y="5"
                    width="45"
                    height="25"
                    rx="5"
                  />
                </g>

                <svg
                  x="50"
                  y="65"
                  width="20"
                  height="20"
                  viewBox="-3 -3 30 30"
                  fill="none"
                  className="text-muted-foreground waving-icon"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g className="animate-wave origin-bottom">
                    <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
                    <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
                    <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
                    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
                  </g>
                </svg>
              </svg>
            </div>
            <div className="hero-tile row-start-2 relative group flex flex-col items-start">
              <div className="flex items-center gap-2 pl-1 py-1">
                <div className="w-3 h-3 bg-muted/50 group-hover:bg-muted transition-colors duration-500 rounded-full flex-shrink-0" />
                <div className="w-3 h-3 bg-muted/50 group-hover:bg-muted transition-colors duration-500 rounded-full flex-shrink-0" />
                <div className="w-3 h-3 bg-muted/50 group-hover:bg-muted transition-colors duration-500 rounded-full flex-shrink-0" />
              </div>
              <div className="grid grid-cols-2 gap-2 w-full py-1">
                <div className="p-2 selection-icon rounded-xl diag-gradient-border text-muted/50 group-hover:text-muted hover:!text-muted-foreground transition-colors duration-500 hover:bg-muted/75">
                  <CarIcon className="w-6 h-6 mx-auto" />
                </div>
                <div className="p-2 selection-icon rounded-xl diag-gradient-border text-muted/50 group-hover:text-muted hover:!text-muted-foreground transition-colors duration-500 hover:bg-muted/75">
                  <UserIcon className="w-6 h-6 mx-auto" />
                </div>
              </div>
              <div className="relative w-full mt-2">
                <div className="absolute h-24 w-full border rounded-xl" />
                <div className="absolute h-24 w-full bg-muted/50 opacity-0 transition-opacity duration-300" />
                <div className="absolute h-24 w-full bg-muted/50 opacity-0 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
