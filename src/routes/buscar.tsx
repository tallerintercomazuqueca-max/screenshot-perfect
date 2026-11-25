import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CatalogExplorer } from "@/components/site/CatalogExplorer";
import { PageHeader } from "@/components/site/PageHeader";
import { EMPTY_FILTERS, FAMILIES, type Family } from "@/lib/catalog";
import { seo } from "@/lib/seo";

const FAMILY_IDS = FAMILIES.map((f) => f.id);

export const Route = createFileRoute("/buscar")({
  validateSearch: (s: Record<string, unknown>): { q: string; familia: Family | "all" } => ({
    q: typeof s["q"] === "string" ? s["q"] : "",
    familia: FAMILY_IDS.includes(s["familia"] as Family) ? (s["familia"] as Family | "all") : "all",
  }),
  head: () => seo("Buscar repuestos | Inparts", "Resultados de búsqueda de repuestos por referencia MPN, marca o modelo."),
  component: Buscar,
});

function Buscar() {
  const { q, familia } = Route.useSearch();
  const [filters, setFilters] = useState({ ...EMPTY_FILTERS, query: q, family: familia });
  useEffect(() => setFilters((f) => ({ ...f, query: q, family: familia })), [q, familia]);
  return (
    <>
      <PageHeader eyebrow="Búsqueda" title={q ? `Resultados para «${q}»` : "Buscar repuestos"} />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <CatalogExplorer filters={filters} onChange={setFilters} showSearch />
      </section>
    </>
  );
}
