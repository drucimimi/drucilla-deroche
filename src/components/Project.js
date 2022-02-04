import React from 'react';

const Project = (props) => {

 const {project} = props;

 return (
   <div className='col-md-6 project'>
    <div className="card">
      <img src={`./img/${project.cover}`} class="card-img-top" alt="cover"/>
      <div class="card-body">
        <h5 class="card-title">{project.name}</h5>
        <p class="card-text">Stack : {project.stack}</p>
        <a href={project.url} class="btn btn-primary" target="_blank">Voir le projet</a>
      </div>
    </div>
   </div>
 );
};

export default Project;