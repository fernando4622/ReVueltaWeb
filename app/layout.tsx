import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReVuelta — Un envase. Muchos ciclos.",
  description:
    "Una red compartida de contenedores reutilizables diseñados para devolverse, sanitizarse y volver a circular.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className="h-full scroll-smooth scroll-pt-24 antialiased motion-reduce:scroll-auto max-[520px]:scroll-pt-18"
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-charcoal">
        {children}
      </body>
    </html>
  );
}
