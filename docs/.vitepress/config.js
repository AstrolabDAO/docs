export default {
  base: '/',
  title: 'Astrolab',
  lang: 'en-US',
  description: 'Omnichain yield aggregator',
  themeConfig: {
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/UpYeDkWSff'},
      { icon: 'twitter', link: 'https://twitter.com/AstrolabFi'},
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16" data-v-8e6ab816=""><g fill="currentColor"><path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236c-1.246 0-2.256-1.897-2.256-4.236c0-2.34 1.01-4.236 2.256-4.236c1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795c-.438 0-.793-1.7-.793-3.795c0-2.096.355-3.795.794-3.795c.438 0 .793 1.699.793 3.795z"></path></g></svg>'}, link: 'https://medium.com/@AstrolabFi'},
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    docsDir: 'docs',
    repo: 'https://github.com/AstrolabFinance',
    github: 'https://github.com/AstrolabFinance/docs',
    twitter: 'https://twitter.com/AstrolabFi',
    medium: 'https://medium.com/@AstrolabFi',
    telegram: 'https://t.me/astrolab',
    discord: 'https://discord.gg/UpYeDkWSff',
    logo: {
      dark: '/logo-dark.png',
      light: '/logo-light.png'
    },
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Sources',

    // carbonAds: {
    //     code: 'your-carbon-code',
    //     placement: 'your-carbon-placement'
    // },
    algolia: {
      appId: '',
      apiKey: '',
      indexName: 'Vitepress',
      // placeholder?: string
      // searchParameters?: any
      // disableUserPersonalization?: boolean
      // initialQuery?: string
    },
    // nav: getNav(),
    sidebar: getSidebar(),
    footer: {
      message: 'MIT License',
      copyright: '© 2022 Astrolab - Rights reserved',
    }

  }
}

function getNav() {
  return [
    // {
    //   title: "App",
    //   text: "App",
    //   link: "https://astrolab.fi/app",
    // // items: ["child-1", "child-2"],
    // },
    // {
    //   title: "Github",
    //   text: "Github",
    //   link: "https://github.com/AstrolabFinance",
    // }
  ];
}

function getSidebar() {
  // { '/':
  return [
    {
      text: 'Introduction',
      collapsible: true,
      collapsed: true,
      items: [
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
      collapsible: true,
      collapsed: true,
      items: [
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
      collapsible: true,
      collapsed: true,
      items: [
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
      collapsible: true,
      collapsed: true,
      items: [
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
      collapsible: true,
      collapsed: true,
      items: [
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
          text: 'Emergency pause',
          link: '/safu/emergency',
        },
        {
          text: 'Disclaimer',
          link: '/safu/risk-assessement',
        },
      ],
    },
  ];
  // };
}
