<template>
	<div class="navContainer" :class="[nightMode ? 'dayBar' : 'nightBar']">
		<!-- 导航栏 -->
		<div class="navigation">
			<!-- LOGO -->
			<router-link to="/" class="navText" ><img src="../../assets/image/blog.svg" alt="BUTCAT" class="logo" width="32px" height="32px"></router-link>
			<router-link v-for="(item, index) in lest" :key="index" :to="item.Router" :title="item.title" class="navText navBar">{{item.name}}</router-link>
			<!-- <a v-for="(item, index) in lest" :key="index" :title="item.title" class="navText">{{item.name}}</a> -->
		</div>
		<!-- 工具/属性栏 -->
		<div class="rightMenu">
			<div class="searchBar" :class="[this.nightMode ? 'searchDay' : 'searchNight']">
				<input type="text" v-model="searchTerms" placeholder="搜索……">
				<button @click="search" class="button">
					<svg version="1.1" x="0px" y="0px" width="24px" viewBox="0 0 484.925 484.925">
						<path fill="#6E6E6E" d="M466.775,378.763l-42.9-42.9c-7-7-18.4-7-25.5,0c-7,7-7,18.4,0,25.5l42.9,42.9c10.2,10.2,10.2,26.7,0,36.9
							c-4.9,4.9-11.5,7.6-18.5,7.6s-13.5-2.7-18.5-7.6l-82.2-82.2l49.6-49.6c7-7,7-18.4,0-25.5c-7-7-18.4-7-25.5,0l-18.5,18.5l-26-26
							c53.8-66.6,49.8-164.7-12.1-226.5c-32-32-74.6-49.7-120-49.7c-45.3,0-87.9,17.6-120,49.7c-66.1,66.1-66.1,173.8,0,239.9
							c32,32,74.6,49.7,120,49.7c39.3,0,76.5-13.3,106.6-37.6l26,26l-18.5,18.5c-3.4,3.4-5.3,8-5.3,12.7s1.9,9.4,5.3,12.7l95,95
							c12.4,11.9,28.3,18,44.2,18c15.9,0,31.8-6.1,43.9-18.2C490.975,442.362,490.975,402.963,466.775,378.763z M264.375,264.163
							c-25.2,25.2-58.8,39.1-94.5,39.1s-69.3-13.9-94.5-39.1c-52.1-52.1-52.1-136.9,0-189c25.2-25.2,58.8-39.1,94.5-39.1
							c35.7,0,69.3,13.9,94.5,39.1C316.475,127.263,316.475,212.063,264.375,264.163z"/>
					</svg>
				</button>
			</div>
			<!-- <button @click="moreMenu" class="button" title="更多">
				<img v-if="true" src="../../assets/image/more.png" alt="" width="32px" height="32px">
				<img v-else src="../../assets/image/blog.svg" alt="" width="32px" height="32px" style="border-radius: 100%; border: 3px #FFF;">
			</button> -->
			<b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>
				<template slot="button-content">
					<img v-if="true" src="../../assets/image/more.png" alt="" width="32px" height="32px">
					<img v-else src="../../assets/image/blog.svg" alt="" width="32px" height="32px" style="border-radius: 100%; border: 3px #FFF;">
				</template>
				<!-- <b-dropdown-item v-for="(item, index) in lest" :key="index">{{item.name}}</b-dropdown-item> -->
				<b-dropdown-item v-for="(item, index) in lest" :key="index" @click="routerTo(item.Router)" class="navMenu">{{item.name}}</b-dropdown-item>
				<b-dropdown-item @click="moreMenu">登录</b-dropdown-item>
			</b-dropdown>
		</div>    
	</div>
</template>
<script>
export default {
	data() {
		return {
			lest: [
				{
					name: '博客',
					title: '定期水文章~',
					Router: '/home'
				},
				{
					name: '程序',
					title: 'butcat设计的桌面应用',
					Router: '/software'
				},
				{
					name: '小工具',
					title: '收集,构建的一些H5在线程序',
					Router: '/smallTools'
				},
			],
			searchTerms: '',																// 搜索栏
		}
	},
	methods: {
		// 开启菜单
		moreMenu() {
			this.$emit('moreMenu');
		},
		// 搜索
		search() {
			this.$emit('searchBar', this.searchTerms)
		},
		routerTo(to) {
			this.$router.push({
				path: to
			});
		}
	},
	computed: {
		nightMode() {
			return this.$store.state.nightMode;
		},
	},
	comments: {

	}
}
</script>
<style lang="less" scoped>
.navContainer {
	width: 100%;
	height: 40px;
	position: fixed;
	padding: 0px 20px;
	top: 0px;

	box-sizing: border-box;
	z-index: 1000;

	display: flex;
	justify-content: space-between;
	align-items: center;
}

.button {
	height: 100%;
}

/* 导航栏 */
.navigation {
	display: flex;
	align-items: center;
}
.logo {
	margin: 0px 15px;
}
/* 导航 */
.navText {
	display: table-cell;
	text-align: center;
	vertical-align: middle;

	margin: 0 7px;
	font-size: 1.1rem;
	border: none;
    background-color: rgba(0,0,0,0);
    cursor: pointer;
    outline: 0px;
	padding: 0;

	transition: all 0.08s;
}
.navText:active {
	opacity:0.4;
}


/* 右手菜单 */
.rightMenu {
	display: flex;
	align-items: center;
}
/* 搜索栏 */
.searchBar {
	// margin: 0 20px;
	display: flex;
	align-items: center;
	padding: 0px 6px;

	/* background-color: rgba(153, 153, 153, 0.288); */
	border-radius: .25rem;
}
.searchBar>input{
	color: #6E6E6E;
    font-size: 1rem;
    height: 28px;
    background-color: transparent;
}
.searchDay {
	background-color: rgb(255, 255, 255);
	box-shadow: 0px 0px 5px rgba(117, 117, 117, 0.5);
}
.searchNight {
	background-color: rgb(255, 255, 255);
	box-shadow: 0px 0px 5px rgba(117, 117, 117, 0.5) inset;
}


.navMenu {
	display: none;
}
@media only screen and (max-width: 600px) {
	/* 导航 */
	.navBar {
		display: none;
	}
	.navMenu {
		display: inline;
	}
}
</style>
