import React, { useEffect } from 'react';
import loadable from '@loadable/component';

const AppBar = loadable(() => import('../components/AppBar'));
const TabBar = loadable(() => import('../components/TabBar'));

const Referals = () => {
  useEffect(() => {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const nextBtn = document.querySelector('.carousel-control-next');
    const prevBtn = document.querySelector('.carousel-control-prev');
    const carouselIndicators = document.querySelectorAll('.carousel-indicators button');
    let index = 0;

    const changeActiveCarouselIndicator = () => {
      for(let i=0; i< carouselIndicators.length; i++){
        if(parseInt(carouselIndicators[i].getAttribute('data-bs-slide-to')) === index){
            carouselIndicators[i].classList.add('active-indicator');
        } else {
            carouselIndicators[i].classList.remove('active-indicator');   
        }
      }
    }

    const goToNextSlide = () => {
      if(index < 2){
          carouselItems[index].classList.remove('active');
          index++;
          carouselItems[index].classList.add('active');
      }
      else if(index === 2){
          carouselItems[index].classList.remove('active');
          index = 0;
          carouselItems[index].classList.add('active');
      }
      changeActiveCarouselIndicator();
    }

    const goToPrevSlide = () => {
      if(index > 0){
          carouselItems[index].classList.remove('active');
          index--;
          carouselItems[index].classList.add('active');
      }
      else if(index === 0){
          carouselItems[index].classList.remove('active');
          index = 2;
          carouselItems[index].classList.add('active');
      }
      changeActiveCarouselIndicator();
    }

    const goToSlide = (commande) => {
      commande.addEventListener('click', () => {
          if(commande === nextBtn){
              goToNextSlide();
          }

          else if(commande === prevBtn){
              goToPrevSlide();
          }
          
      })
    }
    goToSlide(nextBtn);
    goToSlide(prevBtn);

    const keyPressed = (e) => {
      if(e.keyCode === 37){ // touche flèche gauche
          goToPrevSlide();
      }
      else if(e.keyCode === 39){ // touche flèche droite
          goToNextSlide();
      }
    }
    document.addEventListener('keydown', keyPressed);
  }, []);

 return (
  <div className='referals'>
   <AppBar title = "Références"/>
    <main id="slideReferals" class="carousel slide" data-bs-ride="carousel">
     <div class="carousel-indicators">
       <button type="button" data-bs-target="#slideReferals" data-bs-slide-to="0" class="active-indicator" aria-current="true" aria-label="Ref 1"></button>
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