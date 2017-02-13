import m from 'mithril'

const User = {
	authUser: {},
	currentUser: {},
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
		User.authUser = {}
	},
	logout() {
		return m.request({
			method: 'POST',
			url: 'http://localhost:8001/api/logout',
			withCredentials: true
		})
		.then(() => {
			User.currentUser = {}
		})
	}
}

module.exports = User
