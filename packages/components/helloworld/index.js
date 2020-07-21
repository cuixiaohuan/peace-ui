import HelloWorld from './src/helloworld.vue';

HelloWorld.install = (Vue) => {
  Vue.component(HelloWorld.name, HelloWorld);
};

export default HelloWorld;
