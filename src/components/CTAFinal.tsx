import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";

export function CTAFinal() {
  return (
    <section className="bg-surface-forest py-20 text-center md:py-28">
      <div className="mx-auto max-w-2xl px-5">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Vamos entender o seu caso?
          </h2>
          <p className="mt-5 text-lg text-white/85">
            Fale agora com a M Vision no WhatsApp e conte o que você precisa.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton label="Falar com a M Vision" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
