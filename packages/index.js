import CActionsheet from './components/actionsheet'
import CButton from './components/button'
import CList from './components/list'

const components = [
  CActionsheet,
  CButton,
  CList,
];

const install = (Vue) => {
  if (install.installed) return;
  components.map((component) => Vue.component(component.name, component));
};

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  CActionsheet,
  CButton,
  CList,
};
