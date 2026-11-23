import { ShieldCheck, Microscope, Truck, Wrench } from "lucide-react";
import lab from "@/assets/lab-bench.webp";

const PILLARS = [
  { icon: ShieldCheck, title: "1 año de garantía legal", text: "Todas las piezas cuentan con garantía de un año, también las de segunda mano." },
  { icon: Microscope, title: "Banco de pruebas real", text: "Cada componente se verifica en nuestro laboratorio por técnicos, no por algoritmos." },
  { icon: Truck, title: "Envío ESD en 24-48h", text: "Embalaje antiestático y protegido contra electrostática hasta tu taller." },
  { icon: Wrench, title: "Derecho a reparar", text: "Alargamos la vida de los equipos y te damos la pieza exacta para repararlos." },
];

export function TrustBlock() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden rounded-2xl border border-border">
          <img src={lab} alt="Banco de pruebas con osciloscopio y placas en el laboratorio de Inparts" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1.5 font-mono text-xs backdrop-blur">
            <span className="size-2 animate-pulse-dot rounded-full bg-success" /> Laboratorio operativo
          </div>
        </div>
        <div>
          <p className="eyebrow">Laboratorio de electrónica</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Nuestro Taller y Laboratorio en Azuqueca de Henares (Guadalajara)
          </h2>
          <p className="mt-4 text-muted-foreground">
            Recuperamos componentes de equipos fuera de uso, los diagnosticamos y solo publicamos lo que
            supera nuestras pruebas.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {PILLARS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-xl border border-border bg-background/50 p-5">
                <Icon className="size-5 text-primary" />
                <h3 className="mt-3 font-medium">{title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
