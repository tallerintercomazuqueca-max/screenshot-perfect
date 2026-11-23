import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart";
import { formatPrice, whatsappLink } from "@/lib/catalog";

export function CartSheet() {
  const { lines, total, open, setOpen, setQty, remove } = useCart();

  const orderText =
    "Hola Inparts, quiero hacer este pedido:\n" +
    lines.map((l) => `• ${l.qty} × ${l.part.title} (MPN ${l.part.mpn}) – ${formatPrice(l.part.price * l.qty)}`).join("\n") +
    `\nTotal: ${formatPrice(total)} (IVA incl.)`;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right" className="flex w-full flex-col bg-surface sm:max-w-md">
        <SheetTitle>Tu carrito</SheetTitle>
        <SheetDescription>Precios con IVA incluido.</SheetDescription>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center text-muted-foreground">
            <ShoppingCart className="size-10 opacity-40" />
            <p>Aún no has añadido ninguna pieza.</p>
          </div>
        ) : (
          <>
            <ul className="-mx-2 flex-1 space-y-2 overflow-y-auto px-2">
              {lines.map((l) => (
                <li key={l.id} className="flex gap-3 rounded-lg border border-border bg-background/60 p-3">
                  <img src={l.part.image} alt="" className="size-16 rounded-md object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{l.part.title}</p>
                    <p className="font-mono text-xs text-muted-foreground">{l.part.mpn}</p>
                    <div className="mt-2 flex items-center gap-1">
                      <Button size="icon" variant="subtle" className="size-7" aria-label="Quitar uno" onClick={() => setQty(l.id, l.qty - 1)}>
                        <Minus />
                      </Button>
                      <span className="w-6 text-center font-mono text-sm">{l.qty}</span>
                      <Button size="icon" variant="subtle" className="size-7" aria-label="Añadir uno" onClick={() => setQty(l.id, l.qty + 1)}>
                        <Plus />
                      </Button>
                      <Button size="icon" variant="ghost" className="ml-auto size-7" aria-label="Eliminar" onClick={() => remove(l.id)}>
                        <Trash2 />
                      </Button>
                    </div>
                  </div>
                  <p className="font-mono text-sm">{formatPrice(l.part.price * l.qty)}</p>
                </li>
              ))}
            </ul>
            <div className="space-y-3 border-t border-border pt-4">
              <div className="flex items-baseline justify-between">
                <span className="text-muted-foreground">Total (IVA incl.)</span>
                <span className="font-mono text-xl font-semibold">{formatPrice(total)}</span>
              </div>
              <Button variant="hero" size="xl" className="w-full" asChild>
                <a href={whatsappLink(orderText)} target="_blank" rel="noreferrer">
                  Confirmar pedido por WhatsApp
                </a>
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Te confirmamos disponibilidad y envío en minutos. Envío ESD en 24-48h.
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
