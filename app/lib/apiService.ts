async function makeRequest(endpoint:string, method:string, token:string|null = null, body:object|null = null) {
    try {
        let options =  {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token != null ? token : ''
            },
            body: body != null ? JSON.stringify(body) : null
        }
        const response = await fetch(endpoint, options)
        return response
    } catch (error) {
        console.error('Erreur lors de la requête :', error)
        throw error
    }
}

export default makeRequest