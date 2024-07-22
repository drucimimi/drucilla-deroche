import * as React from 'react'
import Image from 'next/image'
import styles from '@/app/ui/styles/hero.module.css'

const Hero: React.FunctionComponent = () => {
  return <div className={styles.hero}>
    <div className={styles.heroProfileImage}>
      <Image src='/images/drucilla.jpg' width={100} height={100} alt="Photo de Drucilla Deroche" />
    </div>
    <div className={styles.heroBrief}>
      <h1>Bonjour, je m&apos;appelle Drucilla 👋</h1>
      <p>
        Je suis développeuse web basé à Nantes, France. Je suis spécialisée dans le développement front-end d&apos;applications web.
      </p>
    </div>
  </div>
}
export default Hero