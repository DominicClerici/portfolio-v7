"use client"
import { useEffect, useRef } from "react"
import "./hoverButtonStyles.css"

const HoverButton = ({ children, ...props }: React.ComponentProps<"a">) => {
  const ref = useRef<HTMLAnchorElement>(null)
  useEffect(() => {
    const updateDimensions = () => {
      if (ref.current) {
        ref.current.style.setProperty(
          "--height",
          `${ref.current.offsetHeight}px`
        )
        ref.current.style.setProperty("--width", `${ref.current.offsetWidth}px`)
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // set css vars --mouse-x and --mouse-y relative to the button
  const handleMouseOver = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    button.style.setProperty("--mouse-x", `${mouseX}px`)
    button.style.setProperty("--mouse-y", `${mouseY}px`)
  }
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.classList.add("hovering")
  }
  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.classList.remove("hovering")
  }

  return (
    <a
      {...props}
      ref={ref}
      onMouseMove={handleMouseOver}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`hover-button-effect ${props.className}`}
    >
      {children}
    </a>
  )
}

HoverButton.displayName = "HoverButton"

export default HoverButton
