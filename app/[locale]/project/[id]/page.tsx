import Footer from '@/app/ui/_components/Footer'
import Image from 'next/image'
import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import styles from '@/app/ui/styles/projectPage.module.css'
import Projects from '@/app/actions/projects.action'
import { getI18n } from '@/locales/server'
import SwitchLanguage from '@/app/ui/_components/SwitchLanguage'
import Link from 'next/link'
import { setStaticParamsLocale } from 'next-international/server'

const ProjectPage = async (props: {params: Promise<{id:number, locale:string}>}) => {
  // Matomo Analytics
  var _mtm = window._mtm = window._mtm || [];
  _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
  (function() {
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='https://matomo.webapps24.eu/js/container_KuuFIAlX.js'; s.parentNode.insertBefore(g,s);
  })();
  
  const {id, locale} = await props.params;
  setStaticParamsLocale(locale)
  const translate = await getI18n()
  const formatDateTime = (dateTime:string) : string => {
    const dateTimeNoStr = new Date(dateTime).toLocaleString("fr-FR", {timeZone: "Europe/Paris"})
    const date = dateTimeNoStr.split(" ")[0].split('-').reverse().join('-')
    const time = dateTimeNoStr.split(" ")[1].replace(':','h').split(':')[0]
    const newDateTime = `${date} ${translate('project.at')} ${time}`
    return newDateTime
  }
  const {project, messageError} = await Projects.get_by_id(id)
  const projectOpenIssues = project && project!.items.nodes.filter( issue => issue.content.state === 'OPEN')
  const readmeProject = locale === 'fr' ? project?.readme.split('-------------------------------------')[0] : project?.readme.split('-------------------------------------')[1]
  return (
    <>
      <div className={styles.backToHome}>
        <Link href={'/'} title={translate('project.backToHome')}>{translate('project.backToHome')}</Link>
      </div>
      <SwitchLanguage />
      {project ? <><header className={styles.projectHeader}>
        <Image src={project!.shortDescription.includes("http") ? project!.shortDescription.replace('![Image]', '').replace('(', '').replace(')', '') : '/images/default-project-image.jpg'} width={200} height={200} alt={project!.title}/>
        <h1>{project!.title}</h1>
      </header>
      <main className={styles.projectMain}><section>
          <p>{translate('project.createdDateLabel')} {formatDateTime(project!.createdAt)}</p>
          <p>{translate('project.updatedDateLabel')} {formatDateTime(project!.updatedAt)}</p>
          <p>{translate("project.statusLabel")} : {project!.closed ? translate("project.completedStatus") : translate("project.pendingStatus")}</p>
        </section><section className={styles.projectDetails}>
            <ReactMarkdown>{readmeProject}</ReactMarkdown>
          </section><section className={styles.projectIssues}>
            <h2>{translate('project.issuesTitle')}</h2>
            <ul>
              {projectOpenIssues!.length > 0 ? projectOpenIssues!.map(issue => (
                <li key={issue.content.id}>{issue.content.title}</li>
              )) : <p>{translate('project.issuesLabelNone')}</p>}
            </ul>
          </section></main></> : <p>{messageError}</p>}
      <Footer />
    </>
  )
}
export default ProjectPage