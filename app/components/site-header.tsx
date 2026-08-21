"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "Cómo funciona", href: "#how-it-works" },
  { label: "Tecnología", href: "#technology" },
  { label: "Para negocios", href: "#businesses" },
  { label: "Impacto", href: "#impact" },
  { label: "Piloto", href: "#pilot" },
  { label: "Proyecto", href: "#project" },
];

function Brand() {
  return (
    <Link
      className="inline-flex items-center gap-2 text-xl font-extrabold tracking-[-0.05em] text-ink"
      href="#top"
      aria-label="ReVuelta, volver al inicio"
    >
      <svg
        className="w-6 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2.5]"
        aria-hidden="true"
        viewBox="0 0 32 32"
      >
        <path d="M23.7 9.3A10 10 0 1 0 26 16" />
        <path d="m20.5 5.5 4 4-4 4" />
      </svg>
      <span>ReVuelta</span>
    </Link>
  );
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 grid min-h-[76px] grid-cols-[auto_1fr_auto] items-center border-b border-line bg-paper/90 px-[4vw] backdrop-blur-2xl max-[900px]:min-h-[68px] max-[900px]:grid-cols-[1fr_auto] max-[900px]:px-5"
      id="top"
    >
      <Brand />

      <nav
        className="flex justify-center gap-[clamp(1rem,2vw,2rem)] px-8 text-[0.76rem] font-semibold max-[1120px]:gap-4 max-[1120px]:text-[0.68rem] max-[900px]:hidden"
        aria-label="Navegación principal"
      >
        {navigation.map((item) => (
          <a className="transition-opacity hover:opacity-60" href={item.href} key={item.label}>
            {item.label}
          </a>
        ))}
      </nav>

      <button
        className="inline-flex min-h-11 cursor-not-allowed items-center gap-3 rounded-full border-0 bg-ink px-5 text-[0.78rem] font-bold text-paper-bright max-[900px]:hidden"
        type="button"
        aria-label="Pregunta a ReVuelta, próximamente"
        title="Próximamente"
        disabled
      >
        Pregunta a ReVuelta <span className="text-base text-lime" aria-hidden="true">↗</span>
      </button>

      <div className="hidden max-[900px]:block">
        <button
          className="grid size-11 cursor-pointer place-content-center gap-1.5 border-0 bg-transparent p-0 text-inherit"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span
            className={`h-0.5 w-[23px] bg-ink transition-transform ${
              isMenuOpen ? "translate-y-1 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-[23px] bg-ink transition-transform ${
              isMenuOpen ? "-translate-y-1 -rotate-45" : ""
            }`}
          />
        </button>

        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            className="absolute top-[68px] right-0 left-0 grid border-b border-line bg-paper px-5 pt-6 pb-8 shadow-[0_16px_30px_rgba(11,43,35,0.08)]"
            aria-label="Navegación móvil"
          >
            {navigation.map((item) => (
              <a
                className="border-b border-line py-3 text-lg font-bold"
                href={item.href}
                key={item.label}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              className="mt-4 flex cursor-not-allowed justify-between rounded-full border-0 bg-ink p-4 text-sm font-bold text-paper-bright"
              type="button"
              aria-label="Pregunta a ReVuelta, próximamente"
              title="Próximamente"
              disabled
            >
              Pregunta a ReVuelta <span aria-hidden="true">↗</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
