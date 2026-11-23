import { createFileRoute } from "@tanstack/react-router";
import { Cpu, Gauge, MessageCircle, Microscope, PackageSearch, Wrench } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/catalog";
import { seo } from "@/lib/seo";
import lab from "@/assets/lab-bench.webp";

export const Route = createFileRoute("/taller-sat")({
  head: () => seo("Taller SAT · Reparación electrónica en Azuqueca | Inparts", "Diagnóstico, reparación de placas y microsoldadura para técnicos y particulares en Azuqueca de Henares (Guadalajara)."),
  component: TallerSat,
});

const SERVICES = [
  { icon: Gauge, title: "Diagnóstico de averías", text: "Localizamos el componente que falla con osciloscopio, fuente de laboratorio y cámara térmica." },
  { icon: Cpu, title: "Reparación de placas", text: "Main boards, T-CON y fuentes: sustitución de componentes, condensadores y reguladores." },
  { icon: Wrench, title: "Microsoldadura", text: "Reballing, conectores de carga, flex y trabajos SMD de precisión." },
  { icon: PackageSearch, title: "Búsqueda de piezas", text: "¿No encuentras la referencia? La buscamos en nuestro stock de despiece." },
  { icon: Microscope, title: "Verificación para profesionales", text: "Testamos la pieza antes de enviarla para que tu reparación salga a la primera." },
];

function TallerSat() {
  return (
    <>
      <PageHeader eyebrow="Taller SAT" title="Servicio técnico de electrónica e informática">
        Técnicos reales en Azuqueca de Henares. Atendemos a talleres SAT, empresas y particulares.
      </PageHeader>
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_420px]">
        <div className="grid gap-5 sm:grid-cols-2">
          {SERVICES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-6">
              <Icon className="size-5 text-primary" />
              <h2 className="mt-3 font-medium">{title}</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
        <aside className="space-y-5">
          <img src={lab} alt="Banco de trabajo del taller SAT de Inparts" className="aspect-[4/3] w-full rounded-xl border border-border object-cover" />
          <div className="rounded-xl border border-border bg-surface p-6">
            <h2 className="font-medium">¿Tienes un equipo averiado?</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Envíanos el modelo y el síntoma por WhatsApp y te orientamos sin compromiso.
            </p>
            <Button variant="whatsapp" className="mt-4 w-full" asChild>
              <a href={whatsappLink("Hola Inparts, quiero consultar una reparación en el Taller SAT.")} target="_blank" rel="noreferrer">
                <MessageCircle /> Consultar por WhatsApp
              </a>
            </Button>
          </div>
        </aside>
      </section>
    </>
  );
}
