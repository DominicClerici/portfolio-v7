import { BriefcaseBusinessIcon, UserIcon } from "lucide-react"
import Image from "next/image"
import React from "react"
import {
  DrizzleIcon,
  NextJsIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "../_home/Icons"
import * as HoverCard from "@radix-ui/react-hover-card"
import "./hoverCardStyles.css"
export default function page() {
  return (
    <main>
      <section className="flex flex-col items-center pt-32 pb-16 max-w-screen-lg mx-auto sm:px-8 px-6 md:px-12">
        <div className="rounded-2xl text-muted-foreground diag-gradient-border p-2 md:p-3 mb-4 md:mb-8 bg-card text-anim-1">
          <UserIcon className="w-6 h-6" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold font-display text-anim-2">
          About <span className="text-gradient-1">Me</span>
        </h1>
        <div className="md:grid grid-cols-5 flex flex-col gap-12 lg:gap-24 pt-12 md:pt-24">
          <div className="flex flex-col col-span-2 gap-4 text-anim-4 md:max-w-none max-w-[400px] mx-auto w-full">
            <div className="aspect-square w-full rounded-2xl diag-gradient-border">
              <Image
                src="/images/hiking.jpg"
                alt="Dominic Clerici on a hike at Mt. Rainier"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square w-full rounded-2xl diag-gradient-border">
                <Image
                  src="/images/headshot.png"
                  alt="Dominic Clerici"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="aspect-square w-full rounded-2xl diag-gradient-border">
                <Image
                  src="/images/gti.png"
                  alt="Dominic Clerici's MK7 Golf GTI"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-3 text-anim-3">
            <h2 className="text-4xl font-display font-bold">Dominic Clerici</h2>
            <h3 className="text-muted-foreground mt-3">
              Founding Full-stack Engineer at Rally
            </h3>
            <p className="mt-8 text-muted-foreground">
              Hello! You can call me{" "}
              <span className="font-bold text-foreground">Dom</span>. I am a
              third year student studying computer science at{" "}
              <a
                href="https://www.iu.edu/index.html"
                target="_blank"
                className="font-bold text-foreground hover:text-primary transition-colors duration-75"
              >
                Indiana University
              </a>{" "}
              in the Luddy School of Informatics.
            </p>
            <p className="mt-4 text-muted-foreground">
              I was born in 2004 in Berkeley, California. My programming journey
              began when I was about 12 years old, and played the video game{" "}
              <span className="font-bold text-foreground">Watch_Dogs</span>. I
              quickly fell in love with computers and programming with the dream
              of becoming a hacker just like the protagonist of the game. While
              that dream has since faded, my love for programming has only
              grown.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today, I enjoy building full stack web apps, some useful, some
              beautiful, some just for fun. While I will build with anything, I
              usually stick to this stack:
            </p>
            <div className="flex items-center gap-2 mt-4 -ml-2">
              <HoverableItem
                icon={
                  <ReactIcon className="w-8 h-8 group-data-[state=open]:text-[#61dafb] transition-colors duration-150" />
                }
                className="group-data-[state=open]:bg-[#61dafb]"
              >
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <ReactIcon className="w-4 h-4" />
                  React
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  My frontend framework of choice. I love the vast ecosystem and
                  community.
                </p>
              </HoverableItem>
              <HoverableItem
                icon={
                  <NextJsIcon className="w-8 h-8 group-data-[state=open]:text-[#fff] transition-colors duration-150" />
                }
                className="group-data-[state=open]:bg-[#fff]"
              >
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <NextJsIcon className="w-4 h-4" />
                  Next.js
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Built on top of React, I use Next.js for most of my projects
                  because of the static generation, fetching patterns, and
                  built-in API routes.
                </p>
              </HoverableItem>
              <HoverableItem
                icon={
                  <TypeScriptIcon className="w-8 h-8 group-data-[state=open]:text-[#3178C6] transition-colors duration-150" />
                }
                className="group-data-[state=open]:bg-[#3178C6]"
              >
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <TypeScriptIcon className="w-4 h-4" />
                  TypeScript
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  I could not live without TypeScript.
                </p>
              </HoverableItem>
              <HoverableItem
                icon={
                  <TailwindIcon className="w-8 h-8 group-data-[state=open]:text-[#06B6D4] transition-colors duration-150" />
                }
                className="group-data-[state=open]:bg-[#06B6D4]"
              >
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <TailwindIcon className="w-4 h-4" />
                  TailwindCSS
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  While I do still love writing custom intricate CSS, Tailwind
                  makes styling too fast and easy to not use.
                </p>
              </HoverableItem>
              <HoverableItem
                icon={
                  <DrizzleIcon className="w-8 h-8 group-data-[state=open]:text-[#C5F74F] transition-colors duration-150" />
                }
                className="group-data-[state=open]:bg-[#C5F74F]"
              >
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <DrizzleIcon className="w-4 h-4" />
                  Drizzle
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  I recently moved to Drizzle from Prisma. So far, I'm loving
                  it.
                </p>
              </HoverableItem>
            </div>
          </div>
        </div>
      </section>
      <section
        className="max-w-screen-xl mx-auto px-6 sm:px-8 md:px-12 mt-12 md:mt-24 pb-24"
        id="experience"
      >
        <div className="flex flex-col items-center mb-16">
          <div className="rounded-2xl text-muted-foreground diag-gradient-border p-3 mb-4 bg-card text-anim-1">
            <BriefcaseBusinessIcon className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-medium font-display text-anim-2">
            Experiences
          </h1>
        </div>
        <div className="md:grid grid-cols-4 flex flex-col gap-4 md:gap-8 text-anim-3">
          <span className="text-muted-foreground">May 2024 - Present</span>
          <div className="col-span-3">
            <div>
              <h2 className="text-xl font-medium font-display">
                Founding Full-stack Engineer
              </h2>
              <h3 className="text-muted-foreground">
                <span className="font-medium text-foreground">Rally</span> -
                United States, Remote
              </h3>
            </div>
            <p className="mt-4 text-muted-foreground text-sm">
              Rally is the platform for the next generation of event
              sponsorship. It bridges the gap between sponsors and small event
              hosts. Rally works for everyone, no matter the size of your
              organization.
            </p>
            <ul className="list-disc list-outside pl-3 text-sm mt-4 text-muted-foreground flex flex-col gap-2">
              <li>
                Led the rewrite from the MVP version, which was previously
                fragile with numerous bugs and technical debt. Convinced the
                team to transition to a new monorepo project with a solid
                foundation, ensuring code quality and developing conventions to
                maintain consistency and reliability across the team.
              </li>
              <li>
                Led the transition of the application to a local-first setup
                using IndexedDB, significantly improving speed by reducing query
                and update times from about 500ms to nearly instant (around
                5ms).
              </li>
              <li>
                Developed a comprehensive front-end design system with
                well-structured and easy-to-use APIs, equipped with
                accessibility and keyboard navigation. This system has been
                praised by colleagues for enhancing the development experience
                and accelerating feature development.
              </li>
              <li>
                Led the hiring process for software engineers, including
                designing interview processes and evaluating candidates to build
                a strong development team.
              </li>
              <li>
                Configured various developer quality-of-life features, such as
                ESLint plugins for sorting and auto-removing imports, set up
                Commitlint for consistent commit messages, and implemented Husky
                and GitHub Actions for type checking and testing using Vitest.
                *Basically bringing my starter features to the company 😉
              </li>
            </ul>
          </div>
        </div>
        <div className="md:grid flex flex-col gap-4 grid-cols-4 md:gap-8 mt-24 text-anim-4">
          <span className="text-muted-foreground">May 2021 - Mar 2022</span>
          <div className="col-span-3">
            <div>
              <h2 className="text-xl font-medium font-display">
                Frontend Developer
              </h2>
              <h3 className="text-muted-foreground">
                <a
                  href="https://en.wikipedia.org/wiki/Artesian_Builds"
                  target="_blank"
                  className="font-medium text-foreground hover:text-primary transition-colors duration-75"
                >
                  Artesian Builds
                </a>{" "}
                - Oakland, CA
              </h3>
            </div>
            <p className="mt-4 text-muted-foreground text-sm">
              Rally is the platform for the next generation of event
              sponsorship. It bridges the gap between sponsors and small event
              hosts. Rally works for everyone, no matter the size of your
              organization.
            </p>
            <ul className="list-disc list-outside pl-3 text-sm mt-4 text-muted-foreground flex flex-col gap-2">
              <li>
                Led the rewrite from the MVP version, which was previously
                fragile with numerous bugs and technical debt. Convinced the
                team to transition to a new monorepo project with a solid
                foundation, ensuring code quality and developing conventions to
                maintain consistency and reliability across the team.
              </li>
              <li>
                Led the transition of the application to a local-first setup
                using IndexedDB, significantly improving speed by reducing query
                and update times from about 500ms to nearly instant (around
                5ms).
              </li>
              <li>
                Developed a comprehensive front-end design system with
                well-structured and easy-to-use APIs, equipped with
                accessibility and keyboard navigation. This system has been
                praised by colleagues for enhancing the development experience
                and accelerating feature development.
              </li>
              <li>
                Led the hiring process for software engineers, including
                designing interview processes and evaluating candidates to build
                a strong development team.
              </li>
              <li>
                Configured various developer quality-of-life features, such as
                ESLint plugins for sorting and auto-removing imports, set up
                Commitlint for consistent commit messages, and implemented Husky
                and GitHub Actions for type checking and testing using Vitest.
                *Basically bringing my starter features to the company 😉
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

interface HoverableItemProps {
  icon: React.ReactNode
  className: string
  children: React.ReactNode
}
const HoverableItem = ({ icon, className, children }: HoverableItemProps) => {
  return (
    <HoverCard.Root openDelay={0} closeDelay={0}>
      <HoverCard.Trigger asChild>
        <div className="relative group p-2">
          {icon}
          <div
            className={`${className} h-1 w-full rounded-[50%] absolute bottom-0 left-0 blur-sm opacity-0 group-data-[state=open]:opacity-100 transition-opacity duration-300`}
          ></div>
        </div>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          side="top"
          className="bg-card max-w-[250px] rounded-lg diag-gradient-border px-4 py-3 hoverCardContent"
        >
          {children}
          <HoverCard.Arrow className="fill-card" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  )
}
