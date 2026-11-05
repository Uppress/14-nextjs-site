import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Northstar Digital to talk about what comes next.",
};

export default function ContactPage() {
  return (
    <section className="min-h-[65vh] py-20 sm:py-28">
      <Container>
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#5b721e]">The first hello</p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.07em] text-ink sm:text-7xl">
          Something good <span className="font-serif font-medium italic text-[#718d2c]">starts here.</span>
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-muted">This is a placeholder for our contact page. In the meantime, tell us a little about what you&apos;re working on and we&apos;ll take it from there.</p>
        <a href="mailto:hello@northstar.digital" className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-ink px-6 text-sm font-semibold text-white transition-colors hover:bg-[#2d3b32]">
          hello@northstar.digital <span aria-hidden="true" className="text-moss">↗</span>
        </a>
        <div className="mt-14 border-t border-ink/10 pt-6 text-sm text-muted">
          <p>Brooklyn, New York · Working everywhere</p>
          <p className="mt-2">For now, email is the best way to get us.</p>
        </div>
      </Container>
    </section>
  );
}
