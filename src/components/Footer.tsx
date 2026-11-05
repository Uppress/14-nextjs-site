import Link from "next/link";
import Container from "@/components/Container";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink py-10 text-white sm:py-12">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center gap-2.5 text-[15px] font-bold tracking-[-0.04em]">
            <span className="grid size-9 place-items-center rounded-full bg-moss text-ink">✳</span>
            northstar<span className="-ml-2 font-normal text-white/55">.digital</span>
          </Link>
          <nav aria-label="Footer navigation" className="flex gap-6">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} className="text-sm text-white/65 transition-colors hover:text-white">{label}</Link>
            ))}
          </nav>
        </div>
        <div className="mt-9 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Northstar Digital. Good things, made together.</p>
          <p>Independent by nature. Digital by design.</p>
        </div>
      </Container>
    </footer>
  );
}
