import type { ReactNode } from 'react'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { PageSeo } from 'components/SEO'
import { getHomeContent } from '~/data/homeData'
import type { HomeContent, ProjectItem } from '~/data/homeData'
import {
  ArrowIcon,
  BpFooter,
  BpNav,
  DownloadIcon,
  ExternalIcon,
  Rich,
  SealIcon,
} from '~/components/blueprint/Shared'

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
        <span className="arrow">↗</span>
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
      {project.url ? (
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
                  <DownloadIcon />
                  {c.hero.ctaCV}
                </Link>
              </div>
            </div>

            <div className="portrait">
              <div className="frame">
                <span className="glow" />
                <img src="/static/images/roman-portrait.png" alt="Roman Roset" />
              </div>
              <div className="cred-float">
                <img src="/static/images/cert-nonprofits.png" alt="Anthropic AI Fluency" />
                <div>
                  <div className="t">{c.hero.credTop}</div>
                  <div className="s">{c.hero.credSub}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PERFIL OBSERVAT */}
        <section className="agents" id="perfil">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker">{c.perfil.kicker}</span>
              <h2>{c.perfil.h2}</h2>
              <p>{c.perfil.intro}</p>
            </div>
            <div className="method mono">
              <b>{c.perfil.methodLabel}</b> · 6 agents
              <span className="pill">@pm</span>
              <span className="pill">@oracle</span>
              <span className="pill">@mem-curator</span>
              <span className="pill">@code-curator</span>
              <span className="pill">@ux-expert</span>
              <span className="pill">@okr-curator</span>
              <b>{c.perfil.methodProject}</b>
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

        {/* CERTS */}
        <section className="certs" id="certs">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker">{c.certs.kicker}</span>
              <h2>{c.certs.h2}</h2>
              <p>{c.certs.intro}</p>
            </div>
            <div className="cred-grid">
              {c.certs.items.map((cert) => (
                <div
                  className={`cred${cert.img ? ' has-img' : ''}${cert.todo ? ' todo' : ''}`}
                  key={cert.name}
                >
                  <div className="badge">
                    {cert.img ? (
                      <img src={cert.img} alt={cert.name} />
                    ) : (
                      <>
                        <span className="prov">
                          {cert.mark && <span className="mk">{cert.mark}</span>} {cert.provider}
                        </span>
                        <span className="nm">{cert.name}</span>
                        {cert.score && <span className="score">{cert.score}</span>}
                        <SealIcon />
                      </>
                    )}
                  </div>
                  <div className="cap">
                    <span className="yr">{cert.year}</span>
                    {cert.verify ? (
                      <a
                        className="verify"
                        href={cert.verify}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {c.certs.verify}
                        <ExternalIcon />
                      </a>
                    ) : cert.todo ? null : (
                      <span className="verify" style={{ opacity: 0.55 }}>
                        {c.certs.verifiable}
                      </span>
                    )}
                  </div>
                </div>
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
