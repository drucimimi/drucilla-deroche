import * as React from 'react'
import styles from '@/app/ui/styles/footer.module.css'
import Icon from './icon'
import { MdiGithub, MdiLinkedin } from './icons'
import Link from 'next/link'

const Footer: React.FunctionComponent = () => {
  return <footer className={styles.footer}>
    <h2>Contact</h2>
    <div className={styles.footerSocialMediaMenu}>
      <Link href={"https://github.com/drucimimi"} target="_blank"><Icon icon={MdiGithub} size={32}/></Link>
      <Link href={"https://fr.linkedin.com/in/drucilla-deroche"} target="_blank"><Icon icon={MdiLinkedin} size={32}/></Link>
    </div>
    <div className={styles.footerCopyright}>
      <p className={styles.paragraph}>©2024 Drucilla Deroche - Tous droits réservés</p>
    </div>
</footer>
}
export default Footer