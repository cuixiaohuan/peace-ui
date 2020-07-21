import CActionsheet from './src/Actionsheet.js';
import "./src/Actionsheet.scss"

CActionsheet.install = (Vue) => {
  Vue.component(CActionsheet.name, CActionsheet);
};

export default CActionsheet;
