import m from 'mithril'
import _ from 'lodash'

const authUserDefaults = {
	username: '',
	password: ''
}

const currentUserDefaults = {
	firstName: '',
	lastName: '',
	email: ''
}

const User = {
	authUser: _.assign({}, authUserDefaults),
	currentUser: _.assign({}, currentUserDefaults),
	authenticate() {
		return m.request({
			method: 'POST',
			url: 'http://localhost:8001/api/authenticate',
			data: User.authUser,
			withCredentials: true
		})
		.then(res => {
			res.currentUser = res
			User.resetAuth()
		})
	},
	resetAuth() {
		_.assign(User.authUser, authUserDefaults)
	},
	logout() {
		return m.request({
			method: 'POST',
			url: 'http://localhost:8001/api/logout',
			withCredentials: true
		})
		.then(() => {
			_.assign(User.currentUser, authUserDefaults)
		})
	}
}

module.exports = User
