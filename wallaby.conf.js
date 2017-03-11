module.exports = function (wallaby) {
	return {
		files: [
			'src/**/*.js',
			'test/helpers/setup-browser-env.js'
		],

		tests: [
			'test/**/*.spec.js'
		],

		env: {
			type: 'node'
		},

		testFramework: 'ava',

		compilers: {
			'**/*.js': wallaby.compilers.babel()
		},

		bootstrap: function () {
			require('./test/helpers/setup-browser-env') // eslint-disable-line import/no-unassigned-import
		}
	}
}
