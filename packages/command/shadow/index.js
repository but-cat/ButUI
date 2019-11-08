/**
 * v-shadow指令
 * ----------------
 * 该指令接收一个String类型(其值只能是 curve 和 sharp )或Number类型(其值只能是 0-24 大小的数字)属性值
 * 用于动态绑定阴影类
 */

var Shadow;
Shadow.install = function(Vue) {
	var shadow = "shadow";
	Vue.directive('shadow', {
		bind(el, binding) {
			var className = el.className;
			var space = className && String(`${shadow}-${binding.value}`) ? ' ' : '';
			el.className = className + space + shadow;
		},
		componentUpdated(el, binding) {								// 当绑定元素插入到 DOM 中的回调。 
			var className = el.className;
			className = className.replace(`${shadow}-${binding.oldValue}`, '').replace(/\s$/, '');

			var space = className && String(`${shadow}-${binding.value}`) ? ' ' : '';
			el.className = className + space + `${shadow}-${binding.value}`;
		}
	});
}
export default Shadow;