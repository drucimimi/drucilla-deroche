import React from 'react';

const AppBar = () => {
  let title = '';
  const path = window.location.pathname; 
  
  switch (path) {
    case "/":
    title="Accueil";
    break;
    case "/portfolio":
    title="Portfolio";
    break;
    case "/referals":
    title="Références";
    break;
    case "/contact":
    title="Contact";
    break;  
    default:
    title="Page non trouvée";
    break;
  }
  return (
    <header className='header'>
      <h1>
      {title}
      </h1>
    </header>
 );
};

export default AppBar;