import Vue from 'vue'

export default (name, options) => {
	return {
		validator: value => {
			if (options.includes(value)) {
				return true
			}

			Vue.util.warn(`prop: ${name} 无效. 请检查给定值: ${value} 是否包含着可用选项:[ ${options.join(', ')} ]中.`, this);
			return false
		}
	}
}