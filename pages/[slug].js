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
        <title>{post.title} | Hernán Sartorio</title>
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
