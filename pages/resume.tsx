import type { ReactElement, ReactNode } from 'react'
import Link from 'next/link'
import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { PageSeo } from '~/components/SEO'
import { getHomeContent, type HomeContent } from '~/data/homeData'
import { getResumeContent, type ResumeContent, type ResumeGroup } from '~/data/resumeData'
import { ArrowIcon, BpFooter, BpNav, ExternalIcon } from '~/components/blueprint/Shared'

const META: Record<string, { kicker: string; back: string; contact: string; contactLab: string }> =
  {
    ca: {
      kicker: 'Currículum',
      back: "Tornar a l'inici",
      contact: 'Contacta',
      contactLab: 'Contacte',
    },
    es: {
      kicker: 'Currículum',
      back: 'Volver al inicio',
      contact: 'Contactar',
      contactLab: 'Contacto',
    },
    en: {
      kicker: 'Résumé',
      back: 'Back to home',
      contact: 'Get in touch',
      contactLab: 'Contact',
    },
  }

const isTimeline = (sec: ResumeGroup) => sec.items.some((it) => it.time)

export default function Resume({
  cv,
  content,
  locale,
}: {
  cv: ResumeContent
  content: HomeContent
  locale: string
}) {
  const meta = META[locale] ?? META.ca
  const mail = content.footer.mail
  const links = content.footer.links ?? []
  const timeline = cv.sections.filter(isTimeline)
  const aside = cv.sections.filter((s) => !isTimeline(s))

  return (
    <div className="bp resume" id="top">
      <PageSeo title={`${cv.name} — ${meta.kicker}`} description={cv.intro} />
      <BpNav content={content} />

      <main>
        {/* ===== HERO / IDENTITAT ===== */}
        <section className="rs-hero">
          <div className="wrap rs-hero-grid">
            <div className="rs-lead">
              <Link href="/" className="rs-back mono">
                ← {meta.back}
              </Link>
              <span className="kicker">{meta.kicker}</span>
              <h1>{cv.name}</h1>
              <p className="rs-role">
                {cv.role} · <span className="accent">{cv.company}</span>
              </p>
              <div className="rs-facts mono">
                <span>{cv.location}</span>
                <span>{cv.updated}</span>
              </div>
              <p className="rs-intro">{cv.intro}</p>
              <div className="rs-cta">
                <a className="btn btn-primary" href={`mailto:${mail}`}>
                  {meta.contact}
                  <ArrowIcon />
                </a>
                <Link className="btn btn-ghost" href="/">
                  ← {meta.back}
                </Link>
              </div>
            </div>

            {/* targeta de contacte / retrat */}
            <aside className="rs-card">
              <div className="rs-card-portrait">
                <span className="glow" />
                <img src={cv.avatar} alt={cv.name} />
              </div>
              <div className="rs-card-body">
                <div className="rs-card-lab mono">{meta.contactLab}</div>
                <a className="rs-card-row" href={`mailto:${mail}`}>
                  <span className="k mono">mail</span>
                  <span className="v">{mail}</span>
                </a>
                {links.map((l) => (
                  <a
                    className="rs-card-row"
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="k mono">{l.label.toLowerCase()}</span>
                    <span className="v">
                      <ExternalIcon />
                    </span>
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </section>

        {/* ===== COS: aside (aptituds) + timeline ===== */}
        <div className="wrap rs-body">
          {aside.length > 0 && (
            <aside className="rs-side">
              {aside.map((sec, si) => (
                <div className="rs-block" key={si}>
                  <h3 className="rs-block-h mono">{sec.type}</h3>
                  <dl className="rs-defs">
                    {sec.items.map((it, i) => (
                      <div className="rs-def" key={i}>
                        <dt>
                          {it.url?.startsWith('/') ? (
                            <Link className="rs-def-link" href={it.url}>
                              {it.title}
                              <ExternalIcon />
                            </Link>
                          ) : it.url ? (
                            <a
                              className="rs-def-link"
                              href={it.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {it.title}
                              <ExternalIcon />
                            </a>
                          ) : (
                            it.title
                          )}
                        </dt>
                        {it.description && <dd>{it.description}</dd>}
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </aside>
          )}

          <div className="rs-main">
            {timeline.map((sec, si) => (
              <section className="rs-sec" key={si}>
                <h2 className="rs-sec-h">
                  <span className="ix mono">{String(si + 1).padStart(2, '0')}</span>
                  {sec.type}
                </h2>
                <div className="rs-timeline">
                  {sec.items.map((it, i) => (
                    <article className={`rs-tl${i === 0 ? ' now' : ''}`} key={i}>
                      {it.time && <div className="yr mono">{it.time}</div>}
                      <h4>{it.title}</h4>
                      {(it.company || it.location) && (
                        <div className="org">
                          {it.company}
                          {it.company && it.location ? ' · ' : ''}
                          {it.location && <span className="loc">{it.location}</span>}
                        </div>
                      )}
                      {it.description && <p className="desc">{it.description}</p>}
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <BpFooter content={content} />
    </div>
  )
}

Resume.getLayout = (page: ReactElement): ReactNode => page

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      cv: getResumeContent(locale),
      content: getHomeContent(locale),
      locale: locale ?? 'ca',
      ...(await serverSideTranslations(locale ?? 'ca', ['common'])),
    },
  }
}
