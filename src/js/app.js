import m from 'mithril'
import '../css/main.css' // eslint-disable-line import/no-unassigned-import

import Layout from './views/layout'
import Login from './views/login'
import PetList from './views/pet-list'
import AddPet from './views/add-pet'
import AdoptionApplication from './views/adoption-application'
import AdoptionApplicationList from './views/adoption-application-list'

m.route(document.body, '/login', {
	'/login': {
		render() {
			return m(Layout, m(Login))
		}
	},
	'/pets': {
		render() {
			return m(Layout, m(PetList))
		}
	},
	'/pets/add': {
		render() {
			return m(Layout, m(AddPet))
		}
	},
	'/pets/:id/adopt': {
		render() {
			return m(Layout, m(AdoptionApplication))
		}
	},
	'/applications': {
		render() {
			return m(Layout, m(AdoptionApplicationList))
		}
	}
})
