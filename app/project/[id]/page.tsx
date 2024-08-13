import Footer from '@/app/ui/_components/Footer'
import Image from 'next/image'
import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import styles from '@/app/ui/styles/projectPage.module.css'
import Projects from '@/app/actions/projects.action'

export const dynamic = "force-dynamic"

const ProjectPage = async ({params}: {params:{id:number}}) => {
  const formatDateTime = (dateTime:string) : string => {
    const dateTimeNoStr = new Date(dateTime).toLocaleString("fr-FR", {timeZone: "Europe/Paris"})
    const date = dateTimeNoStr.split(" ")[0].split('-').reverse().join('-')
    const time = dateTimeNoStr.split(" ")[1].replace(':','h').split(':')[0]
    const newDateTime = `${date} à ${time}`
    return newDateTime
  }
  const {project, messageError} = await Projects.get_by_id(params.id);
  const projectOpenIssues = project && project!.items.nodes.filter( issue => issue.content.state === 'OPEN')
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