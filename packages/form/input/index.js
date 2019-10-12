import Input from './src/input.vue'
// import Radio from './src/radio.vue'
// import Range from './src/range.vue'

Input.install = function(Vue) {
	Vue.component(Input.name, Input);
	// Vue.component(Radio.name, Radio);
	// Vue.component(Range.name, Range);
}
export default Input