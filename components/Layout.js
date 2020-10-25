import Head from 'next/head'

function Layout({ children }) {
  return (
    <div className='container'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
        <meta property='og:type' content='website' key='metaType' />
        <meta property='og:title' content='Hernán Sartorio' key='metaTitle' />
        <meta property='og:url' content='https://hernansartorio.com' key='metaUrl' />
        <meta property='og:site_name' content='Hernán Sartorio' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@hernansartorio' />
        <meta name='twitter:creator' content='@hernansartorio' />
        <meta name="twitter:card" content="summary_large_image" />

        <title key='title'>Hernán Sartorio</title>

        <link rel='stylesheet' type='text/css' href='https://cloud.typography.com/6289852/7393952/css/fonts.css' />
      </Head>

      {children}
    </div>
  )
}

export default Layout
