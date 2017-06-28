import m from 'mithril'
import config from '../config'

const User = {
	authUser: {},
	currentUser: {
		roles: []
	},
	authenticate() {
		return m
			.request({
				method: 'GET',
				url: `${config.baseURI}/users?username=${User.authUser.username}&password=${User.authUser.password}`,
				data: User.authUser,
				withCredentials: true
			})
			.then(results => {
				User.resetAuth()

				if (results[0]) {
					User.currentUser = results[0]
					m.route.set('/pets')
				}
			})
	},
	resetAuth() {
		User.authUser = {}
	},
	logout() {
		return m
			.request({
				method: 'POST',
				url: 'http://localhost:8001/api/logout',
				withCredentials: true
			})
			.then(() => {
				User.currentUser = {
					roles: []
				}
			})
	}
}

export default User
