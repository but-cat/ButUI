import Box from './src/main';
Box.install = function(Vue) {
	Vue.component(Box.name, Box);
};
export default Box;