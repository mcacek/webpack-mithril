module.exports = {
	plugins: [
		require('stylelint'),
		require('postcss-cssnext'),
		require('postcss-reporter')({
			clearMessages: true
		})
	]
}
