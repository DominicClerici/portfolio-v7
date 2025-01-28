"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function ClientHeader() {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <nav className="flex gap-2">
      <Link
        href="/"
        className={`button-style border border-transparent ${
          pathname === "/"
            ? "!text-primary text-anim-1"
            : "hover:diag-gradient-border hover:bg-card text-muted-foreground hover:text-foreground text-anim-1"
        } !px-4`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`button-style border border-transparent ${
          pathname === "/about"
            ? "!text-primary text-anim-2"
            : "hover:diag-gradient-border hover:bg-card text-muted-foreground hover:text-foreground text-anim-2"
        } !px-4`}
      >
        About
      </Link>
      {/* <Link
        href="/projects"
        className={`button-style border border-transparent ${
          pathname === "/projects"
            ? "!text-primary text-anim-3"
            : "hover:diag-gradient-border hover:bg-card text-muted-foreground hover:text-foreground text-anim-3"
        } !px-4`}
      >
        Projects
      </Link> */}
    </nav>
  )
}
