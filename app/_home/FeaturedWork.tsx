import FeaturedWorkClient from "./FeaturedWorkClient"

export default function FeaturedWork() {
  return (
    <section className="max-w-screen-xl mb-24 mx-auto px-12" id="featured">
      <div className="flex flex-col items-center">
        <div className="mr-auto flex flex-col">
          <p className="text-primary font-medium">Let me show you my</p>
          <h1 className="text-6xl mt-3">Featured work</h1>
        </div>
      </div>
      <FeaturedWorkClient />
    </section>
  )
}
