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
export interface Credential {
  title: string
  issuer: string
  year: string
  detail?: string
  verify?: string
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
    signals: { label: string; value: string }[]
  }
  perfil: {
    kicker: string
    h2: string
    intro: string
    traits: Trait[]
    honestLabel: string
    honest: string
  }
  focus: { kicker: string; h2: string; intro: string; pillars: Pillar[] }
  projectes: { kicker: string; h2: string; intro: string; items: ProjectItem[] }
  credentials: {
    kicker: string
    h2: string
    intro: string
    verify: string
    items: Credential[]
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

const FOOT_LINKS: FootLink[] = [
  { label: 'Accent Obert', url: 'https://accentobert.cat' },
  { label: 'GitHub', url: 'https://github.com/romros' },
  { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=PCNSAi4AAAAJ' },
  { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Roman-Roset-Mayals' },
  { label: 'Twitter / X', url: 'https://twitter.com/romanroset' },
]

const SPRING_CREDENTIAL =
  'https://www.credly.com/badges/b74a8a79-d07a-4c8c-86f1-4a34cf9d019b/public_url'

/* ===================================== CA ===================================== */
const ca: HomeContent = {
  meta: {
    title: 'Roman Roset — Enginyer sènior de sistemes, dades i IA aplicada',
    description:
      'Roman Roset Mayals — Enginyer sènior hands-on. Sistemes, dades, producte i IA aplicada amb més de vint anys d’ofici.',
  },
  nav: {
    perfil: 'Perfil',
    focus: 'Focus',
    projectes: 'Projectes',
    trajectoria: 'Trajectòria',
  },
  navCta: 'Currículum',
  hero: {
    tags: ['Barcelona', "20+ anys d'enginyeria"],
    live: 'Enginyer sènior · Accent Obert',
    liveUrl: 'https://accentobert.cat',
    h1: 'Converteixo problemes complexos en **sistemes útils**.',
    lede: "Sóc Roman Roset, enginyer sènior hands-on amb més de vint anys d'ofici. Connecto una necessitat real amb l'arquitectura, les dades i un producte que es pot operar: del backend i els processos fins a la IA aplicada.",
    mission:
      'Aporto criteri tècnic, capacitat d’execució i una obsessió útil: que la tecnologia faci les persones més capaces, no més dependents.',
    ctaProjects: 'Veure projectes',
    ctaCV: 'Veure currículum',
    credTop: 'Trajectòria',
    credSub: '20+ anys · producte, dades i recerca',
    signals: [
      { label: 'abast', value: 'del problema a producció' },
      { label: 'especialitat', value: 'dades · sistemes · IA' },
      { label: 'manera de fer', value: 'criteri · codi · operació' },
    ],
  },
  perfil: {
    kicker: 'Perfil professional',
    h2: 'El valor que aporto',
    intro:
      'Un perfil sènior i hands-on: puc entendre el problema, decidir l’arquitectura, construir el sistema i acompanyar l’equip fins que el resultat funciona de debò.',
    traits: [
      {
        ix: '01',
        conv: 'criteri de sistema',
        h3: 'Veig el conjunt sense perdre el detall',
        p: 'Modelo domini, dades, serveis, riscos i operació abans de fixar una solució. Després baixo al codi i comprovo si l’arquitectura aguanta el món real.',
        evLabel: 'Trajectòria',
        ev: 'backend · dades · recerca · producte · operació',
      },
      {
        ix: '02',
        conv: 'execució',
        h3: 'Porto una necessitat fins a producte',
        p: 'Tradueixo objectius de persones no tècniques a contractes, fluxos i software desplegable. Puc liderar la decisió i continuar amb les mans al codi.',
        evLabel: 'Mostra',
        ev: 'de la recerca clínica a productes i serveis en producció',
      },
      {
        ix: '03',
        conv: 'fiabilitat',
        h3: 'Decideixo amb evidència',
        p: 'Contractes, proves, mètriques, costos i privadesa formen part del disseny. Amb IA comparo models i resultats; no confonc una resposta convincent amb un sistema fiable.',
        evLabel: 'Mètode',
        ev: 'baselines · E2E · cost real · validació humana',
      },
      {
        ix: '04',
        conv: 'lideratge hands-on',
        h3: 'Faig créixer equips i criteri',
        p: 'Dono estructura, límits i context perquè les persones puguin decidir millor. Prefereixo processos lleugers que deixin rastre i redueixin dependències personals.',
        evLabel: 'Experiència',
        ev: 'tech lead · cofundador · processos · ~~23~~ projectes universitaris',
      },
    ],
    honestLabel: 'Regla que m’imposo',
    honest:
      '«Tinc facilitat per donar estructura als problemes complexos; també sé que en puc construir més de la necessària. Per això treballo amb fites curtes, evidència real i una regla: la complexitat s’ha de guanyar.»',
  },
  focus: {
    kicker: 'Forma de treballar',
    h2: 'Com afronto els projectes',
    intro:
      'Combino profunditat tècnica, lectura de producte i eines d’IA sense convertir l’eina de moda en l’arquitectura.',
    pillars: [
      {
        n: '01 / entendre',
        h3: 'Problema abans que solució',
        p: 'Aclareixo el domini, els usuaris, els invariants i què voldrà dir “funciona”. Retallo abans de construir i separo el que és essencial del que només és interessant.',
        tags: ['domini', 'producte', 'risc', 'privadesa'],
      },
      {
        n: '02 / construir',
        h3: 'Sistemes que es poden operar',
        p: 'Backend, dades, contractes, proves i desplegament formen una sola decisió. Construeixo perquè el sistema sigui comprensible, observable i modificable després de la primera versió.',
        tags: ['Python', 'FastAPI', 'TypeScript', 'PostgreSQL', 'Docker'],
      },
      {
        n: '03 / amplificar',
        h3: 'IA aplicada amb criteri',
        p: 'Construeixo harnesses lleugers: context ben delimitat, skills reutilitzables, comprovacions i el model adequat segons la feina, la qualitat i el cost. Faig servir agents només quan coordinar contextos o especialitats aporta més valor que complexitat.',
        tags: ['harness', 'skills', 'selecció de models', 'MCP', 'avaluació'],
      },
    ],
  },
  projectes: {
    kicker: 'Selecció',
    h2: 'Àmbits on aporto valor',
    intro:
      'La feina actual és privada. N’explico el tipus de problema i la responsabilitat, no els detalls interns. Els projectes personals i la recerca completen la imatge.',
    items: [
      {
        feature: true,
        kind: 'Feina actual · confidencial',
        status: 'sistemes interns',
        title: 'De dades estructurades a decisions útils',
        desc: 'He evolucionat de construir bases de dades, ETL i BI a dissenyar formes perquè els equips consultin, interpretin i converteixin aquestes dades en decisions amb suport d’IA. La meva responsabilitat recorre la base de dades, la qualitat de la resposta, el cost i l’encaix amb el procés humà.',
        stack: ['dades estructurades', 'Mage · Metabase', 'IA aplicada', 'APIs', 'avaluació'],
        diagram: {
          side: 'right',
          nodes: [
            { lab: 'fonament', nm: 'Dades · qualitat · context', role: 'sosté' },
            { lab: 'sistema', nm: 'Consulta · informe · interacció', role: 'assisteix' },
            { lab: 'persones', nm: 'Criteri · decisió · acció', role: 'decideixen' },
          ],
          conns: ['estructura', 'capacita'],
        },
      },
      {
        feature: true,
        kind: 'Producte personal',
        status: 'en proves i desenvolupament',
        title: 'profes.cat',
        url: 'https://profes.cat',
        desc: 'Un producte que estic construint en el meu temps lliure per ajudar professorat d’FP. Encara està en proves: el treball no és només fer que la tecnologia funcioni, sinó trobar una manera rigorosa, privada i realment útil d’acompanyar el criteri docent.',
        stack: ['producte', 'educació', 'privadesa', 'IA aplicada'],
        diagram: {
          side: 'left',
          nodes: [
            { lab: 'professor', nm: 'Experiència · criteri · control', role: 'decideix' },
            { lab: 'producte', nm: 'Flux clar · assistència · privadesa', role: 'ajuda' },
            { lab: 'prova', nm: 'Ús real · errors · aprenentatge', role: 'millora' },
          ],
          conns: ['orienta', 'valida'],
        },
      },
      {
        kind: 'Feina actual · confidencial',
        status: 'integració i producte intern',
        title: 'Processos de negoci sense la fricció de l’eina',
        desc: 'Dissenyo integracions, automatitzacions i interfícies a mida sobre CRM i ERP. L’objectiu no és afegir una altra capa de software, sinó adaptar HubSpot, Odoo o Zoho al procés real i reduir la corba d’aprenentatge de les persones.',
        stack: ['HubSpot', 'Odoo', 'Zoho', 'APIs', 'frontends a mida'],
      },
      {
        kind: 'eHealth · producte i recerca',
        status: '11 publicacions',
        title: 'Fibroline, Painometer i recerca aplicada',
        url: '/publicacions',
        desc: 'Aplicacions per a persones amb dolor crònic construïdes amb equips clínics, més onze publicacions revisades per parells. Una etapa que va consolidar la meva manera de treballar: tecnologia, persones i evidència en el mateix sistema.',
        stack: ['Java', 'Android', 'eHealth', 'recerca aplicada'],
      },
    ],
  },
  credentials: {
    kicker: 'Formació contínua',
    h2: 'Credencials seleccionades',
    intro:
      'La trajectòria demostra el nivell; aquestes credencials mostren que continuo actualitzant eines i fonaments. He completat nou programes d’Anthropic Academy el 2026; aquí en destaco els més rellevants.',
    verify: 'Verificar',
    items: [
      {
        title: 'Spring Certified Professional',
        issuer: 'VMware',
        year: '2023',
        detail: 'Java · Spring · backend',
        verify: SPRING_CREDENTIAL,
      },
      {
        title: 'AI Fluency: Framework & Foundations',
        issuer: 'Anthropic Academy',
        year: '2026',
        detail: 'Resultat 9/10',
        verify: 'https://verify.skilljar.com/c/baq7aydnnkx7',
      },
      {
        title: 'Building with the Claude API',
        issuer: 'Anthropic Academy',
        year: '2026',
        detail: 'Integració de models i producte',
        verify: 'https://verify.skilljar.com/c/2hbfqux7ezhb',
      },
      {
        title: 'Introduction to Model Context Protocol',
        issuer: 'Anthropic Academy',
        year: '2026',
        detail: 'MCP · eines i context',
        verify: 'https://verify.skilljar.com/c/89n6hy639snz',
      },
      {
        title: 'AI Fluency for Nonprofits',
        issuer: 'Anthropic Academy',
        year: '2026',
        detail: 'IA aplicada a organitzacions',
        verify: 'https://verify.skilljar.com/c/cywdpm62tphz',
      },
    ],
  },
  trajectoria: {
    kicker: 'Trajectòria',
    h2: "Vint anys d'ofici",
    intro:
      'De la supercomputació i la bioinformàtica a la salut digital i la innovació data-driven. Sempre amb la mateixa brúixola: tecnologia útil per a les persones.',
    stats: [
      { n: '20**+**', l: "anys d'ofici en tecnologia" },
      { n: '11', l: 'publicacions científiques', href: '/publicacions' },
      { n: '23', l: 'projectes finals universitaris supervisats' },
      { n: '4', l: 'anys de docència universitària (UOC)' },
      { n: '6**+**', l: 'anys construint sistemes de dades i processos interns' },
    ],
    timeline: [
      {
        yr: '2023 — present',
        h4: 'Accent Obert',
        role: 'Enginyer sènior · sistemes, dades i IA aplicada',
        desc: 'Disseny i implementació end-to-end de sistemes interns de decisió sobre dades estructurades, integracions CRM/ERP i solucions d’IA amb criteris de qualitat, cost i utilitat real.',
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
    p3: 'Amb la IA, busco la mínima estructura que doni un resultat fiable: una skill, un model o un harness; agents només quan el problema realment demana coordinació.',
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
    h2: 'Parlem de sistemes que hagin de funcionar de debò.',
    p: 'Projectes, col·laboracions i converses sobre dades, backend, producte i IA aplicada amb criteri.',
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
    title: 'Roman Roset — Ingeniero sénior de sistemas, datos e IA aplicada',
    description:
      'Roman Roset Mayals — Ingeniero sénior hands-on. Sistemas, datos, producto e IA aplicada con más de veinte años de oficio.',
  },
  nav: {
    perfil: 'Perfil',
    focus: 'Foco',
    projectes: 'Proyectos',
    trajectoria: 'Trayectoria',
  },
  navCta: 'Currículum',
  hero: {
    tags: ['Barcelona', '20+ años de ingeniería'],
    live: 'Ingeniero sénior · Accent Obert',
    liveUrl: 'https://accentobert.cat',
    h1: 'Convierto problemas complejos en **sistemas útiles**.',
    lede: 'Soy Roman Roset, ingeniero sénior hands-on con más de veinte años de oficio. Conecto una necesidad real con la arquitectura, los datos y un producto que se puede operar: desde el backend y los procesos hasta la IA aplicada.',
    mission:
      'Aporto criterio técnico, capacidad de ejecución y una obsesión útil: que la tecnología haga a las personas más capaces, no más dependientes.',
    ctaProjects: 'Ver proyectos',
    ctaCV: 'Ver currículum',
    credTop: 'Trayectoria',
    credSub: '20+ años · producto, datos e investigación',
    signals: [
      { label: 'alcance', value: 'del problema a producción' },
      { label: 'especialidad', value: 'datos · sistemas · IA' },
      { label: 'forma de hacer', value: 'criterio · código · operación' },
    ],
  },
  perfil: {
    kicker: 'Perfil profesional',
    h2: 'El valor que aporto',
    intro:
      'Un perfil sénior y hands-on: puedo entender el problema, decidir la arquitectura, construir el sistema y acompañar al equipo hasta que el resultado funciona de verdad.',
    traits: [
      {
        ix: '01',
        conv: 'criterio de sistema',
        h3: 'Veo el conjunto sin perder el detalle',
        p: 'Modelo dominio, datos, servicios, riesgos y operación antes de fijar una solución. Después bajo al código y compruebo si la arquitectura aguanta el mundo real.',
        evLabel: 'Trayectoria',
        ev: 'backend · datos · investigación · producto · operación',
      },
      {
        ix: '02',
        conv: 'ejecución',
        h3: 'Llevo una necesidad hasta producto',
        p: 'Traduzco objetivos de personas no técnicas a contratos, flujos y software desplegable. Puedo liderar la decisión y seguir con las manos en el código.',
        evLabel: 'Muestra',
        ev: 'de la investigación clínica a productos y servicios en producción',
      },
      {
        ix: '03',
        conv: 'fiabilidad',
        h3: 'Decido con evidencia',
        p: 'Contratos, pruebas, métricas, costes y privacidad forman parte del diseño. Con IA comparo modelos y resultados; no confundo una respuesta convincente con un sistema fiable.',
        evLabel: 'Método',
        ev: 'baselines · E2E · coste real · validación humana',
      },
      {
        ix: '04',
        conv: 'liderazgo hands-on',
        h3: 'Hago crecer equipos y criterio',
        p: 'Doy estructura, límites y contexto para que las personas puedan decidir mejor. Prefiero procesos ligeros que dejen rastro y reduzcan dependencias personales.',
        evLabel: 'Experiencia',
        ev: 'tech lead · cofundador · procesos · ~~23~~ proyectos universitarios',
      },
    ],
    honestLabel: 'Regla que me impongo',
    honest:
      '«Tengo facilidad para dar estructura a los problemas complejos; también sé que puedo construir más de la necesaria. Por eso trabajo con hitos cortos, evidencia real y una regla: la complejidad debe ganarse.»',
  },
  focus: {
    kicker: 'Forma de trabajar',
    h2: 'Cómo afronto los proyectos',
    intro:
      'Combino profundidad técnica, lectura de producto y herramientas de IA sin convertir la herramienta de moda en la arquitectura.',
    pillars: [
      {
        n: '01 / entender',
        h3: 'Problema antes que solución',
        p: 'Aclaro el dominio, los usuarios, los invariantes y qué significará “funciona”. Recorto antes de construir y separo lo esencial de lo que solo es interesante.',
        tags: ['dominio', 'producto', 'riesgo', 'privacidad'],
      },
      {
        n: '02 / construir',
        h3: 'Sistemas que se pueden operar',
        p: 'Backend, datos, contratos, pruebas y despliegue forman una sola decisión. Construyo para que el sistema sea comprensible, observable y modificable después de la primera versión.',
        tags: ['Python', 'FastAPI', 'TypeScript', 'PostgreSQL', 'Docker'],
      },
      {
        n: '03 / amplificar',
        h3: 'IA aplicada con criterio',
        p: 'Construyo harnesses ligeros: contexto bien delimitado, skills reutilizables, comprobaciones y el modelo adecuado según la tarea, la calidad y el coste. Uso agentes solo cuando coordinar contextos o especialidades aporta más valor que complejidad.',
        tags: ['harness', 'skills', 'selección de modelos', 'MCP', 'evaluación'],
      },
    ],
  },
  projectes: {
    kicker: 'Selección',
    h2: 'Ámbitos donde aporto valor',
    intro:
      'El trabajo actual es privado. Explico el tipo de problema y la responsabilidad, no los detalles internos. Los proyectos personales y la investigación completan la imagen.',
    items: [
      {
        feature: true,
        kind: 'Trabajo actual · confidencial',
        status: 'sistemas internos',
        title: 'De datos estructurados a decisiones útiles',
        desc: 'He evolucionado de construir bases de datos, ETL y BI a diseñar formas para que los equipos consulten, interpreten y conviertan esos datos en decisiones con apoyo de IA. Mi responsabilidad recorre la base de datos, la calidad de la respuesta, el coste y el encaje con el proceso humano.',
        stack: ['datos estructurados', 'Mage · Metabase', 'IA aplicada', 'APIs', 'evaluación'],
        diagram: {
          side: 'right',
          nodes: [
            { lab: 'fundamento', nm: 'Datos · calidad · contexto', role: 'sostiene' },
            { lab: 'sistema', nm: 'Consulta · informe · interacción', role: 'asiste' },
            { lab: 'personas', nm: 'Criterio · decisión · acción', role: 'deciden' },
          ],
          conns: ['estructura', 'capacita'],
        },
      },
      {
        feature: true,
        kind: 'Producto personal',
        status: 'en pruebas y desarrollo',
        title: 'profes.cat',
        url: 'https://profes.cat',
        desc: 'Un producto que estoy construyendo en mi tiempo libre para ayudar al profesorado de FP. Todavía está en pruebas: el trabajo no consiste solo en hacer que la tecnología funcione, sino en encontrar una forma rigurosa, privada y realmente útil de acompañar el criterio docente.',
        stack: ['producto', 'educación', 'privacidad', 'IA aplicada'],
        diagram: {
          side: 'left',
          nodes: [
            { lab: 'profesor', nm: 'Experiencia · criterio · control', role: 'decide' },
            { lab: 'producto', nm: 'Flujo claro · asistencia · privacidad', role: 'ayuda' },
            { lab: 'prueba', nm: 'Uso real · errores · aprendizaje', role: 'mejora' },
          ],
          conns: ['orienta', 'valida'],
        },
      },
      {
        kind: 'Trabajo actual · confidencial',
        status: 'integración y producto interno',
        title: 'Procesos de negocio sin la fricción de la herramienta',
        desc: 'Diseño integraciones, automatizaciones e interfaces a medida sobre CRM y ERP. El objetivo no es añadir otra capa de software, sino adaptar HubSpot, Odoo o Zoho al proceso real y reducir la curva de aprendizaje de las personas.',
        stack: ['HubSpot', 'Odoo', 'Zoho', 'APIs', 'frontends a medida'],
      },
      {
        kind: 'eHealth · producto e investigación',
        status: '11 publicaciones',
        title: 'Fibroline, Painometer e investigación aplicada',
        url: '/publicacions',
        desc: 'Aplicaciones para personas con dolor crónico construidas con equipos clínicos, junto a once publicaciones revisadas por pares. Una etapa que consolidó mi manera de trabajar: tecnología, personas y evidencia en el mismo sistema.',
        stack: ['Java', 'Android', 'eHealth', 'investigación aplicada'],
      },
    ],
  },
  credentials: {
    kicker: 'Formación continua',
    h2: 'Credenciales seleccionadas',
    intro:
      'La trayectoria demuestra el nivel; estas credenciales muestran que sigo actualizando herramientas y fundamentos. He completado nueve programas de Anthropic Academy en 2026; aquí destaco los más relevantes.',
    verify: 'Verificar',
    items: [
      {
        title: 'Spring Certified Professional',
        issuer: 'VMware',
        year: '2023',
        detail: 'Java · Spring · backend',
        verify: SPRING_CREDENTIAL,
      },
      {
        title: 'AI Fluency: Framework & Foundations',
        issuer: 'Anthropic Academy',
        year: '2026',
        detail: 'Resultado 9/10',
        verify: 'https://verify.skilljar.com/c/baq7aydnnkx7',
      },
      {
        title: 'Building with the Claude API',
        issuer: 'Anthropic Academy',
        year: '2026',
        detail: 'Integración de modelos y producto',
        verify: 'https://verify.skilljar.com/c/2hbfqux7ezhb',
      },
      {
        title: 'Introduction to Model Context Protocol',
        issuer: 'Anthropic Academy',
        year: '2026',
        detail: 'MCP · herramientas y contexto',
        verify: 'https://verify.skilljar.com/c/89n6hy639snz',
      },
      {
        title: 'AI Fluency for Nonprofits',
        issuer: 'Anthropic Academy',
        year: '2026',
        detail: 'IA aplicada a organizaciones',
        verify: 'https://verify.skilljar.com/c/cywdpm62tphz',
      },
    ],
  },
  trajectoria: {
    kicker: 'Trayectoria',
    h2: 'Veinte años de oficio',
    intro:
      'De la supercomputación y la bioinformática a la salud digital y la innovación data-driven. Siempre con la misma brújula: tecnología útil para las personas.',
    stats: [
      { n: '20**+**', l: 'años de oficio en tecnología' },
      { n: '11', l: 'publicaciones científicas', href: '/publicacions' },
      { n: '23', l: 'proyectos finales universitarios supervisados' },
      { n: '4', l: 'años de docencia universitaria (UOC)' },
      { n: '6**+**', l: 'años construyendo sistemas de datos y procesos internos' },
    ],
    timeline: [
      {
        yr: '2023 — presente',
        h4: 'Accent Obert',
        role: 'Ingeniero sénior · sistemas, datos e IA aplicada',
        desc: 'Diseño e implementación end-to-end de sistemas internos de decisión sobre datos estructurados, integraciones CRM/ERP y soluciones de IA con criterios de calidad, coste y utilidad real.',
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
    p3: 'Con la IA, busco la mínima estructura que produzca un resultado fiable: una skill, un modelo o un harness; agentes solo cuando el problema realmente exige coordinación.',
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
    h2: 'Hablemos de sistemas que deban funcionar de verdad.',
    p: 'Proyectos, colaboraciones y conversaciones sobre datos, backend, producto e IA aplicada con criterio.',
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
    title: 'Roman Roset — Senior systems, data & applied AI engineer',
    description:
      'Roman Roset Mayals — Senior hands-on engineer. Systems, data, product and applied AI backed by more than twenty years of craft.',
  },
  nav: {
    perfil: 'Profile',
    focus: 'Focus',
    projectes: 'Projects',
    trajectoria: 'Career',
  },
  navCta: 'Résumé',
  hero: {
    tags: ['Barcelona', '20+ years of engineering'],
    live: 'Senior engineer · Accent Obert',
    liveUrl: 'https://accentobert.cat',
    h1: 'I turn complex problems into **useful systems**.',
    lede: "I'm Roman Roset, a senior hands-on engineer with more than twenty years of craft. I connect a real need with the architecture, data and an operable product: from backend and process through to applied AI.",
    mission:
      'I bring technical judgement, delivery capability and one useful obsession: technology should make people more capable, not more dependent.',
    ctaProjects: 'See projects',
    ctaCV: 'View résumé',
    credTop: 'Track record',
    credSub: '20+ years · product, data & research',
    signals: [
      { label: 'scope', value: 'from problem to production' },
      { label: 'specialism', value: 'data · systems · AI' },
      { label: 'practice', value: 'judgement · code · operations' },
    ],
  },
  perfil: {
    kicker: 'Professional profile',
    h2: 'The value I bring',
    intro:
      'A senior, hands-on profile: I can understand the problem, choose the architecture, build the system and support the team until the outcome actually works.',
    traits: [
      {
        ix: '01',
        conv: 'systems judgement',
        h3: 'I see the whole without losing the detail',
        p: 'I model the domain, data, services, risks and operation before fixing a solution. Then I go down to the code and test whether the architecture survives the real world.',
        evLabel: 'Track record',
        ev: 'backend · data · research · product · operations',
      },
      {
        ix: '02',
        conv: 'delivery',
        h3: 'I take a need all the way to product',
        p: 'I translate non-technical goals into contracts, flows and deployable software. I can lead the decision and remain hands-on with the code.',
        evLabel: 'Examples',
        ev: 'from clinical research to products and live services',
      },
      {
        ix: '03',
        conv: 'reliability',
        h3: 'I decide with evidence',
        p: 'Contracts, tests, metrics, cost and privacy are part of the design. With AI I compare models and results; I do not confuse a convincing answer with a reliable system.',
        evLabel: 'Method',
        ev: 'baselines · E2E · real cost · human validation',
      },
      {
        ix: '04',
        conv: 'hands-on leadership',
        h3: 'I grow teams and judgement',
        p: 'I provide structure, boundaries and context so people can make better decisions. I prefer lightweight processes that leave a trace and reduce personal dependencies.',
        evLabel: 'Experience',
        ev: 'tech lead · co-founder · process · ~~23~~ university projects',
      },
    ],
    honestLabel: 'A rule I set myself',
    honest:
      '“I am good at giving structure to complex problems; I also know I can build more than they need. That is why I work with short milestones, real evidence and one rule: complexity has to earn its place.”',
  },
  focus: {
    kicker: 'Way of working',
    h2: 'How I approach projects',
    intro:
      'I combine technical depth, product judgement and AI tools without turning the fashionable tool into the architecture.',
    pillars: [
      {
        n: '01 / understand',
        h3: 'Problem before solution',
        p: 'I clarify the domain, users, invariants and what “works” will mean. I cut before building and separate what is essential from what is merely interesting.',
        tags: ['domain', 'product', 'risk', 'privacy'],
      },
      {
        n: '02 / build',
        h3: 'Systems that can be operated',
        p: 'Backend, data, contracts, tests and deployment are one decision. I build systems to remain understandable, observable and changeable after the first release.',
        tags: ['Python', 'FastAPI', 'TypeScript', 'PostgreSQL', 'Docker'],
      },
      {
        n: '03 / amplify',
        h3: 'Applied AI with judgement',
        p: 'I build lightweight harnesses: bounded context, reusable skills, checks and the right model for the task, quality and cost. I use agents only when coordinating contexts or specialisms creates more value than complexity.',
        tags: ['harness', 'skills', 'model selection', 'MCP', 'evaluation'],
      },
    ],
  },
  projectes: {
    kicker: 'Selection',
    h2: 'Where I create value',
    intro:
      'My current work is private. I describe the kind of problem and responsibility, not internal details. Personal projects and research complete the picture.',
    items: [
      {
        feature: true,
        kind: 'Current work · confidential',
        status: 'internal systems',
        title: 'From structured data to useful decisions',
        desc: 'I have moved from building databases, ETL and BI to designing ways for teams to query, interpret and turn that data into decisions with AI support. My responsibility spans the data foundation, answer quality, cost and fit with the human process.',
        stack: ['structured data', 'Mage · Metabase', 'applied AI', 'APIs', 'evaluation'],
        diagram: {
          side: 'right',
          nodes: [
            { lab: 'foundation', nm: 'Data · quality · context', role: 'supports' },
            { lab: 'system', nm: 'Query · report · interaction', role: 'assists' },
            { lab: 'people', nm: 'Judgement · decision · action', role: 'decide' },
          ],
          conns: ['structures', 'enables'],
        },
      },
      {
        feature: true,
        kind: 'Personal product',
        status: 'testing and development',
        title: 'profes.cat',
        url: 'https://profes.cat',
        desc: 'A product I am building in my own time to support vocational teachers. It is still being tested: the work is not merely making the technology run, but finding a rigorous, private and genuinely useful way to support teacher judgement.',
        stack: ['product', 'education', 'privacy', 'applied AI'],
        diagram: {
          side: 'left',
          nodes: [
            { lab: 'teacher', nm: 'Experience · judgement · control', role: 'decides' },
            { lab: 'product', nm: 'Clear flow · assistance · privacy', role: 'helps' },
            { lab: 'testing', nm: 'Real use · errors · learning', role: 'improves' },
          ],
          conns: ['guides', 'validates'],
        },
      },
      {
        kind: 'Current work · confidential',
        status: 'integration and internal product',
        title: 'Business process without tool friction',
        desc: 'I design tailored integrations, automations and interfaces over CRM and ERP systems. The goal is not another software layer, but adapting HubSpot, Odoo or Zoho to the actual process and reducing the learning curve for the people using it.',
        stack: ['HubSpot', 'Odoo', 'Zoho', 'APIs', 'tailored frontends'],
      },
      {
        kind: 'eHealth · product and research',
        status: '11 publications',
        title: 'Fibroline, Painometer and applied research',
        url: '/publicacions',
        desc: 'Applications for people living with chronic pain built with clinical teams, alongside eleven peer-reviewed publications. This period consolidated how I work: technology, people and evidence in the same system.',
        stack: ['Java', 'Android', 'eHealth', 'applied research'],
      },
    ],
  },
  credentials: {
    kicker: 'Continuous learning',
    h2: 'Selected credentials',
    intro:
      'The track record demonstrates the level; these credentials show that I keep tools and foundations current. I completed nine Anthropic Academy programmes in 2026; these are the most relevant.',
    verify: 'Verify',
    items: [
      {
        title: 'Spring Certified Professional',
        issuer: 'VMware',
        year: '2023',
        detail: 'Java · Spring · backend',
        verify: SPRING_CREDENTIAL,
      },
      {
        title: 'AI Fluency: Framework & Foundations',
        issuer: 'Anthropic Academy',
        year: '2026',
        detail: 'Score 9/10',
        verify: 'https://verify.skilljar.com/c/baq7aydnnkx7',
      },
      {
        title: 'Building with the Claude API',
        issuer: 'Anthropic Academy',
        year: '2026',
        detail: 'Model and product integration',
        verify: 'https://verify.skilljar.com/c/2hbfqux7ezhb',
      },
      {
        title: 'Introduction to Model Context Protocol',
        issuer: 'Anthropic Academy',
        year: '2026',
        detail: 'MCP · tools and context',
        verify: 'https://verify.skilljar.com/c/89n6hy639snz',
      },
      {
        title: 'AI Fluency for Nonprofits',
        issuer: 'Anthropic Academy',
        year: '2026',
        detail: 'Applied AI for organisations',
        verify: 'https://verify.skilljar.com/c/cywdpm62tphz',
      },
    ],
  },
  trajectoria: {
    kicker: 'Career',
    h2: 'Twenty years of craft',
    intro:
      'From supercomputing and bioinformatics to digital health and data-driven innovation. Always with the same compass: technology useful for people.',
    stats: [
      { n: '20**+**', l: 'years of craft in technology' },
      { n: '11', l: 'scientific publications', href: '/publicacions' },
      { n: '23', l: 'university final projects supervised' },
      { n: '4', l: 'years of university teaching (UOC)' },
      { n: '6**+**', l: 'years building internal data and process systems' },
    ],
    timeline: [
      {
        yr: '2023 — present',
        h4: 'Accent Obert',
        role: 'Senior engineer · systems, data & applied AI',
        desc: 'End-to-end design and implementation of internal decision systems over structured data, CRM/ERP integrations and AI solutions shaped by quality, cost and real utility.',
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
    p3: 'With AI, I look for the smallest structure that produces a reliable outcome: a skill, a model or a harness; agents only when the problem genuinely requires coordination.',
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
    h2: "Let's talk about systems that genuinely have to work.",
    p: 'Projects, collaborations and conversations about data, backend, product and applied AI with judgement.',
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
