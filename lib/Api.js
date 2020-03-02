import fetchData from './fetch-data'

export default class Api {
    async search(query) {
        try {
            const data = await fetchData({ endpoint: '/search', query })

            return data
        } catch(error) {
            return []
        }
    }
}
