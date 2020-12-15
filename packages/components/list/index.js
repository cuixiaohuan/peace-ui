import CList from './src/list.js';
import "./src/list.scss"


CList.install = (Vue) => {
  Vue.component(CList.name, CList);
};

export default CList;
