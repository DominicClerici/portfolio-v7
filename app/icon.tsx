import { ImageResponse } from "next/og"
import LogoSVG from "./LogoSVG"

export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(<LogoSVG width={size.width} height={size.height} color="#D9D9D9" />, {
    ...size,
  })
}
