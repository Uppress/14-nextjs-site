import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { siteUrl } from "@/lib/site";
import { getService, getServices } from "@/lib/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return {
    title: service.title,
    description: service.summary,
    openGraph: {
      title: service.title,
      description: service.summary,
      url: new URL(`/services/${service.slug}`, siteUrl),
      siteName: "Northstar Digital",
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="pb-16 pt-16 sm:pb-24 sm:pt-24">
        <Container>
          <Link href="/services" className="text-sm font-semibold text-muted transition-colors hover:text-ink">
            ← All services
          </Link>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#5b721e]">Our services</p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.07em] text-ink sm:text-7xl">
                {service.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">{service.description}</p>
            </div>
            <div className="rounded-[2rem] border border-ink/10 bg-white/60 p-7 sm:p-9">
              <p className="text-sm text-muted">Projects start at</p>
              <p className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-ink">
                ${service.priceFrom.toLocaleString("en-US")}
              </p>
              <p className="mt-4 text-sm leading-6 text-muted">
                Every engagement is scoped to your goals. Get in touch and we&apos;ll work out the right next step together.
              </p>
              <Button href="/contact" className="mt-6">Discuss your project</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="rounded-[2rem] bg-[#edf0e7] p-7 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-[-0.05em] text-ink sm:text-3xl">What&apos;s included</h2>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-4 text-sm text-ink">
                  <span aria-hidden="true" className="grid size-6 shrink-0 place-items-center rounded-full bg-moss text-xs">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
