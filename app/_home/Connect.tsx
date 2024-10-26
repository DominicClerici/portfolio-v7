import ContactForm from "./ContactForm"

export default function Connect() {
  return (
    <section className="mb-24 mt-48 max-w-screen-md px-12 mx-auto" id="connect">
      <h1 className="text-7xl text-center">Let&apos;s connect</h1>

      <p className="text-muted-foreground text-xl mt-16 mb-8 mx-auto">
        Whether you have a question, want to work together, or simply wish to say hello, I&apos;m all ears.
      </p>

      <ContactForm />
    </section>
  )
}
