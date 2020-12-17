import CSlider from './src/slider.js';
import "./src/slider.scss"


CSlider.install = (Vue) => {
  Vue.component(CSlider.name, CSlider);
};

export default CSlider;
