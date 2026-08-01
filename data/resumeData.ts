/* Dades del currículum (CV) — trilingüe, font única per a /resume.
   Mirall de homeData.ts: contingut estructurat i tipat per renderitzar
   el Blueprint sense MDX. */

export type ResumeRole = {
  time?: string
  title: string
  company?: string
  location?: string
  description?: string
  url?: string
}
export type ResumeGroup = { type: string; items: ResumeRole[] }
export type ResumeContent = {
  name: string
  avatar: string
  role: string
  company: string
  location: string
  intro: string
  updated: string
  sections: ResumeGroup[]
}

const AVATAR = '/static/images/roman-portrait.png'
const SPRING_CREDENTIAL =
  'https://www.credly.com/badges/b74a8a79-d07a-4c8c-86f1-4a34cf9d019b/public_url'

const ca: ResumeContent = {
  name: 'Roman Roset Mayals',
  avatar: AVATAR,
  role: 'Enginyer sènior · sistemes, dades i IA aplicada',
  company: 'Accent Obert',
  location: 'Barcelona, Catalunya',
  intro:
    "Enginyer sènior hands-on amb més de 20 anys d'ofici. Transformo dades i processos complexos en sistemes comprensibles i operables, des de l'arquitectura i el backend fins al producte i la IA aplicada.",
  updated: 'Actualitzat el 2026',
  sections: [
    {
      type: 'Experiència',
      items: [
        {
          time: '2023 — present',
          title: 'Enginyer sènior',
          company: 'Accent Obert',
          location: 'Barcelona',
          description:
            'Disseny i implementació tècnica end-to-end de sistemes interns de decisió: de models de dades, ETL i BI a informes i assistents amb IA. Integracions i frontends a mida sobre CRM/ERP, amb responsabilitat sobre arquitectura, qualitat, cost i encaix amb el procés humà. Projectes confidencials.',
        },
        {
          time: '2020 — 2023',
          title: 'Enginyer de dades, backend i BI',
          company: 'Fundació .cat',
          location: 'Barcelona',
          description:
            "Innovació data-driven, backend de la plataforma d'Intel·ligència de Negoci i orquestració d'integracions cross-platform. Implementació de la infraestructura de dades per a una organització àgil (OKR/KPI).",
        },
        {
          time: '2017 — 2019',
          title: 'Cofundador i enginyer de software',
          company: 'WellTech TMS',
          location: 'Tarragona',
          description:
            'Spin-off de programari terapèutic per al benestar emocional i físic. Lideratge tècnic adaptant recerca acadèmica a producte comercial.',
        },
        {
          time: '2011 — 2019',
          title: 'Responsable d’eHealth i enginyer de software',
          company: 'Universitat Rovira i Virgili · ALGOS',
          location: 'Tarragona',
          description:
            'Estratègia tecnològica i apps per a pacients amb dolor crònic. Projectes destacats: Fibroline i Painometer, amb recerca publicada.',
        },
        {
          time: '2011 — 2015',
          title: 'Professor adjunt · Enginyeria Informàtica',
          company: 'Universitat Oberta de Catalunya (UOC)',
          location: 'Online',
          description:
            'Docència de grau i màster en informàtica i supervisió de 23 projectes finals (PFG/PFM).',
        },
        {
          time: '2008 — 2009',
          title: 'Enginyer de software · Web semàntica',
          company: 'Arte-consultores',
          location: 'Illes Canàries',
          description:
            'Recerca en administració pública electrònica i lideratge de projectes amb web semàntica.',
        },
        {
          time: '2006 — 2008',
          title: 'Enginyer de software · eHealth & web semàntica',
          company: 'MicroArt',
          location: 'Barcelona',
          description:
            'Projectes de biomedicina. Disseny i lideratge de l’ontologia clínica de HealthAgents, un sistema de suport a la decisió basat en agents per a la classificació de tumors cerebrals.',
        },
        {
          time: '2004 — 2006',
          title: 'Responsable tècnic de projectes',
          company: 'Instituto Nacional de Bioinformática (INB)',
          location: 'Barcelona',
          description:
            "Coordinació tècnica al Barcelona Supercomputing Center per l'INB, liderant l'àrea de serveis web. Desenvolupament i paral·lelització de programes bioinformàtics.",
        },
        {
          time: '2002 — 2004',
          title: 'Assistent de recerca i desenvolupador',
          company: 'Barcelona Supercomputing Center (BSC)',
          location: 'Barcelona',
          description:
            'Recerca i paral·lelització de programes bioinformàtics a MareNostrum, optimitzant-ne eficiència i rendiment.',
        },
      ],
    },
    {
      type: 'Formació acadèmica',
      items: [
        {
          time: '2019',
          title: 'Programa MAP (Market Assessment Programme)',
          company: 'EADA',
          description:
            "Avaluació d'oportunitats de negoci amb startups. Projecte cofinançat per ACCIÓ per a socis d'spin-off tecnològic.",
        },
        {
          time: '2010',
          title: 'Màster en Formació del Professorat',
          company: 'UNED',
          description: "Competències i tècniques d'ensenyament per a ESO, Batxillerat i FP.",
        },
        {
          time: '2004 — 2008',
          title: 'Postgraus en Intel·ligència Artificial',
          company: 'UPC · Facultat d’Informàtica de Barcelona',
          description:
            'Bioinformàtica, modelització conceptual en sistemes d’informació i supercomputació.',
        },
        {
          time: '1995 — 2003',
          title: 'Enginyeria en Informàtica',
          company: 'UPC · Facultat d’Informàtica de Barcelona',
          description:
            'Especialització en Bioinformàtica i Intel·ligència Artificial. Nota final 7,39 (núm. 42 de la promoció).',
        },
      ],
    },
    {
      type: 'Aptituds',
      items: [
        {
          title: 'Enginyeria de software',
          description:
            'Python/FastAPI, Java/Spring Boot, TypeScript/React/Next.js, PostgreSQL, APIs, Docker, TDD i CI.',
        },
        {
          title: 'Dades i decisió',
          description: 'SQL, modelatge, ETL, Mage, Metabase, BI, mètriques, OKR i KPI.',
        },
        {
          title: 'Sistemes de gestió',
          description:
            'Integracions i experiències a mida sobre HubSpot, Odoo i Zoho mitjançant APIs i automatització.',
        },
        {
          title: 'IA aplicada',
          description:
            'Skills i harnesses, selecció i avaluació multimodel, OpenRouter, Eden AI i MCP; agents quan la coordinació els justifica.',
        },
        {
          title: 'Lideratge tècnic',
          description:
            'Descoberta, arquitectura, producte, processos BPMN i acompanyament d’equips mantenint-me hands-on.',
        },
      ],
    },
    {
      type: 'Credencials seleccionades',
      items: [
        {
          title: 'Spring Certified Professional',
          description: 'VMware · 2023 · Java, Spring i backend.',
          url: SPRING_CREDENTIAL,
        },
        {
          title: 'Anthropic Academy',
          description:
            '9 programes completats el 2026, incloent Claude API, Model Context Protocol i AI Fluency.',
          url: '/#credencials',
        },
      ],
    },
    {
      type: 'Idiomes',
      items: [
        { title: 'Català', description: 'Natiu' },
        { title: 'Español', description: 'Natiu' },
        { title: 'English', description: 'Intermedi · B1' },
      ],
    },
  ],
}

