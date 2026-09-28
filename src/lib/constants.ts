export const BUSINESS = {
  name: "M Vision Ótica Especializada",
  phoneDisplay: "(71) 3039-1640",
  whatsappNumber: "557130391640",
  address: "Rua Adelaide Fernandes da Costa, 700 - Loja 1 - Costa Azul",
  city: "Salvador - BA",
  instagram: "@otica.mvision",
};

export function whatsappLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encoded}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da M Vision e quero saber mais sobre lentes especializadas.";
