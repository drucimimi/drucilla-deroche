import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/ui/styles/globals.css"
import { I18nProviderClient } from '@/locales/client'
import { Provider } from "../ui/_components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio de Drucilla Deroche",
  description: "Comprend ma présentation, mes projets, mes expériences professionnelles ainsi que mes compétences",
  icons: {
    icon: '/images/favicon.ico',
  },
  openGraph: {
    title: 'Portfolio de Drucilla Deroche',
    description: "Comprend ma présentation, mes projets, mes expériences professionnelles ainsi que mes compétences",
    url: 'https://drucilla-deroche.vercel.app',
    siteName: 'Portfolio de Drucilla Deroche',
    images: [
      {
        url: 'https://drucilla-deroche.vercel.app/images/drucilla.jpg',
        width: 800,
        height: 600,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio de Drucilla Deroche',
    description: 'Comprend ma présentation, mes projets, mes expériences professionnelles ainsi que mes compétences',
    images: ['https://drucilla-deroche.vercel.app/images/drucilla.jpg'],
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
    },
  },
}

export async function generateStaticParams() {
  const locales = ['en', 'fr']
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  params,
  children,
}: Readonly<{
  params: { locale: string };
  children: React.ReactNode
}>) {
  return (
    <html lang={params.locale}>
      <body>
        <Provider locale={params.locale}>
              {children}
        </Provider>
      </body>
    </html>
  )
}