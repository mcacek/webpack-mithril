import m from 'mithril'
import User from '../models/user.model'

module.exports = {
	view() {
		return m('form.userAuth', [
			m('h2', 'User Signin'),
			m('fieldset', [
				m('.row', [
					m('input[type=text][placeholder=Username]', {
						value: User.authUser.username,
						oninput: m.withAttr('value', function (value) {
							User.authUser.username = value
						})
					})
				]),
				m('.row', [
					m('input[type=password][placeholder=Password]', {
						value: User.authUser.password,
						oninput: m.withAttr('value', function (value) {
							User.authUser.password = value
						})
					})
				]),
				m('.row', [
					m('button.button[type=submit]', {
						onclick: User.authenticate
					}, 'Login')
				])
			])
		])
	}
}
