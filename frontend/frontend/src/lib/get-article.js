import { query } from './strapi'

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
