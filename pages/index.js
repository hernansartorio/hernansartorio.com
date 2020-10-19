import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import { getPosts } from '../lib/posts'

export async function getStaticProps() {
  const posts = await getPosts()

  return {
    props: {
      posts
    }
  }
}

export default function Home({ posts }) {
  return (
    <Layout>
      <Head></Head>

      <div className='text'>
        <p>Hi, my name is Hernán. I make web products.</p>

        <p>
          I’m currently working at{' '}
          <a href='http://hopin.to/' className='hopin'>
            Hopin
          </a>
          . And building <a href='https://bloggi.co'>Bloggi</a> on the side.
        </p>

        <p>
          <a href='mailto:hi@hernansartorio.com'>Say hi</a>, or find me on{' '}
          <a href='https://twitter.com/hernansartorio' className='twitter'>
            Twitter
          </a>
          , <a href='https://github.com/hernansartorio'>GitHub</a>,{' '}
          <a href='https://dribbble.com/hernansartorio' className='dribbble' data-color='ea4c89'>
            Dribbble
          </a>
          , or{' '}
          <a href='https://linkedin.com/in/hernansartorio' className='linkedin'>
            LinkedIn
          </a>
          .
        </p>
      </div>

      <h2 className='section-heading'>Writing</h2>

      <ul className='list'>
        {posts &&
          posts.map(({ slug, date, title }) => (
            <li className='list_item' key={slug}>
              <time className='list_meta'>{date}</time>
              <Link href={slug}>
              <a className='list_link'>
                {title}
              </a>
              </Link>
            </li>
          ))}
        {/* {% for post in site.posts %}
      {% unless post.draft %}
        <li className="list_item">
          <time className="list_meta">
            {{ post.date | date: "%B %d, %Y"  }}
          </time>

          <a className="list_link" href="{{ post.url }}">
            {{ post.title }}
          </a>
        </li>
      {% endunless %}
    {% endfor %} */}
      </ul>

      <h2 className='section-heading'>Subscribe</h2>

      <p className='text-gray text-small'>Get an email whenever I publish something new.</p>

      <div>
        <form
          action='https://gmail.us3.list-manage.com/subscribe/post?u=c728c22360f0ab25e10466629&amp;id=0f4730918d'
          method='post'
          target='_blank'
          className='subscribe-form'
        >
          <input type='email' name='EMAIL' className='input' placeholder='Your email' required />

          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden='true'>
            <input type='text' name='b_c728c22360f0ab25e10466629_0f4730918d' tabIndex='-1' defaultValue='' />
          </div>

          <input type='submit' value='Subscribe' name='subscribe' className='button' />
        </form>
      </div>
    </Layout>
  )
}
