import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import element from '~/element/index'
import '~/element/index.scss'
Vue.use(element);
// 引用npm包
// import NsUi from 'vue-ns-ui';
// import 'vue-ns-ui/vue-ns-ui.css';
// 本地组件开发测试  ~代表目录package，并且会自动寻找该目录下的index.js
import  NsUi from '~';
import '~/styles/index.scss';
Vue.use(NsUi);
new Vue({
  render: h => h(App),
}).$mount('#app')
