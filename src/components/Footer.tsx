import { BUSINESS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-surface-forest-dark py-12 text-white/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-lg font-extrabold text-white">{BUSINESS.name}</p>
          <p className="mt-2 text-sm">{BUSINESS.address}</p>
          <p className="text-sm">{BUSINESS.city}</p>
        </div>

        <div className="text-sm">
          <p>
            <a href={`tel:+55${BUSINESS.whatsappNumber}`} className="hover:text-white">
              {BUSINESS.phoneDisplay}
            </a>
          </p>
          <p className="mt-1">
            <a
              href={`https://instagram.com/${BUSINESS.instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              {BUSINESS.instagram}
            </a>
          </p>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-6xl px-5 text-xs text-white/50">
        © {new Date().getFullYear()} {BUSINESS.name}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
