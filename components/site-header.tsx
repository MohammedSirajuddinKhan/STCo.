"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site, primaryNav } from "@/lib/site";
import { Wordmark, ArrowUpRight, EmailLink } from "@/components/ui";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const focusables = panel
      ? Array.from(
          panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
        ).filter((element) => element.offsetParent !== null)
      : [];
    const first = panel?.querySelector<HTMLElement>("[data-autofocus]");
    (first ?? focusables[0])?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || focusables.length === 0) return;

      const firstFocusable = focusables[0];
      const lastFocusable = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      } else if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    };

    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <header className="site-header" data-scrolled={scrolled ? "true" : "false"}>
        <div className="container-ed">
          <div className="header-inner">
            <div className="flex items-center gap-10">
              <Wordmark />
              <span
                className="hidden h-3 w-px bg-[var(--hairline-strong)] lg:block"
                aria-hidden="true"
              />
              <p className="hidden max-w-[15rem] text-[0.6875rem] leading-[1.5] tracking-[0.06em] text-ink/45 xl:block">
                Brand partnerships
                <br />
                &amp; creator marketing
              </p>
            </div>

            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-7">
                {primaryNav.map((item) => {
                  const active =
                    pathname === item.href || pathname.startsWith(`${item.href}/`);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className="nav-link text-[0.78rem] tracking-[0.02em] text-ink/80 hover:text-ink"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <span className="hidden sm:block">
                <Link href="/contact" className="btn">
                  Let’s Collaborate
                  <ArrowUpRight />
                </Link>
              </span>
              <button
                ref={toggleRef}
                type="button"
                className="relative flex h-11 w-11 items-center justify-center border border-[var(--hairline-strong)] lg:hidden"
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((value) => !value)}
              >
                <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
                <span className="relative block h-3 w-5" aria-hidden="true">
                  <span
                    className={`absolute left-0 block h-px w-5 bg-ink transition-transform duration-300 ${
                      open ? "top-1.5 rotate-45" : "top-0"
                    }`}
                  />
                  <span
                    className={`absolute left-0 block h-px w-5 bg-ink transition-transform duration-300 ${
                      open ? "top-1.5 -rotate-45" : "top-3"
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className="mobile-menu lg:hidden"
        data-open={open ? "true" : "false"}
      >
        <div className="container-ed flex min-h-full flex-col pt-6">
          <div className="flex items-center justify-between">
            <Wordmark />
            <button
              type="button"
              data-autofocus
              className="flex h-11 w-11 items-center justify-center border border-[var(--hairline-strong)]"
              aria-label="Close menu"
              onClick={() => {
                setOpen(false);
                toggleRef.current?.focus();
              }}
            >
              <span className="relative block h-3 w-5" aria-hidden="true">
                <span className="absolute left-0 top-1.5 block h-px w-5 rotate-45 bg-ink" />
                <span className="absolute left-0 top-1.5 block h-px w-5 -rotate-45 bg-ink" />
              </span>
            </button>
          </div>

          <p className="eyebrow-sm mt-10 text-ink/40">Menu</p>

          <nav aria-label="Mobile" className="mt-3">
            <ul>
              {primaryNav.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="mobile-menu-link"
                    style={{
                      transitionDelay: open ? `${80 + index * 45}ms` : "0ms",
                    }}
                    aria-current={
                      pathname === item.href || pathname.startsWith(`${item.href}/`)
                        ? "page"
                        : undefined
                    }
                  >
                    <span className="meta w-6 shrink-0 text-olive">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-10">
            <Link href="/contact" className="btn btn--solid w-full">
              Let’s Collaborate
              <ArrowUpRight />
            </Link>
          </div>

          <div className="mt-auto grid gap-4 border-t border-[var(--hairline)] py-8 text-[0.8125rem] sm:grid-cols-2">
            <div>
              <p className="eyebrow-sm text-ink/40">Enquiries</p>
              <EmailLink className="link-quiet mt-2 inline-flex break-all">
                {site.email}
              </EmailLink>
              <a className="mt-3 block text-ink/65" href={`tel:${site.phoneHref}`}>
                {site.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="eyebrow-sm text-ink/40">Elsewhere</p>
              <a
                className="mt-2 inline-flex text-ink/65 hover:text-ink"
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram {site.instagramHandle}
              </a>
              <p className="mt-3 text-ink/40">{site.descriptor}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
