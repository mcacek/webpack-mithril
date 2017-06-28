const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		app: './src/js/app.js',
		vendor: 'mithril'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},
		{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: [{
					loader: 'css-loader',
					options: {
						importLoaders: 2
					}
				}, {
					loader: 'postcss-loader'
				}]
			})
		}
		]
	},
	plugins: [
		new ExtractTextPlugin('main.css'),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest']
		}),
		new HtmlWebpackPlugin()
	],
	output: {
		filename: '[chunkhash].[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'eval-source-map'
}
