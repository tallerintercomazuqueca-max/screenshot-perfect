import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/site/PageHeader";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/garantias")({
  head: () => seo("Garantías · 1 año en todas las piezas | Inparts", "Garantía legal de un año en repuestos reacondicionados, de segunda mano y de despiece verificados."),
  component: () => (
    <>
      <PageHeader eyebrow="Legal" title="Garantías" />
      <Prose>
        <h2>1 año de garantía legal</h2>
        <p>
          Todas nuestras piezas, sean reacondicionadas, de segunda mano o de despiece, tienen <strong>un año de
          garantía</strong> frente a defectos de funcionamiento desde la entrega.
        </p>
        <h2>Escala de tara</h2>
        <ul>
          <li><strong>Tara 0 (Sin tara / Impecable):</strong> sin marcas visibles, estado óptimo.</li>
          <li><strong>Tara 1 (Con tara estética):</strong> arañazos o marcas que no afectan al funcionamiento.</li>
        </ul>
        <p>La tara estética no es motivo de garantía, ya que se indica antes de la compra.</p>
        <h2>Qué no cubre</h2>
        <ul>
          <li>Daños por instalación incorrecta, descargas electrostáticas o sobretensiones.</li>
          <li>Piezas manipuladas, soldadas o con etiquetas de control retiradas.</li>
        </ul>
      </Prose>
    </>
  ),
});
