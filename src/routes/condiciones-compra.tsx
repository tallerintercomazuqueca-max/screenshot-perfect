import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/site/PageHeader";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/condiciones-compra")({
  head: () => seo("Condiciones de Compra | Inparts", "Condiciones generales de compra en Inparts."),
  component: () => (
    <>
      <PageHeader eyebrow="Legal" title="Condiciones de Compra" />
      <Prose>
        <p>Texto pendiente de redactar. Para cualquier consulta, contacta con Inparts · Grupo Intercom Azuqueca.</p>
      </Prose>
    </>
  ),
});
