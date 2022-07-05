import { defineConfig } from 'dumi'

export default defineConfig({
  title: 'Aunt Design',
  favicon:
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ad8d1200-2a6b-490b-8915-4f015cc6cc87/3c637506-9024-4153-baa7-fa7b66c87f67.svg',
  logo: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ad8d1200-2a6b-490b-8915-4f015cc6cc87/3c637506-9024-4153-baa7-fa7b66c87f67.svg',
  outputPath: 'docs-dist',
  mode: 'site',
  locales: [
    ['zh', '中文'],
    ['en', 'English'],
  ],
  resolve: {
    includes: ['docs', 'src'],
    passivePreview: true,
  },
  alias: {
    'aunt/es': process.cwd() + '/src',
    'demos': process.cwd() + '/src/demos/index.ts',
  },
  hash: true,
  styles: [
    `
    html {
      touch-action: manipulation;
    }
    #root .__dumi-default-mobile-demo-layout {
      padding: 0;
    }
    html {
      min-height: 100vh;
    }
    #root .__dumi-default-navbar-tool .__dumi-default-locale-select{
      display: none;
    }
    `,
  ],
  metas: [
    {
      name: 'keywords',
      content: 'rant,react,移动端,组件库,ui',
    },
    {
      name: 'description',
      content: '基于React的移动web端组件库。',
    },
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover',
    },
  ],
  menus: {
    // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
    '/': [
      {
        title: '首页',
        path: 'index',
      },
    ],
    '/en': [
      {
        title: 'Home',
        path: 'index',
      },
    ],
    '/guide': [
      {
        title: '介绍',
        path: '/guide/introduce',
      },
      {
        title: '快速开始',
        path: '/guide/quick-start',
      },
      {
        title: '开发指南',
        path: '/guide/contribution',
      },
      {
        title: '更新记录',
        path: '/guide/changelog',
      },
      {
        title: '国际化',
        path: '/guide/i18n',
      },
      {
        title: '项目进度',
        path: '/guide/progress',
      }
    ],
    '/en/guide': [
      {
        title: 'Introduce',
        path: '/en/guide/introduce',
      },
      {
        title: 'Quick Start',
        path: '/en/guide/quick-start',
      },
      {
        title: 'Progress',
        path: '/en/guide/progress',
      }
    ],
    '/hooks': [
      {
        title: 'useInViewport ',
        path: '/hooks/use-in-viewport',
      }
    ],
    '/blog': [
      {
        title: '组件开发',
        children:['blog/components/button']
      },
    ],
    '/components': [
      {
        title: '布局组件',
        children: ['components/flex','components/grid','components/space'],
      },
      {
        title: '基础组件',
        children: ['components/button','components/icon','components/typography','components/image'],
      },
      // {
      //   title: '表单组件',
      //   children: [],
      // },
      {
        title: '反馈组件',
        children: ['components/loading'],
      },
      {
        title: '展示组件',
        children: ['components/lazy-load'],
      },
      // {
      //   title: '导航组件',
      //   children: [],
      // },
      {
        title: '其他组件',
        children: ['components/config-provider'],
      },
      // {
      //   title: '业务组件',
      //   children: [],
      // },
    ],
    '/en/components': [
      {
        title: 'Basic Components',
        children: [''],
      },
    ],
  },
  themeConfig: {
    hd: {
      // umi-hd 的 750 高清方案（默认值）
      // 根据不同的设备屏幕宽度断点切换高清方案
      rules: [
        { maxWidth: 375, mode: 'vw', options: [100, 750] },
        { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
      ],
      // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/master/packages/theme-mobile/src/typings/config.d.ts#L7
    },
    carrier: 'Aunt',
    time: '10:12'
  },
  navs: {
    zh: [
      {
        title: '指南',
        path: '/guide',
      },
      {
        title: '组件',
        path: '/components',
      },
      {
        title: 'Hooks',
        path: '/hooks',
      },
      {
        title: '开发日记',
        path: '/blog',
      },
      {
        title: 'Github',
        path: 'https://github.com/79E/aunt',
      },
    ],
    en: [
      {
        title: 'Guide',
        path: '/en/guide',
      },
      {
        title: 'Components',
        path: '/en/components',
      },
      {
        title: 'Github',
        path: 'https://github.com/79E/aunt',
      },
    ],
  },
})
