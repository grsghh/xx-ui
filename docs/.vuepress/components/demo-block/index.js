import DemoBlock from './src/main'

DemoBlock.install = function (Vue) {
  Vue.component(DemoBlock.name, DemoBlock)
}

export default DemoBlock
