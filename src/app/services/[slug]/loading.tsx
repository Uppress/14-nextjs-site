import Container from "@/components/Container";

export default function LoadingServicePage() {
  return (
    <section aria-busy="true" aria-label="Loading service" className="pb-16 pt-16 sm:pb-24 sm:pt-24">
      <Container>
        <div className="h-5 w-28 animate-pulse rounded bg-ink/10" />
        <div className="mt-12 h-16 max-w-2xl animate-pulse rounded bg-ink/10 sm:h-24" />
        <div className="mt-7 h-24 max-w-xl animate-pulse rounded bg-ink/10" />
        <div className="mt-12 h-56 animate-pulse rounded-[2rem] bg-ink/10" />
      </Container>
    </section>
  );
}
