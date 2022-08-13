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
    docsRepo: 'https://github.com/AstrolabFinance/docs',
    twitter: 'https://twitter.com/@AstrolabFinance',
    medium: 'https://medium.com/@AstrolabFinance',
    telegram: 'https://t.me/astrolab',
    discord: 'https://discord.com/invite/astrolab',
    logo: '/logo.png',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Sources',
    nav: createNav(),
    sidebar: createSidebar(),
    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
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
  return [
    // {
    //   text: 'Guide',
    //   link: '/guide/',
    //   items: [
    //     {
    //       text: 'Guide',
    //       link: '/guide/introduction',
    //     },
    //     {
    //       text: 'Advanced',
    //       link: '/dep/icon',
    //     },
    //     {
    //       text: 'FAQ',
    //       link: '/other/faq',
    //     },
    //   ],
    // },
    // {
    //   text: 'Component',
    //   link: '/components/',
    //   items: [
    //     {
    //       text: 'Get started',
    //       link: '/components/introduction',
    //     },
    //     {
    //       text: 'Global component',
    //       link: '/components/glob/button',
    //     },
    //     {
    //       text: 'Common component',
    //       link: '/components/basic',
    //     },
    //     {
    //       text: 'Functional component',
    //       link: '/components/functional/context-menu',
    //     },
    //   ],
    // },
    // {
    //   text: 'Links',
    //   items: [
    //     {
    //       text: 'App',
    //       link: 'https://astrolab.fi',
    //     },
    //     {
    //       text: 'Github',
    //       link: 'https://github.com/AstrolabFinance',
    //     },
    //     {
    //       text: 'Docs Sources',
    //       link: 'https://github.com/AstrolabFinance/docs',
    //     },
    //     {
    //       text: 'Docs Changelog',
    //       link: 'https://github.com/AstrolabFinance/docs/blob/main/CHANGELOG.md',
    //     },
    //   ],
    // },
  ];
}

function createSidebar() {
  return {
    '/components/': [
      {
        text: 'Component',
        children: [
          {
            text: 'Foreword',
            link: '/components/introduction',
          },
        ],
      },
      {
        text: 'Global component',
        children: [
          {
            text: 'Button',
            link: '/components/glob/button',
          },
        ],
      },
      {
        text: 'Common component',
        children: [
          {
            text: 'Basic',
            link: '/components/basic',
          },
          {
            text: 'Page',
            link: '/components/page',
          },
          {
            text: 'Icon',
            link: '/components/icon',
          },
          {
            text: 'Authority',
            link: '/components/auth',
          },
          {
            text: 'Form',
            link: '/components/form',
          },
          {
            text: 'Table',
            link: '/components/table',
          },
          {
            text: 'PopConfirmButton',
            link: '/components/pop-confirm-button',
          },
          {
            text: 'CollapseContainer',
            link: '/components/collapse-container',
          },
          {
            text: 'ScrollContainer',
            link: '/components/scroll-container',
          },
          {
            text: 'LazyContainer',
            link: '/components/lazy-container',
          },
          {
            text: 'CodeEditor',
            link: '/components/code-editor',
          },
          {
            text: 'JsonPreview',
            link: '/components/json-preview',
          },
          {
            text: 'CountDown',
            link: '/components/count-down',
          },

          {
            text: 'ClickOutSide',
            link: '/components/click-out-side',
          },
          {
            text: 'CountTo',
            link: '/components/count-to',
          },
          {
            text: 'Cropper',
            link: '/components/cropper',
          },
          {
            text: 'Description',
            link: '/components/desc',
          },
          {
            text: 'Drawer',
            link: '/components/drawer',
          },
          {
            text: 'Modal',
            link: '/components/modal',
          },
          {
            text: 'FlowChart',
            link: '/components/flow-chart',
          },
          {
            text: 'Upload',
            link: '/components/upload',
          },
          {
            text: 'Tree',
            link: '/components/tree',
          },
          {
            text: 'Excel',
            link: '/components/excel',
          },
          {
            text: 'Qrcode',
            link: '/components/qrcode',
          },
          {
            text: 'Markdown',
            link: '/components/markdown',
          },
          {
            text: 'Loading',
            link: '/components/loading',
          },
          {
            text: 'Tinymce',
            link: '/components/tinymce',
          },
          {
            text: 'Time',
            link: '/components/time',
          },
          {
            text: 'StrengthMeter',
            link: '/components/strength-meter',
          },
          {
            text: 'Verify',
            link: '/components/verify',
          },
          {
            text: 'Transition',
            link: '/components/transition',
          },
          {
            text: 'VirtualScroll',
            link: '/components/virtual-scroll',
          },
        ],
      },
      {
        text: 'Functional component',
        children: [
          {
            text: 'ContextMenu',
            link: '/components/functional/context-menu',
          },
          {
            text: 'Loading',
            link: '/components/functional/loading',
          },
          {
            text: 'Preview',
            link: '/components/functional/preview',
          },
        ],
      },
    ],
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
        ],
      },
      {
        text: 'Tokenomics',
        children: [
          {
            text: '$ASL Utility',
            link: '/tokenomics/utility',
          },
          {
            text: 'Securing the protocol',
            link: '/tokenomics/safety',
          },
          {
            text: 'Distribution',
            link: '/tokenomics/distribution',
          },
        ],
      },
      {
        text: 'Product',
        children: [
          {
            text: 'Crates',
            link: '/product/crates',
          },
          {
            text: 'Architecture',
            link: '/product/architecture',
          },
        ],
      },
      {
        text: 'Development',
        children: [
          {
            text: 'Interacting with crates',
            link: '/developers/crates',
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
        text: 'Keeping Astrolab safe',
        children: [
          {
            text: 'Why?',
            link: '/safu/why',
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
