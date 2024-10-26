import ContactForm from "./ContactForm"

export default function Connect() {
  return (
    <section
      className="lg:mb-24 md:mb-20 mb-12 sm:mt-24 mt-16 lg:mt-48 md:mt-36 max-w-screen-md lg:px-12 sm:px-8 px-4 mx-auto"
      id="connect"
    >
      <h1 className="xs:text-7xl text-5xl text-center font-display">Let&apos;s connect</h1>
      <p className="text-muted-foreground xs:text-xl text-lg mt-8 xs:mt-12 sm:mt-16 sm:mb-8 xs:mb-6 mb-4 mx-auto">
        Whether you have a question, want to work together, or simply wish to say hello, I&apos;m all ears.
      </p>

      <ContactForm />
    </section>
  )
}
