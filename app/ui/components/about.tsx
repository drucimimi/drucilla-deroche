import * as React from 'react'
import styles from '@/app/ui/styles/about.module.css'

const About: React.FunctionComponent = () => {
  return (
    <div className={styles.about}>
      <h2>A propos de moi</h2>
      <p>
      🗣 Développeuse Full Stack depuis 2 ans chez Accenture, j&apos;ai pu monter en compétences sur le développement web en général. 
      Actuellement, je me spécialise sur le développement front d&apos;applications web.
      </p>
    </div>
  )
}
export default About