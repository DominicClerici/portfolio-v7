export default function HoverArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 10 10"
      aria-hidden="true"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <g fillRule="evenodd">
        <path
          className="opacity-0 transition-opacity group-hover:opacity-100"
          d="M0 5h7"
        ></path>
        <path
          className="transition-transform group-hover:translate-x-[3px]"
          d="M1 1l4 4-4 4"
        ></path>
      </g>
    </svg>
  )
}