const es: ResumeContent = {
  name: 'Roman Roset Mayals',
  avatar: AVATAR,
  role: 'Ingeniero sénior · sistemas, datos e IA aplicada',
  company: 'Accent Obert',
  location: 'Barcelona, Cataluña',
  intro:
    'Ingeniero sénior hands-on con más de 20 años de oficio. Transformo datos y procesos complejos en sistemas comprensibles y operables, desde la arquitectura y el backend hasta el producto y la IA aplicada.',
  updated: 'Actualizado en 2026',
  sections: [
    {
      type: 'Experiencia',
      items: [
        {
          time: '2023 — actualidad',
          title: 'Ingeniero sénior',
          company: 'Accent Obert',
          location: 'Barcelona',
          description:
            'Diseño e implementación técnica end-to-end de sistemas internos de decisión: desde modelos de datos, ETL y BI hasta informes y asistentes con IA. Integraciones y frontends a medida sobre CRM/ERP, con responsabilidad sobre arquitectura, calidad, coste y encaje con el proceso humano. Proyectos confidenciales.',
        },
        {
          time: '2020 — 2023',
          title: 'Ingeniero de datos, backend y BI',
          company: 'Fundació .cat',
          location: 'Barcelona',
          description:
            'Innovación data-driven, backend de la plataforma de Inteligencia de Negocio y orquestación de integraciones cross-platform. Infraestructura de datos para una organización ágil (OKR/KPI).',
        },
        {
          time: '2017 — 2019',
          title: 'Cofundador e ingeniero de software',
          company: 'WellTech TMS',
          location: 'Tarragona',
          description:
            'Spin-off de software terapéutico para el bienestar emocional y físico. Liderazgo técnico adaptando investigación académica a producto comercial.',
        },
        {
          time: '2011 — 2019',
          title: 'Responsable de eHealth e ingeniero de software',
          company: 'Universitat Rovira i Virgili · ALGOS',
          location: 'Tarragona',
          description:
            'Estrategia tecnológica y apps para pacientes con dolor crónico. Proyectos destacados: Fibroline y Painometer, con investigación publicada.',
        },
        {
          time: '2011 — 2015',
          title: 'Profesor adjunto · Ingeniería Informática',
          company: 'Universitat Oberta de Catalunya (UOC)',
          location: 'Online',
          description:
            'Docencia de grado y máster en informática y supervisión de 23 proyectos finales (PFG/PFM).',
        },
        {
          time: '2008 — 2009',
          title: 'Ingeniero de software · Web semántica',
          company: 'Arte-consultores',
          location: 'Islas Canarias',
          description:
            'Investigación en administración pública electrónica y liderazgo de proyectos con web semántica.',
        },
        {
          time: '2006 — 2008',
          title: 'Ingeniero de software · eHealth & web semántica',
          company: 'MicroArt',
          location: 'Barcelona',
          description:
            'Proyectos de biomedicina. Diseño y liderazgo de la ontología clínica de HealthAgents, un sistema de apoyo a la decisión basado en agentes para la clasificación de tumores cerebrales.',
        },
        {
          time: '2004 — 2006',
          title: 'Responsable técnico de proyectos',
          company: 'Instituto Nacional de Bioinformática (INB)',
          location: 'Barcelona',
          description:
            'Coordinación técnica en el Barcelona Supercomputing Center para el INB, liderando el área de servicios web. Desarrollo y paralelización de programas bioinformáticos.',
        },
        {
          time: '2002 — 2004',
          title: 'Asistente de investigación y desarrollador',
          company: 'Barcelona Supercomputing Center (BSC)',
          location: 'Barcelona',
          description:
            'Investigación y paralelización de programas bioinformáticos en MareNostrum, optimizando eficiencia y rendimiento.',
        },
      ],
    },
    {
      type: 'Formación académica',
      items: [
        {
          time: '2019',
          title: 'Programa MAP (Market Assessment Programme)',
          company: 'EADA',
          description:
            'Evaluación de oportunidades de negocio con startups. Proyecto cofinanciado por ACCIÓ para socios de spin-off tecnológico.',
        },
        {
          time: '2010',
          title: 'Máster en Formación del Profesorado',
          company: 'UNED',
          description: 'Competencias y técnicas de enseñanza para ESO, Bachillerato y FP.',
        },
        {
          time: '2004 — 2008',
          title: 'Posgrados en Inteligencia Artificial',
          company: 'UPC · Facultad de Informática de Barcelona',
          description:
            'Bioinformática, modelización conceptual en sistemas de información y supercomputación.',
        },
        {
          time: '1995 — 2003',
          title: 'Ingeniería en Informática',
          company: 'UPC · Facultad de Informática de Barcelona',
          description:
            'Especialización en Bioinformática e Inteligencia Artificial. Nota final 7,39 (nº 42 de la promoción).',
        },
      ],
    },
    {
      type: 'Aptitudes',
      items: [
        {
          title: 'Ingeniería de software',
          description:
            'Python/FastAPI, Java/Spring Boot, TypeScript/React/Next.js, PostgreSQL, APIs, Docker, TDD y CI.',
        },
        {
          title: 'Datos y decisión',
          description: 'SQL, modelado, ETL, Mage, Metabase, BI, métricas, OKR y KPI.',
        },
        {
          title: 'Sistemas de gestión',
          description:
            'Integraciones y experiencias a medida sobre HubSpot, Odoo y Zoho mediante APIs y automatización.',
        },
        {
          title: 'IA aplicada',
          description:
            'Skills y harnesses, selección y evaluación multimodelo, OpenRouter, Eden AI y MCP; agentes cuando la coordinación los justifica.',
        },
        {
          title: 'Liderazgo técnico',
          description:
            'Descubrimiento, arquitectura, producto, procesos BPMN y acompañamiento de equipos manteniéndome hands-on.',
        },
      ],
    },
    {
      type: 'Credenciales seleccionadas',
      items: [
        {
          title: 'Spring Certified Professional',
          description: 'VMware · 2023 · Java, Spring y backend.',
          url: SPRING_CREDENTIAL,
        },
        {
          title: 'Anthropic Academy',
          description:
            '9 programas completados en 2026, incluyendo Claude API, Model Context Protocol y AI Fluency.',
          url: '/#credencials',
        },
      ],
    },
    {
      type: 'Idiomas',
      items: [
        { title: 'Català', description: 'Nativo' },
        { title: 'Español', description: 'Nativo' },
        { title: 'English', description: 'Intermedio · B1' },
      ],
    },
  ],
}

