import { Reveal } from "./Reveal";

const ITEMS = [
  "Óculos de grau",
  "Lentes filtrantes",
  "Óculos de sol",
  "Clipon",
  "Armações",
];

export function QuickProof() {
  return (
    <section className="bg-surface-alt py-10">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase tracking-wide text-text-secondary">
            O que você resolve aqui
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-3">
            {ITEMS.map((item) => (
              <li
                key={item}
                className="rounded-[var(--radius-pill)] border border-border-subtle bg-white px-5 py-2 text-sm font-semibold text-text-primary"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
