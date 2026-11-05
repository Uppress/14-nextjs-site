"use client";

import { useActionState } from "react";
import { submitContactForm } from "./actions";
import { budgetOptions, initialContactFormState } from "./form-types";

const fieldClassName =
  "mt-2 w-full rounded-2xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-[#718d2c] focus:ring-2 focus:ring-[#718d2c]/20";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialContactFormState);

  return (
    <form action={formAction} key={JSON.stringify(state.values)} className="rounded-[2rem] border border-ink/10 bg-white/70 p-6 sm:p-8">
      {state.ok ? (
        <p role="status" aria-live="polite" className="mb-6 rounded-2xl bg-[#edf4dc] px-4 py-4 text-sm font-medium leading-6 text-ink">
          Thanks for reaching out. Your message has been saved, and we&apos;ll be in touch soon.
        </p>
      ) : null}
      {state.errors._form ? (
        <p role="alert" className="mb-6 rounded-2xl bg-red-50 px-4 py-4 text-sm leading-6 text-red-800">
          {state.errors._form}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-sm font-semibold text-ink">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
            defaultValue={state.values.name}
            aria-invalid={Boolean(state.errors.name)}
            aria-describedby={state.errors.name ? "contact-name-error" : undefined}
            className={fieldClassName}
          />
          {state.errors.name ? <p id="contact-name-error" className="mt-2 text-sm text-red-700">{state.errors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="contact-email" className="text-sm font-semibold text-ink">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            defaultValue={state.values.email}
            aria-invalid={Boolean(state.errors.email)}
            aria-describedby={state.errors.email ? "contact-email-error" : undefined}
            className={fieldClassName}
          />
          {state.errors.email ? <p id="contact-email-error" className="mt-2 text-sm text-red-700">{state.errors.email}</p> : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-budget" className="text-sm font-semibold text-ink">Project budget</label>
          <select
            id="contact-budget"
            name="budget"
            required
            defaultValue={state.values.budget}
            aria-invalid={Boolean(state.errors.budget)}
            aria-describedby={state.errors.budget ? "contact-budget-error" : undefined}
            className={fieldClassName}
          >
            <option value="" disabled>Select a budget range</option>
            {budgetOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          {state.errors.budget ? <p id="contact-budget-error" className="mt-2 text-sm text-red-700">{state.errors.budget}</p> : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="text-sm font-semibold text-ink">A little about your project</label>
          <textarea
            id="contact-message"
            name="message"
            required
            minLength={10}
            maxLength={5000}
            rows={5}
            defaultValue={state.values.message}
            aria-invalid={Boolean(state.errors.message)}
            aria-describedby={state.errors.message ? "contact-message-error" : "contact-message-hint"}
            className={`${fieldClassName} resize-y`}
          />
          {state.errors.message ? (
            <p id="contact-message-error" className="mt-2 text-sm text-red-700">{state.errors.message}</p>
          ) : (
            <p id="contact-message-hint" className="mt-2 text-xs text-muted">Share what you&apos;re working on and what you hope to achieve.</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-moss px-6 text-sm font-semibold text-ink transition-colors hover:bg-[#c9e75a] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send your message"}
        {!pending ? <span aria-hidden="true">↗</span> : null}
      </button>
    </form>
  );
}
