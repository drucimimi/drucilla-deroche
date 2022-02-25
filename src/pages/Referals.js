import React from 'react';
import loadable from '@loadable/component';

const AppBar = loadable(() => import('../components/AppBar'));
const TabBar = loadable(() => import('../components/TabBar'));

const Referals = () => {
 return (
  <div className='referals'>
   <AppBar title = "Références"/>
    <main id="slideReferals" class="carousel slide" data-bs-ride="carousel">
     <div class="carousel-indicators">
       <button type="button" data-bs-target="#slideReferals" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Ref 1"></button>
       <button type="button" data-bs-target="#slideReferals" data-bs-slide-to="1" aria-label="Ref 2"></button>
       <button type="button" data-bs-target="#slideReferals" data-bs-slide-to="2" aria-label="Ref 3"></button>
     </div>
     <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="carousel-caption d-block">
          <p className='title'>Je ne peux que vous recommandez Drucilla, qui a fait preuve d'autonomie et d'initiative quand on a travaillé ensemble en ce début d'année. Elle n'a peur ni de dire quand elle ne sait pas, ni de se mettre en danger en sortant de sa zone de confort. Alors ne manquez pas une opportunité de renforcer vos équipes avec elle ! Bonus : on a travaillé en remote, elle à Nantes, moi à Évian, sans aucun soucis !</p>
          <p>Benoît BERAUD, Cloud Architect Freelance</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-caption d-block">
          <p className='title'>Drucilla Deroche est passionnée par le #Développement #Web et a aussi des compétences en informatique. Elle sait s'adapter, trouver des solutions et apprécie toujours donner un coup de main quand elle le peut !</p>
          <p>Julie LEFEBVRE, Responsable d'école chez WebForce3</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-caption d-block">
          <p className='title'>Je ne peux que vous recommandez Drucilla, qui fait preuve d'autonomie et d'initiative dans son travail, et a parfaitement su s'intégrer dans l'équipe et apporter sa gaieté lorsqu'elle a travaillé au Chaudron.io !</p>
          <p>Mélody LE GOFF, Chef de projet indépendante</p>
        </div>
      </div>
     </div>
     <button class="carousel-control-prev" type="button" data-bs-target="#slideReferals" data-bs-slide="prev">
       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
       <span class="visually-hidden">Précédent</span>
     </button>
     <button class="carousel-control-next" type="button" data-bs-target="#slideReferals" data-bs-slide="next">
       <span class="carousel-control-next-icon" aria-hidden="true"></span>
       <span class="visually-hidden">Suivant</span>
     </button>
   </main>
   <TabBar />
  </div>
 );
};

export default Referals;