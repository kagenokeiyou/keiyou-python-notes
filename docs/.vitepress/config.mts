import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  base: '/keiyou-python-notes/',
  title: 'Keiyou Python Notes',
  description: 'Python notes written by Keiyou',
  appearance: 'dark',
  cleanUrls: true,

  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: '主页', link: '/' },
      { text: '笔记', link: '/catalog.md' },
    ],

    sidebar: [
      {
        text: '目录',
        link: '/catalog.md',
      },
      {
        text: '1. 简介',
        collapsed: true,
        items: [
          {
            text: '1.1. 什么是 Python',
            link: '/01.introduction/01.what-is-python.md',
          },
          {
            text: '1.2. 安装 Python',
            link: '/01.introduction/02.install-python.md',
          },
          {
            text: '1.3. Hello World',
            link: '/01.introduction/03.hello-world.md',
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/kagenokeiyou/keiyou-python-notes',
      },
    ],

    footer: {
      message: 'Released under the MIT License',
      copyright: 'Copyright © 2025-present kagenokeiyou',
    },
  },
})
