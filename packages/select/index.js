import XxSelect from './src/main';

/* istanbul ignore next */
XxSelect.install = function(Vue) {
  Vue.component(XxSelect.name, XxSelect);
};

export default XxSelect;
