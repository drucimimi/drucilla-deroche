import React from 'react';
import loadable from '@loadable/component';

const AppBar = loadable(() => import('../components/AppBar'));
const TabBar = loadable(() => import('../components/TabBar'));
const Project = loadable(() => import('../components/Project'));

const Portfolio = () => {
 const projects = [
  {
    name : "Site personnel",
    cover: "site-perso.webp",
    stack: "Visual Studio Code, ReactJS, Node-Sass, Bootstrap5, React-Icons, NPM",
    url: "https://drucilla-deroche.netlify.app/"
   },
  {
   name : "Site vitrine d'un fast food",
   cover: "burger.webp",
   stack: "Atom, HTML5, CSS3, Bootstrap4, jQuery, PHP7, SQL, Font Awesome",
   url: "https://burger-code.42web.io"
  },
  {
   name : "Top 5 des actrices de télénovelas",
   cover: "actrices.webp",
   stack: "Atom, HTML5, CSS3, Bootstrap4, jQuery",
   url: "https://drucimimi.github.io/top-actrices"   
  },
  {
   name : "Jeu du serpent",
   cover: "serpent.webp",
   stack: "Atom, HTML5, CSS3, JavaScript ES6 en POO, NPM, Webpack, Babel",
   url: "https://drucimimi.github.io/jeu-serpent"
  },
  {
   name : "Site vitrine d'une agence de voyages",
   cover: "voyage.webp",
   stack: "Atom, HTML5, CSS3",
   url: "https://drucimimi.github.io/voyage"   
  }
 ]
 return (
  <div className='portfolio'>
    <AppBar title="Portfolio"/>
    <main className='container projects'>
      <p>Le code source de chaque projet ci-dessous est accessible sur mon <a href="https://github.com/drucimimi" target="_blank" rel='noreferrer'>Github</a></p>
     <div className='list-projects'>
      {projects.map( (project) => <Project project={project} key={project.name} />)}
     </div>
    </main>
    <TabBar />
  </div>
 );
};

export default Portfolio;