import { useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { PartCard } from "./PartCard";
import {
  BRANDS,
  CONDITIONS,
  EMPTY_FILTERS,
  FAMILIES,
  PARTS,
  filterParts,
  type Condition,
  type Family,
  type PartFilters,
  type Tara,
} from "@/lib/catalog";

interface Props {
  filters: PartFilters;
  onChange: (f: PartFilters) => void;
  /** Restrict the catalog to these families (category pages). */
  families?: Family[];
  showSearch?: boolean;
}

const toggle = <T,>(arr: T[], v: T) => (arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

export function CatalogExplorer({ filters, onChange, families, showSearch }: Props) {
  const pool = useMemo(
    () => (families ? PARTS.filter((p) => families.includes(p.family)) : PARTS),
    [families],
  );
  const results = filterParts(pool, filters);
  const set = (patch: Partial<PartFilters>) => onChange({ ...filters, ...patch });
  const familyOptions = families ? FAMILIES.filter((f) => f.id === "all" || families.includes(f.id)) : null;
  const dirty =
    filters.query !== "" ||
    filters.conditions.length > 0 ||
    filters.tara !== null ||
    filters.brands.length > 0 ||
    filters.family !== "all";

  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
      <aside className="space-y-7 lg:sticky lg:top-24 lg:self-start">
        <div className="flex items-center gap-2 text-sm font-medium">
          <SlidersHorizontal className="size-4 text-primary" /> Filtros para técnicos SAT
        </div>

        {showSearch && (
          <label className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3">
            <Search className="size-4 text-muted-foreground" />
            <input
              value={filters.query}
              onChange={(e) => set({ query: e.target.value })}
              placeholder="MPN o modelo"
              aria-label="Buscar en esta categoría"
              className="h-10 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </label>
        )}

        {familyOptions && familyOptions.length > 2 && (
          <fieldset>
            <legend className="eyebrow mb-3">Familia</legend>
            <div className="flex flex-wrap gap-1.5">
              {familyOptions.map((f) => (
                <Chip key={f.id} active={filters.family === f.id} onClick={() => set({ family: f.id })}>
                  {f.label}
                </Chip>
              ))}
            </div>
          </fieldset>
        )}

        <fieldset>
          <legend className="eyebrow mb-3">Condición</legend>
          <div className="space-y-2.5">
            {CONDITIONS.map((c) => (
              <label key={c.id} className="flex cursor-pointer items-start gap-3">
                <Checkbox
                  checked={filters.conditions.includes(c.id)}
                  onCheckedChange={() => set({ conditions: toggle<Condition>(filters.conditions, c.id) })}
                  className="mt-0.5"
                />
                <span className="text-sm leading-tight">
                  {c.label}
                  <span className="block text-xs text-muted-foreground">{c.hint}</span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="eyebrow mb-3">Tara</legend>
          <div className="grid grid-cols-2 gap-1 rounded-lg border border-border bg-surface p-1" role="group">
            {([0, 1] as Tara[]).map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={filters.tara === t}
                onClick={() => set({ tara: filters.tara === t ? null : t })}
                className={cn(
                  "rounded-md px-2 py-2 text-left text-xs transition-colors",
                  filters.tara === t ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span className="block font-mono text-sm font-semibold">Tara {t}</span>
                {t === 0 ? "Sin tara / Impecable" : "Con tara estética"}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="eyebrow mb-3">Fabricante</legend>
          <div className="flex flex-wrap gap-1.5">
            {BRANDS.map((b) => (
              <Chip key={b} active={filters.brands.includes(b)} onClick={() => set({ brands: toggle(filters.brands, b) })}>
                {b}
              </Chip>
            ))}
          </div>
        </fieldset>

        {dirty && (
          <Button variant="subtle" size="sm" className="w-full" onClick={() => onChange(EMPTY_FILTERS)}>
            <X /> Limpiar filtros
          </Button>
        )}
      </aside>

      <div>
        <div className="mb-5 flex items-baseline justify-between">
          <p className="text-sm text-muted-foreground">
            <span className="font-mono text-foreground">{results.length}</span>{" "}
            {results.length === 1 ? "pieza encontrada" : "piezas encontradas"}
            {filters.query && (
              <>
                {" "}para <span className="font-mono text-foreground">“{filters.query}”</span>
              </>
            )}
          </p>
        </div>
        {results.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border p-12 text-center">
            <p className="font-medium">No tenemos esa pieza publicada ahora mismo.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Escríbenos con la referencia: revisamos nuestro stock de despiece en el taller.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {results.map((p) => (
              <PartCard key={p.id} part={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "rounded-md border px-2.5 py-1 text-xs transition-colors",
        active ? "border-primary bg-primary/15 text-foreground" : "border-border bg-surface text-muted-foreground hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}
