import Footer from '@/app/ui/_components/Footer'
import Image from 'next/image'
import * as React from 'react'
import { Octokit } from "@octokit/rest"
import ReactMarkdown from 'react-markdown'
import { Project } from '@/app/lib/definitions'
import styles from '@/app/ui/styles/projectPage.module.css'

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN , timeZone: "Europe/Paris" })

const ProjectPage = async ({params}: {params:{id:number}}) => {
  let project
  let messageError
  let projectOpenIssues
  const formatDateTime = (dateTime:string) : string => {
    const date = dateTime.split("T")[0].split('-').reverse().join('-')
    const time = dateTime.split("T")[1].split('Z')[0].replace(':','h').split(':')[0]
    const newDateTime = `${date} à ${time}`
    return newDateTime
  }
  try{
    const response: Project = await octokit.graphql(`{
        node(id: "${params.id}") {
          ... on ProjectV2 {
            id
            title
            shortDescription
            closed
            createdAt
            updatedAt
            readme
            items(first: 10) {
              nodes {
                content {
                  ... on Issue {
                    id
                    title
                    state
                  }
                }
              }
            }
          } 
        }
    }`, {
      headers: {
        'If-None-Match': ''
      }})
    project = response.node
    projectOpenIssues = project && project!.items.nodes.filter( issue => issue.content.state === 'OPEN')
  } catch (error){
    messageError = "Erreur lors de la récupération des projets", error
  }
  return (
    <>
      {project ? <><header className={styles.projectHeader}>
        <Image src={project!.shortDescription.includes("http") ? project!.shortDescription.replace('![Image]', '').replace('(', '').replace(')', '') : '/images/default-project-image.jpg'} width={200} height={200} alt={project!.title}/>
        <h1>{project!.title}</h1>
      </header>
      <main className={styles.projectMain}><section>
          <p>Créé le {formatDateTime(project!.createdAt)}</p>
          <p>Modifié le {formatDateTime(project!.updatedAt)}</p>
          <p>Statut : {project!.closed ? "Terminé" : "En cours"}</p>
        </section><section className={styles.projectDetails}>
            <ReactMarkdown>{project!.readme}</ReactMarkdown>
          </section><section className={styles.projectIssues}>
            <h2>Fonctionnalités en cours de développement</h2>
            <ul>
              {projectOpenIssues!.length > 0 ? projectOpenIssues!.map(issue => (
                <li key={issue.content.id}>{issue.content.title}</li>
              )) : <p>Aucune fonctionnalité en cours</p>}
            </ul>
          </section></main></> : <p>{messageError}</p>}
      <Footer />
    </>
  )
}
export default ProjectPage