import CPanel from './src/panel.js';
import "./src/panel.scss"


CPanel.install = (Vue) => {
  Vue.component(CPanel.name, CPanel);
};

export default CPanel;
