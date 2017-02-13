import m from 'mithril'

module.exports = {
	view() {
		return m('fieldset', [
			m('form.userAuth', [
				m('.login-username', [
					m('input[type=text][placeholder=Username]')
				]),
				m('.login-password', [
					m('input[type=password][placeholder=Password]')
				]),
				m('.login-controls', [
					m('button', 'Login')
				])
			])
		])
	}
}
