import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/constants";

export function WhatsAppButton({
  label = "Falar no WhatsApp",
  message = DEFAULT_WHATSAPP_MESSAGE,
  variant = "solid",
  className = "",
}: {
  label?: string;
  message?: string;
  variant?: "solid" | "outline-on-forest" | "on-white-forest";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] px-6 py-3 text-base font-bold transition-colors duration-200";

  const variants: Record<string, string> = {
    solid:
      "bg-brand-orange text-white hover:bg-brand-orange-hover",
    "outline-on-forest":
      "bg-white text-brand-forest hover:bg-white/90",
    "on-white-forest":
      "bg-surface-forest text-white hover:bg-surface-forest-dark",
  };

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
      >
        <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38A9.96 9.96 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.06c-1.56 0-3.05-.42-4.34-1.2l-.31-.19-3.11.82.83-3.03-.2-.31a8.06 8.06 0 0 1-1.24-4.29c0-4.46 3.63-8.09 8.1-8.09 2.16 0 4.19.84 5.72 2.37a8.03 8.03 0 0 1 2.37 5.72c0 4.46-3.63 8.2-8.02 8.2Zm4.44-6.06c-.24-.12-1.43-.7-1.65-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.15.2-.56.2-1.04.14-1.15-.06-.1-.22-.16-.46-.28Z" />
      </svg>
      {label}
    </a>
  );
}
