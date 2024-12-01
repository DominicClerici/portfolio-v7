"use client"

import {
  ArrowRight,
  BriefcaseBusinessIcon,
  Code2Icon,
  GraduationCapIcon,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import {
  CPPIcon,
  JavaIcon,
  JavaScriptIcon,
  NodeJsIcon,
  PostgreSQLIcon,
  PythonIcon,
  ReactIcon,
  TypeScriptIcon,
} from "./Icons"

const IndianaLogo = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      version="1.1"
      viewBox="0 0 270 341"
    >
      <path
        d="M88.2,0 v25.6 h19.9 v188h-37.9v-142.6h17.8v-25.7h-88v25.7h19.9v165.2l32.3,33h55.9v38.1h-19.9v33h93.4v-33h-19.9v-38.1h55.9l32.3,-33v-165.2h19.9v-25.7h-88v25.7h17.8v142.6h-37.9v-188h19.9v-25.6z"
        fill="#990000"
      ></path>
    </svg>
  )
}

const MHSLogo = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 100 90.6"
    >
      <path
        d="M50,75.4l-17.93-32.26c-.31-.55-1.14-.33-1.14.3v29.4c0,.34.27.61.61.61h4.42c.34,0,.61.27.61.61v14.93c0,.34-.27.61-.61.61H1.61c-.34,0-.61-.27-.61-.61v-15.21c0-.34.27-.61.61-.61h4.97c.34,0,.61-.27.61-.61V18.04c0-.34-.27-.61-.61-.61H1.68c-.34,0-.61-.27-.61-.61V1.61c0-.34.27-.61.61-.61h28.29c.21,0,.4.11.52.28l19,30.18c.24.38.79.38,1.03,0,3.07-4.87,17.25-27.4,19.01-30.18.11-.18.31-.28.51-.28h28.29c.34,0,.61.27.61.61v15.21c0,.34-.27.61-.61.61h-4.91c-.34,0-.61.27-.61.61v54.53c0,.34.27.61.61.61h4.97c.34,0,.61.27.61.61v15.21c0,.34-.27.61-.61.61h-34.35c-.34,0-.61-.27-.61-.61v-14.93c0-.34.27-.61.61-.61h4.42c.34,0,.61-.27.61-.61v-29.4c0-.63-.84-.85-1.14-.3,0,0-17.93,32.26-17.93,32.26Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        fill="#014810"
        stroke="#0f0f0f"
      />
    </svg>
  )
}

const className = {
  card: "border p-4 md:p-6 lg:p-5 2xl:p-6 rounded-2xl bg-card",
  title:
    "2xl:text-2xl lg:text-xl xs:text-2xl text-xl font-medium mb-2 flex items-center gap-2 font-display",
  subTitle:
    "xl:text-lg lg:text-base xs:text-lg text-base font-medium flex items-center gap-1",
  logo: "xl:h-12 xl:w-12 xs:h-10 xs:w-10 h-8 w-8",
}

const SCROLL_SPEED = 0.03

