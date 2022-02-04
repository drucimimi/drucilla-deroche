import React from 'react';
import loadable from '@loadable/component';

const AppBar = loadable(() => import('../components/AppBar'));
const TabBar = loadable(() => import('../components/TabBar'));
const Project = loadable(() => import('../components/Project'));

const Portfolio = () => {
 const projects = [
  {
   name : "Site vitrine d'un fast food",
   cover: "burger.png",
   stack: "HTML5, CSS3, Bootstrap4, jQuery, PHP7, SQL, Font Awesome",
   url: "https://burger-code.42web.io"
  },
  {
   name : "Top 5 des actrices de télénovelas",
   cover: "actrices.png",
   stack: "HTML5, CSS3, Bootstrap4, jQuery, PHP7, SQL",
   url: "https://drucimimi.github.io/top-actrices"   
  },
  {
   name : "Jeu du serpent",
   cover: "serpent.png",
   stack: "JavaScript ES6 en POO",
   url: "https://drucimimi.github.io/jeu-serpent"
  },
  {
   name : "Site vitrine d'une agence de voyages",
   cover: "voyage.png",
   stack: "HTML5, CSS3",
   url: "https://drucimimi.github.io/voyage"   
  }
 ]
 return (
  <div className='portfolio'>
    <AppBar />
    <main className='container projects'>
     <div className='row'>
      {projects.map( (project) => <Project project={project} key={project.name} />)}
     </div>
    </main>
    <TabBar />
  </div>
 );
};

export default Portfolio;