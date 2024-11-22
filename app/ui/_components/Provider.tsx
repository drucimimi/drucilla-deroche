"use client"
import { I18nProviderClient } from "@/locales/client"
import init from "@socialgouv/matomo-next"
import { useEffect, type ReactNode } from "react"

type ProviderProps = {
  locale: string
  children: ReactNode
}

export function Provider({ locale, children }: ProviderProps) {
  const MATOMO_URL = process.env.MATOMO_URL || "https://matomo.webapps24.eu";
  const MATOMO_SITE_ID = process.env.MATOMO_SITE_ID || "4";
  useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []);
  return (
    <I18nProviderClient locale={locale}>
      {children}
    </I18nProviderClient>
  )
}