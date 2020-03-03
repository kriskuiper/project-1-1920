import { cleanBooks } from './clean-data'
import { api } from "./constants"

const formatUrl = ({ endpoint, query }) => {
    const cors = 'https://cors-anywhere.herokuapp.com/'
    const baseUrl = 'https://zoeken.oba.nl/api/v1'
    
    return `${cors}${baseUrl}/${endpoint}?q=${query}&authorization=${api.KEY}&output=json`
}

export default async ({ endpoint, query }) => {
    const config = {
        endpoint,
        query
    }
    const url = formatUrl(config)
    const headers = { Authorization: api.SECRET }

    try {
        const response = await fetch(url, headers)
        const data = await response.json()
        
        return cleanBooks(data.results)
    } catch(error) {
        console.error(error)
    }
}