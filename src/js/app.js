import m from 'mithril'
import '../css/main.css' // eslint-disable-line import/no-unassigned-import

const Layout = require('./views/layout.view')
const Login = require('./views/login.view')
const PetList = require('./views/pet-list.view')
const AddPet = require('./views/add-pet.view')
const AdoptionApplication = require('./views/adoption-application.view')
const AdoptionApplicationList = require('./views/adoption-application-list.view')

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
