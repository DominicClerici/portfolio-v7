"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

interface SVGComponentProps {
  className: string
}

const useScrollFade = (threshold: number = 0.1): [React.RefObject<HTMLDivElement>, boolean] => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]): void => {
      entries.forEach((entry) => {
        // Once element becomes visible, update the state
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-20% 0px -20% 0px", // 80% viewport trigger area
      threshold: threshold,
    })

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return [ref, isVisible]
}

// Project section component to reduce duplication
interface ProjectSectionProps {
  isRight?: boolean
  isVisible: boolean
  projectRef: React.RefObject<HTMLDivElement>
  title: string
  description: string
  Icon: React.FC<SVGComponentProps>
  technologies: string[]
  children?: React.ReactNode
  shadowClass: string
  imgPath: string
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  isRight,
  isVisible,
  projectRef,
  title,
  description,
  Icon,
  technologies,
  children,
  shadowClass,
  imgPath,
}) => {
  const contentOrder = isRight ? "lg:order-1" : "lg:order-none"
  const imageOrder = isRight ? "lg:order-none" : "lg:order-1"

  return (
    <div
      ref={projectRef}
      className={`grid grid-cols-1 lg:grid-cols-3 lg:gap-8 sm:mt-24 mt-16 lg:mt-48 transition-opacity duration-700`}
      style={{
        opacity: isVisible ? 1 : 0.25,
      }}
    >
      <div className={`lg:py-8 pb-4 ${contentOrder}`}>
        <h2 className="text-3xl flex flex-col xs:flex-row xs:items-center gap-2 xs:mb-4 mb-2 font-display">
          <span className="flex items-center gap-2">
            <Icon className="h-8 w-8" />
            {title}
          </span>
          <span className="items-center gap-2 xs:ml-4 lg:hidden flex">{children}</span>
        </h2>
        <p className="text-muted-foreground">{description}</p>

        <ul className="flex flex-wrap gap-2 items-center mt-2 lg:mt-4">
          {technologies.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </ul>
        <span className="items-center gap-2 mt-8 hidden lg:flex">{children}</span>
      </div>
      <div
        className={`relative lg:col-span-2 rounded-2xl overflow-hidden border-2 min-h-48 xs:min-h-64 lg:min-h-96 group ${imageOrder} ${shadowClass}`}
      >
        <Image quality={100} src={imgPath} alt={title} fill className="object-cover" />
      </div>
    </div>
  )
}

const FeaturedWorkClient = () => {
  const [springTabRef, isSpringTabVisible] = useScrollFade(0.1)
  const [rallyRef, isRallyVisible] = useScrollFade(0.1)

  const springTabTechnologies = [
    "React",
    "TypeScript",
    "REST API",
    "Node.js",
    "Express",
    "TailwindCSS",
    "Chrome Extension",
  ]

  const rallyTechnologies = [
    "React",
    "TypeScript",
    "Next.js",
    "Full Stack",
    "PostgreSQL",
    "Express",
    "SaaS",
    "WebSockets",
  ]

  return (
    <>
      {/* Spring Tab Section */}
      <ProjectSection
        imgPath="/images/start.png"
        shadowClass={"spring-tab-shadow"}
        isRight={false}
        isVisible={isSpringTabVisible}
        projectRef={springTabRef}
        title="Spring tab"
        description="A beautiful, customizable, and blazing fast start page for Chrome. With third party integrations, deep customization, and a focus on optimization and performance."
        Icon={SpringTabSVG}
        technologies={springTabTechnologies}
      >
        <a
          href="https://www.usespringtab.com/"
          target="_blank"
          className="pl-5 pr-3 text-base font-inter py-1 group flex items-center gap-2 font-medium border rounded-full border-primary/50 bg-primary/30 text-foreground hover:bg-primary/60 hover:border-primary transition-colors cursor-pointer"
        >
          View website
          <ArrowRight className="-translate-x-0.5 group-hover:translate-x-0.5 transition-transform h-4 w-4" />
        </a>
        <a
          target="_blank"
          href="https://chromewebstore.google.com/detail/spring-tab-new-tab/kkoigocnngbcfpaodgdebmmighhlpkna"
          className="rounded-lg border border-transparent hover:border-muted-foreground/20 p-2 hover:bg-accent transition-colors text-muted-foreground"
        >
          <ChromeIcon className="h-6 w-6" />
        </a>
      </ProjectSection>

      {/* Rally Section */}
      <ProjectSection
        imgPath="/images/rally.png"
        shadowClass={"rally-shadow"}
        isRight={true}
        isVisible={isRallyVisible}
        projectRef={rallyRef}
        title="Rally"
        description="The platform built from the ground up to simplify and streamline event sponsorship for both sponsors and hosts."
        Icon={RallySVG}
        technologies={rallyTechnologies}
      >
        <a className="px-5 py-1 font-inter text-base font-medium border rounded-full border-primary/30 bg-primary/20 text-muted-foreground">
          Coming soon
        </a>
      </ProjectSection>
    </>
  )
}

export default FeaturedWorkClient

const RallySVG = ({ className }: { className: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className={className} fill="none">
      <path
        fillRule="evenodd"
        d="M53 0C23.729 0 0 23.729 0 53v294c0 29.271 23.729 53 53 53h294c29.271 0 53-23.729 53-53V53c0-29.271-23.729-53-53-53H53zm51 189.327c1.139-4.071 3.192-7.99 6.515-11.312 5.672-5.672 13.081-7.645 20.021-7.687 6.867-.042 14.101 1.754 21.107 4.56 14.055 5.63 29.449 16.233 43.342 30.127s24.497 29.287 30.127 43.342c2.806 7.006 4.602 14.24 4.56 21.107-.042 6.94-2.015 14.349-7.687 20.021-1.839 1.839-3.86 3.289-5.989 4.411a12.04 12.04 0 0 1-2.539 1.25l-144.45 51.165a12 12 0 0 1-15.315-15.327L104 189.327zm10.084 43.32l-29.346 82.631 82.721-29.3c-10.074-5.899-20.366-13.914-29.944-23.493-9.545-9.545-17.537-19.798-23.431-29.838zm12.907-36.342l.451-1.271c.02-.026.035-.04.042-.047l.001-.002.002-.001c.025-.026.149-.15.561-.295.46-.163 1.298-.353 2.636-.362 2.769-.017 6.824.753 12.035 2.84 10.38 4.158 23.134 12.657 35.296 24.818s20.66 24.916 24.818 35.296c2.087 5.211 2.857 9.266 2.84 12.035-.009 1.338-.199 2.176-.362 2.636-.145.412-.269.536-.295.561l-.001.002-.002.001c-.025.026-.149.15-.561.295-.46.163-1.298.353-2.636.362-2.769.017-6.824-.753-12.035-2.84-10.38-4.158-23.134-12.657-35.296-24.818s-20.66-24.916-24.818-35.296c-2.087-5.211-2.857-9.266-2.84-12.035.005-.794.074-1.412.164-1.879zM80 78.5c0-6.627 5.373-12 12-12h.135c6.627 0 12 5.373 12 12s-5.373 12-12 12H92c-6.627 0-12-5.373-12-12zM335 134c-6.627 0-12 5.373-12 12s5.373 12 12 12h.135c6.627 0 12-5.373 12-12s-5.373-12-12-12H335zM228.5 65c0-6.627 5.373-12 12-12h.135c6.627 0 12 5.373 12 12s-5.373 12-12 12h-.135c-6.627 0-12-5.373-12-12zM335 296c-6.627 0-12 5.373-12 12s5.373 12 12 12h.135c6.627 0 12-5.373 12-12s-5.373-12-12-12H335zm11.379-234.81c2.104 6.285-1.285 13.085-7.569 15.189l-30.24 10.125-.018.006a27.15 27.15 0 0 0-14.41 11.316c-3.346 5.328-4.739 11.653-3.939 17.894l.005.046.012.093c2.167 18.643-12.343 35.391-31.495 35.391h-5.13c-5.992 0-10.917 4.145-11.972 9.685l-.017.087-2.835 14.31c-1.288 6.501-7.602 10.727-14.103 9.439s-10.727-7.602-9.439-14.103l2.827-14.271c3.283-17.114 18.327-29.147 35.539-29.147h5.13c4.591 0 8.161-4.013 7.661-8.569a51.15 51.15 0 0 1 34.572-54.938l.01-.003 30.222-10.119c6.284-2.104 13.085 1.285 15.189 7.569zm-18.037 136.695c-18.706-7.395-39.491 4.332-42.961 24.067l-.036.215c-.563 3.587-3.746 6.333-7.45 6.333H267.5c-6.627 0-12 5.373-12 12s5.373 12 12 12h10.395c15.418 0 28.67-11.224 31.137-26.463.886-4.782 5.974-7.598 10.46-5.843l11.028 4.438a12 12 0 1 0 8.96-22.264l-11.07-4.455-.068-.028zM182.02 53.868c6.148-2.474 13.138.504 15.612 6.652l4.455 11.07.028.068c7.395 18.706-4.332 39.491-24.067 42.961l-.381.06c-3.316.474-6.167 3.586-6.167 7.426V132.5c0 6.627-5.373 12-12 12s-12-5.373-12-12v-10.395c0-15.246 11.067-28.809 26.517-31.147 4.749-.914 7.537-5.981 5.789-10.45l-4.438-11.028c-2.475-6.148.504-13.138 6.652-15.612z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

const TechBadge = ({ children }: { children: string }) => {
  return (
    <li className="text-slate-100 bg-slate-100/15 font-light px-2 py-0.5 rounded-full text-sm border border-t-slate-100/20 border-slate-100/10">
      {children}
    </li>
  )
}

const ChromeIcon = ({ className }: { className: string }) => {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>Google Chrome</title>
      <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z" />
    </svg>
  )
}

const SpringTabSVG = ({ className }: { className: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className={className} fill="none">
      <path
        fillRule="evenodd"
        d="M53 0C23.729 0 0 23.729 0 53v294c0 29.271 23.729 53 53 53h294c29.271 0 53-23.729 53-53V53c0-29.271-23.729-53-53-53H53zm82.038 318.787c-4.79 0-8.707-1.886-12.421-6.493-4.055-5.031-7.634-13.157-10.125-24.51-4.963-22.621-4.719-53.872-.012-86.006 2.182-14.895 5.28-29.69 9.122-43.587 11.617 19.94 20.935 42.839 27.036 65.328 7.532 27.76 9.798 53.541 6.446 71.602-1.669 8.997-4.533 15.005-7.763 18.577-2.873 3.178-6.579 5.089-12.283 5.089zM69.668 76.652c16.317 4.799 31.069 14.913 44.023 27.955l.563-1.149c6.479-13.111 14.116-24.83 22.979-33.445C146.103 61.39 157.163 55 170.072 55c12.694 0 24.168 6.2 33.821 14.455 7.55 6.457 14.708 14.773 21.38 24.222 5.205-9.12 11.067-17.234 17.617-23.638C251.728 61.399 262.771 55 275.69 55c16.845 0 29.799 12.297 38.719 25.124 9.365 13.467 16.915 31.171 22.304 49.357 5.415 18.277 8.876 37.813 9.636 55.326.733 16.905-.931 34.199-7.861 46.284-3.572 6.228-11.517 8.381-17.745 4.809s-8.381-11.516-4.809-17.744c3.115-5.433 5.122-16.475 4.439-32.222-.657-15.138-3.701-32.568-8.589-49.067-4.916-16.591-11.47-31.473-18.721-41.899C285.368 83.902 279.195 81 275.69 81c-3.826 0-8.706 1.845-14.624 7.63-5.931 5.798-11.945 14.676-17.616 26.291-.772 1.58-1.532 3.2-2.279 4.856 12.211 22.945 22.737 49.844 30.398 76.529 9.674 33.694 15.16 68.363 13.039 95.285-1.053 13.368-4.078 26.209-10.636 36.063-7.041 10.582-17.851 17.133-31.771 17.133-13.75 0-24.752-6.351-32.701-16.141-7.614-9.377-12.453-21.844-15.466-35.219-6.044-26.833-5.655-61.527-.899-95.344 3.744-26.625 10.312-53.54 19.176-76.601l-3.255-5.298c-7.45-11.737-14.953-20.891-22.061-26.969C179.779 83.044 174.123 81 170.072 81c-3.835 0-8.747 1.853-14.717 7.656-5.977 5.811-12.05 14.7-17.791 26.32-1.841 3.725-3.617 7.667-5.32 11.793l2.659 3.803c17.313 25.332 30.715 56.234 38.828 86.139 8.054 29.686 11.262 59.741 6.917 83.154-2.178 11.74-6.455 22.879-14.04 31.27-7.943 8.784-18.727 13.652-31.57 13.652-13.757 0-24.75-6.358-32.664-16.176-7.573-9.396-12.343-21.878-15.278-35.255-5.889-26.839-5.295-61.534-.342-95.347 3.362-22.949 8.823-46.111 16.027-66.833-12.818-15.177-26.632-25.517-40.45-29.581-6.888-2.026-10.83-9.252-8.804-16.14s9.252-10.829 16.14-8.804zm149.213 125.052c2.298-16.343 5.7-32.562 9.983-47.608 6.808 15.582 12.849 32.436 17.715 49.385 9.26 32.253 13.885 63.53 12.11 86.068-.895 11.362-3.32 19.13-6.362 23.701-2.558 3.844-5.498 5.537-10.126 5.537-4.797 0-8.752-1.893-12.516-6.529-4.099-5.049-7.729-13.19-10.287-24.545-5.096-22.627-5.035-53.879-.517-86.009z"
        fill="currentColor"
      ></path>
    </svg>
  )
}
