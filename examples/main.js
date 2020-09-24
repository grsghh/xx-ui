import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 引用npm包
// import  { XxButton, XxSelect}  from 'vue-xx-ui';
// 本地组件开发测试  ~代表目录package，并且会自动寻找该目录下的index.js
import  { XxButton, XxSelect}  from '~';
Vue.use(XxButton);
Vue.use(XxSelect);
new Vue({
  render: h => h(App),
}).$mount('#app')
