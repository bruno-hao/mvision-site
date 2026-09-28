import Image from "next/image";
import { Reveal } from "./Reveal";

const PHOTOS = [
  { src: "/images/frente-loja.webp", alt: "Fachada da M Vision Ótica Especializada", caption: "Nossa fachada" },
  { src: "/images/loja1.webp", alt: "Interior da loja M Vision com parede verde", caption: "Área de atendimento" },
  { src: "/images/loja2.webp", alt: "Prateleiras de armações da M Vision", caption: "Acervo de armações" },
];

export function StoreShowcase() {
  return (
    <section id="loja" className="bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary md:text-4xl">
            A loja é assim, de verdade
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            {`Rua Adelaide Fernandes da Costa, 700 — Loja 1, Costa Azul, Salvador.`}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PHOTOS.map((photo, index) => (
            <Reveal key={photo.src} delayMs={index * 100}>
              <figure className="overflow-hidden rounded-[var(--radius-card)] border border-border-subtle bg-white shadow-[var(--shadow-card)]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm font-semibold text-text-secondary">
                  {photo.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
