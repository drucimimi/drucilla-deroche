import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import * as queriesPrisma from '../queries';

const END_POINTPRISMA = "https://us1.prisma.sh/drucilla-efa67d/drucilla-deroche/dev";
const client = new ApolloClient({
  uri: END_POINTPRISMA,
});
const callListProjects = async () => {
  const res = client.query({
    query: gql`${queriesPrisma.listProjects}`,
  })
  return res;
}

class Project extends Component{
 state = {
   projects : []
 }
 componentDidMount (){
   const projects = callListProjects();
   projects.then( resp => {
     this.setState({projects:resp.data.projects})
   })
 }
 render(){
  return (
    <div className='row'>
      {this.state.projects
      .sort((a,b) => b.numero - a.numero)
      .map(project => {
        if(project.name === "Site personnel"){
          return(
            <div className='col-md-6 project'>
            <div className="card">
              <img src={`./img/${project.cover}`} class="card-img-top" alt="cover"/>
              <div class="card-body">
                <h5 class="card-title">{project.name}</h5>
                <p class="card-text">Stack : {project.stack}</p>
                <a href={project.url} class='btn btn-primary'>Voir le projet</a>
              </div>
            </div>
            </div>
          )
        } else {
          return(
            <div className='col-md-6 project'>
            <div className="card">
              <img src={`./img/${project.cover}`} class="card-img-top" alt="cover"/>
              <div class="card-body">
                <h5 class="card-title">{project.name}</h5>
                <p class="card-text">Stack : {project.stack}</p>
                <a href={project.url} class='btn btn-primary' target='_blank' rel='noreferrer'>Voir le projet</a>
              </div>
            </div>
            </div>
          )
        }
      })
      }
    </div>
  );
 };
 }

export default Project;