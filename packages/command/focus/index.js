/**
 * v-focus指令
 * ------------------
 * 用于在页面加载后指定焦点
 */
export default Vue => {
	Vue.directive('focus', {
		inserted: function (el) {						// 当绑定元素插入到 DOM 中的回调。
			el.focus()									// 聚焦元素
		}
	});
}