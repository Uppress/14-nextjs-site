import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Northstar Digital to talk about what comes next.",
};

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#5b721e]">The first hello</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.07em] text-ink sm:text-7xl">
              Something good <span className="font-serif font-medium italic text-[#718d2c]">starts here.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted">Tell us a little about what you&apos;re working on. We&apos;ll bring the good questions and take it from there.</p>
            <div className="mt-10 border-t border-ink/10 pt-6 text-sm text-muted">
              <p>Brooklyn, New York · Working everywhere</p>
              <p className="mt-2">Prefer email? <a className="font-semibold text-ink underline underline-offset-4" href="mailto:hello@northstar.digital">hello@northstar.digital</a></p>
            </div>
          </div>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
