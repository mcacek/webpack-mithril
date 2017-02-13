module.exports = {
	plugins: [
		require('stylelint'),
		require('postcss-import'),
		require('postcss-cssnext'),
		require('postcss-reporter')({
			clearMessages: true
		})
	]
}
