import CButton from './src/button.js';
import "./src/button.scss"

CButton.install = (Vue) => {
  Vue.component(CButton.name, CButton);
};

export default CButton;
