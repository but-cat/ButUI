import Projection from './src/main';
Projection.install = function(Vue) {
	Vue.component(Projection.name, Projection);
};
export default Projection;