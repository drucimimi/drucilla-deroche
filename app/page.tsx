import Footer from "./ui/_components/Footer"
import styles from '@/app/ui/styles/homePage.module.css'
import Projects from "./actions/projects.action"
import ProjectsData from "./ui/_components/projects"
import About from "./actions/about.action"
import ReactMarkdown from "react-markdown"

export const dynamic = "force-dynamic"

export default async function Home() {
  const {projects, messageError} = await Projects.get_all()
  const {about, messageError2} = await About.get()

  return (
    <>
    <main className={styles.homePage}>
      <div className={styles.hero}>
        <ReactMarkdown components={{
        a: ({node, ...props}) => (
          <a target="_blank" rel="noopener noreferrer" {...props} />
        ),
        img: ({node, ... props}) => (
          <img width={32} height={32} {...props} />
        )
      }}>{about}</ReactMarkdown>
      </div>
      <h1>Liste des projets</h1>
      <ProjectsData projects={projects} messageError={messageError}/>
    </main>
    <Footer />
    </>
  )
}