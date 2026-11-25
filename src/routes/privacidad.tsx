import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/site/PageHeader";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/privacidad")({
  head: () => seo("Política de Privacidad | Inparts", "Cómo tratamos tus datos personales en Inparts."),
  component: () => (
    <>
      <PageHeader eyebrow="Legal" title="Política de Privacidad" />
      <Prose>
        <p>Texto pendiente de redactar. Para cualquier consulta, contacta con Inparts · Grupo Intercom Azuqueca.</p>
      </Prose>
    </>
  ),
});
