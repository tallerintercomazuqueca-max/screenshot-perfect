import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/site/PageHeader";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/cookies")({
  head: () => seo("Política de Cookies | Inparts", "Uso de cookies en inparts.es."),
  component: () => (
    <>
      <PageHeader eyebrow="Legal" title="Política de Cookies" />
      <Prose>
        <p>Texto pendiente de redactar. Para cualquier consulta, contacta con Inparts · Grupo Intercom Azuqueca.</p>
      </Prose>
    </>
  ),
});
