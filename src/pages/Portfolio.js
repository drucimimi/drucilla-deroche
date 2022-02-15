import React from 'react';
import loadable from '@loadable/component';
import Project from '../components/Project';

const AppBar = loadable(() => import('../components/AppBar'));
const TabBar = loadable(() => import('../components/TabBar'));

const Portfolio = () => {
 return (
  <div className='portfolio'>
    <AppBar />
    <main className='container projects'>
      <Project />
    </main>
    <TabBar />
  </div>
 );
};

export default Portfolio;