import { Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { HomeContent } from '~/data/homeData'

/* ---- text ric: **x** -> accent · ~~x~~ -> bold (color via CSS) ---- */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|~~[^~]+~~)/g)
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith('**') && p.endsWith('**'))
          return (
            <span className="accent" key={i}>
              {p.slice(2, -2)}
            </span>
          )
        if (p.startsWith('~~') && p.endsWith('~~')) return <b key={i}>{p.slice(2, -2)}</b>
        return <Fragment key={i}>{p}</Fragment>
      })}
    </>
  )
}

/* ---- icones ---- */
export const ArrowIcon = () => (
  <svg
    className="icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)
export const DownloadIcon = () => (
  <svg
    className="icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
  </svg>
)
export const ExternalIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
)
export const SealIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="seal"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="9" r="5.5" />
    <circle cx="12" cy="9" r="2" />
    <path d="M8.5 13.5 7 21l5-3 5 3-1.5-7.5" />
  </svg>
)

const TAGLINE: Record<string, string> = {
  ca: 'Dades · Sistemes · Producte',
  es: 'Datos · Sistemas · Producto',
  en: 'Data · Systems · Product',
}

function LangSwitcher() {
  const router = useRouter()
  const { locales = [], locale, asPath } = router
  return (
    <div className="langsw" role="group" aria-label="Language">
      {locales.map((lc) => (
        <Link key={lc} href={asPath} locale={lc} className={lc === locale ? 'on' : ''}>
          {lc}
        </Link>
      ))}
    </div>
  )
}

export function BpNav({ content, home = false }: { content: HomeContent; home?: boolean }) {
  const router = useRouter()
  const a = (id: string) => (home ? `#${id}` : `/#${id}`)
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand">
          <span className="mark">rr</span>
          <span className="who">
            Roman Roset<small>{TAGLINE[router.locale ?? 'ca'] ?? TAGLINE.ca}</small>
          </span>
        </Link>
        <nav className="links">
          <a href={a('perfil')}>{content.nav.perfil}</a>
          <a href={a('focus')}>{content.nav.focus}</a>
          <a href={a('projectes')}>{content.nav.projectes}</a>
          <a href={a('trajectoria')}>{content.nav.trajectoria}</a>
          <Link href="/resume" className="nav-cta">
            {content.navCta}
          </Link>
        </nav>
        <LangSwitcher />
      </div>
    </header>
  )
}

export function BpFooter({ content }: { content: HomeContent }) {
  return (
    <footer className="site" id="cv">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-cta">
            <h2>{content.footer.h2}</h2>
            <p>{content.footer.p}</p>
            <a className="foot-mail" href={`mailto:${content.footer.mail}`}>
              {content.footer.mail}
              <svg
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: 18, height: 18 }}
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
          <div className="foot-links">
            <div className="lab">{content.footer.linksLabel}</div>
            {content.footer.links.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer">
                {l.label}
                <ExternalIcon />
              </a>
            ))}
          </div>
        </div>
        <div className="foot-bot">
          <span className="mono">{content.footer.copyr}</span>
          <span className="mono">{content.footer.stack}</span>
        </div>
      </div>
    </footer>
  )
}
