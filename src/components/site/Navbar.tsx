import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, Search, ShoppingCart } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart";
import { whatsappLink } from "@/lib/catalog";

export const NAV_LINKS = [
  { to: "/", label: "Inicio" },
  { to: "/electronica", label: "Electrónica" },
  { to: "/informatica", label: "Informática" },
  { to: "/otros", label: "Otros" },
  { to: "/taller-sat", label: "Taller SAT" },
  { to: "/quienes-somos", label: "Quiénes Somos" },
  { to: "/contacto", label: "Contacto" },
] as const;

const linkClass =
  "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground";
const activeClass = "text-foreground";

export function Navbar() {
  const { count, setOpen } = useCart();
  const support = whatsappLink("Hola Inparts, necesito soporte técnico con una pieza.");

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <Logo />
        <nav className="ml-6 hidden items-center lg:flex" aria-label="Principal">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={linkClass}
              activeProps={{ className: activeClass }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-1.5">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/" hash="buscador" aria-label="Buscar piezas">
              <Search />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            aria-label={`Carrito, ${count} artículos`}
            onClick={() => setOpen(true)}
          >
            <ShoppingCart />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-primary font-mono text-[10px] text-primary-foreground">
                {count}
              </span>
            )}
          </Button>
          <Button variant="whatsapp" size="sm" className="ml-1 hidden sm:inline-flex" asChild>
            <a href={support} target="_blank" rel="noreferrer">
              <MessageCircle /> Soporte SAT
            </a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menú">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-surface">
              <SheetTitle className="sr-only">Menú</SheetTitle>
              <div className="mt-8 flex flex-col gap-1">
                {NAV_LINKS.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="rounded-md px-3 py-3 text-base text-muted-foreground hover:bg-accent hover:text-foreground"
                    activeProps={{ className: "bg-accent text-foreground" }}
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {l.label}
                  </Link>
                ))}
                <Button variant="whatsapp" className="mt-4" asChild>
                  <a href={support} target="_blank" rel="noreferrer">
                    <MessageCircle /> Soporte SAT por WhatsApp
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