export default function Features() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // Check if viewport meets minimum width
    const isLargeViewport = () => window.innerWidth >= 1024

    const handleScroll = () => {
      // Only update scroll position if viewport is large enough
      if (isLargeViewport()) {
        setScrollY(window.scrollY)
      } else {
        setScrollY(0)
      }
    }

    // Only add scroll listener if viewport is initially large enough
    if (isLargeViewport()) {
      window.addEventListener("scroll", handleScroll, { passive: true })
    }

    // Handle viewport size changes
    const handleResize = () => {
      if (isLargeViewport()) {
        setScrollY(window.scrollY)
        window.addEventListener("scroll", handleScroll, { passive: true })
      } else {
        setScrollY(0)
        window.removeEventListener("scroll", handleScroll)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Calculate transform styles based on scroll position
  const cardStyles = {
    left: {
      transform: `translateY(${scrollY * SCROLL_SPEED}px)`,
    },
    middle: {
      transform: `translateY(${scrollY * SCROLL_SPEED * 2}px)`,
    },
    right: {
      transform: `translateY(${scrollY * SCROLL_SPEED * 3}px)`,
    },
  }

  return (
    <section className="border-t features-gradient" id="about">
      <div className="sm:my-24 my-12 max-w-screen-xl mx-auto sm:px-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 lg:gap-8 2xl:gap-12 scroll-effect-container">
        <div className={className.card} style={cardStyles.left}>
          <h2 className={className.title}>
            <GraduationCapIcon className="h-7 w-7" />
            Education
          </h2>
          <div className="flex flex-col mt-4">
            <a
              href="https://bloomington.iu.edu/index.html"
              target="_blank"
              className="flex items-center gap-4 group p-4 -mx-4 rounded-lg md:hover:bg-accent transition-colors"
            >
              <IndianaLogo className={className.logo} />
              <div className="flex flex-col">
                <h3 className={className.subTitle}>
                  Indiana University{" "}
                  <span className="text-muted-foreground font-light text-sm">
                    (2026)
                  </span>
                  <ArrowRight className="h-4 w-4 md:-translate-x-0.5 md:opacity-0 md:group-hover:translate-x-0.5 md:group-hover:opacity-100 md:transition" />
                </h3>
                <p className="text-muted-foreground font-light leading-none">
                  B.S. Computer Science
                </p>
                <p className="text-muted-foreground font-light leading-none">
                  Minor in Business
                </p>
              </div>
            </a>
            <a
              href="https://www.acalanes.k12.ca.us/miramonte/"
              target="_blank"
              className="flex items-center group gap-4 p-4 -mx-4 md:hover:bg-accent transition-colors rounded-lg"
            >
              <MHSLogo className={className.logo} />
              <div className="flex flex-col">
                <h3 className={className.subTitle}>
                  Miramonte High School
                  <ArrowRight className="h-4 w-4 md:-translate-x-0.5 md:opacity-0 md:group-hover:translate-x-0.5 md:group-hover:opacity-100 md:transition" />
                </h3>
                <p className="text-muted-foreground font-light leading-none">
                  Orinda, CA
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className={className.card} style={cardStyles.middle}>
          <h2 className={className.title}>
            <BriefcaseBusinessIcon className="h-7 w-7" />
            Experience
          </h2>
          <div className="flex flex-col mt-4">
            <a
              href="https://en.wikipedia.org/wiki/Artesian_Builds"
              target="_blank"
              className="flex items-center gap-4 group p-4 -mx-4 rounded-lg md:hover:bg-accent transition-colors"
            >
              <ArtesianLogo className={className.logo} />
              <div className="flex flex-col">
                <h3 className={className.subTitle}>
                  Artesian Builds
                  <ArrowRight className="h-4 w-4 md:-translate-x-0.5 md:opacity-0 md:group-hover:translate-x-0.5 md:group-hover:opacity-100 md:transition" />
                </h3>
                <p className="text-muted-foreground font-light leading-none">
                  Full Stack Developer
                </p>
                <p className="text-muted-foreground font-light leading-none">
                  May 2021 - Mar 2022
                </p>
              </div>
            </a>
            <a
              href="https://www.goodwill.org/"
              target="_blank"
              className="flex items-center group gap-4 p-4 -mx-4 md:hover:bg-accent transition-colors rounded-lg"
            >
              <div className={`relative ${className.logo}`}>
                <Image fill src={"/images/goodwill.png"} alt="Goodwill Logo" />
              </div>
              <div className="flex flex-col">
                <h3 className={className.subTitle}>
                  Goodwill
                  <ArrowRight className="h-4 w-4 md:-translate-x-0.5 md:opacity-0 md:group-hover:translate-x-0.5 md:group-hover:opacity-100 md:transition" />
                </h3>
                <p className="text-muted-foreground font-light leading-none">
                  Crew Member
                </p>
                <p className="text-muted-foreground font-light leading-none">
                  Mar 2021 - May 2021
                </p>
              </div>
            </a>
          </div>
        </div>
        <div
          className={`md:col-span-2 lg:col-span-1  ${className.card}`}
          style={cardStyles.right}
        >
          <h2 className={className.title}>
            <Code2Icon className="h-7 w-7" />
            Languages/Frameworks
          </h2>
          <div className="grid grid-cols-2 gap-2">
            <span className="font-medium flex items-center gap-2">
              <div className="border rounded p-1 border-[#61dafb]/50 bg-[#61dafb]/20">
                <ReactIcon className="h-7 w-7 text-foreground" />
              </div>
              React
            </span>
            <span className=" font-medium flex items-center gap-2">
              <div className="border rounded p-1 border-[#61dafb]/50 bg-[#61dafb]/20">
                <TypeScriptIcon className="h-7 w-7 text-foreground" />
              </div>
              TypeScript
            </span>
            <span className=" font-medium flex items-center gap-2">
              <div className="border rounded p-1 border-[#ED8B00]/50 bg-[#ED8B00]/20">
                <JavaIcon className="h-7 w-7 text-foreground" />
              </div>
              Java
            </span>
            <span className=" font-medium flex items-center gap-2">
              <div className="border rounded p-1 border-[#4169E1]/50 bg-[#4169E1]/20">
                <PostgreSQLIcon className="h-7 w-7 text-foreground" />
              </div>
              PostgreSQL
            </span>
            <span className=" font-medium flex items-center gap-2">
              <div className="border rounded p-1 border-[#00599C]/50 bg-[#00599C]/20">
                <CPPIcon className="h-7 w-7 text-foreground" />
              </div>
              C++
            </span>
            <span className=" font-medium flex items-center gap-2">
              <div className="border rounded p-1 border-[#5FA04E]/50 bg-[#5FA04E]/20">
                <NodeJsIcon className="h-7 w-7 text-foreground" />
              </div>
              Node.js
            </span>
            <span className=" font-medium flex items-center gap-2">
              <div className="border rounded p-1 border-[#3776AB]/50 bg-[#3776AB]/20">
                <PythonIcon className="h-7 w-7 text-foreground" />
              </div>
              Python
            </span>
            <span className=" font-medium flex items-center gap-2">
              <div className="border rounded p-1 border-[#F7DF1E]/50 bg-[#F7DF1E]/20">
                <JavaScriptIcon className="h-7 w-7 text-foreground" />
              </div>
              JavaScript
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

const ArtesianLogo = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} text-[#2363de]`}
      viewBox="0 0 125.461393769 137.3830289696"
    >
      <g>
        <path
          fill="currentColor"
          strokeWidth="0"
          d="M14.7321068006,103.9044722716C30.8216605801,68.8570630117,46.5615504786,34.5713249021,62.4325433288,0c15.948816182,34.6902049561,31.7647295021,69.0913129043,47.7894324037,103.9465720625-7.4629402587,0-14.6236095248.0728711596-21.7787195745-.0934651829-.8811927375-.0204800553-2.1029444305-1.1406034594-2.5389669768-2.0518576515-3.2634991772-6.8204510553-6.3587864951-13.7212951603-9.5266284203-20.5877893005-4.1094000049-8.907331083-8.2232997853-17.8126791223-12.3842649386-26.6959059665-.3226225088-.6887658004-1.0311150032-1.1966358422-1.9799068992-2.2580315195-4.1106360192,8.9043166286-7.9917151388,17.3060627288-11.8681691727,25.7099400312-3.5834503003,7.7686650802-7.1962573636,15.5241098687-10.718345536,23.3205489582-.8721134437,1.930515888-1.9966984663,2.7431877326-4.2549819809,2.6797987133-6.5636800684-.1842749107-13.1358755346-.0653378726-20.4398854328-.0653378726Z"
        />
        <path
          fill="currentColor"
          strokeWidth="0"
          d="M90.1933270575,111.406178634c12.8655187722-1.0293934539,28.7292322388,7.901916503,35.2680667115,25.9472955526-2.5223007199,0-4.7757199202-.0012194579-7.0291505124.0002393329-4.5870141467.0029631688-9.1765231056.0894763018-13.7592197463-.0494735226-1.0770525844-.0326518411-2.7305890605-.5360942249-3.1033755218-1.3115555071-3.8889110073-8.0896560418-7.5705133719-16.2790683019-11.376320931-24.5865058558Z"
        />
        <path
          fill="currentColor"
          strokeWidth="0"
          d="M34.7938003457,111.287469532c-3.8068442163,8.2548868944-7.5209788183,16.4466924831-11.4214981071,24.5487026596-.3808718173.7911204898-1.9026075918,1.438607069-2.9077150321,1.4573206198-6.8053977535.1266526738-13.6142728652.0661242521-20.4645872065.0661242521,3.7631009877-15.8377270987,21.5747444681-27.4592980341,34.7938003457-26.0721475315Z"
        />
      </g>
    </svg>
  )
}
