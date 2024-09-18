'use client'
import { useChangeLocale, useCurrentLocale } from '@/locales/client'
import styles from '@/app/ui/styles/switchLanguage.module.css'
 
export default function SwitchLanguage() {
  const changeLocale = useChangeLocale()
  const locale = useCurrentLocale()
 
  return (
    <>
    {locale === 'en' ?
      <div className={styles.switchLanguage}><button onClick={() => changeLocale('fr')}>French</button>
      <button onClick={() => changeLocale('en')}>English</button></div> : 
      <div className={styles.switchLanguage}><button onClick={() => changeLocale('fr')}>Français</button>
      <button onClick={() => changeLocale('en')}>Anglais</button></div>
      }
    </>
  )
}