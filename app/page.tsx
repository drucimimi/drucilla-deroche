import Footer from "./ui/_components/Footer"
import Hero from "./ui/_components/hero"
import styles from '@/app/ui/styles/homePage.module.css'
import Projects from "./actions/projects.action"
import ProjectsData from "./ui/_components/projects"

export const dynamic = "force-dynamic"

export default async function Home() {
  const {projects, messageError} = await Projects.get_all();

  return (
    <>
    <main className={styles.homePage}>
      <Hero/>
      <h1>Liste des projets</h1>
      <ProjectsData projects={projects} messageError={messageError}/>
    </main>
    <Footer />
    </>
  )
}