"use client"
import * as React from 'react'
import styles from '@/app/ui/styles/footer.module.css'
import { useI18n } from '@/locales/client'

const Footer: React.FunctionComponent = () => {
  const translate = useI18n()
  return <footer className={styles.footer}>
    <div className={styles.footerCopyright}>
      <p className={styles.paragraph}>©2024 Drucilla Deroche - {translate('footer.copyRight')}</p>
    </div>
</footer>
}
export default Footer