import Footer from "../ui/_components/Footer"
import styles from '@/app/ui/styles/homePage.module.css'
import Projects from "../actions/projects.action"
import ProjectsData from "../ui/_components/projects"
import About from "../actions/about.action"
import ReactMarkdown from "react-markdown"
import { getI18n } from "@/locales/server"
import SwitchLanguage from "../ui/_components/SwitchLanguage"
import { setStaticParamsLocale } from "next-international/server"


export default async function Home(props: {params: Promise<{locale:string}>}) {
  const {locale} = await props.params
  setStaticParamsLocale(locale)
  const {projects, messageError} = await Projects.get_all()
  const {about, messageError2} = await About.get(locale)

  const translate = await getI18n()

  return (
    <>
    <main className={styles.homePage}>
      <SwitchLanguage />
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
      <h1>{translate('home.projectTitle')}</h1>
      <ProjectsData projects={projects} messageError={messageError}/>
    </main>
    <Footer />
    </>
  )
}