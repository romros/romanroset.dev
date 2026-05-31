import { appWithTranslation } from 'next-i18next'

import 'css/tailwind.css'
import 'css/twemoji.css'
import 'css/blueprint.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { Analytics } from '~/components/analytics'
import { LayoutWrapper } from '~/components/LayoutWrapper'

function App({ Component, pageProps }) {
  // Pages can opt out of the default LayoutWrapper (header/footer) by exposing
  // a `getLayout` static method — used by the Blueprint one-pager & /publicacions,
  // which bring their own self-contained nav and footer.
  const getLayout =
    (Component as any).getLayout || ((page) => <LayoutWrapper>{page}</LayoutWrapper>)

  return (
    // @ts-ignore
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Analytics />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}

export default appWithTranslation(App)
