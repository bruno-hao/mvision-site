import Image from "next/image";
import { WhatsAppButton } from "./WhatsAppButton";

const LINKS = [
  { href: "#especialidades", label: "Especialidades" },
  { href: "#sobre", label: "Sobre" },
  { href: "#loja", label: "A loja" },
  { href: "#faq", label: "Dúvidas" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-white/95 backdrop-saturate-150">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#topo" className="flex items-center gap-2">
          <Image
            src="/images/logo.svg"
            alt="M Vision Ótica Especializada"
            width={192}
            height={60}
            className="h-11 w-auto md:h-14"
            priority
          />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-text-secondary transition-colors hover:text-brand-forest"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <WhatsAppButton
          label="WhatsApp"
          className="px-4 py-2 text-sm md:px-5 md:py-2.5"
        />
      </div>
    </header>
  );
}
