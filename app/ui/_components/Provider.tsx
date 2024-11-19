"use client"
import { I18nProviderClient } from "@/locales/client"
import { createInstance, useMatomo } from "@cesnow/matomo-next"
import { useEffect, type ReactNode } from "react"

type ProviderProps = {
  locale: string
  children: ReactNode
}

export function Provider({ locale, children }: ProviderProps) {
  const { setInstance } = useMatomo();

  useEffect(() => {
    const instance = createInstance({
      urlBase: "https://matomo.webapps24.eu",
      siteId: 2,
      trackerUrl: "https://matomo.webapps24.eu/tracking.php", // optional, default value: `${urlBase}matomo.php`
      srcUrl: "https://matomo.webapps24.eu/tracking.js", // optional, default value: `${urlBase}matomo.js`
      permanentTitle: "Portfolio de Drucilla Deroche", // optional, always use this title for tracking, ignores document.title. Useful for SPAs.
      permanentHref: "/", // optional, always use this href for tracking, ignores window.location.href. Useful for SPAs.
      disabled: false, // optional, false by default. Makes all tracking calls no-ops if set to true.
      heartBeat: {
        // optional, enabled by default
        active: true, // optional, default value: true
        seconds: 10, // optional, default value: 15
      },
      linkTracking: false, // optional, default value: true
      configurations: {
        // optional, default value: {}
        // any valid matomo configuration, all below are optional
        disableCookies: true,
        setSecureCookie: true,
        setRequestMethod: "POST",
      },
    });
    setInstance(instance);
  }, []);
  return (
    <I18nProviderClient locale={locale}>
      {children}
    </I18nProviderClient>
  )
}