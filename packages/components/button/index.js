import NsButton from './src/main';

/* istanbul ignore next */
NsButton.install = function(Vue) {
  Vue.component(NsButton.name, NsButton);
};

export default NsButton;
