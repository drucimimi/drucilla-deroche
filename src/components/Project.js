import React from 'react';

const Project = (props) => {

 const {project} = props;

 const createLink = () => {
    if(project.name !== 'Site personnel'){
      return `<a href=${project.url} class="btn btn-primary" target="_blank" rel="noreferrer">Voir le projet</a>`;
    }
 }

 return (
   <div className='col-md-6 col-lg-4 project'>
    <div className="card">
      <img src={`./img/${project.cover}`} class="card-img-top" alt="cover" width="100%" height="100%"/>
      <div class="card-body">
        <p class="card-title">{project.name}</p>
        <p class="card-text">Stack : {project.stack}</p>
        <div dangerouslySetInnerHTML={{__html: createLink()}}></div>
      </div>
    </div>
   </div>
 );
};

export default Project;