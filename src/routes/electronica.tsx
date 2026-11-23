import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/electronica")({
  head: () => seo("Electrónica · Repuestos TV, monitor y móvil | Inparts", "Placas T-CON, fuentes de TV, pantallas de móvil y tablet recuperadas y comprobadas en laboratorio."),
  component: () => (
    <CategoryPage
      eyebrow="Electrónica"
      title="Repuestos para TV, monitor, móvil y tablet"
      intro="Placas T-CON, fuentes, main boards y pantallas extraídas de equipos y verificadas en banco de pruebas."
      families={["tv", "mobile"]}
    />
  ),
});
