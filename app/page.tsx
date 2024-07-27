import Footer from "./ui/components/Footer"
import Hero from "./ui/components/hero"
import Project from '@/app/ui/components/project'

export default function Home() {
  const projects = [
    {id:1, name:"RAS YLANG", description:"Le projet est composé d'un site e-commerce d'albums de musique de l'artiste RAS YLANG", readme:"",closed:false, createdAt:"2024-06-19T10:57:37Z", updatedAt:"2024-07-02T07:05:45Z", url:"https://github.com/users/drucimimi/projects/1"},
    {id:2, name:"Recipes App", description:"Le projet est composé d'un site vitrine et d'une application mobile de recettes de cuisine.", readme:"", closed:false, createdAt:"2024-06-19T10:59:17Z", updatedAt:"2024-07-02T20:13:49Z", url:"https://github.com/users/drucimimi/projects/2"},
    {id:3, name:"Jeu du serpent", description:"Le projet est composé d'un site qui représente de manière iconique le jeu du serpent.", readme:"", closed:true, createdAt:"2024-06-23T17:25:42Z", updatedAt:"2024-06-29T05:31:05Z", url:"https://github.com/users/drucimimi/projects/3"},
    {id:4, name:"Voyage", description:"Le projet est composé d'un site statique qui représente une agence de voyages bien évidemment fictive.", readme:"", closed:true, createdAt:"2024-06-23T17:27:24Z", updatedAt:"2024-06-29T05:30:37Z", url:"https://github.com/users/drucimimi/projects/4"}
  ]
  return (
    <>
    <main className="flex flex-col px-3 py-2 gap-6 my-10">
      <Hero/>
      <h1>Liste des projets</h1>
      <div className="flex flex-col items-center md:flex-row md:justify-between md:flex-wrap gap-3">
          {projects.map( project => (
              <Project key={project.id} id={project.id} name={project.name} closed={project.closed}/>
          ))}
      </div>
    </main>
    <Footer />
    </>
  );
}