import React from 'react';
import loadable from "@loadable/component";

const AppBar = loadable(() => import('../components/AppBar'));
const Photo = loadable(() => import('../components/Photo'));
const TabBar = loadable(() => import('../components/TabBar'));
const About = loadable(() => import('../components/About'));

const Home = () => {
 return (
  <div className='home'>
   <AppBar />
   <main>
   <Photo />
   <About />
   </main>
   <TabBar />
  </div>
 );
};

export default Home;