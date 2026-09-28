import Image from "next/image";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="sobre" className="bg-surface-tint-green py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <Reveal className="order-2 md:order-1">
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-brand-forest">
            Quem te atende
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary md:text-4xl">
            Uma equipe que ouve o problema antes de vender a armação
          </h2>
          <p className="mt-6 text-lg text-text-secondary">
            Na M Vision, o atendimento começa entendendo o que não funcionou em
            outro lugar — o grau que não ficou certo, a lente que não resolveu
            o cansaço, a criança que não teve paciência tratada. A partir daí a
            gente indica o que realmente atende ao seu caso.
          </p>
        </Reveal>

        <Reveal delayMs={120} className="order-1 md:order-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)]">
            <Image
              src="/images/equipe.jpeg"
              alt="Equipe da M Vision Ótica Especializada"
              fill
              sizes="(min-width: 768px) 480px, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
