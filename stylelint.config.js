module.exports = {
	plugins: [
		'stylelint-order'
	],
	rules: {
		'block-no-empty': null,
		'color-no-invalid-hex': true,
		'comment-empty-line-before': ['always', {
			ignore: ['stylelint-command', 'after-comment']
		}],
		'declaration-colon-space-after': 'always',
		indentation: ['tab', {
			except: ['value']
		}],
		'max-empty-lines': 2,
		'rule-empty-line-before': ['always', {
			except: ['first-nested'],
			ignore: ['after-comment']
		}],
		'unit-whitelist': ['em', 'rem', '%', 's'],
		'order/declaration-block-order': [
			'custom-properties',
			'declarations'
		],
		'order/declaration-block-properties-alphabetical-order': true
	}
}
