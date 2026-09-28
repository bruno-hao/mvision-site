import Image from "next/image";
import { Reveal } from "./Reveal";

const AUDIENCES = [
  {
    title: "Crianças",
    description:
      "Exame com paciência e armações resistentes para o dia a dia de quem não para quieto.",
    image: "/images/crianca1.png",
    alt: "Criança usando óculos de grau",
  },
  {
    title: "Adultos",
    description:
      "De quem passa o dia na tela a quem precisa de graus complexos — lente certa para a sua rotina.",
    image: "/images/adulto1.png",
    alt: "Adulto usando óculos de grau",
  },
  {
    title: "Pessoas idosas",
    description:
      "Atenção redobrada para baixa visão, prismas e as trocas de grau que vêm com a idade.",
    image: "/images/idoso1.png",
    alt: "Pessoa idosa usando óculos de grau",
  },
];

export function Audiences() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary md:text-4xl">
            Para toda a família, em cada fase
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {AUDIENCES.map((audience, index) => (
            <Reveal key={audience.title} delayMs={index * 100}>
              <div className="overflow-hidden rounded-[var(--radius-card)] border border-border-subtle bg-white shadow-[var(--shadow-card)]">
                <div className="relative aspect-square w-full">
                  <Image
                    src={audience.image}
                    alt={audience.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-text-primary">
                    {audience.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    {audience.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
