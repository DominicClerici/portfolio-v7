"use client"

import sendEmail from "@/actions/sendEmail"
import { CheckCircle2, Loader2, XCircleIcon } from "lucide-react"
import React, { useState } from "react"
import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  UseFormWatch,
  FieldErrors,
} from "react-hook-form"

interface IFormInput {
  name: string
  email: string
  message: string
}

const className = {
  input:
    "border rounded bg-popover placeholder:text-muted-foreground/30 text-muted-foreground focus:text-foreground transition-colors duration-100 outline-none focus:border-foreground/60 px-2 py-1",
  label: "text-muted-foreground font-medium ml-0.5 mb-0.5",
  error: "text-red-400 text-sm",
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>()
  const [submitSuccess, setSubmitSuccess] = useState<null | boolean>(null)

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const fd = new FormData()
    fd.append("name", data.name)
    fd.append("email", data.email)
    fd.append("message", data.message)
    const res = await sendEmail(fd)
    if (res === 0) {
      setSubmitSuccess(true)
    } else {
      setSubmitSuccess(false)
    }
  }

  if (submitSuccess === true) {
    return (
      <div className="mx-auto mt-8 flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:mt-16 sm:p-8 md:p-12">
        <CheckCircle2 className="text-primary mx-auto w-14 h-14" />
        <h2 className="text-center font-light text-2xl">
          Sent message successfully!
        </h2>
        <p className="mt-2">
          I&apos;ll get back to you as soon as possible. If you have any other
          questions or anything else you&apos;d like to discuss, feel free to{" "}
          <span
            onClick={() => {
              setSubmitSuccess(null)
            }}
            className="text-primary cursor-pointer"
          >
            send another message
          </span>
          .
        </p>
      </div>
    )
  }
  if (submitSuccess === false) {
    return (
      <div className="mx-auto mt-8 flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:mt-16 sm:p-8 md:p-12">
        <XCircleIcon className="text-red-400 mx-auto w-14 h-14" />
        <h2 className="text-center font-light text-2xl">
          Failed to send message
        </h2>
        <p className="mt-2">
          Something went wrong. Please try again later or{" "}
          <span
            onClick={() => {
              setSubmitSuccess(null)
            }}
            className="text-primary cursor-pointer"
          >
            try again
          </span>
          .
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto mt-8 flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:mt-16 sm:p-8 md:p-12"
    >
      <div className="flex flex-col">
        <label htmlFor="name" className={className.label}>
          Name
        </label>
        <input
          className={className.input}
          id="name"
          placeholder="Dominic Clerici"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className={className.error}>{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className={className.label} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          className={className.input}
          placeholder="contact@dominicclerici.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className={className.error}>{errors.email.message}</p>
        )}
      </div>

      <MessageInput watch={watch} errors={errors} register={register} />

      <button
        type="submit"
        className={`${
          isSubmitting
            ? "pointer-events-none border-primary/30 bg-primary/10 text-foreground/50"
            : "border-primary/50 bg-primary/30 text-foreground"
        } px-12 py-2 w-fit mx-auto text-lg font-medium border rounded-full hover:bg-primary/60 hover:border-primary transition-colors cursor-pointer`}
      >
        {isSubmitting ? <Loader2 className="animate-spin" /> : "Submit"}
      </button>
    </form>
  )
}

export default ContactForm

interface MessageInputProps {
  errors: FieldErrors<IFormInput>
  register: UseFormRegister<IFormInput>
  watch: UseFormWatch<IFormInput>
}

const MessageInput = ({ errors, register, watch }: MessageInputProps) => {
  const currentVal = watch("message")

  return (
    <div className="flex flex-col">
      <label className={className.label} htmlFor="message">
        Message
      </label>
      <textarea
        placeholder="Hey Dominic, I have a question..."
        id="message"
        {...register("message", {
          required: "Message is required",
          maxLength: {
            value: 5000,
            message: "Message cannot exceed 5000 characters",
          },
        })}
        className={`h-56 resize-none ${className.input}`}
      />
      <p className="ml-auto text-sm text-muted-foreground">
        {currentVal ? currentVal.length : 0} / 5000
      </p>
      {errors.message && (
        <p className={className.error}>{errors.message.message}</p>
      )}
    </div>
  )
}
