import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { HeroSearch } from "@/components/site/HeroSearch";
import { CatalogExplorer } from "@/components/site/CatalogExplorer";
import { TrustBlock } from "@/components/site/TrustBlock";
import { EMPTY_FILTERS } from "@/lib/catalog";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "Inparts · Repuestos electrónicos recuperados y verificados",
      "Placas, fuentes, pantallas y recambios por referencia MPN o modelo. Verificados en laboratorio en Azuqueca de Henares.",
    ),
  component: Index,
});

function Index() {
  const [filters, setFilters] = useState(EMPTY_FILTERS);

  const scrollToCatalog = () =>
    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      <section id="buscador" className="relative scroll-mt-16 overflow-hidden border-b border-border bg-hero">
        <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b" />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 text-center sm:px-6 sm:pt-28">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-success" />
            Stock verificado en laboratorio<span className="hidden sm:inline"> · Azuqueca de Henares</span>
          </p>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-gradient-light sm:text-6xl">
            Repuestos y componentes electrónicos recuperados y verificados
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Encuentra placas, fuentes, pantallas y recambios por referencia MPN o modelo de equipo
          </p>
          <div className="mt-10">
            <HeroSearch
              query={filters.query}
              family={filters.family}
              onQueryChange={(query) => setFilters((f) => ({ ...f, query }))}
              onFamilyChange={(family) => setFilters((f) => ({ ...f, family }))}
              onSubmit={scrollToCatalog}
            />
          </div>
        </div>
      </section>

      <section id="catalogo" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6">
        <div className="mb-10">
          <p className="eyebrow">Catálogo</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Piezas disponibles</h2>
        </div>
        <CatalogExplorer filters={filters} onChange={setFilters} />
      </section>

      <TrustBlock />
    </>
  );
}
