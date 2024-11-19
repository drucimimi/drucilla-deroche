"use client"
import { useMatomo } from "@cesnow/matomo-next"
import { useEffect } from "react"

const Matomo : React.FC = () => {
    const { trackPageView } = useMatomo()

    // Track page view
    useEffect(() => {
      trackPageView()
    }, [])
    return <></>
}

export default Matomo