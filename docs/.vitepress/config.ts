import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "XiaoShop 云链小店",
  titleTemplate: ':title - XiaoShop 云链小店',
  description: "自组织的开源电商系统",cleanUrls: true,
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息',
    },
  },
  head: [
    [
      'link',
      { rel: 'icon', href: '/favicon.ico' },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/logo-sm.png',

    outline: {
      level: 'deep',
    },

    nav: [
      {
        text: '文档',
        items: [
          { text: '开发文档', link: '/guide/' },
          { text: '用户手册', link: '/manual/' },
          { text: 'API 接口', link: '/api/' },
        ],
      },
      {
        text: '生态',
        items: [
          {
            text: '资源',
            items: [
              { text: '主题风格', link: '/themes/' },
              { text: '功能组件', link: '/widgets/' },
              { text: '系统模块', link: '/modules/' },
              { text: '图标集', link: '/iconset/' },
            ],
          },
          {
            text: '服务',
            items: [
              { text: '定制开发', link: '/service/develop' },
              { text: '培训服务', link: '/service/training' },
              { text: '视频教程', link: '/service/courses' },
            ],
          },
          {
            text: '合作',
            items: [
              { text: '云链', link: '/connect' },
              { text: '技术合伙人', link: '/partners' },
            ],
          },
        ],
      },
      {
        text: '关于',
        items: [
          { text: 'FAQ', link: '/faq' },
          { text: '团队', link: '/team' },
          { text: '发行版', link: '/release' },
        ],
      },
    ],

    sidebar: {
      // 开发文档
      '/guide/': [
        {
          text: '快速上手',
          collapsed: false,
          items: [
            { text: '如何安装', link: '/guide/install' },
            { text: '目录结构', link: '/guide/structure' },
            { text: '开发约定', link: '/guide/development' },
          ]
        },
        {
          text: '命令行',
          collapsed: false,
          items: [
            { text: '数据迁移', link: '/guide/install' },
            { text: '代码生成', link: '/guide/install' },
          ]
        },
        { text: '常见问题', link: '/faqs' },
        { text: '更新日志', link: '/changelogs' },
      ],

      // 用户手册
      '/manual/': [],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/moujinet/xiaoshop' }
    ],

    footer: {
      message: 'Released under the Apache2 License.',
      copyright: 'Copyright &copy; 2023-present XiaoShop'
    }
  }
})
