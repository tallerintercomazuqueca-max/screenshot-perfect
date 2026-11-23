import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/otros")({
  head: () => seo("Otros repuestos · Impresoras y periféricos | Inparts", "Placas de impresora, periféricos y otros componentes electrónicos recuperados y verificados."),
  component: () => (
    <CategoryPage
      eyebrow="Otros"
      title="Impresoras, periféricos y otros componentes"
      intro="Todo lo que no encaja en una familia concreta, igual de comprobado en nuestro laboratorio."
      families={["otros"]}
    />
  ),
});
