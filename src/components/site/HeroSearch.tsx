import { useId, useRef, useState } from "react";
import { ArrowRight, CornerDownLeft, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { FAMILIES, PARTS, formatPrice, suggestParts, type Family } from "@/lib/catalog";

interface Props {
  query: string;
  family: Family | "all";
  onQueryChange: (q: string) => void;
  onFamilyChange: (f: Family | "all") => void;
  onSubmit: () => void;
}

export function HeroSearch({ query, family, onQueryChange, onFamilyChange, onSubmit }: Props) {
  const [focused, setFocused] = useState(false);
  const [active, setActive] = useState(0);
  const listId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestions = suggestParts(PARTS, query, family);
  const showList = focused && suggestions.length > 0;

  const pick = (text: string) => {
    onQueryChange(text);
    setFocused(false);
    inputRef.current?.blur();
    onSubmit();
  };

  return (
    <div className="mx-auto w-full max-w-3xl">
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          const s = showList ? suggestions[active] : undefined;
          if (s) pick(s.mpn);
          else {
            setFocused(false);
            onSubmit();
          }
        }}
        className="relative"
      >
        <div
          className={cn(
            "flex items-center gap-3 rounded-2xl border border-border bg-surface/90 px-5 backdrop-blur transition-shadow",
            focused && "shadow-glow",
          )}
        >
          <Search className="size-5 shrink-0 text-muted-foreground" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              onQueryChange(e.target.value);
              setActive(0);
            }}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 150)}
            onKeyDown={(e) => {
              if (!showList) return;
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((a) => (a + 1) % suggestions.length);
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((a) => (a - 1 + suggestions.length) % suggestions.length);
              } else if (e.key === "Escape") {
                setFocused(false);
              }
            }}
            placeholder="Referencia MPN o modelo · ej. EAX62064401, ThinkPad T470…"
            aria-label="Buscar repuesto por MPN o modelo"
            role="combobox"
            aria-expanded={showList}
            aria-controls={listId}
            autoComplete="off"
            className="h-16 w-full bg-transparent text-base outline-none placeholder:text-muted-foreground sm:text-lg"
          />
          <button
            type="submit"
            className="hidden items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-glow sm:inline-flex"
          >
            Buscar <ArrowRight className="size-4" />
          </button>
        </div>

        {showList && (
          <ul
            id={listId}
            role="listbox"
            className="absolute inset-x-0 top-full z-30 mt-2 overflow-hidden rounded-xl border border-border bg-popover text-left shadow-card"
          >
            {suggestions.map((s, i) => (
              <li
                key={s.id}
                role="option"
                aria-selected={i === active}
                onMouseDown={(e) => {
                  e.preventDefault();
                  pick(s.mpn);
                }}
                onMouseEnter={() => setActive(i)}
                className={cn(
                  "flex cursor-pointer items-center gap-3 px-4 py-3",
                  i === active && "bg-accent",
                )}
              >
                <img src={s.image} alt="" className="size-10 rounded object-cover" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm">{s.title}</p>
                  <p className="truncate font-mono text-xs text-muted-foreground">
                    {s.mpn} · {s.extractedFrom}
                  </p>
                </div>
                <span className="font-mono text-sm">{formatPrice(s.price)}</span>
                {i === active && <CornerDownLeft className="size-4 text-muted-foreground" />}
              </li>
            ))}
          </ul>
        )}
      </form>

      <div className="mt-4 flex flex-wrap justify-center gap-2" role="group" aria-label="Familias">
        {FAMILIES.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => onFamilyChange(f.id)}
            aria-pressed={family === f.id}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-colors",
              family === f.id
                ? "border-primary bg-primary/15 text-foreground"
                : "border-border bg-surface/60 text-muted-foreground hover:text-foreground",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}
