import data from '../data/articleDetails.json'

export default defineEventHandler((event) => {
    const id = getRouterParam(event, 'articleId')
    const articleDetails = data.find(article => article.id.toString() === id)
    return {
      data: articleDetails
    }
})