import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT, whatsappLink } from "@/lib/catalog";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contacto")({
  head: () => seo("Contacto · Inparts Azuqueca de Henares", "Llámanos al 949 26 08 60 o 610 04 16 60, o escríbenos por WhatsApp para consultar piezas y reparaciones."),
  component: Contacto,
});

function Contacto() {
  const [name, setName] = useState("");
  const [ref, setRef] = useState("");
  const [msg, setMsg] = useState("");

  const text = `Hola Inparts, soy ${name || "—"}.${ref ? `\nReferencia / modelo: ${ref}` : ""}\n${msg}`;

  return (
    <>
      <PageHeader eyebrow="Contacto" title="Hablemos de tu pieza o reparación">
        Respuesta rápida por WhatsApp o teléfono en horario de taller.
      </PageHeader>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_380px]">
        <form
          className="space-y-5 rounded-xl border border-border bg-card p-6 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(whatsappLink(text), "_blank", "noreferrer");
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre o taller</Label>
              <Input id="name" required value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ref">Referencia MPN o modelo</Label>
              <Input id="ref" placeholder="ej. EAX62064401" className="font-mono" value={ref} onChange={(e) => setRef(e.target.value)} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="msg">¿En qué te ayudamos?</Label>
            <Textarea id="msg" required rows={6} value={msg} onChange={(e) => setMsg(e.target.value)} />
          </div>
          <Button type="submit" variant="whatsapp" size="xl">
            <MessageCircle /> Enviar por WhatsApp
          </Button>
        </form>
        <aside className="space-y-4">
          {[
            { icon: Phone, label: "Teléfono", value: CONTACT.phoneLandline, href: "tel:+34949260860" },
            { icon: Phone, label: "Móvil / WhatsApp", value: CONTACT.phoneMobile, href: "tel:+34610041660" },
          ].map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} className="flex items-center gap-4 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-primary/40">
              <Icon className="size-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="font-mono text-lg">{value}</p>
              </div>
            </a>
          ))}
          <div className="flex items-center gap-4 rounded-xl border border-border bg-surface p-5">
            <MapPin className="size-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Taller y laboratorio</p>
              <p>Azuqueca de Henares (Guadalajara)</p>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
