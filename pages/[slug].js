import Head from 'next/head'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import Layout from '../components/Layout'
import { getPosts, getPost } from '../lib/posts'

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug)

  return {
    props: {
      post
    }
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false
  }
}

export default function Home({ post }) {
  return (
    <Layout>
      <Head>
        <title key='title'>{post.title} | Hernán Sartorio</title>

        <meta property='og:type' content='article' key='metaType' />
        <meta property='og:title' content={`${post.title} | Hernán Sartorio`} key='metaTitle' />
        <meta property='og:url' content={post.url} key='metaUrl' />
        <meta property='og:description' content={post.excerpt} />
        {post.image_url && <meta property='og:image' content={post.image_url} />}

        {post.slug === 'the-making-of-bloggi' && (
          <link rel='canonical' href='https://blog.bloggi.co/the-making-of-bloggi' />
        )}
      </Head>

      <article>
        <h1>{post.title}</h1>

        <div className='text -long' dangerouslySetInnerHTML={{ __html: post.html }} />

        <aside className='date'>
          <time>{format(parseISO(post.published_at), 'd MMMM yyyy')}</time>
        </aside>
      </article>

      <footer className='footer'>
        <nav>
          <Link href='/'>
            <a className='footer_link'>About</a>
          </Link>
        </nav>
      </footer>
    </Layout>
  )
}
