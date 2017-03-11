import m from 'mithril'
import User from '../models/user.model'

export default {
	view() {
		return m('form.userAuth', [
			m('h2', 'User Signin'),
			m('fieldset', [
				m('.row', [
					m('input[type=text][placeholder=Username]', {
						oninput: m.withAttr('value', function (value) {
							User.authUser.username = value
						}),
						value: User.authUser.username
					})
				]),
				m('.row', [
					m('input[type=password][placeholder=Password]', {
						oninput: m.withAttr('value', function (value) {
							User.authUser.password = value
						}),
						value: User.authUser.password
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
