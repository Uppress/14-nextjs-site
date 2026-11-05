import type { Metadata } from "next";
import Button from "@/components/Button";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Services",
  description: "Brand strategy, digital experiences, and growth for businesses ready for what's next.",
};

const offerings = [
  { number: "01", title: "Brand & strategy", summary: "A clear point of view for your next chapter.", details: ["Brand positioning & workshops", "Naming, identity & design systems", "Messaging, voice & storytelling", "Brand architecture & guidelines"] },
  { number: "02", title: "Digital experiences", summary: "Useful, memorable digital made for real people.", details: ["Websites & digital platforms", "Product & experience design", "Prototyping & user testing", "Creative development & launch"] },
  { number: "03", title: "Growth & content", summary: "The right ideas, reaching the right people.", details: ["Go-to-market planning", "Content strategy & campaigns", "Digital marketing & optimization", "Ongoing creative partnership"] },
];

export default function ServicesPage() {
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
          <div className="space-y-4">
            {offerings.map((service) => (
              <article key={service.number} className="grid gap-8 rounded-[2rem] border border-ink/10 bg-white/60 p-6 sm:p-9 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
                <div>
                  <span className="text-xs font-semibold text-muted">{service.number}</span>
                  <h2 className="mt-5 text-2xl font-semibold tracking-[-0.05em] text-ink sm:text-3xl">{service.title}</h2>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-muted">{service.summary}</p>
                </div>
                <ul className="grid content-center gap-3 sm:grid-cols-2 sm:gap-4">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3 rounded-2xl bg-[#edf0e7] px-4 py-4 text-sm text-ink">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-moss text-xs">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
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
