import Footer from "./ui/_components/Footer"
import Hero from "./ui/_components/hero"
import Project from '@/app/ui/_components/project'
import { Octokit } from "@octokit/rest"
import styles from '@/app/ui/styles/homePage.module.css'

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN, timeZone: "Europe/Paris" })

export default async function Home() {
  let projects
  let messageError
  try {
    const response : { viewer: { projectsV2: { nodes: [{id:number, title:string, shortDescription:string, closed:boolean}] } } } = await octokit.graphql(`{
      viewer {
        projectsV2(first: 10, orderBy: {field: UPDATED_AT, direction: DESC}, query: "is:public") {
          nodes {
            id
            title
            shortDescription
            closed
          }
        }
      }
    }`, {
      headers: {
        'If-None-Match': ''
      }})
    projects = response.viewer.projectsV2.nodes
  } catch (error) {
    messageError = "Erreur lors de la récupération des projets", error
  }
  return (
    <>
    <main className={styles.homePage}>
      <Hero/>
      <h1>Liste des projets</h1>
       { projects ? <div className={styles.projects}>
          {projects.map( project => (
              <Project key={project.id} id={project.id} name={project.title} cover={project.shortDescription} closed={project.closed}/>
          ))}
      </div> : <p>{messageError}</p>}
    </main>
    <Footer />
    </>
  )
}