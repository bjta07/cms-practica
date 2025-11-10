import { query } from './strapi'

const { STRAPI_HOST } = process.env

export function getArticles() {
  return query('articles?populate=cover').then((res) => {
    return res.data.map((article) => {
      return {
        id: article.id,
        title: article.title,
        description: article.description,
      }
    })
  })
}
