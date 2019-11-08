
var LazyLoad;
LazyLoad.install = function(Vue) {
	Vue.directive('lazy', {
		inserted: function (el) {						// 当绑定元素插入到 DOM 中的回调。
			el.focus()									// 聚焦元素
		}
	});
}
export default LazyLoad;