const en: ResumeContent = {
  name: 'Roman Roset Mayals',
  avatar: AVATAR,
  role: 'Senior engineer · systems, data & applied AI',
  company: 'Accent Obert',
  location: 'Barcelona, Catalonia',
  intro:
    'Senior hands-on engineer with 20+ years of craft. I turn complex data and process into understandable, operable systems, from architecture and backend through to product and applied AI.',
  updated: 'Updated 2026',
  sections: [
    {
      type: 'Experience',
      items: [
        {
          time: '2023 — present',
          title: 'Senior Engineer',
          company: 'Accent Obert',
          location: 'Barcelona',
          description:
            'End-to-end technical design and implementation of internal decision systems: from data models, ETL and BI to AI-assisted reports and tools. Tailored CRM/ERP integrations and frontends, with responsibility for architecture, quality, cost and fit with the human process. Confidential projects.',
        },
        {
          time: '2020 — 2023',
          title: 'Data Engineer, Backend & BI',
          company: 'Fundació .cat',
          location: 'Barcelona',
          description:
            'Data-driven innovation, backend for the Business Intelligence platform and cross-platform integration orchestration. Data infrastructure for an agile organization (OKR/KPI).',
        },
        {
          time: '2017 — 2019',
          title: 'Co-founder & Software Engineer',
          company: 'WellTech TMS',
          location: 'Tarragona',
          description:
            'Therapeutic-software spin-off for emotional and physical well-being. Technical leadership adapting academic research into a commercial product.',
        },
        {
          time: '2011 — 2019',
          title: 'eHealth Manager & Software Engineer',
          company: 'Universitat Rovira i Virgili · ALGOS',
          location: 'Tarragona',
          description:
            'Technology strategy and apps for chronic-pain patients. Highlights: Fibroline and Painometer, with published research.',
        },
        {
          time: '2011 — 2015',
          title: 'Adjunct Professor · Computer Science',
          company: 'Universitat Oberta de Catalunya (UOC)',
          location: 'Online',
          description:
            "Taught undergraduate and master's courses and supervised 23 final projects (PFG/PFM).",
        },
        {
          time: '2008 — 2009',
          title: 'Software Engineer · Semantic Web',
          company: 'Arte-consultores',
          location: 'Canary Islands',
          description: 'Research in e-government and leadership of semantic-web projects.',
        },
        {
          time: '2006 — 2008',
          title: 'Software Engineer · eHealth & Semantic Web',
          company: 'MicroArt',
          location: 'Barcelona',
          description:
            'Biomedical projects. Designed and led the HealthAgents clinical ontology, an agent-based decision-support system for brain-tumor classification.',
        },
        {
          time: '2004 — 2006',
          title: 'Technical Project Manager',
          company: 'National Institute of Bioinformatics (INB)',
          location: 'Barcelona',
          description:
            'Technical coordination at the Barcelona Supercomputing Center for INB, leading the web-services area. Development and parallelization of bioinformatics programs.',
        },
        {
          time: '2002 — 2004',
          title: 'Research Assistant & Software Developer',
          company: 'Barcelona Supercomputing Center (BSC)',
          location: 'Barcelona',
          description:
            'Research and parallelization of bioinformatics programs on MareNostrum, optimizing efficiency and performance.',
        },
      ],
    },
    {
      type: 'Formal education',
      items: [
        {
          time: '2019',
          title: 'Market Assessment Programme (MAP)',
          company: 'EADA',
          description:
            'Assessing business opportunities with startups. Project co-financed by ACCIÓ for tech spin-off partners.',
        },
        {
          time: '2010',
          title: "Master's in Teacher Training",
          company: 'UNED',
          description:
            'Teaching competencies and techniques for secondary and vocational education.',
        },
        {
          time: '2004 — 2008',
          title: 'Postgraduate courses in Artificial Intelligence',
          company: 'UPC · Barcelona School of Informatics',
          description:
            'Bioinformatics, conceptual modeling in information systems and high-performance computing.',
        },
        {
          time: '1995 — 2003',
          title: 'Computer Engineering',
          company: 'UPC · Barcelona School of Informatics',
          description:
            'Specialization in Bioinformatics and Artificial Intelligence. Final grade 7.39 (No. 42 of the class).',
        },
      ],
    },
    {
      type: 'Skills',
      items: [
        {
          title: 'Software engineering',
          description:
            'Python/FastAPI, Java/Spring Boot, TypeScript/React/Next.js, PostgreSQL, APIs, Docker, TDD and CI.',
        },
        {
          title: 'Data & decision systems',
          description: 'SQL, data modelling, ETL, Mage, Metabase, BI, metrics, OKRs and KPIs.',
        },
        {
          title: 'Business systems',
          description:
            'Tailored integrations and experiences over HubSpot, Odoo and Zoho through APIs and automation.',
        },
        {
          title: 'Applied AI',
          description:
            'Skills and harnesses, multi-model selection and evaluation, OpenRouter, Eden AI and MCP; agents when coordination warrants them.',
        },
        {
          title: 'Technical leadership',
          description:
            'Discovery, architecture, product, BPMN process design and team enablement while remaining hands-on.',
        },
      ],
    },
    {
      type: 'Selected credentials',
      items: [
        {
          title: 'Spring Certified Professional',
          description: 'VMware · 2023 · Java, Spring and backend.',
          url: SPRING_CREDENTIAL,
        },
        {
          title: 'Anthropic Academy',
          description:
            '9 programmes completed in 2026, including Claude API, Model Context Protocol and AI Fluency.',
          url: '/#credencials',
        },
      ],
    },
    {
      type: 'Languages',
      items: [
        { title: 'Català', description: 'Native' },
        { title: 'Español', description: 'Native' },
        { title: 'English', description: 'Intermediate · B1' },
      ],
    },
  ],
}

const MAP: Record<string, ResumeContent> = { ca, es, en }

export function getResumeContent(locale?: string): ResumeContent {
  return MAP[locale ?? 'ca'] ?? ca
}
