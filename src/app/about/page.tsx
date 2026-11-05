import type { Metadata } from "next";
import Button from "@/components/Button";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Northstar Digital: an independent creative studio for businesses with somewhere to go.",
};

const values = [
  { number: "01", title: "Curiosity first", text: "We ask better questions before we reach for familiar answers. The details are where the interesting things happen." },
  { number: "02", title: "Make it matter", text: "Good-looking is good. Good-looking and genuinely useful? That is work worth putting into the world." },
  { number: "03", title: "Better together", text: "The best ideas are built in the open, with our clients—not handed over at the finish line." },
];

const team = [
  { initials: "AM", name: "Alex Morgan", role: "Founder & Strategy", color: "bg-[#d4b28f]" },
  { initials: "JL", name: "Jamie Lee", role: "Creative Director", color: "bg-[#a9b88c]" },
  { initials: "RK", name: "Riley Kim", role: "Digital Lead", color: "bg-[#c6a9a0]" },
  { initials: "TB", name: "Taylor Brooks", role: "Growth Partner", color: "bg-[#c9c583]" },
];

export default function AboutPage() {
  return (
    <>
      <section className="pb-16 pt-16 sm:pb-24 sm:pt-24">
        <Container>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#5b721e]">A little about us</p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.07em] text-ink sm:text-7xl lg:text-8xl">
            We make the <span className="font-serif font-medium italic text-[#718d2c]">complicated</span> feel clear.
          </h1>
          <div className="mt-9 grid gap-8 sm:grid-cols-[1fr_0.7fr] sm:items-end">
            <p className="max-w-2xl text-lg leading-8 text-muted">Northstar is an independent digital studio for people building something that matters. We pair big-picture thinking with sleeves-rolled-up making.</p>
            <p className="text-sm leading-6 text-muted sm:pb-1">Small by choice, collaborative by nature, and always looking for the idea that makes everything click.</p>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="relative flex min-h-[300px] items-center overflow-hidden rounded-[2rem] bg-[#e6eadb] px-7 py-14 sm:min-h-[380px] sm:px-14">
            <div className="absolute -right-12 top-1/2 size-[420px] -translate-y-1/2 rounded-full border border-ink/10 sm:right-12" />
            <div className="absolute right-3 top-1/2 size-[320px] -translate-y-1/2 rounded-full border border-ink/10 sm:right-28" />
            <div className="absolute right-20 top-1/2 size-[210px] -translate-y-1/2 rounded-full bg-[#b9cb91] sm:right-48">
              <span className="absolute inset-5 rounded-full border border-white/50" />
              <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink text-3xl text-moss">✳</span>
            </div>
            <div className="relative max-w-md">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5b721e]">The short version</p>
              <p className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em] text-ink sm:text-4xl">A good idea deserves a way forward.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white/60 py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading eyebrow="Why Northstar" title="A clear direction changes everything." />
            <div className="space-y-6 text-base leading-8 text-muted">
              <p>We started Northstar with a simple belief: the most useful creative work begins with understanding. Not assumptions. Not another trend deck. A real conversation about where you are and where you want to go.</p>
              <p>Since then, we&apos;ve worked alongside founders, in-house teams, and established businesses to find the signal in the noise—and make something people remember. Strategy, design, and digital are all part of the same conversation here.</p>
              <p>We keep our team intentionally close, our process refreshingly open, and our ambition focused on the things that move your business forward.</p>
              <Button href="/contact" variant="secondary" className="mt-2">Meet your new partners</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="What we believe" title="A few things we won&apos;t compromise on." description="The principles behind every partnership, pixel, and plan." />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.number} className="rounded-3xl border border-ink/10 bg-white/60 p-7 sm:p-8">
                <span className="text-xs font-semibold text-muted">{value.number}</span>
                <h3 className="mt-9 text-xl font-semibold tracking-[-0.04em] text-ink">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{value.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="The people behind it" title="Good humans. Good at what they do." description="A small, senior team that cares about the work—and the people we do it with." />
            <p className="max-w-xs text-sm leading-6 text-muted">We bring in the right collaborators when a project calls for a fresh perspective or a specialist skill.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {team.map((member) => (
              <article key={member.name}>
                <div className={`grid aspect-[0.88] place-items-center overflow-hidden rounded-3xl ${member.color}`}>
                  <span className="grid size-24 place-items-center rounded-full border border-white/50 bg-white/20 text-2xl font-semibold tracking-[-0.05em] text-white sm:size-32 sm:text-3xl">{member.initials}</span>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-ink sm:text-base">{member.name}</h3>
                <p className="mt-1 text-xs text-muted sm:text-sm">{member.role}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
