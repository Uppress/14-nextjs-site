import Button from "@/components/Button";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5b721e]">404 · Off the map</p>
          <h1 className="mt-5 text-5xl font-semibold leading-tight tracking-[-0.07em] text-ink sm:text-7xl">
            This page took a wrong turn.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-muted">
            The page you&apos;re looking for isn&apos;t here. Let&apos;s get you pointed in the right direction.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href="/">Back to home</Button>
            <Button href="/services" variant="secondary">Explore services</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
