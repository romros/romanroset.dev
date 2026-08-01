export let siteMetadata = {
  siteUrl: 'https://personalsite-96eq-romros-projects.vercel.app',
  siteRepo: 'https://github.com/romros/romanroset.dev',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/logo.png',
  socialBanner: '/static/images/logo.png',
  email: 'romanroset@proton.me',
  github: 'https://github.com/romros',
  twitter: 'https://twitter.com/romanroset',
  facebook: '',
  youtube: '',
  linkedin: '',
  researchgate: 'https://www.researchgate.net/profile/Roman-Roset-Mayals',
  locale: 'en-US',
  analyticsURL:
    'https://analytics.umami.is/share/aZGmMvPJnADVOExd/Roman%20Roset%20professional%20website',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: 'ea9b5f34-b41e-4be1-8a4f-4124d00e3664', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  socialAccounts: {
    github: 'romros',
    twitter: 'romanroset',
    linkedin: '',
  },
}

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export let commentConfig = {
  provider: 'giscus', // 'giscus' | 'utterances' | 'disqus',
  // https://giscus.app/
  giscusConfig: {
    repo: '', // process.env.GISCUS_REPO
    repositoryId: '', // process.env.GISCUS_REPOSITORY_ID
    category: '', // process.env.GISCUS_CATEGORY
    categoryId: '', // process.env.GISCUS_CATEGORY_ID
    mapping: 'title',
    reactions: '1',
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
  },
  // https://utteranc.es/
  utterancesConfig: {
    repo: '', // process.env.UTTERANCES_REPO
    issueTerm: '',
    label: '',
    lightTheme: '',
    darkTheme: '',
  },
  // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
  disqus: {
    shortname: '', // process.env.DISQUS_SHORTNAME
  },
}
