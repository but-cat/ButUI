export default Vue => {
	Vue.prototype.$but_scene = new color()									// 混入CSS全局变量
}

class color {
	constructor() {
		const params = {
			/* 基础配色 */
			primary: "#5c87a1",								/* 主要 "#4c6575 */
			success: "#67C23A",								/* 成功 */
			info: "#65ceee",									/* 信息 */
			warning: "#f0ad4e",								/* 警告 */
			danger: "#F56C6C",									/* 错误 */
			sceneText: "#FFFFFF",

			/* 背景 */
			background: "#fff",								/* 背景色 */
			backgroundVariant: "#f7f7f7",						/* 背景主题色 */

			/* 文本 */
			textPrimary: "#6e6e6e",							/* 主体文本色 */
			textPccent: "#3b3b3b",								/* 着重,强调性文本 */
			textHint: "#1a1a1a",								/* 暗示文本 */

			/* 禁用元素 */
			disabled: "rgba(0.0,0.0,0.0, 0.26)",				/* 被禁用的元素 */
			disabledBackground: "rgba(0.0,0.0,0.0, 0.12)",		/* 被禁用的元素 背景 */

			/* 杂项 */
			highlight: "rgba(0.0,0.0,0.0, 0.12)",				/* 突出 */
			icon: "rgba(0.0,0.0,0.0, 0.54)",					/* 图标颜色 */
			divider: "rgba(0.0,0.0,0.0, 0.12)",				/* 分隔线 */

			/* 滚动条 */
			handle: "#757575",									/* 滚动条 */
			handleBackground: "darken(#eee, 5%)",				/* 滚动条 背景 */

			/* 提示 */
			tooltip: "#616161"									/* 工具提示 */
		};


		Object.keys(params).forEach(key=>{
			Object.defineProperty(this, key, {
				enumerable: true,
				configurable: true,
				set: data => {
					document.documentElement.style.setProperty(`--${key}`, data);
				}
			})
			this[key] = params[key];
		});
	}
	
	
	nightMode() {
		this.background = "#111";
		this.backgroundVariant = "#303030";
		this.textPrimary = "#bcb4b4";
		this.textPccent = "#dfdfdf";
		this.textHint = "#f7f7f7";
	}

	dayMode() {
		this.background = "#fff";
		this.backgroundVariant = "#f7f7f7";
		this.textPrimary = "#6e6e6e";
		this.textPccent = "#3b3b3b";
		this.textHint = "#1a1a1a";
	}
}