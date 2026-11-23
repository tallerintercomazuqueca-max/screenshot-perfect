import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/site/PageHeader";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/envios-devoluciones")({
  head: () => seo("Política de Envíos y Devoluciones | Inparts", "Envíos en 24-48h con embalaje antiestático ESD y 14 días de desistimiento."),
  component: () => (
    <>
      <PageHeader eyebrow="Legal" title="Política de Envíos y Devoluciones" />
      <Prose>
        <h2>Envíos</h2>
        <ul>
          <li>Preparamos y enviamos los pedidos en <strong>24-48h laborables</strong> a península.</li>
          <li>Todas las piezas viajan en <strong>embalaje antiestático (ESD)</strong> y protegidas contra golpes.</li>
          <li>Recibirás el seguimiento del envío en cuanto salga de nuestro taller.</li>
        </ul>
        <h2>Derecho de desistimiento (14 días)</h2>
        <p>
          Dispones de <strong>14 días naturales</strong> desde la recepción para desistir de la compra sin necesidad
          de justificación. Contacta con nosotros y te indicaremos cómo devolver la pieza.
        </p>
        <ul>
          <li>La pieza debe devolverse en su embalaje ESD original y sin manipulaciones ni soldaduras.</li>
          <li>Reembolsamos el importe en un máximo de 14 días desde que recibimos la devolución.</li>
          <li>Los gastos de devolución por desistimiento corren a cargo del cliente.</li>
        </ul>
      </Prose>
    </>
  ),
});
