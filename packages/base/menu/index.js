import Menu from './src/main.vue'
import MenuContent from './src/menuContent.vue'
import MenuItem from './src/menuItem.vue'

export default Vue => {
	Vue.component(Menu.name, Menu);
	Vue.component(MenuContent.name, MenuContent);
	Vue.component(MenuItem.name, MenuItem);
}