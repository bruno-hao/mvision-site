import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M Vision Ótica Especializada | Lentes filtrantes, prismas e óculos sob medida",
  description:
    "Ótica especializada em Salvador para lentes filtrantes, prismas, alta miopia, baixa visão e atendimento infantil. Fale com a M Vision no WhatsApp.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-surface-page text-text-primary">
        {children}
      </body>
    </html>
  );
}
