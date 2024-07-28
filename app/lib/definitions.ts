export type Issue = {
    content: {
        id:number,
        title:string,
        state:string
    }
}
export type Project = {
    node:{
        id:number
        title:string
        shortDescription:string
        closed:string
        createdAt:string
        updatedAt:string
        readme:string
        items: {
            nodes:Array<Issue>
        }
    }
}