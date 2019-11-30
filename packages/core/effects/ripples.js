/**
 * 点击涟漪特效
 * 使用时需要将目标容器设置为: position: relative; overflow: hidden;
 * 
 * @param {*} event 点击事件
 * @param {*} color 颜色
 */

export default (event, color = "#FFF") => {
	let active = document.createElement("div");

	active.className = "active";
	active.style = `
		background-color: ${color};
		left: ${event.offsetX-5}px;
		top: ${event.offsetY-5}px;
	`;

	event.target.appendChild(active);
	active.addEventListener('animationend', () => {
		event.target.removeChild(active);
	},false);
}
