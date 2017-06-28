import m from 'mithril'
import '../css/main.css' // eslint-disable-line import/no-unassigned-import

import Layout from './views/layout'
import Login from './views/login'
import NotFound from './views/not-found'
import AccessDenied from './views/access-denied'
import PetList from './views/pet-list'
import AddPet from './views/add-pet'
import AdoptionApplication from './views/adoption-application'
import AdoptionApplicationList from './views/adoption-application-list'
import User from './models/user'

function hasRoles(roles = []) {
	const foundRoles = User.currentUser.roles.filter(role => {
		return roles.indexOf(role) > -1
	})

	return foundRoles !== undefined && foundRoles.length === roles.length
}

function hasRole(role) {
	return hasRoles([role])
}

function ensureAuthenticated() {
	if (!hasRole('authenticated')) {
		m.route.set('/login')
	}
}

function ensureAdmin() {
	return ensureRole('admin')
}

function ensureRole(role) {
	return function () {
		if (hasRole('authenticated')) {
			if (!hasRole(role)) {
				m.route.set('/access-denied')
			}
		} else {
			m.route.set('/login')
		}
	}
}

m.route(document.body, '/not-found', {
	'/login': {
		render() {
			return m(Layout, m(Login))
		}
	},
	'/access-denied': {
		render() {
			return m(Layout, m(AccessDenied))
		}
	},
	'/pets': {
		onmatch: ensureAuthenticated,
		render() {
			return m(Layout, m(PetList))
		}
	},
	'/pets/add': {
		onmatch: ensureAdmin(),
		render() {
			return m(Layout, m(AddPet))
		}
	},
	'/pets/:id/adopt': {
		onmatch: ensureAuthenticated,
		render() {
			return m(Layout, m(AdoptionApplication))
		}
	},
	'/applications': {
		onmatch: ensureAdmin(),
		render() {
			return m(Layout, m(AdoptionApplicationList))
		}
	},
	'/not-found': {
		render() {
			return m(Layout, m(NotFound))
		}
	}
})
