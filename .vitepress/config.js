// @ts-check
/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {

  base: '/',
  title: 'Astrolab',
  lang: 'en-US',
  description: 'Network generic yield optimizer',
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
      indexName: 'Vitepress'
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
        text: 'Guide',
        children: [
          {
            text: 'Get started',
            link: '/guide/introduction',
          },
          {
            text: 'start',
            link: '/guide/',
          },
          {
            text: 'Project configuration',
            link: '/guide/settings',
          },
          {
            text: 'Routing',
            link: '/guide/router',
          },
          {
            text: 'Menu',
            link: '/guide/menu',
          },
          {
            text: 'Authority',
            link: '/guide/auth',
          },
          {
            text: 'Mock&Tune',
            link: '/guide/mock',
          },
          {
            text: 'Component registration',
            link: '/guide/component',
          },
          {
            text: 'style',
            link: '/guide/design',
          },
          {
            text: 'External module',
            link: '/guide/lib',
          },
          {
            text: 'Build & Deployment',
            link: '/guide/deploy',
          },
          {
            text: 'Electron',
            link: '/guide/electron',
          },
        ],
      },
      {
        text: 'Advanced',
        children: [
          {
            text: 'Cross-origin',
            link: '/dep/cors',
          },
          {
            text: 'Icons',
            link: '/dep/icon',
          },
          {
            text: 'Locales',
            link: '/dep/i18n',
          },
          {
            text: 'Project norm',
            link: '/dep/lint',
          },
          {
            text: 'Dark theme',
            link: '/dep/dark',
          },
        ],
      },
      {
        text: 'Other',
        children: [
          {
            text: 'Common issues',
            link: '/other/faq',
          },
          {
            text: 'Common doubts',
            link: '/other/doubt',
          },
          {
            text: 'Testnet',
            link: '/other/server',
          },
          {
            text: 'Related project',
            link: '/other/project',
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
