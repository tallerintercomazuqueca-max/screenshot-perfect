import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Headset, ShieldCheck, Truck } from "lucide-react";
import { HeroSearch } from "@/components/site/HeroSearch";
import { CircuitBackdrop } from "@/components/home/CircuitBackdrop";
import type { Family } from "@/lib/catalog";
import { seo } from "@/lib/seo";
import tcon from "@/assets/part-tcon.webp";
import laptopBoard from "@/assets/part-laptop-board.webp";
import psu from "@/assets/part-psu.webp";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "Inparts · Encuentra la pieza que necesitas",
      "Buscador de recambios electrónicos e informáticos por referencia MPN, marca o modelo. Componentes recuperados y verificados.",
    ),
  component: Index,
});

const CATEGORIES = [
  { to: "/electronica", title: "Electrónica", text: "TV, monitor, móvil y tablet", image: tcon },
  { to: "/informatica", title: "Informática", text: "Portátil, sobremesa y servidor", image: laptopBoard },
  { to: "/otros", title: "Otros recambios", text: "Componentes y piezas varias", image: psu },
] as const;

const TRUST = [
  { icon: Truck, label: "Envíos en embalaje antiestático" },
  { icon: ShieldCheck, label: "Garantía legal de 1 año" },
  { icon: Headset, label: "Soporte técnico" },
];

function Index() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [family, setFamily] = useState<Family | "all">("all");

  return (
    <>
      <section id="buscador" className="relative scroll-mt-16 overflow-hidden border-b border-border bg-hero">
        <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-60" />
        <CircuitBackdrop />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-20 text-center sm:px-6 sm:pt-28">
          <p className="eyebrow">Buscador de repuestos</p>
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-gradient-light sm:text-6xl">
            Encuentra la pieza que necesitas
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Recambios electrónicos e informáticos recuperados y verificados. Reutilizar componentes alarga la vida de
            tus equipos.
          </p>
          <div className="mt-10">
            <HeroSearch
              query={query}
              family={family}
              onQueryChange={setQuery}
              onFamilyChange={setFamily}
              onSubmit={(q) => navigate({ to: "/buscar", search: { q, familia: family } })}
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <ul className="mx-auto grid max-w-7xl gap-3 px-4 py-4 sm:grid-cols-3 sm:px-6">
          {TRUST.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Icon className="size-4 text-primary" /> {label}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="eyebrow">Categorías</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">Explora por tipo de recambio</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {CATEGORIES.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <img
                src={c.image}
                alt=""
                loading="lazy"
                className="aspect-[4/3] w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <h3 className="text-2xl font-semibold">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.text}</p>
                </div>
                <span className="flex size-10 items-center justify-center rounded-full border border-border bg-background/70 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="size-5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
