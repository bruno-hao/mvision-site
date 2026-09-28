import Image from "next/image";
import { Reveal } from "./Reveal";

const SPECIALTIES = [
  {
    tag: "Lentes filtrantes",
    title: "Proteção para quem passa o dia na tela",
    description:
      "Lentes com filtro pensadas para reduzir o cansaço visual de quem trabalha e estuda em frente a telas o dia inteiro.",
    image: "/images/produto.webp",
    alt: "Armação com lente filtrante em destaque",
  },
  {
    tag: "Prismas e alta miopia",
    title: "Graus complexos que a ótica de shopping não monta",
    description:
      "Avaliação e montagem para prismas, alta miopia e hipermetropia — os casos que exigem lente especial, não de prateleira.",
    image: "/images/idoso2.png",
    alt: "Pessoa idosa usando óculos com lente especial",
  },
  {
    tag: "Baixa visão",
    title: "Cuidado específico para quem enxerga pouco",
    description:
      "Atendimento voltado para baixa visão, com tempo e atenção que esse tipo de avaliação exige.",
    image: "/images/idoso3.png",
    alt: "Pessoa idosa sorrindo com óculos",
  },
  {
    tag: "Atendimento infantil",
    title: "Exame e escolha de armação sem pressa, do jeito da criança",
    description:
      "Crianças pequenas, inclusive as que precisam de mais paciência durante o exame, são atendidas com calma pela nossa equipe.",
    image: "/images/atendimento.jpeg",
    alt: "Criança fazendo exame de vista na M Vision",
  },
];

export function Specialties() {
  return (
    <section id="especialidades" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary md:text-4xl">
            Feito para o seu caso específico
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Cada necessidade de visão pede um tipo de atenção diferente. Aqui,
            cada uma tem o cuidado certo.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SPECIALTIES.map((item, index) => (
            <Reveal key={item.tag} delayMs={index * 90}>
              <article className="flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-border-subtle bg-white shadow-[var(--shadow-card)]">
                <div className="relative h-56 w-full">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 480px, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-[var(--radius-pill)] bg-brand-orange px-3 py-1 text-xs font-bold text-white">
                    {item.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <h3 className="text-lg font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
