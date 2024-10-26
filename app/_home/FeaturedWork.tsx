import FeaturedWorkClient from "./FeaturedWorkClient"

export default function FeaturedWork() {
  return (
    <section className="max-w-screen-xl sm:mb-24 xs:mb-12 mx-auto sm:px-8 px-4" id="featured">
      <div className="flex flex-col items-center">
        <div className="mr-auto flex flex-col">
          <p className="text-primary font-medium ">Let me show you my</p>
          <h1 className="font-display text-5xl xs:text-6xl lg:mt-3 mt-2">Featured work</h1>
        </div>
      </div>
      <FeaturedWorkClient />
    </section>
  )
}
