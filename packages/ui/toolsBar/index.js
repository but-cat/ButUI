import Toolsbar from './src/main.vue'
import ToolsbarList from './src/list.vue'
import ToolsbarBtn from './src/button.vue'

export default Vue => {
	Vue.component(Toolsbar.name, Toolsbar);
	Vue.component(ToolsbarList.name, ToolsbarList);
	Vue.component(ToolsbarBtn.name, ToolsbarBtn);
}