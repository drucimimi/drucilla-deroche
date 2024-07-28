'use client'
import * as React from 'react'
import Image from 'next/image'
import styles from '@/app/ui/styles/hero.module.css'
import Link from 'next/link'
import Icon from './icon'
import { MdiGithub, MdiLinkedin } from './icons'

const Hero: React.FunctionComponent = () => {
  return <div className={styles.hero}>
    <div className={styles.heroProfileImage}>
      <Image src='/images/drucilla.jpg' width={100} height={100} alt="Photo de Drucilla Deroche" />
    </div>
    <div className={styles.heroBrief}>
      <h1>Bonjour, je m&apos;appelle Drucilla 👋</h1>
      <p>
      🗣 Passionée d&apos;informatique depuis toute petite, je suis développeuse full stack basée à Nantes, France.
      Deux ans d&apos;expérience chez Accenture, j&apos;ai pu monter en compétences sur le développement web en général. 
      Actuellement, je me spécialise sur le développement front d&apos;applications web.
      </p>
      <div className={styles.heroSocialMediaMenu}>
        <Link href={"https://github.com/drucimimi"} target="_blank" title='Voir mon profil Github'><Icon icon={MdiGithub} size={32}/></Link>
        <Link href={"https://fr.linkedin.com/in/drucilla-deroche"} target="_blank" title='Voir mon profil Linkedin'><Icon icon={MdiLinkedin} size={32}/></Link>
      </div>
    </div>
  </div>
}
export default Hero