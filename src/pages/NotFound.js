import React from 'react';
import AppBar from '../components/AppBar';
import TabBar from '../components/TabBar';

const NotFound = () => {
 return (
  <div className='notfound'>
    <AppBar title="Page non trouvée"/>
    <main>
      <h1>Erreur 404</h1>
    </main>
    <TabBar />
  </div>
 );
};

export default NotFound;