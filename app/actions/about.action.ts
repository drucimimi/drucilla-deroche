import { graphql } from "@octokit/graphql";

export default class About {
    static graphqlWithAuth = graphql.defaults({
        headers: {
          authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      });
      static async get() {
            try {
                const response : { repository : {object : {text : string|null}}} = await this.graphqlWithAuth(`{
                repository(owner: "drucimimi", name: "drucimimi") {
                    object(expression: "main:README.md") {
                    ... on Blob {
                        text
                    }
                    }
                }
                }`)
                return {about:response.repository.object.text, messageError2:null}
                
            } catch (error) {
                return {about:null, messageError2:JSON.stringify(error)}
            }
      }
}