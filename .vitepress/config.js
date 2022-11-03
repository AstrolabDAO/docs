// @ts-check
/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  base: '/',
  title: 'Astrolab',
  lang: 'en-US',
  description: 'Omnichain yield aggregator',
  head: createHead(),

  themeConfig: {
    repo: 'https://github.com/AstrolabFinance',
    github: 'https://github.com/AstrolabFinance/docs',
    twitter: 'https://twitter.com/AstrolabFi',
    medium: 'https://medium.com/@AstrolabFi',
    telegram: 'https://t.me/astrolab',
    discord: 'https://discord.gg/UpYeDkWSff',
    logoLight: '/logo-light.png',
    logoDark: '/logo-dark.png',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Sources',
    nav: createNav(),
    sidebar: createSidebar(),
    algolia: {
      appId: '',
      apiKey: '',
      indexName: 'Vitepress',
      // indexName: string
      // placeholder?: string
      // searchParameters?: any
      // disableUserPersonalization?: boolean
      // initialQuery?: string
    },
  },
};

/**
 * @type {()=>import('vitepress').HeadConfig[]}
 */

function createHead() {
  return [
    ['meta', { name: 'author', content: 'Astrolab Team' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'astrolab, vitejs, vite, ant-design-vue, vue',
      },
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      },
    ],
    ['meta', { name: 'keywords', content: 'vue Astrolab docs' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ];
}

/**
 * @type {()=>import('./theme-default/config').DefaultTheme.NavItem[]}
 */
function createNav() {
  return [];
}

function createSidebar() {
  return {
    '/': [
      {
        text: 'Introduction',
        children: [
          {
            text: 'What is Astrolab Finance?',
            link: '/introduction/overview',
          },
          {
            text: 'FAQ',
            link: '/introduction/faq',
          },
          {
            text: 'Links',
            link: '/introduction/links',
          },
        ],
      },
      {
        text: 'Tokenomics',
        children: [
          {
            text: '$ASL',
            link: '/tokenomics/asl',
          },
          {
            text: 'Governance',
            link: '/tokenomics/governance',
          },
          {
            text: 'Fees and revenue',
            link: '/tokenomics/fees',
          },
          {
            text: '💫 Flywheel',
            link: '/tokenomics/flywheel'
          }
        ],
      },
      {
        text: 'Product',
        children: [
          {
            text: 'Crates 101',
            link: '/product/crates101',
          },
          {
            text: 'Architecture',
            link: '/product/architecture',
          },
          {
            text: 'Composition',
            link: '/product/composition',
          },
        ],
      },
      {
        text: 'Development',
        children: [
          {
            text: 'Interacting with crates',
            link: '/developers/interaction',
          },
          {
            text: 'Writing a strategy',
            link: '/developers/strategy',
          },
          {
            text: 'Contracts',
            link: '/developers/contracts',
          },
        ],
      },
      {
        text: 'Safety',
        children: [
          {
            text: 'Principles',
            link: '/safu/principles',
          },
          {
            text: 'Insurance mechanism',
            link: '/safu/insurance',
          },
          {
            text: 'Managing risk',
            link: '/safu/risk-management',
          },

          {
            text: 'Audits',
            link: '/safu/audits',
          },
          {
            text: 'Bug bounty',
            link: '/safu/bounty',
          },
          {
            text: 'Emergency stop',
            link: '/safu/emergency',
          },
          {
            text: 'Disclaimer',
            link: '/safu/risk-assessement',
          },
        ],
      },
    ],
  };
}

// /**
//  * @type {(namespace:string,items:string[])=>string[]}
//  */
// function urlWrapper(namespace, items) {
//   return items.map((item) => namespace + item);
// }

// function getGuildNav() {
//   return urlWrapper('/guide', ['/']);
// }
