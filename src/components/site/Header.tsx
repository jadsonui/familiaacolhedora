import { useEffect, useState } from "react";
import logo from "@/assets/logo-lar-franciscano.png.asset.json";
import { Cta } from "./Cta";

const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre o Lar" },
  { href: "#familia-acolhedora", label: "Família Acolhedora" },
  { href: "#contato", label: "Contato" },
  { href: "#servicos", label: "Serviços" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto grid max-w-[1280px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:px-8">
        <a href="#inicio" className="flex min-w-0 items-center" aria-label="Lar Franciscano de Piracicaba — início">
          <img
            src={logo.url}
            alt="Lar Franciscano de Piracicaba — nós somos o lar do amor"
            className="h-10 w-auto max-w-full sm:h-12"
            width={1600}
            height={430}
          />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary-deep"
            >
              {item.label}
            </a>
          ))}
          <Cta href="#contato" className="ml-3 px-5 py-2.5 text-sm">
            Fale conosco
          </Cta>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-primary text-primary-deep transition-colors hover:bg-primary-soft lg:hidden"
        >
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div id="menu-mobile" className="border-t border-border bg-background px-5 pb-6 pt-3 lg:hidden">
          <nav aria-label="Navegação principal (mobile)" className="flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-primary-soft hover:text-primary-deep"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Cta href="#contato" className="mt-4 w-full">
            Fale conosco
          </Cta>
        </div>
      )}
    </header>
  );
}
