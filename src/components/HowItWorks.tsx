import { Reveal } from "./Reveal";

const STEPS = [
  {
    number: "1",
    title: "Fale no WhatsApp",
    description:
      "Conte o que você precisa — sua receita, sua dificuldade ou a de quem você está ajudando a enxergar melhor.",
  },
  {
    number: "2",
    title: "Avaliação na loja",
    description:
      "Você leva sua receita atual ou faz a avaliação com a nossa equipe, sem pressa, direto na M Vision.",
  },
  {
    number: "3",
    title: "A lente e a armação certas",
    description:
      "Indicamos a lente e a armação que realmente atendem o seu caso — não a que está mais visível na prateleira.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary md:text-4xl">
            Como funciona
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-6">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-8 hidden w-full md:block"
            viewBox="0 0 900 120"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M100 20 C 250 20, 250 100, 450 100 C 650 100, 650 20, 800 20"
              stroke="#FF6A3D"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              strokeLinecap="round"
            />
          </svg>

          {STEPS.map((step, index) => (
            <Reveal key={step.number} delayMs={index * 120} className="relative">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-forest text-xl font-extrabold text-white">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
