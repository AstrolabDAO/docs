export default {
  // base: '/',
  title: 'Astrolab',
  lang: 'en-US',
  description: 'Omnichain yield aggregator',
  themeConfig: {

    docsDir: 'docs',
    repo: 'https://github.com/AstrolabFinance',
    github: 'https://github.com/AstrolabFinance/docs',
    twitter: 'https://twitter.com/AstrolabFi',
    medium: 'https://medium.com/@AstrolabFi',
    telegram: 'https://t.me/astrolab',
    discord: 'https://discord.gg/UpYeDkWSff',
    logo: '/logo.png',
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
    nav: getNav(),
    sidebar: getSidebar(),
    footer: {
      message: 'MIT License',
      copyright: '© 2022 Astrolab - Rights reserved',
    }

  }
}

function getNav() {
  return [
    {
      title: "App",
      text: "App",
      link: "https://astrolab.fi/app",
    // items: ["child-1", "child-2"],
    },
    {
      title: "Github",
      text: "Github",
      link: "https://github.com/AstrolabFinance",
    }
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
