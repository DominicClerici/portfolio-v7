import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const page = () => {
  return (
    <main className="relative mx-auto mt-32 max-w-screen-xl  min-h-screen px-4 text-white sm:px-8 md:px-12 lg:px-16 xs:px-6 pm:px-24">
      <h1 className="text-5xl font-medium">Page not found</h1>
      <p className="my-4 lg:my-12">
        Oops, you seem to have made your way to something I haven&apos;t built (yet, maybe).
      </p>
      <Link
        href="/"
        className="pr-8 pl-6 py-3 text-lg flex items-center w-fit gap-2 group font-medium border rounded-full border-primary/50 bg-primary/30 text-foreground hover:bg-primary/60 hover:border-primary transition-colors cursor-pointer"
      >
        <ArrowLeft className="h-6 w-6 translate-x-0.5 group-hover:-translate-x-0.5 transition-transform" />
        Home
      </Link>
    </main>
  )
}

export default page
