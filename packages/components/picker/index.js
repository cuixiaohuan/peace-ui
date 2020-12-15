import CPicker from './src/picker.js';
import "./src/picker.scss"

CPicker.install = (Vue) => {
  Vue.component(CPicker.name, CPicker);
};

export default CPicker;
