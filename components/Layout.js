import Head from 'next/head'

function Layout({ children }) {
  return (
    <div className='container'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />

        <meta property='og:type' content='{% if page.title %}article{% else %}website{%endif%}' />
        <meta property='og:url' content='{{ page.url | prepend: site.url }}' />
        <meta property='og:title' content='{% if page.title %}{{ page.title }}{% else %}{{ site.title }}{% endif %}' />
        <meta property='og:site_name' content='{{ site.title }}' />
        <meta property='og:description' content='{{ page.excerpt }}' />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@hernansartorio' />
        <meta name='twitter:creator' content='@hernansartorio' />

        {/* {% if page.original %}
      <link rel="canonical" href="{{ page.original }}" />
    {% endif %} */}

        <title>Hernán Sartorio</title>

        <link rel='stylesheet' type='text/css' href='https://cloud.typography.com/6289852/7393952/css/fonts.css' />
      </Head>
      {children}
    </div>
  )
}

export default Layout
