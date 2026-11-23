import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/informatica")({
  head: () => seo("Informática · Repuestos portátil, sobremesa y servidor | Inparts", "Placas base, fuentes y pantallas para portátiles, equipos de sobremesa y servidores, testadas por técnicos."),
  component: () => (
    <CategoryPage
      eyebrow="Informática"
      title="Repuestos para portátiles, sobremesa y servidores"
      intro="Placas base, fuentes de alimentación y paneles LCD de HP, Lenovo, Dell, Toshiba, Acer y más."
      families={["laptop", "desktop"]}
    />
  ),
});
