import CDatepicker from './src/Datepicker.js';
import "./src/Datepicker.scss"

CDatepicker.install = (Vue) => {
  Vue.component(CDatepicker.name, CDatepicker);
};

export default CDatepicker;
