import Image from "next/image";
import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-white pt-14 pb-20 md:pt-20 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-surface-tint-green px-4 py-1.5 text-sm font-bold text-brand-forest">
            Ótica especializada em Salvador
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-text-primary md:text-6xl">
            Sua visão tem um problema específico.{" "}
            <span className="text-brand-orange">A gente entende exatamente qual.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-text-secondary md:text-xl">
            Lentes filtrantes, prismas, alta miopia e hipermetropia, atendimento
            infantil e para baixa visão — a M Vision existe para os casos que a
            ótica de shopping não sabe resolver.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <WhatsAppButton label="Falar com a M Vision" />
            <a
              href="#especialidades"
              className="text-sm font-bold text-brand-forest underline underline-offset-4 hover:text-brand-orange"
            >
              Ver especialidades ↓
            </a>
          </div>
        </Reveal>

        <Reveal delayMs={120} className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)] md:aspect-square">
            <Image
              src="/images/produto.webp"
              alt="Armação de óculos M Vision em destaque"
              fill
              sizes="(min-width: 768px) 480px, 90vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 w-[92%] -translate-x-1/2 rounded-[var(--radius-pill)] border border-border-subtle bg-white px-5 py-3 text-center text-sm font-bold text-brand-forest shadow-[var(--shadow-card)] md:w-auto md:px-6">
            Lentes filtrantes • Prismas • Alta miopia
          </div>
        </Reveal>
      </div>
    </section>
  );
}
