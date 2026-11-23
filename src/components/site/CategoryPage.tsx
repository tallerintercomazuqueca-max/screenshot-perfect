import { useState } from "react";
import { CatalogExplorer } from "./CatalogExplorer";
import { PageHeader } from "./PageHeader";
import { EMPTY_FILTERS, type Family } from "@/lib/catalog";

export function CategoryPage({ eyebrow, title, intro, families }: { eyebrow: string; title: string; intro: string; families: Family[] }) {
  const [filters, setFilters] = useState(EMPTY_FILTERS);
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title}>{intro}</PageHeader>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <CatalogExplorer filters={filters} onChange={setFilters} families={families} showSearch />
      </section>
    </>
  );
}
