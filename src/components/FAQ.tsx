"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

const QUESTIONS = [
  {
    question: "Preciso de receita médica para comprar?",
    answer:
      "Se você já tem uma receita atualizada, pode trazê-la. Se não tiver, converse com a gente pelo WhatsApp para saber como funciona a avaliação na loja.",
  },
  {
    question: "Vocês atendem casos de alta miopia ou prisma?",
    answer:
      "Sim — essa é justamente uma das nossas especialidades. Graus altos e prismas exigem lentes específicas, e é isso que trabalhamos.",
  },
  {
    question: "Como funciona o atendimento para crianças pequenas?",
    answer:
      "Com calma e sem pressa. Reservamos o tempo necessário para o exame e para a escolha da armação ser tranquila para a criança.",
  },
  {
    question: "Vocês vendem óculos de sol e clipon também?",
    answer:
      "Sim, além dos óculos de grau e lentes filtrantes, trabalhamos com óculos de sol, clipon e uma variedade de armações.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary md:text-4xl">
            Perguntas frequentes
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {QUESTIONS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-[var(--radius-card)] border border-border-subtle bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-base font-bold text-text-primary"
                >
                  {item.question}
                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-xl text-brand-orange transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-sm text-text-secondary">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
