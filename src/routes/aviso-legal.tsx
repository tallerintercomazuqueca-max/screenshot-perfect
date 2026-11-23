import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/site/PageHeader";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/aviso-legal")({
  head: () => seo("Aviso Legal | Inparts", "Datos del titular de inparts.es, condiciones de uso y protección de datos."),
  component: () => (
    <>
      <PageHeader eyebrow="Legal" title="Aviso Legal" />
      <Prose>
        <h2>Titular del sitio web</h2>
        <ul>
          <li><strong>Titular:</strong> Francisco Carpintero Cascajero</li>
          <li><strong>NIF:</strong> 03128724B</li>
          <li><strong>Nombre comercial:</strong> Grupo Intercom Azuqueca · Inparts</li>
          <li><strong>Domicilio:</strong> Azuqueca de Henares (Guadalajara), España</li>
          <li><strong>Teléfonos:</strong> 949 26 08 60 / 610 04 16 60</li>
        </ul>
        <h2>Condiciones de uso</h2>
        <p>
          El acceso a inparts.es implica la aceptación de estas condiciones. Los contenidos, imágenes y textos son
          propiedad del titular y no pueden reproducirse sin autorización. Las marcas y modelos citados pertenecen a
          sus respectivos fabricantes y se usan únicamente para identificar la compatibilidad de las piezas.
        </p>
        <h2>Protección de datos</h2>
        <p>
          Los datos que nos facilitas por teléfono, WhatsApp o formulario se usan solo para atender tu consulta o
          pedido, conforme al RGPD y la LOPDGDD. Puedes ejercer tus derechos contactando con nosotros.
        </p>
      </Prose>
    </>
  ),
});
