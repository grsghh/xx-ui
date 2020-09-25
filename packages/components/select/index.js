import NsSelect from './src/main';

/* istanbul ignore next */
NsSelect.install = function(Vue) {
  Vue.component(NsSelect.name, NsSelect);
};

export default NsSelect;
