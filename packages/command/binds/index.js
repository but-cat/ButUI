/**
 * v-binds指令
 * ------------------
 * 用于对组件进行双向绑定
 * 需要一个参数,只能是data中的值,不可以是表达式;
 */
export default Vue => {
	Vue.directive('binds', {
		bind(el, binding, vnode) {								// 当绑定元素插入到 DOM 中的回调。
			vnode.componentInstance.$props[binding.arg] = binding.value;
			vnode.componentInstance.$on(binding.arg, value => 
				vnode.context.$data[binding.expression] = value
			)
		},
		update(el, binding, vnode) {								// 当绑定元素插入到 DOM 中的回调。
			// console.log(vnode);
			vnode.componentInstance.$props[binding.arg] = binding.value;
		}
	});
}