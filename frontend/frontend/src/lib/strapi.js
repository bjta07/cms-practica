const STRAPI_HOST = process.env.NEXT_PUBLIC_STRAPI_HOST
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN

export async function query(url) {
  if (!STRAPI_HOST) {
    throw new Error('STRAPI_HOST is not defined')
  }

  const apiUrl = `${STRAPI_HOST}/api/${url}`.replace(/([^:]\/)\/+/g, '$1')
  console.log('Fetching from:', apiUrl)

  const res = await fetch(apiUrl, {
    headers: {
      Authorization: STRAPI_TOKEN ? `Bearer ${STRAPI_TOKEN}` : '',
    },
  })

  if (!res.ok) {
    const errorText = await res.text()
    throw new Error(`API error: ${errorText}`)
  }

  return res.json()
}
