import { graphql } from "@octokit/graphql";
import { Project } from "../lib/definitions";

export default class Projects {
    static graphqlWithAuth = graphql.defaults({
        headers: {
          authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      });
    static async get_all(){
        try {
            const response : { viewer: { projectsV2: { nodes: Array<{id:number, title:string, shortDescription:string, closed:boolean, readme:string}> } } } = await this.graphqlWithAuth(`{
              viewer {
                projectsV2(first: 50, orderBy: {field: UPDATED_AT, direction: DESC}, query: "is:public") {
                  nodes {
                    id
                    title
                    shortDescription
                    closed
                    readme
                  }
                }
              }
            }`, {
              next: {
                revalidate: 3600,
              },})
              return {projects:response.viewer.projectsV2.nodes, messageError:null}
          } catch (error) {
            return {projects:null, messageError:JSON.stringify(error)}
          }
    }
    static async get_by_id(id:number){
        try{
            const response : Project = await this.graphqlWithAuth(`{
                node(id: "${id}") {
                  ... on ProjectV2 {
                    id
                    title
                    shortDescription
                    closed
                    createdAt
                    updatedAt
                    readme
                    items{
                      nodes {
                        content {
                          ... on Issue {
                            id
                            title
                            state
                          }
                        }
                      }
                    }
                  } 
                }
            }`, {
              next: {
                revalidate: 0,
              }})
              return {project:response.node, messageError:null}
          } catch (error){
            return {project:null, messageError:'Un problème est survenu lors du chargement du projet'}
          }
    }
}