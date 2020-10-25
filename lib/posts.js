const headers = { 'X-API-Key': process.env.BLOGGI_API_KEY }

export async function getPosts() {
  const res = await fetch('https://bloggi.co/api/v1/posts', { headers })
  const { data: posts } = await res.json()
  return posts
}

export async function getPost(slug) {
  const res = await fetch(`https://bloggi.co/api/v1/posts/${slug}`, { headers })
  const { data: post } = await res.json()
  return post
}
