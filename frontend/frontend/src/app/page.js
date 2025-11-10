import { getArticles } from '@/lib/get-article'

export default async function Home() {
  const data = await getArticles()

  return (
    <div>
      {data.map((article) => (
        <div key={article.id}>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  )
}
