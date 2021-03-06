// You can't use import statements here
let webpack = require('webpack')
let path = require('path')
let common = require('./webpack.common.js')

module.exports = {
	...common,
	entry: [
		...(common.mode === 'development' ? ['webpack-hot-middleware/client'] : []),
		path.resolve(__dirname, '_scripts/main.js')
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'frontend_build'),
		publicPath: '/frontend_build/'
	}
}