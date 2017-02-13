import m from 'mithril'

module.exports = {
	view() {
		return m('form.userAuth', [
			m('fieldset', [
				m('.row', [
					m('input[type=text][placeholder=Username]')
				]),
				m('.row', [
					m('input[type=password][placeholder=Password]')
				]),
				m('.row', [
					m('button', 'Login')
				])
			])
		])
	}
}
