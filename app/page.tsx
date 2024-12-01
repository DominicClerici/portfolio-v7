import Connect from "./_home/Connect"
import FeaturedWork from "./_home/FeaturedWork"
import Features from "./_home/Features"
import Hero from "./_home/Hero"
import NewHero from "./_home/NewHero"
export default function Home() {
  return (
    <main>
      {/* <Hero /> */}
      <NewHero />
      <Features />
      <FeaturedWork />
      <Connect />
    </main>
  )
}
