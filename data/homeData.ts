/* ===========================================================================
   Contingut del one-pager Blueprint (home) en CA / ES / EN.
   Marcadors de text ric:
     **text**  -> <span class="accent">  (turquesa)
     ~~text~~  -> <b>                     (color segons context via CSS)
   =========================================================================== */

export interface DiagramNode {
  lab: string
  nm: string
  role: string
}
export interface Diagram {
  side: 'left' | 'right'
  nodes: DiagramNode[]
  conns: string[]
}
export interface ProjectItem {
  feature?: boolean
  kind: string
  kindLegacy?: boolean
  status: string
  title: string
  url?: string
  desc: string
  stack: string[]
  diagram?: Diagram
}
export interface Trait {
  ix: string
  conv: string
  h3: string
  p: string
  evLabel: string
  ev: string
}
export interface Pillar {
  n: string
  h3: string
  p: string
  tags: string[]
}
export interface Cert {
  mark: string
  provider: string
  name: string
  year: string
  verify?: string
  img?: string
  todo?: boolean
  score?: string
}
export interface Stat {
  n: string
  l: string
  href?: string
}
export interface TimelineItem {
  yr: string
  h4: string
  role: string
  desc: string
  now?: boolean
}
export interface Lang {
  n: string
  lv: string
}
export interface FootLink {
  label: string
  url: string
}

export interface HomeContent {
  meta: { title: string; description: string }
  nav: {
    perfil: string
    focus: string
    projectes: string
    credencials: string
    trajectoria: string
  }
  navCta: string
  hero: {
    tags: string[]
    live: string
    liveUrl: string
    h1: string
    lede: string
    mission: string
    ctaProjects: string
    ctaCV: string
    credTop: string
    credSub: string
  }
  perfil: {
    kicker: string
    h2: string
    intro: string
    methodLabel: string
    methodProject: string
    traits: Trait[]
    honestLabel: string
    honest: string
  }
  focus: { kicker: string; h2: string; intro: string; pillars: Pillar[] }
  projectes: { kicker: string; h2: string; intro: string; items: ProjectItem[] }
  certs: {
    kicker: string
    h2: string
    intro: string
    items: Cert[]
    verify: string
    verifiable: string
  }
  trajectoria: {
    kicker: string
    h2: string
    intro: string
    stats: Stat[]
    timeline: TimelineItem[]
  }
  sobre: {
    kicker: string
    lead: string
    p2: string
    p3: string
    langsLabel: string
    langs: Lang[]
    quote: string
    quoteP: string
    quoteMeta: string
  }
  footer: {
    h2: string
    p: string
    mail: string
    linksLabel: string
    links: FootLink[]
    copyr: string
    stack: string
  }
}

const SKILLJAR = 'https://verify.skilljar.com/c/'

/* certificats Anthropic — noms en anglès (títols propis dels cursos) */
const certsBase = (jsName: string): Cert[] => [
  {
    mark: 'A',
    provider: 'Anthropic',
    name: 'AI Fluency: Framework & Foundations',
    year: '2026',
    score: '9/10',
    verify: SKILLJAR + 'baq7aydnnkx7',
  },
  {
    mark: 'A',
    provider: 'Anthropic',
    name: 'Building with the Claude API',
    year: '2026',
    verify: SKILLJAR + '2hbfqux7ezhb',
  },
  {
    mark: 'A',
    provider: 'Anthropic',
    name: 'Claude 101',
    year: '2026',
    verify: SKILLJAR + 'ah2kt6whgmn8',
  },
  {
    mark: 'A',
    provider: 'Anthropic',
    name: 'Claude Code 101',
    year: '2026',
    verify: SKILLJAR + 'sunw9rjqfq5d',
  },
  {
    mark: 'A',
    provider: 'Anthropic',
    name: 'Claude Code in Action',
    year: '2026',
    verify: SKILLJAR + 'm2rmmdfyegq5',
  },
  {
    mark: 'A',
    provider: 'Anthropic',
    name: 'Introduction to Model Context Protocol',
    year: '2026',
    verify: SKILLJAR + '89n6hy639snz',
  },
  {
    mark: 'A',
    provider: 'Anthropic',
    name: 'Introduction to Claude Cowork',
    year: '2026',
    verify: SKILLJAR + 'ixp4fzvgt8o9',
  },
  {
    mark: 'A',
    provider: 'Anthropic',
    name: 'AI Fluency for educators',
    year: '2026',
    verify: SKILLJAR + 'ymmmaw87va34',
  },
  {
    mark: '',
    provider: 'Anthropic',
    name: 'AI Fluency for nonprofits',
    year: '2026',
    verify: SKILLJAR + 'cywdpm62tphz',
    img: '/static/images/cert-nonprofits.png',
  },
  { mark: 'S', provider: 'VMware', name: 'Spring Certified Professional', year: '2023' },
  { mark: 'JS', provider: 'JavaScript', name: jsName, year: '—', todo: true },
]

