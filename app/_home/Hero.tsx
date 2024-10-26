import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-screen flex flex-col items-center">
      <div className="absolute inset-0 -z-10 bg-load-in">
        <Image priority fill quality={100} className="object-cover" alt="Background photo" src="/images/bg.jpg" />
        <div className="absolute inset-0 hero-mask-gradient"></div>
      </div>
      <a
        href="https://www.linkedin.com/in/dominic-clerici/"
        target="_blank"
        className="flex items-center backdrop-blur-md hover:text-foreground/90 hover:border-muted-foreground/75 hover:bg-muted/75 cursor-pointer transition-all hover:pr-4 pr-0 border pl-4 py-1 text-sm text-muted-foreground rounded-full mt-64 mb-12 group text-anim-3"
      >
        <div className="h-2.5 w-2.5 bg-green-500 rounded-full mr-2"></div>
        <p>Open to work</p>
        <ArrowRight className="h-4 w-4 -translate-x-2 group-hover:translate-x-1 transition opacity-0 group-hover:opacity-100" />
      </a>
      <h1 className="md:text-7xl xs:text-6xl text-5xl text-anim-1 font-display font-medium">Dominic Clerici</h1>
      <h2 className="xs:text-2xl text-xl text-muted-foreground text-anim-2 font-display">
        Creating online & offline experiences.
      </h2>
      <span className="flex items-center gap-4 mt-6 text-anim-2">
        <a
          href="/Dominic_Clerici_Resume.pdf"
          target="_blank"
          className="xs:px-7 xs:py-2 py-1.5 px-5 xs:text-lg text-base font-medium border rounded-full border-primary/50 bg-primary/30 text-foreground hover:bg-primary/60 hover:border-primary transition-colors cursor-pointer"
        >
          My resume
        </a>
        <a
          href="#featured"
          className="xs:px-7 xs:py-2 py-1.5 px-5 xs:text-lg text-base font-medium border rounded-full border-muted bg-muted/30 backdrop-blur text-foreground/85 hover:bg-foreground/10 transition-colors hover:border-foreground/20 cursor-pointer hover:text-foreground"
        >
          See my work
        </a>
      </span>
    </section>
  )
}
