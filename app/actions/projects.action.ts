import { Octokit } from "@octokit/rest"

export default class Projects {
    static octokit = new Octokit({ auth: process.env.GITHUB_TOKEN, timeZone: "Europe/Paris" })
    static async get(){
        try {
            const response : { viewer: { projectsV2: { nodes: [{id:number, title:string, shortDescription:string, closed:boolean}] } } } = await this.octokit.graphql(`{
              viewer {
                projectsV2(first: 10, orderBy: {field: UPDATED_AT, direction: DESC}, query: "is:public") {
                  nodes {
                    id
                    title
                    shortDescription
                    closed
                  }
                }
              }
            }`, {
              headers: {
                'If-None-Match': ''
              }})
              return {projects:response.viewer.projectsV2.nodes, messageError:null}
          } catch (error) {
            return {projects:null, messageError:JSON.stringify(error)}
          }
    }
}