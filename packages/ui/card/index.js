import Card from './src/main'
import Header from './src/header'
import Content from './src/content'
import Actions from './src/actions'

import Media from './src/el/media'

export default Vue => {
	Vue.component(Card.name, Card)
	Vue.component(Header.name, Header)
	Vue.component(Content.name, Content)
	Vue.component(Actions.name, Actions)

	Vue.component(Media.name, Media)
}