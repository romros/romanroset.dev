import type { ReactNode } from 'react'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { PageSeo } from 'components/SEO'
import { getHomeContent } from '~/data/homeData'
import type { HomeContent, ProjectItem } from '~/data/homeData'
import { ArrowIcon, BpFooter, BpNav, ExternalIcon, Rich } from '~/components/blueprint/Shared'

export async function getStaticProps({ locale }) {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

function Diagram({ project }: { project: ProjectItem }) {
  const d = project.diagram!
  return (
    <div className="diagram">
      {d.nodes.map((node, i) => (
        <div key={i}>
          <div className="dnode">
            <div>
              <div className="lab">{node.lab}</div>
              <div className="nm">{node.nm}</div>
            </div>
            <div className="role">{node.role}</div>
          </div>
          {i < d.conns.length && (
            <div className="dconn">
              <span className="ln" />
              {d.conns[i]}
              <span className="ln" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function ProjectText({ project }: { project: ProjectItem }) {
  return (
    <div>
      <div className="head">
        <span className={`kind${project.kindLegacy ? ' legacy' : ''}`}>{project.kind}</span>
        <span className="st">{project.status}</span>
      </div>
      <h3>
        {project.title}
        {project.url && <span className="arrow">↗</span>}
      </h3>
      <p>{project.desc}</p>
      <div className="stack">
        {project.stack.map((s) => (
          <span className="chip" key={s}>
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: ProjectItem }) {
  if (project.feature) {
    const text = <ProjectText project={project} />
    const diagram = <Diagram project={project} />
    return (
      <article className="proj feature">
        {project.diagram?.side === 'left' ? (
          <>
            {diagram}
            {text}
          </>
        ) : (
          <>
            {text}
            {diagram}
          </>
        )}
      </article>
    )
  }
  const inner = <ProjectText project={project} />
  return (
    <article className="proj">
      {project.url?.startsWith('/') ? (
        <Link href={project.url} style={{ display: 'contents' }}>
          {inner}
        </Link>
      ) : project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'contents' }}
        >
          {inner}
        </a>
      ) : (
        inner
      )}
    </article>
  )
}

export default function Home({ locale }: { locale?: string }) {
  const c: HomeContent = getHomeContent(locale)

  return (
    <div className="bp" id="top">
      <PageSeo title={c.meta.title} description={c.meta.description} />
      <BpNav content={c} home />

      <main>
        {/* HERO */}
        <section className="hero flush">
          <div className="wrap hero-grid">
            <div>
              <div className="eyebrow">
                {c.hero.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
                <a
                  href={c.hero.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live mono"
                >
                  <span className="dot" />
                  {c.hero.live}
                </a>
              </div>
              <h1 className="display">
                <Rich text={c.hero.h1} />
              </h1>
              <p className="lede">{c.hero.lede}</p>
              <p className="mission">
                <span>&rarr;</span> {c.hero.mission}
              </p>
              <div className="cta-row">
                <a href="#projectes" className="btn btn-primary">
                  {c.hero.ctaProjects}
                  <ArrowIcon />
                </a>
                <Link href="/resume" className="btn btn-ghost">
                  <ArrowIcon />
                  {c.hero.ctaCV}
                </Link>
              </div>
              <div className="hero-signals" aria-label="Professional scope">
                {c.hero.signals.map((signal) => (
                  <div className="hero-signal" key={signal.label}>
                    <span className="label mono">{signal.label}</span>
                    <span className="value">{signal.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="portrait">
              <div className="frame">
                <span className="glow" />
                <img src="/static/images/roman-portrait.png" alt="Roman Roset" />
              </div>
              <div className="cred-float">
                <div>
                  <div className="t">{c.hero.credTop}</div>
                  <div className="s">{c.hero.credSub}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALOR PROFESSIONAL */}
        <section className="profile" id="perfil">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker">{c.perfil.kicker}</span>
              <h2>{c.perfil.h2}</h2>
              <p>{c.perfil.intro}</p>
            </div>
            <div className="trait-grid">
              {c.perfil.traits.map((t) => (
                <div className="trait" key={t.ix}>
                  <div className="top">
                    <span className="ix">{t.ix}</span>
                    <span className="conv">{t.conv}</span>
                  </div>
                  <h3>{t.h3}</h3>
                  <p>{t.p}</p>
                  <div className="ev">
                    {t.evLabel} · <Rich text={t.ev} />
                  </div>
                </div>
              ))}
            </div>
            <div className="honest">
              <div className="lab mono">{c.perfil.honestLabel}</div>
              <p>{c.perfil.honest}</p>
            </div>
          </div>
        </section>

        {/* FOCUS */}
        <section id="focus">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker">{c.focus.kicker}</span>
              <h2>{c.focus.h2}</h2>
              <p>{c.focus.intro}</p>
            </div>
            <div className="pillars">
              {c.focus.pillars.map((p) => (
                <div className="pillar" key={p.n}>
                  <div className="n">{p.n}</div>
                  <h3>{p.h3}</h3>
                  <p>{p.p}</p>
                  <div className="tags">
                    {p.tags.map((tag) => (
                      <span className="chip" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTES */}
        <section id="projectes">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker">{c.projectes.kicker}</span>
              <h2>{c.projectes.h2}</h2>
              <p>{c.projectes.intro}</p>
            </div>
            <div className="proj-grid">
              {c.projectes.items.map((p) => (
                <ProjectCard project={p} key={p.title} />
              ))}
            </div>
          </div>
        </section>

        {/* CREDENCIALS — suport, no centre del perfil */}
        <section className="credentials" id="credencials">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker">{c.credentials.kicker}</span>
              <h2>{c.credentials.h2}</h2>
              <p>{c.credentials.intro}</p>
            </div>
            <div className="credential-list">
              {c.credentials.items.map((credential) => (
                <article className="credential-row" key={credential.title}>
                  <div className="credential-mark" aria-hidden="true">
                    {credential.issuer.charAt(0)}
                  </div>
                  <div className="credential-main">
                    <h3>{credential.title}</h3>
                    <p>{credential.detail}</p>
                  </div>
                  <div className="credential-meta mono">
                    <span>{credential.issuer}</span>
                    <span>{credential.year}</span>
                  </div>
                  {credential.verify ? (
                    <a
                      className="credential-verify mono"
                      href={credential.verify}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {c.credentials.verify}
                      <ExternalIcon />
                    </a>
                  ) : (
                    <span className="credential-verify placeholder" aria-hidden="true" />
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TRAJECTÒRIA */}
        <section id="trajectoria">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker">{c.trajectoria.kicker}</span>
              <h2>{c.trajectoria.h2}</h2>
              <p>{c.trajectoria.intro}</p>
            </div>
            <div className="exp-grid">
              <aside className="stats">
                {c.trajectoria.stats.map((s, i) =>
                  s.href ? (
                    <Link href={s.href} className="stat" key={i}>
                      <div className="n">
                        <Rich text={s.n} />
                      </div>
                      <div className="l">{s.l} ↗</div>
                    </Link>
                  ) : (
                    <div className="stat" key={i}>
                      <div className="n">
                        <Rich text={s.n} />
                      </div>
                      <div className="l">{s.l}</div>
                    </div>
                  )
                )}
              </aside>
              <div className="timeline">
                {c.trajectoria.timeline.map((tl, i) => (
                  <div className={`tl${tl.now ? ' now' : ''}`} key={i}>
                    <div className="yr">{tl.yr}</div>
                    <h4>{tl.h4}</h4>
                    <div className="role">{tl.role}</div>
                    <div className="desc">{tl.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section className="about" id="sobre">
          <div className="wrap">
            <div className="about-grid">
              <div>
                <span className="kicker">{c.sobre.kicker}</span>
                <p className="lead">
                  <Rich text={c.sobre.lead} />
                </p>
                <p>{c.sobre.p2}</p>
                <p>{c.sobre.p3}</p>
                <div className="langs">
                  {c.sobre.langs.map((l) => (
                    <div className="lg" key={l.n}>
                      <div className="n">{l.n}</div>
                      <div className="lv">{l.lv}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="qcard">
                <div className="q">{c.sobre.quote}</div>
                <p>{c.sobre.quoteP}</p>
                <div className="meta mono">{c.sobre.quoteMeta}</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <BpFooter content={c} />
    </div>
  )
}

Home.getLayout = (page: ReactNode) => page
