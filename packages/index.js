// 导入组件
import NsButton from './components/button';
import NsSelect from './components/select';
// 导入css
import './styles/index.scss';
import './iconfonts/icons1/iconfont.css';

// 存储组件列表
const components = [
  NsButton,
  NsSelect
];

// 定义install方法，接受Vue作为参数
// 如果使用use注册插件，则所有的组件都将被注册
const install = function(Vue) {
  // 判断是否安装
  if (install.installed) return;
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
};
//  全局引用可自动安装
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 下面是具体的组件列表
  ...components
};
