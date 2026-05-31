import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang={process.env.NEXT_PUBLIC_DEFAULT_LOCALE}>
        <Head>
          {/* Using PNG for favicons */}
          <link rel="apple-touch-icon" sizes="244x240" href="/static/favicons/enneagram.png" />
          <link rel="icon" type="image/png" sizes="244x240" href="/static/favicons/enneagram.png" />
          <link rel="mask-icon" href="/static/favicons/enneagram.png" color="#fff" />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />

          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#000000" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
            rel="stylesheet"
          />
          {/* Blueprint redesign fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-slate-50 text-black antialiased dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
