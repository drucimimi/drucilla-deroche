import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import loadable from '@loadable/component';

const AppBar = loadable(() => import('../components/AppBar'));
const TabBar = loadable(() => import('../components/TabBar'));

const Contact = () => {
 return (
  <div className='contact'>
   <AppBar title="Contact"/>
   <main className='contact-body'>
    <h1>Besoin d'une développeuse Front-End ?</h1>
    <h2>N'hésitez pas à me contacter</h2>
    <hr></hr>
    <div className='social-menu row'>
     <div className='col-12 col-md-6'>
     <a className='social-icon' href='mailto:drucilladeroche@protonmail.com' target="_blank" rel='noreferrer'><FaEnvelope size={24} /></a>
     <h3>Adresse mail</h3>
     <p>drucilladeroche@protonmail.com</p>
     </div>
     <div className='col-12 col-md-6'>
     <a className='social-icon' href="https://linkedin.com/in/drucilla-deroche" target="_blank" rel='noreferrer'><FaLinkedin size={24} /></a>
     <h3>Linkedin</h3>
     <p>@drucilladeroche</p>
     </div>
    </div>
   </main>
   <TabBar />
  </div>
 );
};

export default Contact;