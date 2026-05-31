import { Fragment } from 'react'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { PageSeo } from 'components/SEO'
import { getHomeContent } from '~/data/homeData'
import type { HomeContent } from '~/data/homeData'
import type { Article } from '~/types'
import { BpFooter, BpNav, ExternalIcon } from '~/components/blueprint/Shared'

import { articlesData as articlesCa } from '~/data/ca/articlesData'
import { articlesData as articlesEs } from '~/data/es/articlesData'
import { articlesData as articlesEn } from '~/data/en/articlesData'

const ARTICLES: Record<string, Article[]> = { ca: articlesCa, es: articlesEs, en: articlesEn }

const PUB_META: Record<
  string,
  {
    kicker: string
    h2: string
    intro: string
    back: string
    doi: string
    kind: Record<string, string>
  }
> = {
  ca: {
    kicker: 'Recerca',
    h2: 'Publicacions científiques',
    intro:
      'Selecció de publicacions revisades per parells en salut digital, eHealth i sistemes basats en agents. Cada entrada enllaça al DOI per a la seva verificació.',
    back: "Tornar a l'inici",
    doi: 'Veure DOI',
    kind: { article: 'Article', inproceedings: 'Congrés' },
  },
  es: {
    kicker: 'Investigación',
    h2: 'Publicaciones científicas',
    intro:
      'Selección de publicaciones revisadas por pares en salud digital, eHealth y sistemas basados en agentes. Cada entrada enlaza al DOI para su verificación.',
    back: 'Volver al inicio',
    doi: 'Ver DOI',
    kind: { article: 'Artículo', inproceedings: 'Congreso' },
  },
  en: {
    kicker: 'Research',
    h2: 'Scientific publications',
    intro:
      'A selection of peer-reviewed publications in digital health, eHealth and agent-based systems. Each entry links to its DOI for verification.',
    back: 'Back to home',
    doi: 'View DOI',
    kind: { article: 'Article', inproceedings: 'Conference' },
  },
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

function Authors({ authors }: { authors: string[] }) {
  return (
    <>
      {authors.map((a, i) => (
        <Fragment key={i}>
          {/Roset/i.test(a) ? <b>{a}</b> : a}
          {i < authors.length - 1 ? '; ' : ''}
        </Fragment>
      ))}
    </>
  )
}

export default function Publicacions({ locale }: { locale?: string }) {
  const lc = locale ?? 'ca'
  const c: HomeContent = getHomeContent(lc)
  const m = PUB_META[lc] ?? PUB_META.ca
  const articles = ARTICLES[lc] ?? ARTICLES.ca

  return (
    <div className="bp" id="top">
      <PageSeo title={`${m.h2} — Roman Roset`} description={m.intro} />
      <BpNav content={c} />

      <main>
        <section className="flush" style={{ paddingTop: 64 }}>
          <div className="wrap">
            <Link href="/" className="back-link" style={{ marginBottom: 26 }}>
              ← {m.back}
            </Link>
            <div className="sec-head" style={{ marginTop: 22 }}>
              <span className="kicker">{m.kicker}</span>
              <h2>{m.h2}</h2>
              <p>{m.intro}</p>
            </div>

            <div className="pub-list">
              {articles.map((art, i) => (
                <article className="pub" key={i}>
                  <div className="pub-head">
                    <span className="pub-kind">{m.kind[art.category] ?? art.category}</span>
                    <span className="pub-year">{art.year}</span>
                    {art.journal && <span className="pub-journal">{art.journal}</span>}
                  </div>
                  <h3>{art.title}</h3>
                  <div className="authors">
                    <Authors authors={art.author} />
                  </div>
                  {art.abstract && <p className="abstract">{art.abstract}</p>}
                  {art.roleDescription && <p className="role">{art.roleDescription}</p>}
                  {art.doi && (
                    <a
                      className="doi"
                      href={`https://doi.org/${art.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DOI · {art.doi}
                      <ExternalIcon />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <BpFooter content={c} />
    </div>
  )
}

Publicacions.getLayout = (page: ReactNode) => page
