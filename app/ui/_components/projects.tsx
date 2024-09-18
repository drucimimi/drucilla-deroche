"use client"
import * as React from 'react'
import styles from '@/app/ui/styles/projects.module.css'
import { useState } from "react"
import Project from './project'
import { useI18n } from '@/locales/client'

interface  ProjectsDataProps {
  projects:Array<{id:number, title:string, shortDescription:string, closed:boolean, readme:string}>|null 
  messageError:string|null
}

const ProjectsData: React.FunctionComponent<ProjectsDataProps> = ({ projects, messageError}) => {
  const translate = useI18n()
  const categoryProjects = [
    translate('project.mainCategory'),
    'Front-End',
    'FullStack',
    'Mobile'
  ]
  const [selectedCategory, setSelectedCategory] = useState(categoryProjects[0])
  const filteredProjects = projects?.filter(
    (project:any) => selectedCategory != categoryProjects[0] ? project.readme.includes(selectedCategory) : project
  )
  return <>
  <select className={styles.categories} onChange={(e) => setSelectedCategory(e.target.value)}>
  { categoryProjects.map( category => (
    <option key={category.valueOf()}>{category}</option>
  ))}
  </select>
  { projects ? <div className={styles.projects}>
          {filteredProjects?.map( project => (
              <Project key={project.id} id={project.id} name={project.title} cover={project.shortDescription} closed={project.closed}/>
          ))}
      </div> : <p>{messageError as any}</p>}
  </>
}
export default ProjectsData