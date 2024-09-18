"use client"
import Link from 'next/link'
import * as React from 'react'
import styles from '@/app/ui/styles/project.module.css'
import Image from 'next/image'
import { useI18n } from '@/locales/client'

interface  ProjectProps {
  id:number,
  name:string,
  cover:string,
  closed:boolean
}

const Project: React.FunctionComponent<ProjectProps> = ({id, name, cover, closed}) => {
  const translate = useI18n()
  return <div className={styles.project}>
    <div className={styles.projectHeader}>
      <Image src={cover.includes("http") ? cover.replace('![Image]', '').replace('(', '').replace(')', '') : '/images/default-project-image.jpg'} alt='Image de projet' layout="fill" objectFit="cover"/>
    </div>
    <div className={styles.projectBody}>
      <h2>{name}</h2>
      <p>{translate('project.statusLabel')} : {closed ? translate('project.completedStatus') : translate('project.pendingStatus')}</p>
    </div>
    <div className={styles.projectFooter}>
      <Link href={`project/${id}`}>{translate('project.linkTitle')}</Link>
    </div>
  </div>
}
export default Project