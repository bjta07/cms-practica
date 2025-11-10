import { query } from './strapi'

export async function getArticles() {
  const res = await query('articles?populate=cover')

  return res.data.map((article) => ({
    id: article.id,
    title: article.attributes.title,
    description: article.attributes.description,
    cover: article.attributes.cover?.data?.attributes?.url || null,
  }))
}
