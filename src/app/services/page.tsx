import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { getServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Brand strategy, digital experiences, and growth for businesses ready for what's next.",
};

export default function ServicesPage() {
  const services = getServices();

  return (
    <>
      <section className="pb-16 pt-16 sm:pb-24 sm:pt-24">
        <Container>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#5b721e]">What we&apos;re here for</p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.07em] text-ink sm:text-7xl lg:text-8xl">
            Strategy to screen. <span className="font-serif font-medium italic text-[#718d2c]">And beyond.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">The right mix of thinking and making to help your business get somewhere good. Start with one thing or bring us the whole puzzle.</p>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col rounded-[2rem] border border-ink/10 bg-white/60 p-6 transition-all hover:-translate-y-1 hover:border-ink/20 hover:bg-white sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-muted">Starting at ${service.priceFrom.toLocaleString("en-US")}</span>
                  <span aria-hidden="true" className="grid size-11 place-items-center rounded-full bg-[#edf1e4] text-lg text-ink transition-colors group-hover:bg-moss">{service.icon}</span>
                </div>
                <h2 className="mt-8 text-2xl font-semibold tracking-[-0.05em] text-ink">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{service.summary}</p>
                <span className="mt-auto inline-flex pt-7 text-sm font-semibold text-ink">Explore service <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-1">→</span></span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-20 text-white sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-moss">Good work, good people</p>
              <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-5xl">A process that leaves room for the good stuff.</h2>
            </div>
            <p className="text-base leading-7 text-white/65">No off-the-shelf playbook. We get aligned on the challenge, bring the right people into the room, and make progress you can see at every step.</p>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="rounded-[2rem] bg-moss px-7 py-12 sm:px-12 sm:py-16">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <SectionHeading eyebrow="Ready when you are" title="Let&apos;s find your next move." />
              </div>
              <Button href="/contact" variant="secondary" className="shrink-0 border-ink/20 bg-white/50 hover:bg-white/80">Tell us what you need</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
