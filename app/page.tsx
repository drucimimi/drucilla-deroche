import Footer from "./ui/_components/Footer"
import Hero from "./ui/_components/hero"
import Project from '@/app/ui/_components/project'
import styles from '@/app/ui/styles/homePage.module.css'
import Projects from "./actions/projects.action"

export default async function Home() {
  const {projects, messageError} = await Projects.get_all();

  return (
    <>
    <main className={styles.homePage}>
      <Hero/>
      <h1>Liste des projets</h1>
       { projects ? <div className={styles.projects}>
          {projects.map( project => (
              <Project key={project.id} id={project.id} name={project.title} cover={project.shortDescription} closed={project.closed}/>
          ))}
      </div> : <p>{messageError as any}</p>}
    </main>
    <Footer />
    </>
  )
}