import Link from "next/link";
import Button from "@/components/Button";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

const services = [
  { number: "01", title: "Brand & strategy", text: "Find your point of view, sharpen your story, and give your brand room to grow.", icon: "✳" },
  { number: "02", title: "Digital experiences", text: "Beautifully useful websites and products, made for the people who use them.", icon: "↗" },
  { number: "03", title: "Growth & content", text: "Turn good ideas into lasting momentum with thoughtful content and smart marketing.", icon: "◌" },
];

const stats = [
  { number: "40+", label: "Ambitious teams partnered with" },
  { number: "3.2×", label: "Average return on investment" },
  { number: "12", label: "Years making digital matter" },
];

export default function Home() {
  return (
    <>
      <section className="overflow-hidden pb-16 pt-14 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div className="relative z-10">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-xs font-semibold text-ink">
                <span className="size-2 rounded-full bg-[#a5c841]" /> Independent digital studio · Brooklyn & everywhere
              </p>
              <h1 className="max-w-3xl text-[clamp(3.2rem,8vw,6.6rem)] font-semibold leading-[0.96] tracking-[-0.075em] text-ink">
                Make your next <span className="font-serif font-medium italic text-[#718d2c]">move</span> your best one.
              </h1>
              <p className="mt-7 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
                We bring strategy, design, and technology together to help good businesses do great things.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="/contact">Start a conversation</Button>
                <Button href="/services" variant="secondary">Explore our work</Button>
              </div>
              <div className="mt-10 flex items-center gap-3 text-xs text-muted">
                <div className="flex -space-x-2">
                  {["bg-[#cf9f82]", "bg-[#879c76]", "bg-[#d5bd79]"].map((color, index) => (
                    <span key={color} className={`grid size-8 place-items-center rounded-full border-2 border-paper text-[9px] font-bold text-white ${color}`}>{["AM", "JL", "RK"][index]}</span>
                  ))}
                </div>
                <span>Small team. Big-picture thinking.</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[540px]">
              <div className="absolute -right-10 -top-8 size-36 rounded-full bg-moss/70 blur-3xl" />
              <div className="relative aspect-[0.95] overflow-hidden rounded-[2rem] bg-[#e6eadb] p-5 sm:p-8">
                <div className="absolute -left-12 top-1/4 size-64 rounded-full border border-ink/10" />
                <div className="absolute -left-2 top-[16%] size-72 rounded-full border border-ink/10" />
                <div className="absolute inset-[15%] rotate-[-12deg] rounded-[2.4rem] bg-[#b7ca8d] shadow-[0_35px_80px_rgba(47,64,33,0.18)]">
                  <div className="absolute inset-[7%] overflow-hidden rounded-[2rem] bg-[#f7f8f3]">
                    <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
                      <span className="text-[10px] font-bold tracking-[-0.03em]">fieldnotes<span className="font-normal text-muted">®</span></span>
                      <span className="text-[9px] text-muted">For outside thinkers</span>
                    </div>
                    <div className="px-5 pt-7 sm:px-7 sm:pt-10">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#748b3e]">A little more outside</p>
                      <p className="mt-3 max-w-[210px] text-[clamp(1.7rem,4vw,2.7rem)] font-medium leading-[0.96] tracking-[-0.07em] text-ink">Find your <span className="font-serif italic">wild</span> side.</p>
                      <div className="relative mt-5 h-28 overflow-hidden rounded-2xl bg-[#dce6c4]">
                        <div className="absolute -bottom-16 left-[12%] size-36 rounded-full bg-[#8da35b]" />
                        <div className="absolute -bottom-20 left-[41%] size-44 rounded-full bg-[#b6c68f]" />
                        <div className="absolute -bottom-16 right-[2%] size-36 rounded-full bg-[#72884a]" />
                        <div className="absolute left-[46%] top-0 h-full w-px rotate-[24deg] bg-white/40" />
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[9px] text-muted">Move with the seasons.</span>
                        <span className="grid size-7 place-items-center rounded-full bg-ink text-xs text-moss">↗</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-8 left-4 rounded-full bg-white px-4 py-3 text-[10px] font-semibold text-ink shadow-lg sm:bottom-12 sm:left-0">
                  <span className="mr-2 inline-block size-2 rounded-full bg-[#8ca84a]" /> Thoughtful by design
                </div>
                <div className="absolute right-4 top-8 grid size-14 place-items-center rounded-full bg-moss text-2xl text-ink sm:right-7 sm:top-10">✳</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-ink/[0.07] bg-white/60 py-7">
        <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:justify-between">
          <p className="text-xs font-medium text-muted">Good company we keep</p>
          {["goodkind", "ARC / CO", "daytrip", "morrow", "KINFIELD"].map((name) => (
            <span key={name} className="text-sm font-bold tracking-[-0.04em] text-ink/45 sm:text-base">{name}</span>
          ))}
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="What we do" title="Good work starts with good questions." description="We connect the dots between what your business needs and what your people actually want." />
            <Link href="/services" className="inline-flex shrink-0 items-center gap-2 pb-1 text-sm font-semibold text-ink hover:text-[#5b721e]">All services <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <Link href="/services" key={service.number} className="group rounded-3xl border border-ink/10 bg-white/60 p-6 transition-all hover:-translate-y-1 hover:border-ink/20 hover:bg-white sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-muted">{service.number}</span>
                  <span className="grid size-11 place-items-center rounded-full bg-[#edf1e4] text-lg text-ink transition-colors group-hover:bg-moss">{service.icon}</span>
                </div>
                <h3 className="mt-10 text-xl font-semibold tracking-[-0.04em] text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{service.text}</p>
                <span className="mt-7 inline-flex text-sm font-semibold text-ink">Learn more <span className="ml-2 transition-transform group-hover:translate-x-1">→</span></span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-16 text-white sm:py-20">
        <Container>
          <div className="grid gap-10 sm:grid-cols-3 sm:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l border-white/20 pl-5 sm:pl-7">
                <p className="text-4xl font-semibold tracking-[-0.06em] text-moss sm:text-5xl">{stat.number}</p>
                <p className="mt-2 max-w-[200px] text-sm leading-6 text-white/65">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionHeading eyebrow="Kind words" title="Better together. By a long shot." />
            <figure className="rounded-[2rem] bg-[#edf0e7] p-7 sm:p-10">
              <div className="text-3xl tracking-[0.12em] text-[#758d3b]" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote className="mt-5 max-w-3xl text-xl font-medium leading-relaxed tracking-[-0.03em] text-ink sm:text-2xl">
                “Northstar didn&apos;t just give us a beautiful new brand. They helped us see our business differently—and gave us the confidence to take it somewhere new.”
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-[#cf9f82] text-xs font-bold text-white">SC</span>
                <span><span className="block text-sm font-semibold text-ink">Sophie Chen</span><span className="mt-0.5 block text-xs text-muted">Founder, Goodkind</span></span>
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-moss px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
            <div className="absolute -right-16 -top-24 size-72 rounded-full border border-ink/10 sm:size-96" />
            <div className="absolute -right-5 -top-12 size-60 rounded-full border border-ink/10 sm:size-80" />
            <div className="relative flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-ink/60">Your next chapter</p>
                <h2 className="text-3xl font-semibold leading-tight tracking-[-0.055em] text-ink sm:text-5xl">Have a good one in mind?</h2>
                <p className="mt-4 max-w-lg text-sm leading-6 text-ink/70 sm:text-base">Tell us what you&apos;re working on. We&apos;ll bring the good questions.</p>
              </div>
              <Button href="/contact" variant="secondary" className="shrink-0 border-ink/20 bg-white/50 hover:bg-white/80">Let&apos;s make it happen</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
