import Title from './src/title.vue'
import Typesetting from './src/typesetting.vue'
export default Vue => {
	Vue.component(Typesetting.name, Typesetting);
	Vue.component(Title.name, Title);
}