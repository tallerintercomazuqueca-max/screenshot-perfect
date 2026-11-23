import { FlaskConical, Plus } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { conditionLabel, formatPrice, type Part } from "@/lib/catalog";

export function PartCard({ part }: { part: Part }) {
  const { add, setOpen } = useCart();

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-colors hover:border-primary/40">
      <div className="relative aspect-[4/3] overflow-hidden bg-background">
        <img
          src={part.image}
          alt={part.title}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
        <div className="absolute left-3 top-3 flex gap-1.5">
          <Badge variant="mpn" className="bg-background/80 backdrop-blur">{part.mpn}</Badge>
        </div>
        <span className="absolute bottom-3 right-3 rounded bg-background/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur">
          {conditionLabel(part.condition)}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="font-medium leading-snug">{part.title}</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Extraído de: <span className="text-foreground/80">{part.extractedFrom}</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="lab" className="gap-1">
            <FlaskConical className="size-3" /> Comprobado en Laboratorio
          </Badge>
          {part.tara === 0 ? (
            <Badge variant="tara0">Tara 0 · Óptimo</Badge>
          ) : (
            <Badge variant="tara1">Tara 1 · Con tara</Badge>
          )}
        </div>
        <div className="mt-auto flex items-end justify-between gap-2 pt-2">
          <div>
            <p className="font-mono text-xl font-semibold">{formatPrice(part.price)}</p>
            <p className="text-[11px] text-muted-foreground">IVA incluido</p>
          </div>
          <Button
            size="sm"
            onClick={() => {
              add(part.id);
              toast.success("Añadido al carrito", {
                description: part.title,
                action: { label: "Ver carrito", onClick: () => setOpen(true) },
              });
            }}
          >
            <Plus /> Añadir al carrito
          </Button>
        </div>
      </div>
    </article>
  );
}
