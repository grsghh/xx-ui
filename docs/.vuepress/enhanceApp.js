// 本地组件开发测试  ~代表目录package，并且会自动寻找该目录下的index.js
import  { XxButton, XxSelect}  from '../../packages/index';

export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData // 站点元数据
  }) => {
  Vue.use(XxButton);
  Vue.use(XxSelect);
}
