import SceneIcon from './src/main.vue'
export default Vue => {
	Vue.prototype.$sceneIcon = (type, color, url) => {
		let icon = getIcon(type, color),
			oMyBlob = new Blob([icon], {type : 'text/html'}), // 得到 blob
			urls = URL.createObjectURL(oMyBlob);

		if(url)
			return urls;
		else
			return 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(icon)));	
	};
	Vue.component(SceneIcon.name, SceneIcon);
}

/**
 * 获取编译的svg图形
 * @param {String} type 图标的类型;
 * @param {Color} color 图标的颜色,支持16进制,reb() 和 hls();
 */
function getIcon(type = "info-sm", color) {
	let icon = ["danger", "danger-sm", "info", "info-sm", "success", "success-sm", "warning", "warning-sm"]
		.some(item => item == type) ? type : "info-sm",
		pattern = /[danger|info|success|warning]*(?=-sm)/;// 
	color = color ? color : document.documentElement.style.
		getPropertyValue(`--${(pattern.test(icon) ? pattern.exec(icon)[0]:type)}`).trim();			// 这下好了,我自己都看不懂了...
	
	switch (type) {
		case "info":
			icon = `<?xml version="1.0" encoding="utf-8"?>
			<!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
			<style type="text/css">
				.st0{fill:#7FABDA;}
				.st1{fill:${color};}
			</style>
			<path class="st0" d="M457.9,0H42.1C18.8,0,0,18.8,0,42.1v415.8C0,481.2,18.8,500,42.1,500h415.8c23.3,0,42.1-18.8,42.1-42.1V42.1
				C500,18.8,481.2,0,457.9,0z M452.4,437.4c-0.1,8.2-6.8,14.9-15.1,14.9H62.7c-8.3,0-15-6.7-15-15V62.7c0-8.3,6.7-15,15-15h374.7
				c8.3,0,15,6.7,15,15V437.4z"/>
			<g>
				<ellipse class="st1" cx="250" cy="153.5" rx="27.4" ry="27.8"/>
				<path class="st1" d="M277.4,334.8l0.8-135l-60.7-0.3V224c5.6,0,10.1,6.7,10.1,14.9v95.9c0,8.2-4.5,14.9-10.1,14.9v24.5h70v-24.5
					C281.9,349.7,277.4,343,277.4,334.8z"/>
			</g>
			</svg>` ; break
		case "success":
			icon = `<?xml version="1.0" encoding="utf-8"?>
			<!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
			<style type="text/css">
				.st0{fill:#67C23A;}
				.st1{fill:${color};}
			</style>
			<g>
				<path class="st1" d="M229.2,333.3c-8.9,0-14.6-6.3-14.6-6.3l-68.7-68.7c-8.3-8.3,20.8-37.5,29.2-29.2l54.1,54.1l116.6-116.6
					c8.3-8.3,37.5,20.8,29.2,29.2L243.8,327C243.8,327,238,333.3,229.2,333.3z"/>
				<path class="st0" d="M250,500C112.5,500,0,387.5,0,250S112.5,0,250,0s250,112.5,250,250S387.5,500,250,500z M250,41.7
						C135.4,41.7,41.7,135.4,41.7,250S135.4,458.3,250,458.3S458.3,364.6,458.3,250S364.6,41.7,250,41.7z"/>
			</g>
			</svg>`; break
		case "success-sm":
			icon = `<?xml version="1.0" encoding="utf-8"?>
			<!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
			<style type="text/css">
				.st0{fill:${color};}
			</style>
			<g>
				<path class="st0" d="M182.7,431.2c-19.2,0-31.5-13.6-31.5-13.6L3.2,269.5c-17.9-17.9,44.8-80.8,62.9-62.9l116.6,116.6L433.9,72
					c17.9-17.9,80.8,44.8,62.9,62.9L214.1,417.6C214.1,417.6,201.6,431.2,182.7,431.2z"/>
			</g>
			</svg>`; break
		case "warning":
			icon = `<?xml version="1.0" encoding="utf-8"?>
			<!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
			<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
			<style type="text/css">
				.st0{fill:#E8A950;}
				.st1{fill:${color};}
			</style>
			<path class="st0" d="M495,396.5L280.9,49.6c-14-23.4-46.8-23.4-60.9,0L5.9,396.4c-15.6,23.4,1.6,54.7,29.7,54.7h428.1
				C491.9,451.1,509.1,419.9,495,396.5z M432.9,404.3H66.5c-6,0-9.6-6.6-6.5-11.7L243.2,97.5c3-4.8,10-4.8,13,0l183.2,295.1
				C442.6,397.7,438.9,404.3,432.9,404.3z"/>
			<g>
				<path class="st1" d="M250,330c-9.4,0-16.4,7-16.4,17.2c0,10.3,7,16.4,16.4,16.4c9.4,0,16.4-6.2,16.4-16.4S260.1,329.9,250,330z"/>
				<path class="st1" d="M239.6,182.9c-7,0-12.6,6-12.2,13l7.4,118.4c1.2,9.4,29.3,11,30.4,0l7.4-118.4c0.4-7-5.1-13-12.2-13H239.6z"/>
			</g>
			</svg>`; break
		case "warning-sm":
			icon = `<?xml version="1.0" encoding="utf-8"?>
			<!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
			<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
			<style type="text/css">
				.st0{fill:#F0AD4E;}
			</style>
			<g>
				<path class="st0" d="M250,407c-26,0-45.4,19.4-45.4,47.6c0,28.5,19.4,45.4,45.4,45.4c26,0,45.4-17.2,45.4-45.4S277.9,406.8,250,407
					z"/>
				<path class="st0" d="M221.3,0c-19.5,0-35,16.5-33.8,35.9l20.4,327.7c3.3,26,81.1,30.4,84.1,0l20.5-327.7
					C313.7,16.5,298.3,0,278.7,0H221.3z"/>
			</g>
			</svg>`; break
		case "danger":
			icon = `<?xml version="1.0" encoding="utf-8"?>
			<!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
			<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
			<style type="text/css">
				.st0{fill:#E86A69;}
				.st1{fill:#3E4348;}
			</style>
			<path class="st0" d="M490,136.4L363.7,10.1C357.2,3.6,348.5,0,339.4,0H160.7c-9.1,0-17.9,3.6-24.3,10.1L10.1,136.4
				C3.6,142.9,0,151.6,0,160.7v178.6c0,9.1,3.6,17.9,10.1,24.3l126.3,126.3c6.5,6.5,15.2,10.1,24.3,10.1h178.6
				c9.1,0,17.9-3.7,24.3-10.1l126.3-126.2c6.5-6.5,10.1-15.2,10.1-24.3V160.7C500,151.6,496.4,142.8,490,136.4z M454.6,325.4
				c0,6-2.4,11.8-6.6,16L341.4,448c-4.3,4.2-10,6.6-16,6.6H174.7c-6,0-11.8-2.4-16-6.6L52.1,341.4c-4.2-4.3-6.6-10-6.6-16V174.7
				c0-6,2.4-11.8,6.6-16L158.6,52.1c4.3-4.2,10-6.6,16-6.6h150.8c6,0,11.7,2.3,15.9,6.6L448,158.6c4.2,4.3,6.6,10,6.6,16V325.4z"/>
			<path class="st1" d="M324.1,149.1L250,222.4l-74.1-77.1c-8-8-37.3,20.9-29.2,28.8l74.1,77.1l-75.5,74.7
				c-8.1,7.9,21.1,36.9,29.2,28.8L250,280l75.5,73.3c8,8,37.3-20.9,29.2-28.8l-75.5-73.3l74.1-73.3C361.4,170,332.1,141,324.1,149.1z"
				/>
			</svg>`; break
		case "danger-sm":
			icon = `<?xml version="1.0" encoding="utf-8"?>
			<!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
			<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
			<style type="text/css">
				.st0{fill:${color};}
			</style>
			<path class="st0" d="M424.7,12.2L250,184.9L75.3,3.3C56.5-15.6-12.5,52.5,6.6,71.2l174.7,181.6l-178,176
				c-19.1,18.7,49.8,86.8,68.7,67.9l178-176l178,172.7c18.9,18.9,87.8-49.3,68.7-67.9l-178-172.7L493.4,80.1
				C512.5,61.5,443.5-6.7,424.7,12.2z"/>
			</svg>`; break
		default:
			icon = `<?xml version="1.0" encoding="utf-8"?>
			<!-- Generator: Adobe Illustrator 23.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
			<style type="text/css">
				.st0{fill:${color};}
			</style>
			<g>
				<ellipse class="st0" cx="245" cy="55.9" rx="55.1" ry="55.9"/>
				<path class="st0" d="M300.1,420.7l1.6-271.6l-122.1-0.6v49.3c11.3,0,20.3,13.5,20.3,30v193c0,16.5-9.1,30-20.3,30V500h140.8v-49.3
					C309.2,450.7,300.1,437.2,300.1,420.7z"/>
			</g>
			</svg>`; break
	}
	return icon;
}