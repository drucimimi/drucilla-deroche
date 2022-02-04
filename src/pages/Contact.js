import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import loadable from '@loadable/component';

const AppBar = loadable(() => import('../components/AppBar'));
const TabBar = loadable(() => import('../components/TabBar'));

const Contact = () => {
 return (
  <div className='contact'>
   <AppBar />
   <main className='contact-body'>
    <h1>Besoin d'une développeuse Front-End ?</h1>
    <h2>N'hésitez pas à me contacter :</h2>
    <div className='social-menu'>
     <a className='social-icon' href='mailto:drucilladeroche@protonmail.com' target="_blank"><FaEnvelope size={24} /></a>
     <a className='social-icon' href="https://linkedin.com/in/drucilla-deroche" target="_blank"><FaLinkedin size={24} /></a>
    </div>
   </main>
   <TabBar />
  </div>
 );
};

export default Contact;