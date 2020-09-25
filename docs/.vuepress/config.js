module.exports = {
  title: 'vue-ns-ui',
  description: '新星科技ui',
  dest: './dist-doc',
  themeConfig: {
    sidebarDepth: 0,
    nav: [
      {
        text: '指南',
        link: '/guide/start'
      },
      {
        text: '测试标题',
        link: 'http://www.baidu.com'
      }
    ],
    // sidebar: 'auto'
    sidebar: [
      {
        title: '开发指南',
        collapsable: false,
        children: [
          '/guide/start',
        ]
      },
      {
        title: '组件',
        collapsable: true,
        children: [
          {
            title: '通用',
            collapsable: true,
            children: [
              '/component/button',
            ]
          }
        ]
      }
    ]
  }
};
