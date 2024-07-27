import Link from 'next/link'
import * as React from 'react'
import styles from '@/app/ui/styles/project.module.css'
import Image from 'next/image'

interface  ProjectProps {
  id:number,
  name:string,
  closed:boolean
}

const Project: React.FunctionComponent<ProjectProps> = ({id, name, closed}) => {
  return <div className={styles.project}>
    <div className={styles.projectHeader}>
      <Image src={'/images/default-project-image.jpg'} width={208} height={100} alt='Image de projet'/>
    </div>
    <div className={styles.projectBody}>
      <h2>{name}</h2>
      <p>Statut : {closed ? "Terminé" : "En cours"}</p>
    </div>
    <div className={styles.projectFooter}>
      <Link href={`project/${id}`}>Voir le projet</Link>
    </div>
  </div>
}
export default Project