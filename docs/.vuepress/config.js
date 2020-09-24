module.exports = {
  title: 'vue-xx-ui',
  description: '新星科技ui',
  dest: './dist-doc',
  themeConfig: {
    sidebarDepth: 2,
    nav: [
      {
        text: '测试标题',
        link: 'http://www.baidu.com'
      }
    ],
    // sidebar: 'auto'
    sidebar: [
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
