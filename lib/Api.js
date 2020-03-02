import fetchData from './fetch-data'

export default class Api {
    async search(query) {
        try {
            const data = await fetchData({ endpoint: '/search', query })

            console.log(data)

            return data
        } catch(error) {
            return []
        }
    }
}
