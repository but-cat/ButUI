import Sandwich from './src/main';
Sandwich.install = function(Vue) {
	Vue.component(Sandwich.name, Sandwich);
};
export default Sandwich;