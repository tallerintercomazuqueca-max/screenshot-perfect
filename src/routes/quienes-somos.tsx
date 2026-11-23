import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { TrustBlock } from "@/components/site/TrustBlock";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/quienes-somos")({
  head: () => seo("Quiénes Somos · Grupo Intercom Azuqueca | Inparts", "Inparts es la división de componentes de Grupo Intercom Azuqueca: recuperamos y verificamos repuestos electrónicos."),
  component: QuienesSomos,
});

const STATS = [
  { value: "100%", label: "piezas testadas antes de su venta" },
  { value: "1 año", label: "de garantía legal" },
  { value: "24-48h", label: "envío protegido ESD" },
];

function QuienesSomos() {
  return (
    <>
      <PageHeader eyebrow="Quiénes Somos" title="La división de componentes de Grupo Intercom Azuqueca">
        Damos una segunda vida a la electrónica: cada pieza que recuperamos es un equipo que vuelve a funcionar.
      </PageHeader>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">Inparts</strong> nace del taller de Grupo Intercom Azuqueca, donde
              llevamos años reparando televisores, ordenadores, portátiles y móviles. Vimos que muchas reparaciones no
              se hacían por no encontrar la pieza exacta a un precio razonable.
            </p>
            <p>
              Por eso recuperamos componentes de equipos fuera de uso, los clasificamos por referencia MPN y los
              verificamos en nuestro banco de pruebas. Solo publicamos lo que funciona, e indicamos con claridad su
              estado estético mediante la escala de tara.
            </p>
            <p>
              Trabajamos para técnicos SAT, tiendas de reparación y particulares que creen en el derecho a reparar.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-6">
                <p className="font-mono text-3xl font-semibold text-primary">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TrustBlock />
    </>
  );
}