const FOOT_LINKS: FootLink[] = [
  { label: 'Accent Obert', url: 'https://accentobert.cat' },
  { label: 'GitHub', url: 'https://github.com/romros' },
  { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=PCNSAi4AAAAJ' },
  { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Roman-Roset-Mayals' },
  { label: 'Twitter / X', url: 'https://twitter.com/romanroset' },
]

const URL_FIBROLINE = 'https://journals.sagepub.com/doi/abs/10.1177/1359105316650509'
const URL_PAINOMETER = 'https://www.sciencedirect.com/science/article/abs/pii/S1526590014007214'
const URL_SITE = 'https://github.com/romros/romanroset.dev'

/* ===================================== CA ===================================== */
const ca: HomeContent = {
  meta: {
    title: 'Roman Roset — Enginyer de sistemes · IA agèntica',
    description:
      'Roman Roset Mayals — Enginyer de dades i sistemes. Construeixo sistemes agèntics sobre dades, processos i evidència. Barcelona.',
  },
  nav: {
    perfil: 'Perfil',
    focus: 'Focus',
    projectes: 'Projectes',
    credencials: 'Credencials',
    trajectoria: 'Trajectòria',
  },
  navCta: 'Currículum',
  hero: {
    tags: ['Barcelona', "20+ anys d'enginyeria"],
    live: 'Enginyer sènior · Accent Obert',
    liveUrl: 'https://accentobert.cat',
    h1: 'Construeixo sistemes agèntics sobre **dades**, processos i evidència.',
    lede: "Sóc Roman Roset, enginyer de dades i sistemes amb vint anys d'ofici en backend, BI, salut digital, recerca i processos. Ara m'especialitzo en sistemes agèntics per a organitzacions: harness, agents, memòria, contractes, mètriques i governança.",
    mission:
      "M'interessa una IA que no substitueixi el criteri humà, sinó que capaciti les persones i els equips perquè treballin millor.",
    ctaProjects: 'Veure projectes',
    ctaCV: 'Currículum complet',
    credTop: 'Anthropic Academy',
    credSub: "9 programes d'IA · 2026",
  },
  perfil: {
    kicker: 'Perfil observat',
    h2: 'El que veuen sis agents',
    intro:
      'Per revisar el meu propi sistema de treball, vaig fer que sis agents independents analitzessin el codi, les decisions i els resultats. El resum: un patró repetit, evidència convergent i punts cecs detectats.',
    methodLabel: 'Mètode',
    methodProject: 'laboratori_profes',
    traits: [
      {
        ix: '01',
        conv: 'convergència 4/6',
        h3: 'No obro fronts sense evidència tancada',
        p: "Un objectiu tancat amb evidència abans d'obrir el següent. Mai fronts paral·lels. Quan un pas és massa gran, l'elevo a projecte propi en comptes de partir l'atenció.",
        evLabel: 'Evidència',
        ev: "~~43~~ cicles de producte tancats consecutivament al 100% d'OKRs",
      },
      {
        ix: '02',
        conv: 'convergència 4/6',
        h3: 'Decideixo per evidència, no per intuïció',
        p: "La primera pregunta no és «com ho faig» sinó «cal?». Retallo funcionalitat i deute per mesura, no per estètica. Mock → smoke → real, amb mètriques com a criteri d'acceptació.",
        evLabel: 'Evidència',
        ev: 'model descartat per ~~MAE 0.133 vs 0.241~~, no per opinió',
      },
      {
        ix: '03',
        conv: 'signatura tècnica',
        h3: 'Penso per contractes i invariants',
        p: 'Defineixo el Protocol i el «no» abans del «com»: el comportament queda acotat i auditable. Privadesa i cost com a invariants de disseny, no com a compliance afegit després.',
        evLabel: 'Evidència',
        ev: "fail-hard honest · cost anotat en ~~€~~ i aprovat abans d'executar",
      },
      {
        ix: '04',
        conv: 'unanimitat 6/6',
        h3: 'Lideratge per delegació',
        p: "Externalitzo la disciplina d'equip a l'entorn —convencions, hooks, protocols— perquè la qualitat no depengui de la memòria de ningú. Coordino sense microgestionar.",
        evLabel: 'Encaix',
        ev: 'equip petit (~~2–5~~) · founding/tech lead amb mans al codi',
      },
    ],
    honestLabel: 'Autoconsciència',
    honest:
      "«El meu model mental va ràpid i de vegades s'avança a la verificació. Treballo millor amb el resultat real a prop per contrastar-lo abans de comprometre'm.»",
  },
  focus: {
    kicker: 'Ara mateix',
    h2: "On poso l'energia",
    intro:
      "Tres capes que es reforcen. La nova, que estic construint a fons; les dues que sostenen vint anys d'ofici.",
    pillars: [
      {
        n: '01 / direcció',
        h3: 'Sistemes agèntics',
        p: "Dissenyo l'arquitectura i la governança de sistemes multi-agent: orquestrador, workers, oracle, memòria persistent i processos. Tracto la IA com un harness —rols, contractes, memòria i punts de control humans—, no només prompting: estructura, procés i verificació.",
        tags: ['Claude Code', 'MCP', 'agents', 'OKR'],
      },
      {
        n: '02 / fonament',
        h3: 'Backend, dades i evidència',
        p: 'Pipelines LLM deterministes, APIs i enginyeria de dades. Python, FastAPI, Docker, SQL i web semàntica —la base sòlida de tot el que construeixo.',
        tags: ['Python', 'FastAPI', 'Docker', 'PostgreSQL'],
      },
      {
        n: '03 / lideratge',
        h3: 'Tech lead & processos',
        p: 'Tradueixo necessitat real en producte enviat. Disseny de processos, OKR i KPIs que fan equips petits més àgils, sense burocràcia ni microgestió.',
        tags: ['Agile', 'OKR', 'BPMN'],
      },
    ],
  },
  projectes: {
    kicker: 'Selecció',
    h2: 'Projectes',
    intro:
      "Coses que estic construint o he liderat. Del framework d'agents que governa els meus projectes a apps clíniques amb recerca publicada.",
    items: [
      {
        feature: true,
        kind: 'Sistema propi',
        status: 'en evolució',
        title: 'Framework de projectes agèntics',
        desc: "Un manual i conjunt de components per orquestrar projectes amb agents Claude Code: agents base (orquestrador / worker / oracle), equips (OKR, PM, Dev, Editorial, Anàlisi de dades), serveis de memòria persistent i processos amb convencions BPMN. Destil·lat d'un projecte real —cap peça hi entra sense haver provat el seu valor.",
        stack: ['Claude Code', 'multi-agent', 'memòria', 'governança', 'BPMN'],
        diagram: {
          side: 'right',
          nodes: [
            { lab: 'orquestrador', nm: 'Coordina · tradueix intenció', role: 'decideix' },
            { lab: 'worker · oracle', nm: 'Executa · criteri arquitectònic', role: 'actua' },
            { lab: 'servei memòria', nm: 'Context entre sessions', role: 'recorda' },
          ],
          conns: ['convoca', 'persisteix'],
        },
      },
      {
        feature: true,
        kind: 'Lab · quant',
        status: 'validació',
        title: 'Trading algorítmic agèntic',
        desc: 'Arquitectura cervell/cos per operar cripto-perpetuals a un DEX: el cervell decideix, el gateway executa. Estratègia validada amb Monte Carlo (3/3) i Walk-Forward (7/9 anys positius), amb gate de producció i modes paper/live. Rigor quantitatiu abans que cap euro real.',
        stack: ['Python 3.11', 'FastAPI', 'asyncio', 'Docker'],
        diagram: {
          side: 'left',
          nodes: [
            { lab: 'TradingAgent · cervell', nm: 'Decideix QUÈ i QUAN', role: 'estratègia' },
            { lab: 'BrokerageService · cos', nm: 'Executa · dades · posicions', role: 'gateway' },
            { lab: 'lab', nm: 'Monte Carlo · Walk-Forward', role: 'evidència' },
          ],
          conns: ['HTTP', 'valida'],
        },
      },
      {
        kind: 'Fundació .cat',
        status: 'v1.0 · 2024',
        title: 'XMCD',
        desc: 'Xarxa de Monitoratge del Català Digital: sensors Raspberry Pi connectats per VPN WireGuard que fan cerques automatitzades diàries per mesurar la visibilitat del català a Google. Enginyeria de dades amb propòsit cultural.',
        stack: ['Python', 'crawling', 'WireGuard', 'Zabbix'],
      },
      {
        kind: 'Open source',
        status: 'GitHub',
        title: 'romanroset.dev',
        url: URL_SITE,
        desc: 'Aquest lloc, en obert. Next.js, Tailwind i TypeScript amb suport multiidioma (CA/ES/EN). Construir coses que altres puguin reutilitzar i millorar.',
        stack: ['Next.js', 'Tailwind', 'TypeScript', 'i18n'],
      },
      {
        kind: 'eHealth · recerca',
        kindLegacy: true,
        status: 'publicat',
        title: 'Fibroline',
        url: URL_FIBROLINE,
        desc: 'App de tractament cognitiu-conductual autoadministrat per al dolor crònic. En vaig desenvolupar completament la primera versió. Recerca validada amb pacients i publicada.',
        stack: ['Java', 'Android', 'Firebase'],
      },
      {
        kind: 'eHealth · recerca',
        kindLegacy: true,
        status: '79+ citacions',
        title: 'Painometer',
        url: URL_PAINOMETER,
        desc: 'Aplicació mòbil per mesurar, emmagatzemar i compartir la intensitat del dolor. En vaig desenvolupar la versió Android. Àmpliament citada a la literatura científica.',
        stack: ['Java', 'Android', 'jQuery'],
      },
    ],
  },
  certs: {
    kicker: 'Formació contínua',
    h2: 'Formació recent en IA',
    intro:
      "Formació recent en IA agèntica (Anthropic Academy) sobre una base d'enginyeria certificada. Cada badge enllaça a la seva verificació.",
    items: certsBase('Certificat de JavaScript'),
    verify: 'Verificar',
    verifiable: 'Verificable',
  },
  trajectoria: {
    kicker: 'Trajectòria',
    h2: "Vint anys d'ofici",
    intro:
      'De la supercomputació i la bioinformàtica a la salut digital i la innovació data-driven. Sempre amb la mateixa brúixola: tecnologia útil per a les persones.',
    stats: [
      { n: '20**+**', l: "anys d'ofici en tecnologia" },
      { n: '8', l: 'organitzacions: recerca, universitat, spin-off i fundació' },
      { n: '11', l: 'publicacions científiques', href: '/publicacions' },
      { n: '4', l: 'anys de docència universitària (UOC)' },
      { n: '6', l: 'anys liderant tecnologia a la Fundació .cat' },
    ],
    timeline: [
      {
        yr: '2023 — present',
        h4: 'Accent Obert · Fundació .cat',
        role: 'Enginyer Sènior · projectes i processos tecnològics',
        desc: "Construcció i lideratge de projectes perquè qualsevol persona pugui viure plenament en català al món digital: XMCD (monitoratge), la Llista de creadors i iniciatives d'IA en català com Frec.",
        now: true,
      },
      {
        yr: '2020 — 2023',
        h4: 'Fundació .cat',
        role: 'Enginyer de dades, backend & BI',
        desc: "Innovació data-driven, backend de la plataforma d'Intel·ligència de Negoci i orquestració d'integracions cross-platform.",
      },
      {
        yr: '2017 — 2019',
        h4: 'WellTech TMS',
        role: 'Cofundador & Enginyer de Software',
        desc: 'Spin-off de programari terapèutic. Lideratge tècnic adaptant recerca acadèmica a producte comercial.',
      },
      {
        yr: '2011 — 2019',
        h4: 'Universitat Rovira i Virgili · ALGOS',
        role: "Responsable d'eHealth & Enginyer de Software",
        desc: 'Estratègia tecnològica i apps per a pacients amb dolor crònic: Fibroline i Painometer.',
      },
      {
        yr: '2011 — 2015',
        h4: 'Universitat Oberta de Catalunya',
        role: 'Professor Adjunt · Enginyeria Informàtica',
        desc: 'Docència de grau i màster i supervisió de 23 projectes finals.',
      },
      {
        yr: '2002 — 2009',
        h4: 'BSC · INB · Arte · MicroArt',
        role: 'Recerca, web semàntica & bioinformàtica',
        desc: 'Supercomputació a MareNostrum, ontologies clíniques i sistemes de suport a la decisió basats en agents.',
      },
    ],
  },
  sobre: {
    kicker: 'Sobre mi',
    lead: 'Em mou una idea simple: la tecnologia ha de fer les persones més **capaces**, no més dependents.',
    p2: "No pretenc revolucionar indústries, sinó aportar el meu granet de sorra perquè la gent aconsegueixi els resultats que desitja —i se senti més competent fent-ho. Crec en l'aprenentatge constant, l'escolta activa i la col·laboració.",
    p3: "Amb la IA al centre del meu treball, la premissa no canvia: canvia l'eina, no el propòsit.",
    langsLabel: 'Idiomes',
    langs: [
      { n: 'Català', lv: 'Natiu' },
      { n: 'Español', lv: 'Natiu' },
      { n: 'English', lv: 'Intermedi · B1' },
    ],
    quote: '«Compartir és aprendre.»',
    quoteP:
      "Aquest web és en obert a GitHub, com bona part del que construeixo. M'agrada fer coses que altres puguin reutilitzar, qüestionar i millorar —la mateixa lògica que aplico als equips.",
    quoteMeta: '— Roman Roset Mayals',
  },
  footer: {
    h2: 'Parlem de fer la IA útil de debò.',
    p: 'Disponible per a projectes, col·laboracions i converses sobre enginyeria de sistemes, dades i agents.',
    mail: 'romanroset@proton.me',
    linksLabel: 'Enllaços',
    links: FOOT_LINKS,
    copyr: '© 2026 Roman Roset Mayals · Barcelona',
    stack: 'Next.js · Tailwind · Vercel',
  },
}

/* ===================================== ES ===================================== */
const es: HomeContent = {
  meta: {
    title: 'Roman Roset — Ingeniero de sistemas · IA agéntica',
    description:
      'Roman Roset Mayals — Ingeniero de datos y sistemas. Construyo sistemas agénticos sobre datos, procesos y evidencia. Barcelona.',
  },
  nav: {
    perfil: 'Perfil',
    focus: 'Foco',
    projectes: 'Proyectos',
    credencials: 'Credenciales',
    trajectoria: 'Trayectoria',
  },
  navCta: 'Currículum',
  hero: {
    tags: ['Barcelona', '20+ años de ingeniería'],
    live: 'Ingeniero sénior · Accent Obert',
    liveUrl: 'https://accentobert.cat',
    h1: 'Construyo sistemas agénticos sobre **datos**, procesos y evidencia.',
    lede: 'Soy Roman Roset, ingeniero de datos y sistemas con veinte años de oficio en backend, BI, salud digital, investigación y procesos. Ahora me especializo en sistemas agénticos para organizaciones: harness, agentes, memoria, contratos, métricas y gobernanza.',
    mission:
      'Me interesa una IA que no sustituya el criterio humano, sino que capacite a las personas y los equipos para que trabajen mejor.',
    ctaProjects: 'Ver proyectos',
    ctaCV: 'Currículum completo',
    credTop: 'Anthropic Academy',
    credSub: '9 programas de IA · 2026',
  },
  perfil: {
    kicker: 'Perfil observado',
    h2: 'Lo que ven seis agentes',
    intro:
      'Para revisar mi propio sistema de trabajo, hice que seis agentes independientes analizaran el código, las decisiones y los resultados. El resumen: un patrón repetido, evidencia convergente y puntos ciegos detectados.',
    methodLabel: 'Método',
    methodProject: 'laboratori_profes',
    traits: [
      {
        ix: '01',
        conv: 'convergencia 4/6',
        h3: 'No abro frentes sin evidencia cerrada',
        p: 'Un objetivo cerrado con evidencia antes de abrir el siguiente. Nunca frentes paralelos. Cuando un paso es demasiado grande, lo elevo a proyecto propio en vez de partir la atención.',
        evLabel: 'Evidencia',
        ev: '~~43~~ ciclos de producto cerrados consecutivamente al 100% de OKRs',
      },
      {
        ix: '02',
        conv: 'convergencia 4/6',
        h3: 'Decido por evidencia, no por intuición',
        p: 'La primera pregunta no es «cómo lo hago» sino «¿hace falta?». Recorto funcionalidad y deuda por medida, no por estética. Mock → smoke → real, con métricas como criterio de aceptación.',
        evLabel: 'Evidencia',
        ev: 'modelo descartado por ~~MAE 0.133 vs 0.241~~, no por opinión',
      },
      {
        ix: '03',
        conv: 'firma técnica',
        h3: 'Pienso por contratos e invariantes',
        p: 'Defino el Protocolo y el «no» antes del «cómo»: el comportamiento queda acotado y auditable. Privacidad y coste como invariantes de diseño, no como compliance añadido después.',
        evLabel: 'Evidencia',
        ev: 'fail-hard honesto · coste anotado en ~~€~~ y aprobado antes de ejecutar',
      },
      {
        ix: '04',
        conv: 'unanimidad 6/6',
        h3: 'Liderazgo por delegación',
        p: 'Externalizo la disciplina de equipo al entorno —convenciones, hooks, protocolos— para que la calidad no dependa de la memoria de nadie. Coordino sin microgestionar.',
        evLabel: 'Encaje',
        ev: 'equipo pequeño (~~2–5~~) · founding/tech lead con las manos en el código',
      },
    ],
    honestLabel: 'Autoconciencia',
    honest:
      '«Mi modelo mental va rápido y a veces se adelanta a la verificación. Trabajo mejor con el resultado real cerca para contrastarlo antes de comprometerme.»',
  },
  focus: {
    kicker: 'Ahora mismo',
    h2: 'Dónde pongo la energía',
    intro:
      'Tres capas que se refuerzan. La nueva, que estoy construyendo a fondo; las dos que sostienen veinte años de oficio.',
    pillars: [
      {
        n: '01 / dirección',
        h3: 'Sistemas agénticos',
        p: 'Diseño la arquitectura y la gobernanza de sistemas multi-agente: orquestador, workers, oracle, memoria persistente y procesos. Trato la IA como un harness —roles, contratos, memoria y puntos de control humanos—, no solo prompting: estructura, proceso y verificación.',
        tags: ['Claude Code', 'MCP', 'agentes', 'OKR'],
      },
      {
        n: '02 / fundamento',
        h3: 'Backend, datos y evidencia',
        p: 'Pipelines LLM deterministas, APIs e ingeniería de datos. Python, FastAPI, Docker, SQL y web semántica —la base sólida de todo lo que construyo.',
        tags: ['Python', 'FastAPI', 'Docker', 'PostgreSQL'],
      },
      {
        n: '03 / liderazgo',
        h3: 'Tech lead & procesos',
        p: 'Traduzco necesidad real en producto entregado. Diseño de procesos, OKR y KPIs que hacen equipos pequeños más ágiles, sin burocracia ni microgestión.',
        tags: ['Agile', 'OKR', 'BPMN'],
      },
    ],
  },
  projectes: {
    kicker: 'Selección',
    h2: 'Proyectos',
    intro:
      'Cosas que estoy construyendo o he liderado. Del framework de agentes que gobierna mis proyectos a apps clínicas con investigación publicada.',
    items: [
      {
        feature: true,
        kind: 'Sistema propio',
        status: 'en evolución',
        title: 'Framework de proyectos agénticos',
        desc: 'Un manual y conjunto de componentes para orquestar proyectos con agentes Claude Code: agentes base (orquestador / worker / oracle), equipos (OKR, PM, Dev, Editorial, Análisis de datos), servicios de memoria persistente y procesos con convenciones BPMN. Destilado de un proyecto real —ninguna pieza entra sin haber probado su valor.',
        stack: ['Claude Code', 'multi-agente', 'memoria', 'gobernanza', 'BPMN'],
        diagram: {
          side: 'right',
          nodes: [
            { lab: 'orquestador', nm: 'Coordina · traduce intención', role: 'decide' },
            { lab: 'worker · oracle', nm: 'Ejecuta · criterio arquitectónico', role: 'actúa' },
            { lab: 'servicio memoria', nm: 'Contexto entre sesiones', role: 'recuerda' },
          ],
          conns: ['convoca', 'persiste'],
        },
      },
      {
        feature: true,
        kind: 'Lab · quant',
        status: 'validación',
        title: 'Trading algorítmico agéntico',
        desc: 'Arquitectura cerebro/cuerpo para operar cripto-perpetuales en un DEX: el cerebro decide, el gateway ejecuta. Estrategia validada con Monte Carlo (3/3) y Walk-Forward (7/9 años positivos), con gate de producción y modos paper/live. Rigor cuantitativo antes que ningún euro real.',
        stack: ['Python 3.11', 'FastAPI', 'asyncio', 'Docker'],
        diagram: {
          side: 'left',
          nodes: [
            { lab: 'TradingAgent · cerebro', nm: 'Decide QUÉ y CUÁNDO', role: 'estrategia' },
            {
              lab: 'BrokerageService · cuerpo',
              nm: 'Ejecuta · datos · posiciones',
              role: 'gateway',
            },
            { lab: 'lab', nm: 'Monte Carlo · Walk-Forward', role: 'evidencia' },
          ],
          conns: ['HTTP', 'valida'],
        },
      },
      {
        kind: 'Fundació .cat',
        status: 'v1.0 · 2024',
        title: 'XMCD',
        desc: 'Red de Monitoreo del Catalán Digital: sensores Raspberry Pi conectados por VPN WireGuard que hacen búsquedas automatizadas diarias para medir la visibilidad del catalán en Google. Ingeniería de datos con propósito cultural.',
        stack: ['Python', 'crawling', 'WireGuard', 'Zabbix'],
      },
      {
        kind: 'Open source',
        status: 'GitHub',
        title: 'romanroset.dev',
        url: URL_SITE,
        desc: 'Este sitio, en abierto. Next.js, Tailwind y TypeScript con soporte multiidioma (CA/ES/EN). Construir cosas que otros puedan reutilizar y mejorar.',
        stack: ['Next.js', 'Tailwind', 'TypeScript', 'i18n'],
      },
      {
        kind: 'eHealth · investigación',
        kindLegacy: true,
        status: 'publicado',
        title: 'Fibroline',
        url: URL_FIBROLINE,
        desc: 'App de tratamiento cognitivo-conductual autoadministrado para el dolor crónico. Desarrollé completamente la primera versión. Investigación validada con pacientes y publicada.',
        stack: ['Java', 'Android', 'Firebase'],
      },
      {
        kind: 'eHealth · investigación',
        kindLegacy: true,
        status: '79+ citas',
        title: 'Painometer',
        url: URL_PAINOMETER,
        desc: 'Aplicación móvil para medir, almacenar y compartir la intensidad del dolor. Desarrollé la versión Android. Ampliamente citada en la literatura científica.',
        stack: ['Java', 'Android', 'jQuery'],
      },
    ],
  },
  certs: {
    kicker: 'Formación continua',
    h2: 'Formación reciente en IA',
    intro:
      'Formación reciente en IA agéntica (Anthropic Academy) sobre una base de ingeniería certificada. Cada badge enlaza a su verificación.',
    items: certsBase('Certificado de JavaScript'),
    verify: 'Verificar',
    verifiable: 'Verificable',
  },
  trajectoria: {
    kicker: 'Trayectoria',
    h2: 'Veinte años de oficio',
    intro:
      'De la supercomputación y la bioinformática a la salud digital y la innovación data-driven. Siempre con la misma brújula: tecnología útil para las personas.',
    stats: [
      { n: '20**+**', l: 'años de oficio en tecnología' },
      { n: '8', l: 'organizaciones: investigación, universidad, spin-off y fundación' },
      { n: '11', l: 'publicaciones científicas', href: '/publicacions' },
      { n: '4', l: 'años de docencia universitaria (UOC)' },
      { n: '6', l: 'años liderando tecnología en la Fundació .cat' },
    ],
    timeline: [
      {
        yr: '2023 — presente',
        h4: 'Accent Obert · Fundació .cat',
        role: 'Ingeniero Sénior · proyectos y procesos tecnológicos',
        desc: 'Construcción y liderazgo de proyectos para que cualquier persona pueda vivir plenamente en catalán en el mundo digital: XMCD (monitoreo), la Lista de creadores e iniciativas de IA en catalán como Frec.',
        now: true,
      },
      {
        yr: '2020 — 2023',
        h4: 'Fundació .cat',
        role: 'Ingeniero de datos, backend & BI',
        desc: 'Innovación data-driven, backend de la plataforma de Inteligencia de Negocio y orquestación de integraciones cross-platform.',
      },
      {
        yr: '2017 — 2019',
        h4: 'WellTech TMS',
        role: 'Cofundador & Ingeniero de Software',
        desc: 'Spin-off de software terapéutico. Liderazgo técnico adaptando investigación académica a producto comercial.',
      },
      {
        yr: '2011 — 2019',
        h4: 'Universitat Rovira i Virgili · ALGOS',
        role: 'Responsable de eHealth & Ingeniero de Software',
        desc: 'Estrategia tecnológica y apps para pacientes con dolor crónico: Fibroline y Painometer.',
      },
      {
        yr: '2011 — 2015',
        h4: 'Universitat Oberta de Catalunya',
        role: 'Profesor Adjunto · Ingeniería Informática',
        desc: 'Docencia de grado y máster y supervisión de 23 proyectos finales.',
      },
      {
        yr: '2002 — 2009',
        h4: 'BSC · INB · Arte · MicroArt',
        role: 'Investigación, web semántica & bioinformática',
        desc: 'Supercomputación en MareNostrum, ontologías clínicas y sistemas de soporte a la decisión basados en agentes.',
      },
    ],
  },
  sobre: {
    kicker: 'Sobre mí',
    lead: 'Me mueve una idea simple: la tecnología debe hacer a las personas más **capaces**, no más dependientes.',
    p2: 'No pretendo revolucionar industrias, sino aportar mi granito de arena para que la gente consiga los resultados que desea —y se sienta más competente haciéndolo. Creo en el aprendizaje constante, la escucha activa y la colaboración.',
    p3: 'Con la IA en el centro de mi trabajo, la premisa no cambia: cambia la herramienta, no el propósito.',
    langsLabel: 'Idiomas',
    langs: [
      { n: 'Català', lv: 'Nativo' },
      { n: 'Español', lv: 'Nativo' },
      { n: 'English', lv: 'Intermedio · B1' },
    ],
    quote: '«Compartir es aprender.»',
    quoteP:
      'Esta web es abierta en GitHub, como buena parte de lo que construyo. Me gusta hacer cosas que otros puedan reutilizar, cuestionar y mejorar —la misma lógica que aplico a los equipos.',
    quoteMeta: '— Roman Roset Mayals',
  },
  footer: {
    h2: 'Hablemos de hacer la IA útil de verdad.',
    p: 'Disponible para proyectos, colaboraciones y conversaciones sobre ingeniería de sistemas, datos y agentes.',
    mail: 'romanroset@proton.me',
    linksLabel: 'Enlaces',
    links: FOOT_LINKS,
    copyr: '© 2026 Roman Roset Mayals · Barcelona',
    stack: 'Next.js · Tailwind · Vercel',
  },
}

/* ===================================== EN ===================================== */
const en: HomeContent = {
  meta: {
    title: 'Roman Roset — Systems engineer · Agentic AI',
    description:
      'Roman Roset Mayals — Data & systems engineer. I build agentic systems on data, process and evidence. Barcelona.',
  },
  nav: {
    perfil: 'Profile',
    focus: 'Focus',
    projectes: 'Projects',
    credencials: 'Credentials',
    trajectoria: 'Career',
  },
  navCta: 'Résumé',
  hero: {
    tags: ['Barcelona', '20+ years of engineering'],
    live: 'Senior engineer · Accent Obert',
    liveUrl: 'https://accentobert.cat',
    h1: 'I build agentic systems on **data**, process and evidence.',
    lede: "I'm Roman Roset, a data & systems engineer with twenty years across backend, BI, digital health, research and process. Now I focus on agentic systems for organisations: harness, agents, memory, contracts, metrics and governance.",
    mission:
      'I care about an AI that does not replace human judgement, but enables people and teams to work better.',
    ctaProjects: 'See projects',
    ctaCV: 'Full résumé',
    credTop: 'Anthropic Academy',
    credSub: '9 AI programs · 2026',
  },
  perfil: {
    kicker: 'Observed profile',
    h2: 'What six agents see',
    intro:
      'To review my own way of working, I had six independent agents analyse the code, the decisions and the results. The summary: a repeated pattern, convergent evidence and detected blind spots.',
    methodLabel: 'Method',
    methodProject: 'laboratori_profes',
    traits: [
      {
        ix: '01',
        conv: 'convergence 4/6',
        h3: 'I never open fronts without closed evidence',
        p: 'One goal closed with evidence before opening the next. Never parallel fronts. When a step is too big, I promote it to its own project instead of splitting attention.',
        evLabel: 'Evidence',
        ev: '~~43~~ product cycles closed consecutively at 100% of OKRs',
      },
      {
        ix: '02',
        conv: 'convergence 4/6',
        h3: 'I decide by evidence, not intuition',
        p: 'The first question is not "how do I do it" but "is it needed?". I cut features and debt by measurement, not by aesthetics. Mock → smoke → real, with metrics as acceptance criteria.',
        evLabel: 'Evidence',
        ev: 'model dropped because of ~~MAE 0.133 vs 0.241~~, not opinion',
      },
      {
        ix: '03',
        conv: 'technical signature',
        h3: 'I think in contracts and invariants',
        p: 'I define the Protocol and the "no" before the "how": behaviour stays bounded and auditable. Privacy and cost as design invariants, not compliance bolted on later.',
        evLabel: 'Evidence',
        ev: 'honest fail-hard · cost annotated in ~~€~~ and approved before running',
      },
      {
        ix: '04',
        conv: 'unanimity 6/6',
        h3: 'Leadership by delegation',
        p: "I externalise team discipline to the environment —conventions, hooks, protocols— so quality does not depend on anyone's memory. I coordinate without micromanaging.",
        evLabel: 'Fit',
        ev: 'small team (~~2–5~~) · founding/tech lead with hands on the code',
      },
    ],
    honestLabel: 'Self-awareness',
    honest:
      '"My mental model runs fast and sometimes gets ahead of verification. I work best with the real result nearby to check it before committing."',
  },
  focus: {
    kicker: 'Right now',
    h2: 'Where I put my energy',
    intro:
      'Three reinforcing layers. The new one, which I am building in depth; the two that hold up twenty years of craft.',
    pillars: [
      {
        n: '01 / direction',
        h3: 'Agentic systems',
        p: 'I design the architecture and governance of multi-agent systems: orchestrator, workers, oracle, persistent memory and process. I treat AI as a harness —roles, contracts, memory and human checkpoints—, not just prompting: structure, process and verification.',
        tags: ['Claude Code', 'MCP', 'agents', 'OKR'],
      },
      {
        n: '02 / foundation',
        h3: 'Backend, data & evidence',
        p: 'Deterministic LLM pipelines, APIs and data engineering. Python, FastAPI, Docker, SQL and the semantic web —the solid base of everything I build.',
        tags: ['Python', 'FastAPI', 'Docker', 'PostgreSQL'],
      },
      {
        n: '03 / leadership',
        h3: 'Tech lead & process',
        p: 'I translate real need into shipped product. Process design, OKRs and KPIs that make small teams more agile, without bureaucracy or micromanagement.',
        tags: ['Agile', 'OKR', 'BPMN'],
      },
    ],
  },
  projectes: {
    kicker: 'Selection',
    h2: 'Projects',
    intro:
      'Things I am building or have led. From the agent framework that governs my projects to clinical apps with published research.',
    items: [
      {
        feature: true,
        kind: 'Own system',
        status: 'evolving',
        title: 'Agentic project framework',
        desc: 'A manual and set of components to orchestrate projects with Claude Code agents: base agents (orchestrator / worker / oracle), teams (OKR, PM, Dev, Editorial, Data analysis), persistent memory services and processes with BPMN conventions. Distilled from a real project —no piece enters without having proven its value.',
        stack: ['Claude Code', 'multi-agent', 'memory', 'governance', 'BPMN'],
        diagram: {
          side: 'right',
          nodes: [
            { lab: 'orchestrator', nm: 'Coordinates · translates intent', role: 'decides' },
            { lab: 'worker · oracle', nm: 'Executes · architectural judgement', role: 'acts' },
            { lab: 'memory service', nm: 'Context across sessions', role: 'remembers' },
          ],
          conns: ['summons', 'persists'],
        },
      },
      {
        feature: true,
        kind: 'Lab · quant',
        status: 'validation',
        title: 'Agentic algorithmic trading',
        desc: 'Brain/body architecture to trade crypto-perpetuals on a DEX: the brain decides, the gateway executes. Strategy validated with Monte Carlo (3/3) and Walk-Forward (7/9 positive years), with a production gate and paper/live modes. Quantitative rigour before any real euro.',
        stack: ['Python 3.11', 'FastAPI', 'asyncio', 'Docker'],
        diagram: {
          side: 'left',
          nodes: [
            { lab: 'TradingAgent · brain', nm: 'Decides WHAT and WHEN', role: 'strategy' },
            { lab: 'BrokerageService · body', nm: 'Executes · data · positions', role: 'gateway' },
            { lab: 'lab', nm: 'Monte Carlo · Walk-Forward', role: 'evidence' },
          ],
          conns: ['HTTP', 'validates'],
        },
      },
      {
        kind: 'Fundació .cat',
        status: 'v1.0 · 2024',
        title: 'XMCD',
        desc: 'Digital Catalan Monitoring Network: Raspberry Pi sensors connected over a WireGuard VPN running daily automated searches to measure the visibility of Catalan on Google. Data engineering with a cultural purpose.',
        stack: ['Python', 'crawling', 'WireGuard', 'Zabbix'],
      },
      {
        kind: 'Open source',
        status: 'GitHub',
        title: 'romanroset.dev',
        url: URL_SITE,
        desc: 'This site, in the open. Next.js, Tailwind and TypeScript with multilingual support (CA/ES/EN). Building things others can reuse and improve.',
        stack: ['Next.js', 'Tailwind', 'TypeScript', 'i18n'],
      },
      {
        kind: 'eHealth · research',
        kindLegacy: true,
        status: 'published',
        title: 'Fibroline',
        url: URL_FIBROLINE,
        desc: 'Self-administered cognitive-behavioural treatment app for chronic pain. I fully developed the first version. Research validated with patients and published.',
        stack: ['Java', 'Android', 'Firebase'],
      },
      {
        kind: 'eHealth · research',
        kindLegacy: true,
        status: '79+ citations',
        title: 'Painometer',
        url: URL_PAINOMETER,
        desc: 'Mobile app to measure, store and share pain intensity. I developed the Android version. Widely cited in the scientific literature.',
        stack: ['Java', 'Android', 'jQuery'],
      },
    ],
  },
  certs: {
    kicker: 'Continuous learning',
    h2: 'Recent AI training',
    intro:
      'Recent training in agentic AI (Anthropic Academy) on a certified engineering foundation. Each badge links to its verification.',
    items: certsBase('JavaScript Certificate'),
    verify: 'Verify',
    verifiable: 'Verifiable',
  },
  trajectoria: {
    kicker: 'Career',
    h2: 'Twenty years of craft',
    intro:
      'From supercomputing and bioinformatics to digital health and data-driven innovation. Always with the same compass: technology useful for people.',
    stats: [
      { n: '20**+**', l: 'years of craft in technology' },
      { n: '8', l: 'organisations: research, university, spin-off and foundation' },
      { n: '11', l: 'scientific publications', href: '/publicacions' },
      { n: '4', l: 'years of university teaching (UOC)' },
      { n: '6', l: 'years leading technology at Fundació .cat' },
    ],
    timeline: [
      {
        yr: '2023 — present',
        h4: 'Accent Obert · Fundació .cat',
        role: 'Senior Engineer · technology projects and process',
        desc: 'Building and leading projects so anyone can live fully in Catalan in the digital world: XMCD (monitoring), the Creators list and Catalan AI initiatives such as Frec.',
        now: true,
      },
      {
        yr: '2020 — 2023',
        h4: 'Fundació .cat',
        role: 'Data engineer, backend & BI',
        desc: 'Data-driven innovation, backend of the Business Intelligence platform and orchestration of cross-platform integrations.',
      },
      {
        yr: '2017 — 2019',
        h4: 'WellTech TMS',
        role: 'Co-founder & Software Engineer',
        desc: 'Therapeutic software spin-off. Technical leadership adapting academic research into a commercial product.',
      },
      {
        yr: '2011 — 2019',
        h4: 'Universitat Rovira i Virgili · ALGOS',
        role: 'eHealth lead & Software Engineer',
        desc: 'Technology strategy and apps for chronic pain patients: Fibroline and Painometer.',
      },
      {
        yr: '2011 — 2015',
        h4: 'Universitat Oberta de Catalunya',
        role: 'Adjunct Professor · Computer Engineering',
        desc: 'Undergraduate and master teaching and supervision of 23 final projects.',
      },
      {
        yr: '2002 — 2009',
        h4: 'BSC · INB · Arte · MicroArt',
        role: 'Research, semantic web & bioinformatics',
        desc: 'Supercomputing on MareNostrum, clinical ontologies and agent-based decision support systems.',
      },
    ],
  },
  sobre: {
    kicker: 'About me',
    lead: 'A simple idea drives me: technology should make people more **capable**, not more dependent.',
    p2: "I don't aim to revolutionise industries, but to add my grain of sand so people achieve the results they want —and feel more competent doing it. I believe in constant learning, active listening and collaboration.",
    p3: 'With AI at the centre of my work, the premise does not change: the tool changes, not the purpose.',
    langsLabel: 'Languages',
    langs: [
      { n: 'Català', lv: 'Native' },
      { n: 'Español', lv: 'Native' },
      { n: 'English', lv: 'Intermediate · B1' },
    ],
    quote: '"Sharing is learning."',
    quoteP:
      'This site is open on GitHub, like most of what I build. I like making things others can reuse, question and improve —the same logic I apply to teams.',
    quoteMeta: '— Roman Roset Mayals',
  },
  footer: {
    h2: "Let's talk about making AI genuinely useful.",
    p: 'Available for projects, collaborations and conversations about systems engineering, data and agents.',
    mail: 'romanroset@proton.me',
    linksLabel: 'Links',
    links: FOOT_LINKS,
    copyr: '© 2026 Roman Roset Mayals · Barcelona',
    stack: 'Next.js · Tailwind · Vercel',
  },
}

export const homeData: Record<string, HomeContent> = { ca, es, en }

export function getHomeContent(locale?: string): HomeContent {
  return homeData[locale ?? 'ca'] ?? homeData.ca
}
