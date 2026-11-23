import tcon from "@/assets/part-tcon.webp";
import psu from "@/assets/part-psu.webp";
import laptopBoard from "@/assets/part-laptop-board.webp";
import screen from "@/assets/part-screen.webp";
import mobile from "@/assets/part-mobile.webp";

export type Family = "tv" | "laptop" | "desktop" | "mobile" | "otros";
export type Condition = "reacondicionado" | "segunda-mano" | "despiece";
export type Tara = 0 | 1;

export interface Part {
  id: string;
  title: string;
  mpn: string;
  extractedFrom: string;
  brand: string;
  family: Family;
  condition: Condition;
  tara: Tara;
  /** Final price in euros, IVA (21%) included. */
  price: number;
  image: string;
}

export const FAMILIES: { id: Family | "all"; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "tv", label: "TV / Monitor" },
  { id: "laptop", label: "Laptop" },
  { id: "desktop", label: "Desktop / Server" },
  { id: "mobile", label: "Mobile / Tablet" },
  { id: "otros", label: "Otros" },
];

export const CONDITIONS: { id: Condition; label: string; hint: string }[] = [
  { id: "reacondicionado", label: "Reacondicionado", hint: "Testado en laboratorio" },
  { id: "segunda-mano", label: "Segunda mano", hint: "Funcional, uso previo" },
  { id: "despiece", label: "Despiece", hint: "Extraído de equipo" },
];

export const BRANDS = ["Samsung", "LG", "HP", "Lenovo", "Dell", "Toshiba", "Acer", "Asus"];

export const PARTS: Part[] = [
  { id: "tcon-lg-42la620s", title: "Placa T-CON TV LG 42LA620S", mpn: "EAX62064401", extractedFrom: "LG 42LA620S", brand: "LG", family: "tv", condition: "reacondicionado", tara: 0, price: 39.9, image: tcon },
  { id: "psu-hp-prodesk-600g3", title: "Fuente de alimentación 180W HP ProDesk", mpn: "D16-180P1A", extractedFrom: "HP ProDesk 600 G3", brand: "HP", family: "desktop", condition: "reacondicionado", tara: 0, price: 34.9, image: psu },
  { id: "mb-lenovo-t470", title: "Placa base Lenovo ThinkPad T470 i5-7300U", mpn: "01HX652", extractedFrom: "Lenovo ThinkPad T470", brand: "Lenovo", family: "laptop", condition: "reacondicionado", tara: 0, price: 129, image: laptopBoard },
  { id: "lcd-dell-5590", title: 'Pantalla 15.6" FHD IPS Dell Latitude', mpn: "NV156FHM-N61", extractedFrom: "Dell Latitude 5590", brand: "Dell", family: "laptop", condition: "segunda-mano", tara: 1, price: 59.9, image: screen },
  { id: "oled-samsung-s20", title: "Pantalla OLED Samsung Galaxy S20", mpn: "GH82-22123A", extractedFrom: "Samsung Galaxy S20 SM-G980F", brand: "Samsung", family: "mobile", condition: "despiece", tara: 1, price: 89, image: mobile },
  { id: "tcon-samsung-ue55tu7105", title: "Placa T-CON TV Samsung UE55TU7105", mpn: "BN96-50391A", extractedFrom: "Samsung UE55TU7105", brand: "Samsung", family: "tv", condition: "segunda-mano", tara: 0, price: 29.9, image: tcon },
  { id: "psu-dell-7050-sff", title: "Fuente 180W Dell OptiPlex SFF", mpn: "L180EBS-00", extractedFrom: "Dell OptiPlex 7050 SFF", brand: "Dell", family: "desktop", condition: "despiece", tara: 1, price: 24.9, image: psu },
  { id: "mb-toshiba-l50b", title: "Placa base Toshiba Satellite L50-B", mpn: "A000301080", extractedFrom: "Toshiba Satellite L50-B", brand: "Toshiba", family: "laptop", condition: "despiece", tara: 0, price: 69, image: laptopBoard },
  { id: "lcd-acer-a514", title: 'Pantalla 14" FHD Acer Aspire 5', mpn: "B140HAN04.0", extractedFrom: "Acer Aspire 5 A514-52", brand: "Acer", family: "laptop", condition: "reacondicionado", tara: 0, price: 49, image: screen },
  { id: "flex-asus-z300m", title: "Placa de carga + flex Asus ZenPad 10", mpn: "Z300M_SUB_BOARD", extractedFrom: "Asus ZenPad 10 Z300M", brand: "Asus", family: "mobile", condition: "despiece", tara: 0, price: 14.9, image: mobile },
  { id: "psu-hp-dl380-g9", title: "Fuente servidor 500W HP ProLiant Gen9", mpn: "720478-B21", extractedFrom: "HP ProLiant DL380 Gen9", brand: "HP", family: "desktop", condition: "reacondicionado", tara: 0, price: 79, image: psu },
  { id: "pcb-hp-m404", title: "Placa formateadora impresora HP LaserJet", mpn: "W1A51-60001", extractedFrom: "HP LaserJet Pro M404dn", brand: "HP", family: "otros", condition: "segunda-mano", tara: 1, price: 44.9, image: tcon },
  { id: "lcd-lenovo-ideapad", title: 'Pantalla 15.6" HD Lenovo IdeaPad', mpn: "NT156WHM-N42", extractedFrom: "Lenovo IdeaPad 330-15IKB", brand: "Lenovo", family: "laptop", condition: "segunda-mano", tara: 0, price: 39, image: screen },
  { id: "psu-lg-49uk6300", title: "Fuente de alimentación TV LG 49UK6300", mpn: "EAY64928701", extractedFrom: "LG 49UK6300PLB", brand: "LG", family: "tv", condition: "reacondicionado", tara: 1, price: 54.9, image: tcon },
];

export interface PartFilters {
  query: string;
  family: Family | "all";
  conditions: Condition[];
  tara: Tara | null;
  brands: string[];
}

export const EMPTY_FILTERS: PartFilters = {
  query: "",
  family: "all",
  conditions: [],
  tara: null,
  brands: [],
};

export function normalize(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[\s\-_./"]+/g, "");
}

/** Matches every word of the query against title, MPN, source model and brand. */
export function matchesQuery(part: Part, query: string): boolean {
  const words = query.trim().split(/\s+/).filter(Boolean).map(normalize);
  if (words.length === 0) return true;
  const haystack = normalize(`${part.title} ${part.mpn} ${part.extractedFrom} ${part.brand}`);
  return words.every((w) => haystack.includes(w));
}

export function filterParts(parts: Part[], f: PartFilters): Part[] {
  return parts.filter(
    (p) =>
      (f.family === "all" || p.family === f.family) &&
      (f.conditions.length === 0 || f.conditions.includes(p.condition)) &&
      (f.tara === null || p.tara === f.tara) &&
      (f.brands.length === 0 || f.brands.includes(p.brand)) &&
      matchesQuery(p, f.query),
  );
}

export function suggestParts(parts: Part[], query: string, family: Family | "all", limit = 6) {
  if (query.trim().length < 2) return [];
  return parts
    .filter((p) => (family === "all" || p.family === family) && matchesQuery(p, query))
    .slice(0, limit);
}

const eur = new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" });
export const formatPrice = (n: number) => eur.format(n);

export const conditionLabel = (c: Condition) => CONDITIONS.find((x) => x.id === c)?.label ?? c;

export const CONTACT = {
  phoneLandline: "949 26 08 60",
  phoneMobile: "610 04 16 60",
  whatsappNumber: "34610041660",
};

export function whatsappLink(text: string) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
