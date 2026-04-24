import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'burnmark-io',
  description: 'Label design for home, hobbies, and shipping — browser-first, templates, bulk, and sheet PDFs.',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/welcome' },
      { text: 'Libraries', link: '/libraries' },
      { text: 'Printing', link: '/printing' },
      { text: 'Related orgs', link: '/related-orgs' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Welcome', link: '/guide/welcome' },
          { text: 'Offline, templates, bulk', link: '/guide/offline-and-batch' },
        ],
      },
      { text: 'Libraries', link: '/libraries' },
      { text: 'Printing & hardware', link: '/printing' },
      { text: 'Related organizations', link: '/related-orgs' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/burnmark-io' }],
    footer: {
      message: 'MIT licensed open source.',
      copyright: 'Copyright © burnmark-io',
    },
    search: { provider: 'local' },
  },
});
