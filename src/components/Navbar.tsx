"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "@/components/Container";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20 border-b border-ink/[0.07] bg-paper">
      <Container className="flex h-[76px] items-center justify-between">
        <Link href="/" aria-label="Northstar Digital home" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
          <span className="grid size-9 place-items-center rounded-full bg-ink text-moss">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">
              <path d="M12 2.8 14.15 9.85 21.2 12l-7.05 2.15L12 21.2l-2.15-7.05L2.8 12l7.05-2.15L12 2.8Z" fill="currentColor" />
            </svg>
          </span>
          <span className="text-[15px] font-bold tracking-[-0.04em] text-ink">northstar<span className="font-normal text-muted">.digital</span></span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {links.map(({ href, label }) => {
            const active = pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`text-sm transition-colors ${active ? "font-semibold text-ink" : "text-muted hover:text-ink"}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="hidden min-h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-white transition-colors hover:bg-[#2d3b32] md:inline-flex">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="grid size-11 place-items-center rounded-full border border-ink/10 text-ink md:hidden"
        >
          <span className="text-xl leading-none">{menuOpen ? "×" : "☰"}</span>
        </button>
      </Container>

      {menuOpen ? (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="absolute inset-x-0 top-full border-b border-ink/10 bg-paper px-5 pb-5 pt-2 shadow-lg md:hidden">
          {links.map(({ href, label }) => {
            const active = pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`block border-t border-ink/[0.07] py-4 text-base ${active ? "font-semibold text-ink" : "text-muted"}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </header>
  );
}
