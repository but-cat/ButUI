const path = require('path')
module.exports = {
	pages: {															// 修改 pages 入口
		index: {
			entry: 'examples/main.js',									// 入口
			template: 'public/index.html',								// 模板
			filename: 'index.html',										// 输出文件
			title: 'ButUI'
		}
	},
	chainWebpack: config => {											// 扩展 webpack 配置
		config.resolve.alias
			.set('@', path.resolve('examples'))							// @ 指向 examples 目录
			.set('&', path.resolve('packages'))							// & 指向 packages 目录

		config.module													// 将 packages 和 examples 加入编译
			.rule('js')
			.include.add(/packages/).end()
			.include.add(/examples/).end()
			.use('babel')
			.loader('babel-loader')
			.tap(options => {
				// 修改它的选项...
				return options
			});

		config.module.rule('md')
			.test(/\.md$/)
			.use('vue-loader')
			.loader('vue-loader')
			.end()
			.use('@vusion/md-vue-loader')
			.loader('@vusion/md-vue-loader')
			.end();
	},

	baseUrl: './',
	outputDir: 'docs',													// 输出文件目录
}