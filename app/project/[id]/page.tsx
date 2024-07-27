'use client'
import Footer from '@/app/ui/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import * as React from 'react'
import Skill from '@/app/ui/components/skill'

const Page : React.FunctionComponent = () => {
  const issues = [{name:'Issue 1'},{name:'Issue 2'},{name:'Issue 3'}]
  const skills = [{name:'HTML5'}, {name:'CSS3'}, {name:'TypeScript'}]

  return (
    <>
      <header className='flex flex-col items-center gap-2 p-2 mt-10'>
        <Image src={'/images/default-project-image.jpg'} width={200} height={200} alt={'Project Image'}/>
        <h1>Project Name</h1>
      </header>
      <main className='flex flex-col gap-4 p-4'>
        <section>
          <p>Créé le Project Date Creation</p>
          <p>Modifié le Project Date Update</p>
          <p>Statut : Project Status</p>
        </section>
        <section>
          <h2>Project Short Description</h2>
          <p>Project Readme</p>
        </section>
        <section>
          <h2>Project Pending Issues</h2>
          <ul className='list-disc pl-4'>
            {issues.map( issue => (
              <li key={issue.name}>{issue.name}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Project Skills</h2>
          <div className='flex gap-2 mt-2'>
            {skills.map( skill => (
              <Skill key={skill.name} name={skill.name} />
            ))}
          </div>
        </section>
        <Link href={'https://github.com/users/drucimimi/projects/<project-id>'}/>
      </main>
      <Footer />
    </>
  )
}
export default Page;
