import Link from 'next/link'
import * as React from 'react'
import styles from '@/app/ui/styles/project.module.css'
import Image from 'next/image'

interface  ProjectProps {
  id:number,
  name:string,
  cover:string,
  closed:boolean
}

const Project: React.FunctionComponent<ProjectProps> = ({id, name, cover, closed}) => {
  return <div className={styles.project}>
    <div className={styles.projectHeader}>
      <Image src={cover.includes("http") ? cover.replace('![Image]', '').replace('(', '').replace(')', '') : '/images/default-project-image.jpg'} alt='Image de projet' layout="fill" objectFit="cover"/>
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