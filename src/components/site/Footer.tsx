import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT } from "@/lib/catalog";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            División de componentes de Grupo Intercom Azuqueca. Repuestos electrónicos recuperados,
            verificados en laboratorio y listos para volver a funcionar.
          </p>
          <div className="mt-6 space-y-1 text-xs text-muted-foreground">
            <p className="text-foreground">Francisco Carpintero Cascajero</p>
            <p>NIF: 03128724B · Grupo Intercom Azuqueca</p>
            <p>Azuqueca de Henares (Guadalajara), España</p>
          </div>
        </div>
        <div>
          <p className="eyebrow">Legal</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/aviso-legal" className="text-muted-foreground hover:text-foreground">Aviso Legal</Link></li>
            <li><Link to="/envios-devoluciones" className="text-muted-foreground hover:text-foreground">Envíos y Devoluciones</Link></li>
            <li><Link to="/garantias" className="text-muted-foreground hover:text-foreground">Garantías</Link></li>
            <li><Link to="/condiciones-compra" className="text-muted-foreground hover:text-foreground">Condiciones de compra</Link></li>
            <li><Link to="/privacidad" className="text-muted-foreground hover:text-foreground">Privacidad</Link></li>
            <li><Link to="/cookies" className="text-muted-foreground hover:text-foreground">Cookies</Link></li>
            <li><Link to="/quienes-somos" className="text-muted-foreground hover:text-foreground">Quiénes somos</Link></li>
            <li><Link to="/taller-sat" className="text-muted-foreground hover:text-foreground">Taller SAT</Link></li>
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">14 días de desistimiento</p>
        </div>
        <div>
          <p className="eyebrow">Contacto</p>
          <ul className="mt-4 space-y-2 font-mono text-sm">
            <li>
              <a href="tel:+34949260860" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <Phone className="size-3.5" /> {CONTACT.phoneLandline}
              </a>
            </li>
            <li>
              <a href="tel:+34610041660" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <Phone className="size-3.5" /> {CONTACT.phoneMobile}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">inparts.es</p>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} Inparts · Grupo Intercom Azuqueca. Todos los precios incluyen IVA.
        </p>
      </div>
    </footer>
  );
}
