"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { site } from "@/lib/site";
import LogoMark from "@/components/LogoMark";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close drawer when viewport is >= md (768px)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(min-width: 768px)");
    const handle = () => {
      if (mql.matches) setOpen(false);
    };
    handle();
    if (mql.addEventListener) mql.addEventListener("change", handle);
    else (mql as any).addListener(handle);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", handle);
      else (mql as any).removeListener(handle);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <LogoMark className="h-8 w-8 text-primary group-hover:text-primary/90 transition-colors" />
            <span className="font-heading tracking-[0.08em] uppercase leading-none text-sm text-foreground/90 group-hover:text-foreground">Marley Senior Services</span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-base md:text-lg">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-primary transition-colors ${pathname === item.href ? "text-primary font-medium" : "text-foreground/80"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <a href="/contact" className="btn btn-primary hidden md:inline-flex">Get in touch</a>
            {/* Mobile menu button */}
            <button
              type="button"
              aria-label="Open menu"
              aria-controls="mobile-drawer"
              aria-expanded={open}
              className="inline-flex md:hidden items-center justify-center h-10 w-10 rounded-md border border-foreground/10 bg-background/60 hover:bg-background/80 transition-colors"
              onClick={() => setOpen(true)}
            >
              <Menu className="h-5 w-5 text-foreground" />
            </button>
            
          </div>
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <a href="https://app.adlabdigital.com/" className="btn btn-secondary hidden md:inline-flex">Login</a>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay + Drawer via portal to cover entire page */}
      {typeof document !== "undefined" && open &&
        createPortal(
          <div className="md:hidden">
            {/* Overlay */}
            <div
              className="fixed inset-0 z-[1000] bg-black/70"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            {/* Drawer */}
            <aside
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              className={`fixed right-0 top-0 bottom-0 z-[1001] w-[85%] max-w-xs border-l bg-background/100 shadow-2xl p-6 transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                  <LogoMark className="h-7 w-7 text-primary" />
                  <span className="font-heading tracking-[0.12em] uppercase text-xs text-foreground/80">{site.brandName}</span>
                </Link>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-foreground/10 hover:bg-background/80"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-6 grid gap-2">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-md px-3 py-2 text-base ${pathname === item.href ? "text-primary bg-primary/10" : "text-foreground/90 hover:bg-foreground/5"}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-6">
                <Link href="/pricing" className="btn btn-primary w-full" onClick={() => setOpen(false)}>
                  Request a demo
                </Link>
                <Link href="https://app.adlabdigital.com/" className="btn btn-secondary w-full" onClick={() => setOpen(false)}>
                  Login
                </Link>
              </div>
            </aside>
          </div>,
          document.body
        )}
    </>
  );
}

export default SiteHeader;
