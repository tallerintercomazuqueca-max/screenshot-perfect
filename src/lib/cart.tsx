import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { PARTS, type Part } from "@/lib/catalog";

interface CartLine {
  id: string;
  qty: number;
}

interface CartValue {
  lines: (CartLine & { part: Part })[];
  count: number;
  total: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartValue | null>(null);
const KEY = "inparts-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw) as CartLine[]);
    } catch {
      /* ignore corrupted cart */
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem(KEY, JSON.stringify(items));
  }, [items, loaded]);

  const value = useMemo<CartValue>(() => {
    const lines = items
      .map((l) => ({ ...l, part: PARTS.find((p) => p.id === l.id) }))
      .filter((l): l is CartLine & { part: Part } => Boolean(l.part));
    return {
      lines,
      count: lines.reduce((s, l) => s + l.qty, 0),
      total: lines.reduce((s, l) => s + l.qty * l.part.price, 0),
      open,
      setOpen,
      add: (id) =>
        setItems((prev) => {
          const found = prev.find((l) => l.id === id);
          return found
            ? prev.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l))
            : [...prev, { id, qty: 1 }];
        }),
      setQty: (id, qty) =>
        setItems((prev) =>
          qty <= 0 ? prev.filter((l) => l.id !== id) : prev.map((l) => (l.id === id ? { ...l, qty } : l)),
        ),
      remove: (id) => setItems((prev) => prev.filter((l) => l.id !== id)),
      clear: () => setItems([]),
    };
  }, [items, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
