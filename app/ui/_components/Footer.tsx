import * as React from 'react'
import styles from '@/app/ui/styles/footer.module.css'
import Icon from './icon'
import { MdiGithub, MdiLinkedin } from './icons'
import Link from 'next/link'

const Footer: React.FunctionComponent = () => {
  return <footer className={styles.footer}>
    <div className={styles.footerCopyright}>
      <p className={styles.paragraph}>©2024 Drucilla Deroche - Tous droits réservés</p>
    </div>
</footer>
}
export default Footer