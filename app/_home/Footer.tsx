import { PaperclipIcon } from "lucide-react"
import HoverButton from "../HoverButton"

export default function Footer() {
  return (
    <footer className="border-t features-gradient sm:py-16 py-12 lg:py-24 sm:px-8 px-4 lg:px-12">
      <div className="max-w-screen-lg mx-auto grid xs:grid-cols-2 md:grid-cols-4">
        <div className="col-span-2 group md:mb-0 mb-8">
          <p className="text-3xl font-bold text-muted-foreground ">
            Made with{" "}
            <span className="group-hover:text-red-500 transition-colors">
              &#9829;
            </span>{" "}
            by
          </p>
          <h1 className="text-3xl font-bold text-foreground">
            Dominic Clerici
          </h1>
          <span className="flex items-center gap-2 mt-4">
            <HoverButton
              href="/Dominic_Clerici_Resume.pdf"
              target="_blank"
              className="primary-button button-style "
            >
              My resume
              <PaperclipIcon className="w-4 h-4" />
            </HoverButton>
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-primary font-medium text-lg">Pages</h2>
          <TextEffect href="#about">About</TextEffect>
          <TextEffect href="#featured">Featured Projects</TextEffect>
          <TextEffect href="#connect">Contact</TextEffect>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-primary font-medium text-lg">Socials</h2>
          <TextEffect
            href="https://www.linkedin.com/in/dominic-clerici/"
            newTab
          >
            LinkedIn
          </TextEffect>
          <TextEffect href="https://github.com/DominicClerici" newTab>
            GitHub
          </TextEffect>
          <TextEffect
            href="https://open.spotify.com/user/8f997cejjxl78ba6kt2n5te05"
            newTab
          >
            Spotify
          </TextEffect>
          <TextEffect href="https://ko-fi.com/dominicclerici" newTab>
            Ko-Fi
          </TextEffect>
        </div>
      </div>
    </footer>
  )
}

const TextEffect = ({
  children,
  href,
  newTab,
}: {
  children: React.ReactNode
  href: string
  newTab?: boolean
}) => {
  return (
    <a
      target={newTab ? "_blank" : "_self"}
      href={href}
      className="relative group overflow-hidden cursor-pointer w-max px-1"
    >
      <span className="opacity-0 text-xl font-medium">{children}</span>
      <span className="absolute left-0 top-0 text-xl font-medium translate-y-0 group-hover:-translate-y-full transition-transform duration-[400ms] ease-in-out">
        {children}
      </span>
      <span className="absolute font-bold text-primary left-0 top-0 translate-y-full group-hover:translate-y-0 transition-transform duration-[400ms] ease-in-out text-xl">
        {children}
      </span>
    </a>
  )
}
