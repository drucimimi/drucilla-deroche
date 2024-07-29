import { Octokit } from "@octokit/rest"
import { createAppAuth } from "@octokit/auth-app";
import { graphql } from "@octokit/graphql";

/*const authOctokit = new Octokit({
    authStrategy: createAppAuth,
    auth: {
        appId: 956783,
        privateKey: process.env.PRIVATE_KEY||"",
        clientId: 'Iv23liChYzh1YfdxqtPo',
        clientSecret:'9f2b3028d547fa9e511898980ca6ebc881e167d9'
    }
})*/
export default class Projects {
    //static octokit = new Octokit({ auth: process.env.GITHUB_TOKEN, timeZone: "Europe/Paris" })
    static async get(){
        try {
            const graphqlWithAuth = graphql.defaults({
                headers: {
                  authorization: `token ${process.env.GITHUB_TOKEN}`,
                },
              });
            const response : { viewer: { projectsV2: { nodes: [{id:number, title:string, shortDescription:string, closed:boolean}] } } } = await graphqlWithAuth(`{
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