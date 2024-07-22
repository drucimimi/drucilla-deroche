import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/ui/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio de Drucilla Deroche",
  description: "Comprend ma présentation, mes projets, mes expériences professionnelles ainsi que mes compétences",
  icons: {
    icon: '/images/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
