import XxButton from './src/main';

/* istanbul ignore next */
XxButton.install = function(Vue) {
  Vue.component(XxButton.name, XxButton);
};

export default XxButton;
